export default function MissingVinyl() {
  return (
    <section className="endpoint-section">
      <h2>missing_vinyl</h2>
      <p className="section-desc">Lists highly rated albums not yet owned on vinyl.</p>
      <article className="endpoint-card">
        <div className="endpoint-header"><span className="method-badge get">GET</span><code className="endpoint-path">missing_vinyl(missing_vinyl_rating.var)</code></div>
        <p>Filters <code>album_data</code> to rows where <code>Rating</code> ≥ threshold and <code>Vinyl</code> is empty. Sorted in descending order by rating.</p>
        <div className="params-block"><strong>Parameters</strong><table className="params-table"><tbody><tr><th>Name</th><th>Type</th><th>Required</th><th>Description</th></tr><tr><td><code>missing_vinyl_rating.var</code></td><td>numeric</td><td>Yes</td><td>Minimum rating threshold (albums with rating ≥ this value are included)</td></tr></tbody></table></div>
        <div className="schema-block"><strong>Returns:</strong> data.frame with columns <code>Album</code>, <code>Artist</code>, <code>Rating</code> (sorted descending by rating)</div>
        <div className="example-block"><strong>Example</strong><pre><code>{`source("vinyl.R")
missing_vinyl(8.5)
#              Album        Artist Rating
# 1  To Pimp a Butterfly  Kendrick Lamar    9.5
# 2  Blonde            Frank Ocean      9.2
# ...`}</code></pre></div>
      </article>
    </section>
  )
}
