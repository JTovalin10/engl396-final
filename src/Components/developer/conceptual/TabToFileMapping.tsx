export default function TabToFileMapping() {
  return (
    <article className="endpoint-card schema-card">
      <h3>Tab-to-File Mapping</h3>
      <p>Each tab in the UI corresponds to one helper file. <code>app_server.R</code> calls the functions from these files in response to user input. Understanding this mapping makes it straightforward to trace a bug or add a new feature — find the tab, find the file.</p>
      <table className="params-table">
        <tbody>
          <tr><th>Tab</th><th>File</th><th>Functions Called</th></tr>
          <tr><td>Home</td><td><code>home.R</code></td><td><code>total_album_count()</code>, <code>total_band_count()</code>, <code>most_pop_artist()</code></td></tr>
          <tr><td>Number One Albums</td><td><code>number_one_albums.R</code></td><td><code>number_one_album()</code></td></tr>
          <tr><td>Top Albums by Year</td><td><code>albums_by_year.R</code></td><td><code>year_albums()</code></td></tr>
          <tr><td>Artist's Albums</td><td><code>albums_by_band.R</code></td><td><code>albums_by_bands()</code>, <code>band_album_count()</code>, <code>band_mean_rating()</code></td></tr>
          <tr><td>Favorite Artists</td><td><code>fav_bands.R</code></td><td><code>favorite_bands()</code></td></tr>
          <tr><td>Artist Comparison</td><td><code>compare_bands.R</code></td><td><code>band_album_comparison_chart()</code></td></tr>
          <tr><td>Vinyl</td><td><code>vinyl.R</code></td><td><code>missing_vinyl()</code></td></tr>
        </tbody>
      </table>
    </article>
  )
}
