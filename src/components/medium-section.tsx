import { mediumPosts } from '@/data/medium';

// Medium icon component
function MediumIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="inline-block">
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
  )
}

interface MediumSectionProps {
  lang: 'es' | 'en';
}

export default function MediumSection({ lang }: MediumSectionProps) {
  const posts = mediumPosts[lang] || mediumPosts.es;

  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <a
            href="https://medium.com/@fbeccaria24"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-primary transition-colors"
          >
            <MediumIcon />
            <h2 className="text-2xl font-medium">Medium</h2>
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 overflow-x-auto pb-4">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-shrink-0 md:w-80"
            >
              <article className="border-b border-border pb-4">
                <h3 className="text-lg font-medium group-hover:text-primary transition-colors mb-2">{post.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{post.description}</p>
              </article>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
