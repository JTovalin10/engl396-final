export default function TopAlbumsByYear() {
  return (
    <article className="endpoint-card">
      <h3>Top Albums by Year</h3>
      <p>This section uses a drop-down menu that allows you to select one specific year, defaulting to 1993. When you choose a year, it displays a data table of the owner's favorite albums for that year and where each album ranks. The fields on the table are: Ranking, Album, and Artist.</p>
      <img src={import.meta.env.BASE_URL + "conceptual/top-albums-by-year.png"} alt="Top Albums by Year tab showing the year drop-down and ranked results table" className="step-img" />
    </article>
  )
}
