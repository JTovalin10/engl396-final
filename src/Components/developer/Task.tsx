export default function Task() {
  return (
    <section id="tasks" className="endpoint-section">
      <h2>Task Documentation</h2>
      <p className="section-desc">Step-by-step procedures for running and extending the My Favorite Albums application.</p>

      <article className="endpoint-card">
        <p><strong>Audience:</strong> Experienced R programmers who want to work with <i>My Favorite Albums</i> functions to analyze data and generate web pages.</p>
        <p><strong>Prerequisites:</strong> familiarity with R, the <a href="https://ggplot2.tidyverse.org/reference/index.html"><code>ggplot2</code></a>, <a href="https://shiny.posit.co/r/reference/shiny/latest/"><code>shiny</code></a>, and <a href="https://dplyr.tidyverse.org/reference/index.html"><code>dplyr</code></a> packages, and CSV files.</p>
        <p><strong>Starting point:</strong> RStudio is open with the <i>My Favorite Albums</i> project directory set as your working directory and <code>album-ranking.csv</code> is in the <code>data/</code> folder inside the project directory.</p>
        <div className="params-block">
          <strong>album_data fields</strong>
          <table className="params-table">
            <tbody>
              <tr><th>Year</th><th>Ranking</th><th>Album</th><th>Artist</th><th>Rating</th><th>Vinyl</th><th>EP</th><th>Live</th></tr>
              <tr><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td></tr>
            </tbody>
          </table>
        </div>
      </article>

      <article className="endpoint-card" id="setup">
        <h3>Setting Up R, RStudio, and Required Packages</h3>
        <p>Use these steps to install R, RStudio, and the packages required to run <i>My Favorite Albums</i>. The app relies on three packages: <code>shiny</code> to build the web interface, <code>dplyr</code> to filter and aggregate album data, and <code>ggplot2</code> to generate the artist comparison chart. All three must be installed before the app runs.</p>
        <ol>
          <li>Download and install RStudio from the <a href="https://posit.co/download/rstudio-desktop/">Posit website</a>. Select the free RStudio Desktop version and follow the installer prompts.</li>
          <li>Install the required packages:
            <ol className="sub-steps">
              <li>Open RStudio.</li>
              <li>In the console, run:
                <div className="example-block"><pre><code>install.packages(c("shiny", "dplyr", "ggplot2"))</code></pre></div>
              </li>
              <li>Wait for the console prompt (<code>&gt;</code>) to reappear — this indicates installation is complete.</li>
            </ol>
          </li>
          <li>Set your working directory to the project folder via <strong>Session &gt; Set Working Directory &gt; Choose Directory</strong>.</li>
        </ol>
      </article>

      <article className="endpoint-card" id="data-csv">
        <h3>Setting Up album-ranking.csv</h3>
        <p>This is the CSV file that all data aggregation functions operate on. Follow these steps to create or update it with your own album data. Getting this file structured correctly is required before the app loads and displays any data.</p>
        <ol>
          <li>In Excel or Google Sheets, create a new blank file and enter the following column headers in the first row in this exact order:
            <div className="example-block"><pre><code>Year,Ranking,Album,Artist,Rating,Vinyl,EP,Live</code></pre></div>
          </li>
          <li>Add each album as its own row beneath the headers. For the last three columns:
            <ul>
              <li><strong>Vinyl:</strong> enter <code>v</code> if you own the album on vinyl, leave empty otherwise</li>
              <li><strong>EP:</strong> enter <code>EP</code> if the release is an EP, leave empty otherwise</li>
              <li><strong>Live:</strong> enter <code>Live</code> if the release is a live album, leave empty otherwise</li>
            </ul>
          </li>
          <li>Save the file as a CSV:
            <ol className="sub-steps">
              <li>Name the file <code>album-rankings.csv</code>.</li>
              <li>Place it in the <code>data/</code> folder inside the <i>My Favorite Albums</i> project folder.</li>
            </ol>
          </li>
          <li>Open RStudio and set your working directory to the project folder via <strong>Session &gt; Set Working Directory &gt; Choose Directory</strong>.</li>
          <li>Run the app with <code>shiny::runApp()</code>. If the Home tab displays a total album count and artist count, the file loaded correctly.</li>
        </ol>
        <p className="note">Note: the Artist field must be spelled consistently across all rows. Inconsistent capitalization (e.g., "Radiohead" vs. "radiohead") causes that artist to appear as multiple separate entries throughout the app.</p>
        <p className="note">Note: the year range slider is hardcoded to 1993–2024. If your data includes years outside that range, see <a href="#app-ui-r">app_ui.R</a> for instructions on updating it.</p>
      </article>

      <article className="endpoint-card" id="app-r">
        <h3>app.R — Running the Application</h3>
        <p>Use these steps to launch the <i>My Favorite Albums</i> Shiny web application. <code>app.R</code> is the entry point that loads all libraries and sources every other R file in the project.</p>
        <ol>
          <li>Open <code>app.R</code> in RStudio.</li>
          <li>Set your working directory to the project folder via <strong>Session &gt; Set Working Directory &gt; Choose Directory</strong>.</li>
          <li>Click the <strong>Run App</strong> button in the top-right corner of the editor pane, or run:
            <div className="example-block"><pre><code>shiny::runApp()</code></pre></div>
            The application opens in your browser with all seven tabs available.
          </li>
        </ol>
        <p className="note">Note: add new <code>library()</code> and <code>source()</code> calls to this file when extending the app with additional dependencies or R files.</p>
      </article>

      <article className="endpoint-card" id="app-ui-r">
        <h3>app_ui.R — Defining the Application Layout</h3>
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
                  <li>Set the input ID (e.g., <code>"your_input"</code>) and submit ID (e.g., <code>"your_submit"</code>) — these must match what you use in <code>app_server.R</code>.</li>
                  <li>Set the output ID (e.g., <code>"your_output"</code>) — this must match the ID used in <code>renderTable()</code> or <code>renderPlot()</code> in <code>app_server.R</code>.</li>
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
        <p className="note">Note: the Number One Albums tab uses a range slider with hardcoded bounds (<code>min = 1993, max = 2024</code>). If your data includes years outside this range, update the <code>sliderInput()</code> call inside the <code>tabPanel("Number One Albums", ...)</code> block:
          <div className="example-block"><pre><code>{`sliderInput("year_range", "Select Year Range",
            min = 1990, max = 2030,
            value = c(1993, 2024))`}</code></pre></div>
        </p>
      </article>

      <article className="endpoint-card" id="app-server-r">
        <h3>app_server.R — Connecting Input to Data Functions</h3>
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
          <li>Save and run the app with <code>shiny::runApp()</code>. Interact with the tab you added or modified and confirm it returns the expected output.</li>
        </ol>
      </article>

      <article className="endpoint-card" id="adding-new-tab">
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
            Choose IDs for <code>"your_input"</code>, <code>"your_submit"</code>, and <code>"your_output"</code> — you will use these same IDs in the next step.
          </li>
          <li>Open <code>app_server.R</code>. Add a new <code>observeEvent()</code> block after the last existing one, using the same IDs you defined in <code>app_ui.R</code>:
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
    </section>
  )
}
