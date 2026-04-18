'use client';

import { useState, useRef, useEffect } from 'react';
import { RecipeRecord } from '@/lib/types';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface RecipeChatbotProps {
  recipe: RecipeRecord;
}

export default function RecipeChatbot({ recipe }: RecipeChatbotProps) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const isFirstRender = useRef(true);

  // Scroll to latest message — never on mount
  useEffect(() => {
    if (isFirstRender.current) { isFirstRender.current = false; return; }
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [messages]);

  // Focus input when opened
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 80);
  }, [open]);

  async function sendMessage() {
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    const userMsg: Message = { role: 'user', content: trimmed };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ recipeSlug: recipe.slug, messages: updated }),
      });
      const data = await res.json() as { reply: string };
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, couldn't reach the chef. Try again!" }]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  }

  return (
    <>
      {/* ── Floating chat panel ── */}
      {open && (
        <div
          className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] max-w-sm chat-pop"
          role="dialog"
          aria-label="Recipe assistant chat"
        >
          <div className="rounded-2xl overflow-hidden shadow-float border border-orange-100 flex flex-col"
               style={{ height: '480px', background: '#fffbf5' }}>

            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 px-4 py-3 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-lg">
                  👨‍🍳
                </div>
                <div>
                  <p className="text-white font-bold text-sm leading-tight">Chef AI</p>
                  <p className="text-orange-100 text-xs">Ask anything about this recipe</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Recipe context pill */}
            <div className="px-3 py-2 bg-orange-50 border-b border-orange-100 flex-shrink-0">
              <p className="text-xs text-orange-600 font-medium truncate">
                📖 {recipe.title}
              </p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-3 py-3 flex flex-col gap-3">
              {messages.length === 0 && (
                <div className="flex flex-col items-center justify-center h-full gap-3 text-center px-4">
                  <span className="text-4xl">🍽️</span>
                  <p className="text-gray-500 text-sm font-medium">
                    Got questions about this recipe?
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {['What can I substitute?', 'How to store leftovers?', 'Make it spicier?'].map(q => (
                      <button
                        key={q}
                        onClick={() => { setInput(q); setTimeout(() => inputRef.current?.focus(), 50); }}
                        className="text-xs bg-orange-100 hover:bg-orange-200 text-orange-700 px-3 py-1.5 rounded-full transition-colors"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.role === 'assistant' && (
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-red-400 flex items-center justify-center text-xs mr-2 flex-shrink-0 mt-1">
                      👨‍🍳
                    </div>
                  )}
                  <div className={`max-w-[78%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-br-sm'
                      : 'bg-white text-gray-800 border border-orange-100 rounded-bl-sm'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start items-end gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-red-400 flex items-center justify-center text-xs flex-shrink-0">
                    👨‍🍳
                  </div>
                  <div className="bg-white border border-orange-100 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs text-orange-400 font-medium mr-1">Chef is thinking</span>
                      <span className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-bounce [animation-delay:0ms]" />
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-bounce [animation-delay:180ms]" />
                      <span className="w-1.5 h-1.5 bg-red-400 rounded-full animate-bounce [animation-delay:360ms]" />
                    </div>
                    {/* Shimmer bar */}
                    <div className="mt-2 space-y-1.5">
                      <div className="h-2 bg-orange-100 rounded-full w-32 overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-orange-200 via-orange-400 to-orange-200 rounded-full animate-[shimmer_1.4s_ease-in-out_infinite]" style={{ backgroundSize: '200% 100%' }} />
                      </div>
                      <div className="h-2 bg-orange-100 rounded-full w-20 overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-orange-200 via-orange-400 to-orange-200 rounded-full animate-[shimmer_1.4s_ease-in-out_0.2s_infinite]" style={{ backgroundSize: '200% 100%' }} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-orange-100 px-3 py-2.5 flex gap-2 bg-white flex-shrink-0">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask the chef…"
                disabled={loading}
                className="flex-1 text-sm border-2 border-orange-100 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-300 disabled:opacity-50 bg-orange-50 placeholder:text-orange-300"
              />
              <button
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                aria-label="Send"
                className="w-9 h-9 bg-gradient-to-br from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-full flex items-center justify-center shadow-md transition-all hover:scale-105 active:scale-95"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Floating trigger button ── */}
      <div className="fixed bottom-6 right-4 sm:right-6 z-50">
        {/* Pulse ring */}
        {!open && (
          <span className="absolute inset-0 rounded-full bg-orange-400 pulse-ring" aria-hidden="true" />
        )}
        <button
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close recipe chat' : 'Ask the chef — Doubts?'}
          className="relative flex items-center gap-2.5 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-sm px-5 py-3.5 rounded-full shadow-float hover:shadow-xl transition-all hover:scale-105 active:scale-95"
        >
          <span className="text-lg leading-none">{open ? '✕' : '💬'}</span>
          {!open && <span>Doubts?</span>}
        </button>
      </div>
    </>
  );
}
