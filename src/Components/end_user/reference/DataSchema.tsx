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
        <p className="note">Note: Artist names are case-sensitive. Inconsistent spelling causes an artist to appear as multiple separate entries throughout the app.</p>
        <h4>Example Rows</h4>
        <p>The rows below illustrate how different field combinations appear in the dataset:</p>
        <div className="example-block">
          <pre>{`Year,Ranking,Album,Artist,Rating,Vinyl,EP,Live
1993,1,Siamese Dream,Smashing Pumpkins,9.3,v,,
1993,2,Vs.,Pearl Jam,8.5,v,,
1993,3,In Utero,Nirvana,8.5,,,
2005,1,Illinois,Sufjan Stevens,9.8,v,,
1995,6,The Bends,Radiohead,9,,EP,
2018,4,Kin,Sufjan Stevens,7.5,,,Live`}</pre>
        </div>
        <p>Key things to notice:</p>
        <ul>
          <li><code>Vinyl</code> is <code>v</code> when owned on vinyl and empty otherwise</li>
          <li><code>EP</code> and <code>Live</code> follow the same pattern: the column value matches the column name when true, and is empty otherwise</li>
          <li><code>Ranking</code> resets to 1 each year. Two albums from different years can share the same ranking.</li>
        </ul>
      </article>
    </section>
  )
}
