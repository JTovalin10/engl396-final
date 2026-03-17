export default function HowAppIsStructured() {
  return (
    <article className="endpoint-card">
      <h3>How the App is Structured</h3>
      <p>The codebase uses R with the Shiny, dplyr, and ggplot2 libraries. If you are familiar with any event-driven web framework — such as Flask, Django, or Express — the structure will feel familiar. The core idea is the same: a UI layer collects user input, a server layer processes it, and helper modules handle the logic for each feature.</p>
      <p>The dataset (<code>Data/album-ranking.csv</code>) is the single data source for the entire application. It contains the following fields: Year, Ranking, Album, Artist, Rating, Vinyl, EP, and Live.</p>
      <p><strong>Prerequisites:</strong> familiarity with general programming concepts. Knowledge of R is helpful but not required.</p>
      <p>The application is divided into three layers:</p>
      <ol>
        <li><strong>Entry point</strong> — <code>app.R</code> loads all libraries, sources all helper files, and launches the app by connecting the UI and server.</li>
        <li><strong>UI layer</strong> — <code>app_ui.R</code> defines the layout and input controls the user sees. It reads the CSV once to populate drop-down menus and sliders, then hands off to the server.</li>
        <li><strong>Server layer</strong> — <code>app_server.R</code> listens for user input and calls the appropriate helper function. When a user changes a drop-down or slider, Shiny automatically re-runs the relevant block of server code — this is called <strong>reactivity</strong>.</li>
      </ol>
      <p>Each of the remaining files is a self-contained helper module that handles the data logic for one tab. The server calls these functions and renders their output back to the UI.</p>
    </article>
  )
}
