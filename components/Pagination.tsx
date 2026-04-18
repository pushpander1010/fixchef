import Link from 'next/link';

interface PaginationProps {
  page: number;
  totalPages: number;
  basePath: string;
}

export default function Pagination({ page, totalPages, basePath }: PaginationProps) {
  if (totalPages <= 1) return null;

  const getHref = (p: number) => (p === 1 ? basePath : `${basePath}?page=${p}`);

  const prevPage = page > 1 ? page - 1 : null;
  const nextPage = page < totalPages ? page + 1 : null;

  // Build page number range: show up to 5 pages around current
  const range: number[] = [];
  const delta = 2;
  const start = Math.max(1, page - delta);
  const end = Math.min(totalPages, page + delta);
  for (let i = start; i <= end; i++) range.push(i);

  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-1 mt-10">
      {prevPage ? (
        <Link
          href={getHref(prevPage)}
          className="px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors"
          aria-label="Previous page"
        >
          ← Prev
        </Link>
      ) : (
        <span className="px-3 py-2 rounded-lg text-sm font-medium text-gray-300 cursor-not-allowed">
          ← Prev
        </span>
      )}

      {start > 1 && (
        <>
          <Link href={getHref(1)} className="px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors">
            1
          </Link>
          {start > 2 && <span className="px-2 text-gray-400">…</span>}
        </>
      )}

      {range.map((p) => (
        <Link
          key={p}
          href={getHref(p)}
          aria-current={p === page ? 'page' : undefined}
          className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
            p === page
              ? 'bg-orange-500 text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          {p}
        </Link>
      ))}

      {end < totalPages && (
        <>
          {end < totalPages - 1 && <span className="px-2 text-gray-400">…</span>}
          <Link href={getHref(totalPages)} className="px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors">
            {totalPages}
          </Link>
        </>
      )}

      {nextPage ? (
        <Link
          href={getHref(nextPage)}
          className="px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors"
          aria-label="Next page"
        >
          Next →
        </Link>
      ) : (
        <span className="px-3 py-2 rounded-lg text-sm font-medium text-gray-300 cursor-not-allowed">
          Next →
        </span>
      )}
    </nav>
  );
}
