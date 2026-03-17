export default function Setup() {
  return (
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
  )
}
