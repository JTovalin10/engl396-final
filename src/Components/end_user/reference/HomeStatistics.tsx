export default function HomeStatistics() {
  return (
    <section className="endpoint-section">
      <h2>Home Statistics</h2>
      <p className="section-desc">Summary statistics displayed on the home page.</p>
      <article className="endpoint-card">
        <div className="endpoint-header"><span className="method-badge get">GET</span><code className="endpoint-path">total_album_count()</code></div>
        <p>Returns the total number of albums in <code>album_data</code>.</p>
        <div className="params-block"><strong>Parameters</strong><table className="params-table"><tbody><tr><th>Name</th><th>Type</th><th>Required</th><th>Description</th></tr><tr><td><em>none</em></td><td>—</td><td>—</td><td>Uses global <code>album_data</code></td></tr></tbody></table></div>
        <div className="schema-block"><strong>Returns:</strong> prints to console (e.g., "Albums in the database: 123")</div>
        <div className="example-block"><strong>Example</strong><pre><code>{`source("home.R")
total_album_count()
# [1] "Albums in the database: 123"`}</code></pre></div>
      </article>
      <article className="endpoint-card">
        <div className="endpoint-header"><span className="method-badge get">GET</span><code className="endpoint-path">total_band_count()</code></div>
        <p>Returns the total number of unique artists in <code>album_data</code>.</p>
        <div className="params-block"><strong>Parameters</strong><table className="params-table"><tbody><tr><th>Name</th><th>Type</th><th>Required</th><th>Description</th></tr><tr><td><em>none</em></td><td>—</td><td>—</td><td>Uses global <code>album_data</code></td></tr></tbody></table></div>
        <div className="schema-block"><strong>Returns:</strong> prints to console (e.g., "Artists in the database: 45")</div>
        <div className="example-block"><strong>Example</strong><pre><code>{`total_band_count()
# [1] "Artists in the database: 45"`}</code></pre></div>
      </article>
      <article className="endpoint-card">
        <div className="endpoint-header"><span className="method-badge get">GET</span><code className="endpoint-path">most_pop_artist()</code></div>
        <p>Returns the artist with the most albums in <code>album_data</code>.</p>
        <div className="params-block"><strong>Parameters</strong><table className="params-table"><tbody><tr><th>Name</th><th>Type</th><th>Required</th><th>Description</th></tr><tr><td><em>none</em></td><td>—</td><td>—</td><td>Uses global <code>album_data</code></td></tr></tbody></table></div>
        <div className="schema-block"><strong>Returns:</strong> prints to console (e.g., "Artist with most albums in the database: Radiohead")</div>
        <div className="example-block"><strong>Example</strong><pre><code>{`most_pop_artist()
# [1] "Artist with most albums in the database: Radiohead"`}</code></pre></div>
      </article>
    </section>
  )
}
