interface YouTubeEmbedProps {
  videoId?: string | null;
}

export default function YouTubeEmbed({ videoId }: YouTubeEmbedProps) {
  if (!videoId) return null;

  return (
    <div className="relative w-full aspect-video">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
        title="Recipe video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
        className="absolute inset-0 w-full h-full rounded-lg"
      />
    </div>
  );
}
