export default function HelperFiles() {
  return (
    <article className="endpoint-card">
      <h3>Tab Helper Files</h3>
      <p>Each tab in the application has its own dedicated R file that handles the data logic for that tab. These files are sourced by <code>app.R</code> on startup and called by <code>app_server.R</code> in response to user input.</p>

      <p><strong><code>home.R</code>:</strong> Provides three summary statistics displayed on the home tab: the total number of albums in the dataset, the total number of unique artists, and the artist with the most albums.</p>
      <p><strong><code>number_one_albums.R</code>:</strong> Takes a start year and end year from the range slider and returns the top-ranked album for each year in that range, sorted by year in ascending order.</p>
      <p><strong><code>albums_by_year.R</code>:</strong> Takes a single year from a drop-down menu and returns a table of all albums ranked that year, showing Ranking, Album, and Artist sorted by ranking order. The <code>all_years</code> variable pre-populates the drop-down by extracting every unique year from the dataset.</p>
      <p><strong><code>albums_by_band.R</code>:</strong> Takes an artist name and returns a table of that artist's albums showing Album, Year, and Rating sorted by year. Two helper functions, <code>band_mean_rating()</code> and <code>band_album_count()</code>, compute the average rating and total album count displayed below the table. The <code>all_bands</code> variable pre-populates the drop-down alphabetically.</p>
      <p><strong><code>fav_bands.R</code>:</strong> Takes two inputs: a minimum album count and whether to include EPs and live albums. It filters the dataset accordingly and returns up to 15 artists sorted by average rating in descending order.</p>
      <p><strong><code>compare_bands.R</code>:</strong> Takes two artist selections and produces a comparative line chart. Each artist's average rating per year is plotted as a line, red for the first artist and blue for the second.</p>
      <p><strong><code>vinyl.R</code>:</strong> Takes a minimum rating and returns a table of top-rated albums the owner does not own on vinyl, sorted by rating descending and then alphabetically by album name.</p>
    </article>
  )
}
