export default function QuickStart() {
  return (
    <section className="endpoint-section">
      <h2>Quick Start</h2>
      <p className="section-desc">Use these functions in the RStudio console. First load the data and required packages, then source the file containing the function you need.</p>
      <article className="endpoint-card example-card">
        <h4>1. Load data and packages</h4>
        <pre><code>{`library(dplyr)
album_data <- read.csv("data/album-ranking.csv")`}</code></pre>
        <p className="example-note">Set your working directory to the project folder first (<strong>Session → Set Working Directory → Choose Directory</strong>).</p>
        <h4>2. Source the file and call the function</h4>
        <pre><code>{`source("home.R")
total_album_count()
total_band_count()
most_pop_artist()`}</code></pre>
        <p className="example-output"><strong>Output:</strong> <code>"Albums in the database: 123"</code>, <code>"Artists in the database: 45"</code>, etc.</p>
        <h4>3. Example: Get an artist's albums</h4>
        <pre><code>{`source("albums_by_band.R")
albums_by_bands("Radiohead")
band_mean_rating("Radiohead")
band_album_count("Radiohead")`}</code></pre>
        <h4>4. Example: Compare two artists (requires ggplot2)</h4>
        <pre><code>{`library(ggplot2)
source("compare_bands.R")
band_album_comparison_chart("Radiohead", "Arcade Fire")`}</code></pre>
        <p className="example-note">Artist names are case-sensitive. Run <code>unique(album_data$Artist)</code> to see valid names.</p>
      </article>
    </section>
  )
}
