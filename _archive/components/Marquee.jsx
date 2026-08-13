const places = [
  'M.S. Ramaiah Medical College',
  "St. Martha's Hospital",
  "St. John's Medical College",
  'Indira Gandhi Institute of Child Health',
  'Apollo Hospitals',
  'Aster CMI Hospital',
  'SPARSH Hospital',
]

export default function Marquee() {
  const row = [...places, ...places]
  return (
    <section className="marquee" aria-label="Institutions Dr. Megha has worked with">
      <p className="marquee-label">Experience built at Bangalore&apos;s leading institutions</p>
      <div className="marquee-viewport">
        <div className="marquee-track">
          {row.map((p, i) => (
            <span className="marquee-item" key={`${p}-${i}`}>
              {p}
              <span className="dot-sep" aria-hidden="true">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
