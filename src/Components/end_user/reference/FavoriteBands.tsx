export default function FavoriteBands() {
  return (
    <section className="endpoint-section">
      <h2>favorite_bands</h2>
      <p className="section-desc">Ranks top artists by average rating with configurable filters.</p>
      <article className="endpoint-card">
        <div className="endpoint-header"><span className="method-badge get">GET</span><code className="endpoint-path">favorite_bands(min_albums.var, live_ep.var)</code></div>
        <p>Returns up to 15 artists (by average rating) with at least <code>min_albums.var</code> ranked albums. Sorted in descending order by rating. When <code>live_ep.var == TRUE</code>, excludes EPs and live albums.</p>
        <div className="params-block"><strong>Parameters</strong><table className="params-table"><tbody><tr><th>Name</th><th>Type</th><th>Required</th><th>Description</th></tr><tr><td><code>min_albums.var</code></td><td>integer</td><td>Yes</td><td>Minimum number of ranked albums an artist must have to appear in results</td></tr><tr><td><code>live_ep.var</code></td><td>logical</td><td>Yes</td><td>If TRUE, excludes EPs and live albums; if FALSE, includes all album types</td></tr></tbody></table></div>
        <div className="schema-block"><strong>Returns:</strong> data.frame with columns <code>Artist</code>, <code>Rating</code> (average), <code>NumAlbums</code> (sorted descending by rating)</div>
        <div className="example-block"><strong>Example</strong><pre><code>{`source("fav_bands.R")
favorite_bands(3, TRUE)
favorite_bands(5, FALSE)
#   Artist Rating NumAlbums
# 1 Radiohead  8.9        12
# 2 Arcade Fire  8.7         6
# ...`}</code></pre></div>
      </article>
    </section>
  )
}
