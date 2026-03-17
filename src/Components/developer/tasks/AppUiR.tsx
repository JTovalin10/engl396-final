export default function AppUiR() {
  return (
    <article className="endpoint-card">
      <h3>Defining the Application Layout</h3>
      <h4><code>app_ui.R</code></h4>
      <p>Use these steps to modify the layout or add a new tab. <code>app_ui.R</code> controls everything the user sees — keeping it separate from the server logic makes both files easier to maintain and update independently.</p>
      <ol>
        <li>Open <code>app_ui.R</code> in RStudio.</li>
        <li>Each tab is defined as a <code>tabPanel()</code> inside <code>tabsetPanel()</code>:
          <div className="example-block"><pre><code>{`tabPanel("Tab Name",
  selectInput("your_input", "Label", choices = c(...)),
  actionButton("your_submit", "Submit"),
  tableOutput("your_output")
)`}</code></pre></div>
          <ul>
            <li>To <strong>add</strong> a new tab:
              <ol className="sub-steps">
                <li>Find the last <code>tabPanel()</code> inside <code>tabsetPanel()</code>.</li>
                <li>Add your new <code>tabPanel()</code> directly after it, before the closing <code>)</code> of <code>tabsetPanel()</code>.</li>
                <li>Set the input ID and submit ID — these must match what you use in <code>app_server.R</code>.</li>
                <li>Set the output ID — this must match the ID used in <code>renderTable()</code> or <code>renderPlot()</code> in <code>app_server.R</code>.</li>
                <li>Use <code>plotOutput()</code> instead of <code>tableOutput()</code> if your function returns a chart.</li>
              </ol>
            </li>
            <li>To <strong>modify</strong> an existing tab:
              <ol className="sub-steps">
                <li>Find the <code>tabPanel()</code> by its name (e.g., <code>tabPanel("Vinyl", ...)</code>).</li>
                <li>Update the input control choices, labels, or IDs as needed.</li>
                <li>If you change an input or output ID, update the matching ID in <code>app_server.R</code> to keep them in sync.</li>
              </ol>
            </li>
          </ul>
        </li>
        <li>Save the file and re-run the app with <code>shiny::runApp()</code> to see your changes.</li>
      </ol>
      <p className="note">Note: the Number One Albums tab uses a range slider with hardcoded bounds (<code>min = 1993, max = 2024</code>). If your data includes years outside this range, update the <code>sliderInput()</code> call:
        <div className="example-block"><pre><code>{`sliderInput("year_range", "Select Year Range",
            min = 1990, max = 2030,
            value = c(1993, 2024))`}</code></pre></div>
      </p>
    </article>
  )
}
