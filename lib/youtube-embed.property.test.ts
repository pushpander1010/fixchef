/**
 * Unit and property-based tests for YouTubeEmbed component
 *
 * Property 8: YouTube embed URL correctness
 * **Validates: Requirements 7.1, 7.3, 7.5**
 *
 * For any non-null videoId string, the YouTubeEmbed component SHALL render an
 * iframe whose src attribute contains `youtube-nocookie.com` and the exact
 * videoId value, and SHALL include a `loading="lazy"` attribute.
 */

import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import YouTubeEmbed from '../components/YouTubeEmbed';

// ---------------------------------------------------------------------------
// Helper: render the component to an HTML string
// ---------------------------------------------------------------------------

function render(videoId: string | null | undefined): string {
  return renderToStaticMarkup(createElement(YouTubeEmbed, { videoId }));
}

// ---------------------------------------------------------------------------
// Unit tests
// ---------------------------------------------------------------------------

describe('YouTubeEmbed unit tests', () => {
  it('renders an iframe with youtube-nocookie.com src containing the videoId', () => {
    const videoId = 'dQw4w9WgXcQ';
    const html = render(videoId);

    expect(html).toContain('youtube-nocookie.com');
    expect(html).toContain(videoId);
    expect(html).toContain('loading="lazy"');
  });

  it('renders nothing when videoId is null', () => {
    const html = render(null);
    expect(html).toBe('');
  });

  it('renders nothing when videoId is undefined', () => {
    const html = render(undefined);
    expect(html).toBe('');
  });
});

// ---------------------------------------------------------------------------
// Property-based test
// ---------------------------------------------------------------------------

describe('YouTubeEmbed property tests', () => {
  /**
   * **Validates: Requirements 7.1, 7.3, 7.5**
   *
   * Property 8: YouTube embed URL correctness
   * For any non-empty string videoId, the rendered iframe src must contain
   * `youtube-nocookie.com` and the exact videoId, and must have loading="lazy".
   */
  it('for any non-empty videoId, iframe src contains youtube-nocookie.com and the exact videoId with loading=lazy', () => {
    fc.assert(
      fc.property(
        // Generate arbitrary non-empty strings that are safe to embed in a URL
        // (alphanumeric + common YouTube ID characters: letters, digits, _, -)
        fc.stringMatching(/^[A-Za-z0-9_-]{1,20}$/),
        (videoId) => {
          const html = render(videoId);

          const containsNoCookie = html.includes('youtube-nocookie.com');
          const containsVideoId = html.includes(videoId);
          const hasLazyLoading = html.includes('loading="lazy"');

          return containsNoCookie && containsVideoId && hasLazyLoading;
        }
      ),
      { numRuns: 100 }
    );
  });
});
