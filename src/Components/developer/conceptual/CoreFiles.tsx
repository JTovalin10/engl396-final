export default function CoreFiles() {
  return (
    <article className="endpoint-card">
      <h3>How the Core Files Work Together</h3>
      <p>Three files form the backbone of the application. Understanding how they connect eliminates most confusion about the codebase.</p>

      <h4>app.R — The Entry Point</h4>
      <p><code>app.R</code> is the only file you need to run to launch the application. It does three things in order:</p>
      <ol>
        <li>Loads the required libraries: <code>library(shiny)</code>, <code>library(dplyr)</code>, <code>library(ggplot2)</code>.</li>
        <li>Sources every helper file (e.g., <code>source("home.R")</code>, <code>source("vinyl.R")</code>), making their functions available globally.</li>
        <li>Calls <code>shinyApp(ui = app_ui, server = app_server)</code>, which hands control to the other two core files.</li>
      </ol>
      <p>Think of <code>app.R</code> as the wiring diagram. It connects everything but contains no logic of its own.</p>

      <h4>app_ui.R — What the User Sees</h4>
      <p><code>app_ui.R</code> runs once when the app starts. It reads <code>album-ranking.csv</code> to extract the list of valid years and artist names, then uses those values to populate the drop-down menus and sliders across all seven tabs. It defines the layout — what controls appear and where — but contains no data logic. Each tab declares an input ID (e.g., <code>"band_select"</code>) and an output ID (e.g., <code>"band_table"</code>) that <code>app_server.R</code> listens to and writes to.</p>

      <h4>app_server.R — The Bridge</h4>
      <p><code>app_server.R</code> is a single function, <code>server &lt;- function(input, output)</code>, that contains one reactive block per tab. Each block:</p>
      <ol>
        <li>Waits for the user to click Submit (via <code>observeEvent</code>).</li>
        <li>Reads the current value of the tab's input control (e.g., <code>input$band_select</code>).</li>
        <li>Passes that value to the appropriate helper function (e.g., <code>albums_by_bands(input$band_select)</code>).</li>
        <li>Writes the result to the output placeholder defined in <code>app_ui.R</code> (e.g., <code>output$band_table</code>).</li>
      </ol>
      <p className="note">Note: The IDs in <code>app_ui.R</code> and <code>app_server.R</code> must match exactly. A mismatch causes the output to silently fail with no error message.</p>

      <div className="params-block">
        <strong>Data flow summary</strong>
        <pre><code>{`app.R
  └─ sources all helper files
  └─ shinyApp(ui = app_ui, server = app_server)
        │
        ├─ app_ui.R   → defines inputs (IDs) and output placeholders
        │
        └─ app_server.R
              └─ reads input$id → calls helper_function() → writes output$id`}</code></pre>
      </div>
    </article>
  )
}
