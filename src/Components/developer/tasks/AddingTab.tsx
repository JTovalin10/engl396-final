export default function AddingTab() {
  return (
    <article className="endpoint-card">
      <h3>Adding a New Tab and Function</h3>
      <p>Extending the application always involves the same three files: <code>app_ui.R</code> defines what the user sees, <code>app_server.R</code> connects input to output, and <code>app.R</code> loads the function file that does the work. The sections below cover two complete workflows: modifying an existing tab, and adding a new one from scratch.</p>

      <h4>Modifying an Existing Tab</h4>
      <p>Use this workflow to update the inputs, outputs, or logic of a tab that already exists.</p>
      <ol>
        <li>Open <code>app_ui.R</code>. Find the <code>tabPanel()</code> for the tab you want to change by searching for its name (e.g., <code>tabPanel("Vinyl", ...)</code>).
          <ol className="sub-steps">
            <li>Update the input control choices, labels, or IDs as needed.</li>
            <li>If you change an input or output ID, note the new IDs — you will need them in the next step.</li>
          </ol>
        </li>
        <li>Open <code>app_server.R</code>. Find the <code>observeEvent()</code> block for the same tab by searching for its submit ID (e.g., <code>input$submit_vinyl</code>).
          <ol className="sub-steps">
            <li>Update any IDs that changed in <code>app_ui.R</code> to keep them in sync.</li>
            <li>Replace <code>function_name</code> with your updated function if the logic changed.</li>
            <li>If your function returns a chart instead of a table, use <code>renderPlot()</code> instead of <code>renderTable()</code>.</li>
          </ol>
        </li>
        <li>Save both files and run <code>shiny::runApp()</code>. Interact with the modified tab and confirm it returns the expected output.</li>
      </ol>

      <h4>Adding a New Tab</h4>
      <p>Use this workflow to create a new tab backed by a new R function. All four steps are required.</p>
      <ol>
        <li>Create a new R file in the project directory and write your function. Your function can reference <code>album_data</code> directly — it is a global variable loaded automatically when the app starts:
          <div className="example-block"><pre><code>{`your_function <- function(your_input) {
  album_data %>%
    filter(Column == your_input) %>%
    select(Album, Artist, Rating) %>%
    arrange(desc(Rating))
}`}</code></pre></div>
          Replace <code>Column</code> with the field you want to filter on (e.g., <code>Artist</code>, <code>Year</code>) and update <code>select()</code> to include whichever columns you want returned.
        </li>
        <li>Open <code>app.R</code>. Find the block of existing <code>source()</code> calls and add a new line for your file:
          <div className="example-block"><pre><code>source("your_file.R")</code></pre></div>
        </li>
        <li>Open <code>app_ui.R</code>. Add a new <code>tabPanel()</code> after the last existing one, before the closing <code>)</code> of <code>tabsetPanel()</code>. Choose IDs for the input, submit button, and output — you will use these same IDs in the next step:
          <div className="example-block"><pre><code>{`tabPanel("Your Tab Name",
  selectInput("your_input", "Label", choices = c(...)),
  actionButton("your_submit", "Submit"),
  tableOutput("your_output")
)`}</code></pre></div>
          Use <code>plotOutput()</code> instead of <code>tableOutput()</code> if your function returns a chart.
        </li>
        <li>Open <code>app_server.R</code>. Add a new <code>observeEvent()</code> block after the last existing one, using the same IDs you defined in <code>app_ui.R</code>:
          <div className="example-block"><pre><code>{`observeEvent(input$your_submit, {
  output$your_output <- renderTable({
    your_function(input$your_input)
  })
})`}</code></pre></div>
          Use <code>renderPlot()</code> instead of <code>renderTable()</code> if your function returns a chart.
        </li>
        <li>Save all files and run:
          <div className="example-block"><pre><code>shiny::runApp()</code></pre></div>
          Your new tab appears in the tab bar. Clicking Submit displays the result of your function.
        </li>
      </ol>
      <p className="note">Note: The output ID in <code>tableOutput()</code> must exactly match the ID in <code>renderTable()</code>, and all input IDs must match between <code>app_ui.R</code> and <code>app_server.R</code>.</p>
    </article>
  )
}
