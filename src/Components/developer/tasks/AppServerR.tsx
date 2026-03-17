export default function AppServerR() {
  return (
    <article className="endpoint-card">
      <h3>Connecting Input to Data Functions</h3>
      <h4><code>app_server.R</code></h4>
      <p>Use these steps to trace or update how a tab's user input connects to a data function. <code>app_server.R</code> handles all reactivity — it listens for user input and decides what to compute and display in response.</p>
      <ol>
        <li>Open <code>app_server.R</code> in RStudio.</li>
        <li>Locate the tab you want to work with. Each tab calls one or more functions:
          <ul>
            <li>Home: <code>total_album_count()</code>, <code>total_band_count()</code>, <code>most_pop_artist()</code></li>
            <li>Number One Albums: <code>number_one_album()</code></li>
            <li>Top Albums by Year: <code>year_albums()</code></li>
            <li>Artist's Albums: <code>albums_by_bands()</code>, <code>band_album_count()</code>, <code>band_mean_rating()</code></li>
            <li>Favorite Artists: <code>favorite_bands()</code></li>
            <li>Artist Comparison: <code>band_album_comparison_chart()</code></li>
            <li>Vinyl: <code>missing_vinyl()</code></li>
          </ul>
        </li>
        <li>Each tab's server logic follows this pattern:
          <div className="example-block"><pre><code>{`observeEvent(input$submit_id, {
  output$output_id <- renderTable({
    function_name(input$input_id)
  })
})`}</code></pre></div>
          <ul>
            <li>To <strong>add</strong> a new block:
              <ol className="sub-steps">
                <li>Find the last <code>observeEvent()</code> in the file.</li>
                <li>Add a new block directly after it, inside the <code>server &lt;- function(input, output)</code> body.</li>
                <li>Set <code>submit_id</code> and <code>output_id</code> to match the IDs you defined in <code>app_ui.R</code>.</li>
                <li>Replace <code>function_name</code> with the function you want to call.</li>
              </ol>
            </li>
            <li>To <strong>modify</strong> an existing block:
              <ol className="sub-steps">
                <li>Find the block by searching for the tab's submit ID (e.g., <code>input$submit_vinyl</code>).</li>
                <li>Replace <code>function_name</code> with your new function.</li>
                <li>Update the argument to match the relevant input control.</li>
                <li>If your function returns a chart, use <code>renderPlot()</code> instead of <code>renderTable()</code>.</li>
              </ol>
            </li>
          </ul>
        </li>
        <li>Save and run the app with <code>shiny::runApp()</code>. Interact with the tab you modified and confirm it returns the expected output.</li>
      </ol>
    </article>
  )
}
