export default function DataSchema() {
  return (
    <section className="endpoint-section">
      <h2>Data Schema</h2>
      <p className="section-desc">Structure of <code>album-ranking.csv</code> used by all functions.</p>
      <article className="endpoint-card schema-card">
        <table className="params-table">
          <tbody>
            <tr><th>Field</th><th>Type</th><th>Description</th></tr>
            <tr><td><code>Year</code></td><td>integer</td><td>Release year</td></tr>
            <tr><td><code>Ranking</code></td><td>integer</td><td>Owner's rank for that year (1 = top pick, 2 = second, etc.)</td></tr>
            <tr><td><code>Album</code></td><td>character</td><td>Album title</td></tr>
            <tr><td><code>Artist</code></td><td>character</td><td>Artist name (must be consistent)</td></tr>
            <tr><td><code>Rating</code></td><td>numeric</td><td>Owner's rating (typically 0–10 scale)</td></tr>
            <tr><td><code>Vinyl</code></td><td>character</td><td>Empty = not owned; non-empty = owned</td></tr>
            <tr><td><code>EP</code></td><td>character</td><td>"EP" for extended play; empty otherwise</td></tr>
            <tr><td><code>Live</code></td><td>character</td><td>"Live" for live albums; empty otherwise</td></tr>
          </tbody>
        </table>
        <p className="note">Artist names are case-sensitive. Use <code>unique(album_data$Artist)</code> for valid values.</p>
        <div className="example-block">
          <strong>Example: List valid artist names</strong>
          <pre><code>{`unique(album_data$Artist)
# [1] "Radiohead"   "Arcade Fire" "Taylor Swift" ...`}</code></pre>
        </div>
      </article>
    </section>
  )
}
