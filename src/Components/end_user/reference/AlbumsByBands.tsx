export default function AlbumsByBands() {
  return (
    <section className="endpoint-section">
      <h2>albums_by_bands</h2>
      <p className="section-desc">Returns a selected artist's albums with metadata. Use helper functions for aggregate stats.</p>
      <article className="endpoint-card">
        <div className="endpoint-header"><span className="method-badge get">GET</span><code className="endpoint-path">albums_by_bands(band.var)</code></div>
        <p>Filters <code>album_data</code> to rows where <code>Artist</code> equals the selected artist (case-sensitive). Sorted in ascending order by year.</p>
        <div className="params-block"><strong>Parameters</strong><table className="params-table"><tbody><tr><th>Name</th><th>Type</th><th>Required</th><th>Description</th></tr><tr><td><code>band.var</code></td><td>character</td><td>Yes</td><td>Artist name (case-sensitive; run <code>unique(album_data$Artist)</code> for valid names)</td></tr></tbody></table></div>
        <div className="schema-block"><strong>Returns:</strong> data.frame with columns <code>Album</code>, <code>Year</code>, <code>Rating</code> (sorted ascending by year)</div>
        <div className="example-block"><strong>Example</strong><pre><code>{`source("albums_by_band.R")
albums_by_bands("Radiohead")
#        Album Year Rating
# 1  The Bends 1995    8.5
# 2 OK Computer 1997    9.2
# ...`}</code></pre></div>
      </article>
      <article className="endpoint-card">
        <div className="endpoint-header"><span className="method-badge get">GET</span><code className="endpoint-path">band_mean_rating(band.var)</code></div>
        <p>Helper: calculates average rating for the selected artist. Prints to console.</p>
        <div className="params-block"><strong>Parameters</strong><table className="params-table"><tbody><tr><th>Name</th><th>Type</th><th>Required</th><th>Description</th></tr><tr><td><code>band.var</code></td><td>character</td><td>Yes</td><td>Artist name (case-sensitive)</td></tr></tbody></table></div>
        <div className="schema-block"><strong>Returns:</strong> prints to console (e.g., "Average Rating: 8.50")</div>
        <div className="example-block"><strong>Example</strong><pre><code>{`band_mean_rating("Radiohead")
# [1] "Average Rating: 8.50"`}</code></pre></div>
      </article>
      <article className="endpoint-card">
        <div className="endpoint-header"><span className="method-badge get">GET</span><code className="endpoint-path">band_album_count(band.var)</code></div>
        <p>Helper: returns total number of ranked albums for the artist. Prints to console.</p>
        <div className="params-block"><strong>Parameters</strong><table className="params-table"><tbody><tr><th>Name</th><th>Type</th><th>Required</th><th>Description</th></tr><tr><td><code>band.var</code></td><td>character</td><td>Yes</td><td>Artist name (case-sensitive)</td></tr></tbody></table></div>
        <div className="schema-block"><strong>Returns:</strong> prints to console (e.g., "Number of Albums Ranked: 12")</div>
        <div className="example-block"><strong>Example</strong><pre><code>{`band_album_count("Radiohead")
# [1] "Number of Albums Ranked: 12"`}</code></pre></div>
      </article>
    </section>
  )
}
