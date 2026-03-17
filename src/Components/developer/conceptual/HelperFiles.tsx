export default function HelperFiles() {
  return (
    <article className="endpoint-card">
      <h3>Helper File Descriptions</h3>
      <p>Files are listed in the order they relate to the application's flow — entry point first, then UI, then server, then helper files in tab order, then the data source.</p>

      <p><strong><code>app.R</code></strong> — The entry point of the application. It loads the required libraries (Shiny, dplyr, ggplot2), sources every helper file, and calls <code>shinyApp()</code> to launch the app by connecting <code>app_ui.R</code> and <code>app_server.R</code>. To run the app locally, open this file in RStudio and click <strong>Run App</strong>, or run <code>shiny::runApp()</code> from the project directory in the R console.</p>

      <p><strong><code>app_ui.R</code></strong> — Defines what the user sees. It loads the album data from the CSV and uses it to populate the controls — drop-down menus, sliders, and checkboxes — across seven tabs. Each tab specifies its inputs and a placeholder for its output. The actual data that fills those placeholders is determined by <code>app_server.R</code>.</p>

      <p><strong><code>app_server.R</code></strong> — The bridge between the UI and the helper files. For each tab, it reads the user's selection and passes it to the corresponding helper function, then renders the result. Because Shiny is reactive, this happens automatically whenever the user changes an input — no manual refresh needed.</p>

      <p><strong><code>home.R</code></strong> — Provides three summary statistics displayed on the home tab: the total number of albums in the dataset, the total number of unique artists, and the artist with the most albums.</p>

      <p><strong><code>number_one_albums.R</code></strong> — Takes a start year and end year from the range slider and returns the top-ranked album for each year in that range, sorted by year in ascending order.</p>

      <p><strong><code>albums_by_year.R</code></strong> — Takes a single year from a drop-down menu and returns a table of all albums ranked that year, showing Ranking, Album, and Artist sorted by ranking order. The <code>all_years</code> variable pre-populates the drop-down by extracting every unique year from the dataset.</p>

      <p><strong><code>albums_by_band.R</code></strong> — Takes an artist name and returns a table of that artist's albums showing Album, Year, and Rating sorted by year. Two helper functions — <code>band_mean_rating()</code> and <code>band_album_count()</code> — compute the average rating and total album count displayed below the table. The <code>all_bands</code> variable pre-populates the drop-down alphabetically.</p>

      <p><strong><code>fav_bands.R</code></strong> — Takes two inputs: a minimum album count and whether to include EPs and live albums. It filters the dataset accordingly and returns the top 15 artists sorted by average rating in descending order.</p>

      <p><strong><code>compare_bands.R</code></strong> — Takes two artist selections and produces a comparative line chart using ggplot2. Each artist's average rating per year is plotted as a line — red for the first artist, blue for the second.</p>

      <p><strong><code>vinyl.R</code></strong> — Takes a minimum rating and returns a table of top-rated albums the owner does not own on vinyl, sorted by rating descending and then alphabetically by album name.</p>

      <p><strong><code>Data/album-ranking.csv</code></strong> — The CSV file that all data aggregation functions operate on. It is loaded once in <code>app_ui.R</code> to populate the UI controls, and referenced in each helper file via the shared <code>album_data</code> dataset.</p>
    </article>
  )
}
