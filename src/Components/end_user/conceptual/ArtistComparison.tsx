export default function ArtistComparison() {
  return (
    <article className="endpoint-card">
      <h3>Artist Comparison</h3>
      <p>This section creates a comparison between two artists that you select. It generates a comparative line chart that displays each artist's average rating of albums released in a given year. These lines are distinguished by color: the first artist you select is red and the second artist you select is blue.</p>
      <img src={import.meta.env.BASE_URL + "conceptual/Compare Two Artists on the Graphs.png"} alt="Artist Comparison tab showing a line chart comparing two artists' ratings over time" className="step-img" />
    </article>
  )
}
