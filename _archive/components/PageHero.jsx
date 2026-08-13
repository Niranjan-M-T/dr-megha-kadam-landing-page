export default function PageHero({ eyebrow, title, sub }) {
  return (
    <section className="page-hero">
      <div className="page-hero-bg" aria-hidden="true">
        <span className="blob blob-rose" />
        <span className="blob blob-sage" />
      </div>
      <div className="container page-hero-inner">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        {sub && <p>{sub}</p>}
      </div>
    </section>
  )
}
