export default function Conceptual() {
  return (
    <section id="conceptual" className="endpoint-section">
      <h2>Conceptual Overview</h2>
      <p className="section-desc">How the files in My Favorite Albums work together to produce the application.</p>

      <article className="endpoint-card">
        <p>The codebase uses R with the Shiny, dplyr, and ggplot2 libraries. If you are familiar with any event-driven web framework — such as Flask, Django, or Express — the structure will feel familiar. The core idea is the same: a UI layer collects user input, a server layer processes it, and helper modules handle the logic for each feature.</p>
        <p>The dataset (<code>Data/album-ranking.csv</code>) is the single data source for the entire application. It contains the following fields: Year, Ranking, Album, Artist, Rating, Vinyl, EP, and Live.</p>
        <p><strong>Prerequisites:</strong> familiarity with general programming concepts. Knowledge of R is helpful but not required.</p>
      </article>

      <article className="endpoint-card">
        <h3>How the App is Structured</h3>
        <p>The application is divided into three layers:</p>
        <ol>
          <li><strong>Entry point</strong> — <code>app.R</code> loads all libraries, sources all helper files, and launches the app by connecting the UI and server.</li>
          <li><strong>UI layer</strong> — <code>app_ui.R</code> defines the layout and input controls the user sees. It reads the CSV once to populate drop-down menus and sliders, then hands off to the server.</li>
          <li><strong>Server layer</strong> — <code>app_server.R</code> listens for user input and calls the appropriate helper function. When a user changes a drop-down or slider, Shiny automatically re-runs the relevant block of server code — this is called <strong>reactivity</strong> and is the key concept to understand in any Shiny app.</li>
        </ol>
        <p>Each of the remaining files is a self-contained helper module that handles the data logic for one tab. The server calls these functions and renders their output back to the UI.</p>
      </article>

      <article className="endpoint-card schema-card">
        <h3>Tab-to-File Mapping</h3>
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

      <article className="endpoint-card">
        <h3>File Descriptions</h3>
        <p><strong><code>app.R</code></strong> — The entry point of the application. It loads the required libraries (Shiny, dplyr, ggplot2), sources every helper file, and calls <code>shinyApp()</code> to launch the app by connecting <code>app_ui.R</code> and <code>app_server.R</code>. To run the app locally, open this file in RStudio and click <strong>Run App</strong>, or run <code>shiny::runApp()</code> from the project directory in the R console.</p>
        <p><strong><code>app_ui.R</code></strong> — Defines what the user sees. It loads the album data from the CSV and uses it to populate the controls — drop-down menus, sliders, and checkboxes — across seven tabs. Each tab specifies its inputs and a placeholder for its output. The actual data that fills those placeholders is determined by <code>app_server.R</code>.</p>
        <p><strong><code>app_server.R</code></strong> — The bridge between the UI and the helper files. For each tab, it reads the user's selection and passes it to the corresponding helper function, then renders the result. Because Shiny is reactive, this happens automatically whenever the user changes an input — no manual refresh needed.</p>
        <p><strong><code>home.R</code></strong> — Provides three summary statistics displayed on the home tab: the total number of albums in the dataset, the total number of unique artists, and the artist with the most albums.</p>
        <p><strong><code>number_one_albums.R</code></strong> — Takes a start year and end year from the range slider and returns the top-ranked album for each year in that range, sorted by year in ascending order.</p>
        <p><strong><code>albums_by_year.R</code></strong> — Takes a single year from a drop-down menu and returns a table of all albums ranked that year, showing Ranking, Album, and Artist sorted by ranking order. The <code>all_years</code> variable pre-populates the drop-down by extracting every unique year from the dataset.</p>
        <p><strong><code>albums_by_band.R</code></strong> — Takes an artist name and returns a table of that artist's albums showing Album, Year, and Rating sorted by year. Two helper functions — <code>band_mean_rating()</code> and <code>band_album_count()</code> — compute the average rating and total album count displayed below the table. All three functions share the same <code>filter()</code> and <code>select()</code> pattern from dplyr. The <code>all_bands</code> variable pre-populates the drop-down alphabetically.</p>
        <p><strong><code>fav_bands.R</code></strong> — Takes two inputs: a minimum album count and whether to include EPs and live albums. It filters the dataset accordingly and returns the top 15 artists sorted by average rating in descending order.</p>
        <p><strong><code>compare_bands.R</code></strong> — Takes two artist selections and produces a comparative line chart using ggplot2. Each artist's average rating per year is plotted as a line — red for the first artist, blue for the second.</p>
        <p><strong><code>vinyl.R</code></strong> — Takes a minimum rating and returns a table of top-rated albums the owner does not own on vinyl, sorted by rating descending and then alphabetically by album name.</p>
        <p><strong><code>Data/album-ranking.csv</code></strong> — The CSV file that all data aggregation functions operate on. It is loaded once in <code>app_ui.R</code> to populate the UI controls, and again in each helper file via the shared <code>album_data</code> dataset.</p>
      </article>

      <article className="endpoint-card">
        <h3>Key Concept: Shiny Reactivity</h3>
        <p>In a standard script, code runs top to bottom once. In a Shiny app, the server function contains <strong>reactive blocks</strong> that re-execute automatically when their inputs change. For example, when a user picks a different artist in the Artist's Albums tab, Shiny detects that the input changed and re-runs the block that calls <code>albums_by_bands()</code> — without any additional wiring required. Understanding this eliminates most confusion about why code in <code>app_server.R</code> is organized the way it is.</p>
      </article>
    </section>
  )
}
