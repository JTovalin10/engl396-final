import { Link } from 'react-router-dom'

export default function Reference() {
  return (
    <section className="endpoint-section">
      <h2>Reference</h2>
      <p className="section-desc">For function-level reference documentation and examples, see the End User Reference. For full source code with inline comments, see the GitHub repository.</p>

      <article className="endpoint-card">
        <h3>End User Reference</h3>
        <p>A high-level reference covering all data functions — parameters, return values, and examples. Written to be readable without deep R experience.</p>
        <Link to="/end-user/reference/quick-start" className="ref-link">→ Go to End User Reference</Link>
      </article>

      <article className="endpoint-card">
        <h3>Source Code</h3>
        <p>Full source code with detailed inline comments for each function: behavior, examples, edge cases, return values, and parameter specs.</p>
        <a href="https://github.com/JTovalin10/MyFavoriteAlbums" target="_blank" rel="noopener" className="ref-link">→ View on GitHub</a>
      </article>
    </section>
  )
}
