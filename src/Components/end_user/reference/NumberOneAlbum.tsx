export default function NumberOneAlbum() {
  return (
    <section className="endpoint-section">
      <h2>number_one_album</h2>
      <p className="section-desc">Retrieves the top album (Ranking == 1) for each year in a range.</p>
      <article className="endpoint-card">
        <div className="endpoint-header"><span className="method-badge get">GET</span><code className="endpoint-path">number_one_album(var.startyear, var.endyear)</code></div>
        <p>Filters <code>album_data</code> to rows where <code>Year</code> is in range and <code>Ranking</code> == 1. Returns one row per year. Sorted in ascending order by year.</p>
        <div className="params-block"><strong>Parameters</strong><table className="params-table"><tbody><tr><th>Name</th><th>Type</th><th>Required</th><th>Description</th></tr><tr><td><code>var.startyear</code></td><td>integer</td><td>Yes</td><td>Inclusive start of year range (earliest year to include)</td></tr><tr><td><code>var.endyear</code></td><td>integer</td><td>Yes</td><td>Inclusive end of year range (latest year to include)</td></tr></tbody></table></div>
        <div className="schema-block"><strong>Returns:</strong> data.frame with columns <code>Year</code>, <code>Album</code>, <code>Artist</code> (sorted ascending by year)</div>
        <div className="example-block"><strong>Example</strong><pre><code>{`source("number_one_albums.R")
number_one_album(2018, 2024)
#   Year        Album      Artist
# 1 2018  Golden Hour   Kacey Musgraves
# 2 2019  Norman F***ing Rockwell!  Lana Del Rey
# ...`}</code></pre></div>
      </article>
    </section>
  )
}
