export default function AppR() {
  return (
    <article className="endpoint-card">
      <h3>Running the Application</h3>
      <h4><code>app.R</code></h4>
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
  )
}
