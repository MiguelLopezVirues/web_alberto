import Image from 'next/image';
import type { IgLayoutSlug, IgContentType } from '@/tokens/igLayout';

/**
 * "Sígueme en redes" — Alberto's Instagram beat, placed just above the footer
 * (a warm "stay in touch" close, not part of the contact funnel). Content is
 * uploaded MANUALLY in the Sanity `redes` singleton; no IG embed/API. The
 * layout branches on the `igLayout` Apariencia preset (see tokens/igLayout.ts):
 *  - destacado: one large featured post + supporting mini-grid (editorial).
 *  - galeria:   a flat responsive grid of squares (hedone-style).
 * `contentType` (posts/reels) only changes the thumbnail aspect ratio.
 */

export type RedesPost = {
  url: string;
  alt: string;
  caption?: string;
  postUrl?: string;
  featured?: boolean;
};

type Props = {
  eyebrow?: string;
  heading?: string;
  intro?: string;
  handle?: string;
  profileUrl?: string;
  posts: RedesPost[];
  variant: IgLayoutSlug;
  contentType: IgContentType;
};

/** One Instagram thumbnail. Wrapped in a link to the post (or the profile). */
function Thumb({
  post,
  ratioCls,
  href,
  sizes,
}: {
  post: RedesPost;
  ratioCls: string;
  href?: string;
  sizes: string;
}) {
  const inner = (
    <>
      <Image src={post.url} alt={post.alt} fill className="object-cover" sizes={sizes} />
      {post.caption && (
        <span className="absolute inset-x-0 bottom-0 p-2.5 font-ui text-tag text-paper bg-gradient-to-t from-[color-mix(in_srgb,var(--ink)_72%,transparent)] to-transparent opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-fast">
          {post.caption}
        </span>
      )}
    </>
  );
  const frameCls = `group/thumb block relative ${ratioCls} overflow-hidden rounded-lg border border-line bg-paper-deep shadow-card transition duration-fast`;
  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${frameCls} hover:-translate-y-px hover:shadow-float`}
    >
      {inner}
    </a>
  ) : (
    <div className={frameCls}>{inner}</div>
  );
}

export default function Redes({
  eyebrow,
  heading,
  intro,
  handle,
  profileUrl,
  posts,
  variant,
  contentType,
}: Props) {
  // Nothing to show → render nothing (keeps the page clean before content is added).
  if (!posts || posts.length === 0) return null;

  const ratioCls = contentType === 'reels' ? 'aspect-[9/16]' : 'aspect-square';
  const hrefFor = (p: RedesPost) => p.postUrl ?? profileUrl ?? undefined;

  const profileLink = handle ? (
    profileUrl ? (
      <a
        href={profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="font-ui text-label-nav font-semibold text-accent-deep hover:text-ink transition-colors duration-fast"
      >
        {handle} <span aria-hidden="true">→</span>
      </a>
    ) : (
      <span className="font-ui text-label-nav font-semibold text-accent-deep">{handle}</span>
    )
  ) : null;

  return (
    <section
      id="redes"
      className="bg-paper-alt text-ink pt-[clamp(3rem,6vw,5rem)] pb-[clamp(3rem,6vw,5rem)] relative z-[1] overflow-hidden"
      aria-labelledby="redes-h2"
    >
      <div className="max-w-container w-full mx-auto px-section-x-sm md:px-section-x">
        {variant === 'galeria' ? (
          <>
            {/* Header: left-aligned, handle pushed to the right on desktop. */}
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between mb-7" data-reveal>
              <div>
                {eyebrow && (
                  <p className="font-display text-eyebrow-conv text-ink-soft mb-1">{eyebrow}</p>
                )}
                {heading && (
                  <h2
                    id="redes-h2"
                    className="font-display text-h2 font-semibold leading-[1.15] tracking-[-0.005em] text-ink"
                  >
                    {heading}
                  </h2>
                )}
              </div>
              {profileLink}
            </div>
            <ul className="list-none grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4" role="list">
              {posts.slice(0, 8).map((post, i) => (
                <li key={i} data-reveal>
                  <Thumb
                    post={post}
                    ratioCls={ratioCls}
                    href={hrefFor(post)}
                    sizes="(min-width: 768px) 22vw, 45vw"
                  />
                </li>
              ))}
            </ul>
          </>
        ) : (
          /* destacado — two genuinely different layouts:
             · Mobile: a plain centered gallery (featured = first item, all the
               same size, capped width so it never spans the screen).
             · Desktop: featured as a big left column; copy top-right; the
               supporting posts as a bigger 2-up grid bottom-right.
             Copy is rendered ONCE (single h2 id); the post lists are split per
             breakpoint via hidden/md:hidden. */
          (() => {
            const featured = posts.find(p => p.featured) ?? posts[0];
            const rest = posts.filter(p => p !== featured).slice(0, 4);
            const all = [featured, ...rest];

            const copy = (
              <div className="flex flex-col gap-4 items-center text-center md:items-start md:text-left">
                {eyebrow && (
                  <p className="font-display text-eyebrow-conv text-ink-soft" data-reveal>
                    {eyebrow}
                  </p>
                )}
                {heading && (
                  <h2
                    id="redes-h2"
                    className="font-display text-h2 font-semibold leading-[1.15] tracking-[-0.005em] text-ink"
                    data-reveal
                  >
                    {heading}
                  </h2>
                )}
                {intro && (
                  <p className="font-body text-body-md text-ink-soft leading-[1.72]" data-reveal>
                    {intro}
                  </p>
                )}
                {profileLink && <div data-reveal>{profileLink}</div>}
              </div>
            );

            return (
              <div className="flex flex-col gap-8 md:grid md:grid-cols-[22rem_1fr] md:gap-x-10 md:gap-y-6 md:items-start">
                {/* Desktop featured — big left column, spans both rows. */}
                <div
                  className="hidden md:block md:col-start-1 md:row-start-1 md:row-span-2 md:self-center"
                  data-reveal
                >
                  <Thumb
                    post={featured}
                    ratioCls={ratioCls}
                    href={hrefFor(featured)}
                    sizes="(min-width: 768px) 22rem, 1px"
                  />
                </div>

                {/* Copy — shared. Centered on mobile, top-right on desktop. */}
                <div className="md:col-start-2 md:row-start-1">{copy}</div>

                {/* Desktop supporting — bigger 2-up grid, bottom-right. */}
                {rest.length > 0 && (
                  <ul
                    className="hidden md:grid md:col-start-2 md:row-start-2 grid-cols-2 gap-4 max-w-[24rem] list-none"
                    role="list"
                    data-reveal
                  >
                    {rest.map((post, i) => (
                      <li key={i}>
                        <Thumb post={post} ratioCls={ratioCls} href={hrefFor(post)} sizes="12rem" />
                      </li>
                    ))}
                  </ul>
                )}

                {/* Mobile gallery — featured first, all the same size, centered. */}
                <ul
                  className="grid md:hidden grid-cols-2 gap-3 w-full max-w-[20rem] mx-auto list-none"
                  role="list"
                  data-reveal
                >
                  {all.map((post, i) => (
                    <li key={i}>
                      <Thumb post={post} ratioCls={ratioCls} href={hrefFor(post)} sizes="9rem" />
                    </li>
                  ))}
                </ul>
              </div>
            );
          })()
        )}
      </div>
    </section>
  );
}
