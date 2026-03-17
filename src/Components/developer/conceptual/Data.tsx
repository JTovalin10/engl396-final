export default function Data() {
  return (
    <article className="endpoint-card">
      <h3>Data</h3>
      <h4><code>/data/album-ranking.csv</code></h4>
      <p>This CSV file is the single data source for the entire application. Every function in every helper file reads from this dataset. It is loaded once in <code>app_ui.R</code> to populate the UI controls, and each helper file accesses it through the shared global variable <code>album_data</code>.</p>

      <p>The file contains one row per album and eight fields:</p>

      <div className="params-block">
        <table className="params-table">
          <tbody>
            <tr><th>Field</th><th>Type</th><th>Description</th></tr>
            <tr><td><code>Year</code></td><td>integer</td><td>The year the album was released</td></tr>
            <tr><td><code>Ranking</code></td><td>integer</td><td>The owner's rank for that year (1 = top pick)</td></tr>
            <tr><td><code>Album</code></td><td>character</td><td>Album title</td></tr>
            <tr><td><code>Artist</code></td><td>character</td><td>Artist name (must be spelled consistently across all rows)</td></tr>
            <tr><td><code>Rating</code></td><td>numeric</td><td>The owner's rating on a 0–10 scale</td></tr>
            <tr><td><code>Vinyl</code></td><td>character</td><td><code>v</code> if owned on vinyl, empty otherwise</td></tr>
            <tr><td><code>EP</code></td><td>character</td><td><code>EP</code> if the release is an extended play, empty otherwise</td></tr>
            <tr><td><code>Live</code></td><td>character</td><td><code>Live</code> if the release is a live album, empty otherwise</td></tr>
          </tbody>
        </table>
      </div>

      <p className="note">Artist names are case-sensitive. Inconsistent spelling (e.g., "Radiohead" vs. "radiohead") causes that artist to appear as multiple separate entries throughout the app. Run <code>unique(album_data$Artist)</code> in R to audit the values.</p>

      <h4>Example Rows</h4>
      <p>The rows below illustrate how different field combinations appear in the dataset:</p>
      <div className="example-block">
        <pre>{`Year,Ranking,Album,Artist,Rating,Vinyl,EP,Live
1993,1,Siamese Dream,Smashing Pumpkins,9.3,v,,
1993,2,Vs.,Pearl Jam,8.5,v,,
1993,3,In Utero,Nirvana,8.5,,,
1993,4,Zooropa,U2,7.5,,,
1993,5,Debut,Bjork,8,,,
2005,1,Illinois,Sufjan Stevens,9.8,v,,
2010,3,High Violet,The National,9.3,,,
1995,6,The Bends,Radiohead,9,,EP,
2018,4,Kin,Sufjan Stevens,7.5,,,Live`}</pre>
      </div>
      <p>Key things to notice:</p>
      <ul>
        <li><code>Vinyl</code> is <code>v</code> when owned on vinyl and empty otherwise. It is never <code>false</code> or <code>0</code>.</li>
        <li><code>EP</code> and <code>Live</code> follow the same pattern: the column value matches the column name when true, and is empty otherwise</li>
        <li>Most rows leave <code>EP</code> and <code>Live</code> blank. A standard album has three empty fields at the end.</li>
        <li><code>Ranking</code> resets to 1 each year; two albums from different years can share the same ranking</li>
      </ul>
    </article>
  )
}
