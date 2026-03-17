export default function AddingTab() {
  return (
    <article className="endpoint-card">
      <h3>Adding a New Tab and Function</h3>
      <p>Use these steps to add a custom R file with its own aggregation function and expose it as a new tab. This requires changes to three files: <code>app.R</code>, <code>app_ui.R</code>, and <code>app_server.R</code>.</p>
      <ol>
        <li>Write your function in a new R file in the project directory. Your function can reference <code>album_data</code> directly — it is a global variable loaded automatically when the app starts:
          <div className="example-block"><pre><code>{`your_function <- function(your_input) {
  album_data %>%
    filter(Column == your_input) %>%
    select(Album, Artist, Rating) %>%
    arrange(desc(Rating))
}`}</code></pre></div>
          Replace <code>Column</code> with the field you want to filter on (e.g., <code>Artist</code>, <code>Year</code>) and update <code>select()</code> to include whichever columns you want returned.
        </li>
        <li>Open <code>app.R</code>. Find the block of existing <code>source()</code> calls and add a new line:
          <div className="example-block"><pre><code>source("your_file.R")</code></pre></div>
        </li>
        <li>Open <code>app_ui.R</code>. Add a new <code>tabPanel()</code> after the last existing one, before the closing <code>)</code> of <code>tabsetPanel()</code>:
          <div className="example-block"><pre><code>{`tabPanel("Your Tab Name",
  selectInput("your_input", "Label", choices = c(...)),
  actionButton("your_submit", "Submit"),
  tableOutput("your_output")
)`}</code></pre></div>
        </li>
        <li>Open <code>app_server.R</code>. Add a new <code>observeEvent()</code> block after the last existing one:
          <div className="example-block"><pre><code>{`observeEvent(input$your_submit, {
  output$your_output <- renderTable({
    your_function(input$your_input)
  })
})`}</code></pre></div>
        </li>
        <li>Save all three files and run:
          <div className="example-block"><pre><code>shiny::runApp()</code></pre></div>
          Your new tab appears in the tab bar. Clicking Submit displays the result of your function.
        </li>
      </ol>
      <p className="note">Note: the output ID in <code>tableOutput()</code> must exactly match the ID in <code>renderTable()</code>, and input IDs must match between <code>app_ui.R</code> and <code>app_server.R</code>.</p>
    </article>
  )
}
