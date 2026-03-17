export default function YearAlbums() {
  return (
    <section className="endpoint-section">
      <h2>year_albums</h2>
      <p className="section-desc">Returns all ranked albums for one specific year.</p>
      <article className="endpoint-card">
        <div className="endpoint-header"><span className="method-badge get">GET</span><code className="endpoint-path">year_albums(year.var)</code></div>
        <p>Filters <code>album_data</code> to rows where <code>Year</code> equals the selected year. Sorted in ascending order by ranking.</p>
        <div className="params-block"><strong>Parameters</strong><table className="params-table"><tbody><tr><th>Name</th><th>Type</th><th>Required</th><th>Description</th></tr><tr><td><code>year.var</code></td><td>integer</td><td>Yes</td><td>Year to filter by (e.g., 2024 returns only albums from that year)</td></tr></tbody></table></div>
        <div className="schema-block"><strong>Returns:</strong> data.frame with columns <code>Ranking</code>, <code>Album</code>, <code>Artist</code> (sorted ascending by ranking)</div>
        <div className="example-block"><strong>Example</strong><pre><code>{`source("albums_by_year.R")
year_albums(2024)
#   Ranking           Album        Artist
# 1       1  Wall of Eyes    The Smile
# 2       2  The Tortured Poets Department  Taylor Swift
# ...`}</code></pre></div>
      </article>
    </section>
  )
}
