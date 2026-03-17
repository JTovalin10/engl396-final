export default function BandComparison() {
  return (
    <section className="endpoint-section">
      <h2>band_album_comparison_chart</h2>
      <p className="section-desc">Generates a line chart comparing two artists' ratings by year.</p>
      <article className="endpoint-card">
        <div className="endpoint-header"><span className="method-badge get">GET</span><code className="endpoint-path">band_album_comparison_chart(var.artist1, var.artist2)</code></div>
        <p>Plots each artist's album ratings by year. First artist = red line, second = blue. Requires <code>ggplot2</code>.</p>
        <div className="params-block"><strong>Parameters</strong><table className="params-table"><tbody><tr><th>Name</th><th>Type</th><th>Required</th><th>Description</th></tr><tr><td><code>var.artist1</code></td><td>character</td><td>Yes</td><td>First artist (plotted as red line on chart)</td></tr><tr><td><code>var.artist2</code></td><td>character</td><td>Yes</td><td>Second artist (plotted as blue line on chart)</td></tr></tbody></table></div>
        <div className="schema-block"><strong>Returns:</strong> ggplot object (displays in RStudio Plots pane)</div>
        <div className="example-block"><strong>Example</strong><pre><code>{`library(ggplot2)
source("compare_bands.R")
band_album_comparison_chart("Radiohead", "Arcade Fire")`}</code></pre>
        <p className="example-note">Red = first artist, blue = second. X-axis: year, Y-axis: rating.</p></div>
      </article>
    </section>
  )
}
