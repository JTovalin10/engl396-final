export default function AlbumCsv() {
  return (
    <article className="endpoint-card">
      <h3>Setting Up album-ranking.csv</h3>
      <p>This is the CSV file that all data aggregation functions operate on. Follow these steps to create or update it with your own album data. Getting this file structured correctly is required before the app loads and displays any data.</p>
      <ol>
        <li>In Excel, Google Sheets, or your program of choice, create a new blank file and enter the following column headers in the first row in this exact order:
          <div className="example-block"><pre><code>Year,Ranking,Album,Artist,Rating,Vinyl,EP,Live</code></pre></div>
        </li>
        <li>Add each album as its own row beneath the headers. For the last three columns:
          <ul>
            <li><strong>Vinyl:</strong> enter <code>v</code> if you own the album on vinyl, leave empty otherwise</li>
            <li><strong>EP:</strong> enter <code>EP</code> if the release is an EP, leave empty otherwise</li>
            <li><strong>Live:</strong> enter <code>Live</code> if the release is a live album, leave empty otherwise</li>
          </ul>
        </li>
        <li>Save the file as a CSV:
          <ol className="sub-steps">
            <li>Name the file <code>album-rankings.csv</code>.</li>
            <li>Place it in the <code>data/</code> folder inside the <i>My Favorite Albums</i> project folder.</li>
          </ol>
        </li>
        <li>Open RStudio and set your working directory to the project folder via <strong>Session &gt; Set Working Directory &gt; Choose Directory</strong>.</li>
        <li>Run the app with <code>shiny::runApp()</code>. If the Home tab displays a total album count and artist count, the file loaded correctly.</li>
      </ol>
      <p className="note">Note: the Artist field must be spelled consistently across all rows. Inconsistent capitalization (e.g., "Radiohead" vs. "radiohead") causes that artist to appear as multiple separate entries throughout the app.</p>
      <p className="note">Note: the year range slider is hardcoded to 1993–2024. If your data includes years outside that range, see the app_ui.R task for instructions on updating it.</p>
    </article>
  )
}
