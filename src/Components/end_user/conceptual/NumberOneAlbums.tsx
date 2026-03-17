export default function NumberOneAlbums() {
  return (
    <article className="endpoint-card">
      <h3>Number One Albums</h3>
      <p>This section uses a range slider to aggregate data and show the owner's favorite album for each year within the selected range. At the bottom of the page, a data table displays the owner's favorite album by year with the following fields: Year, Album, and Artist.</p>
      <img src={import.meta.env.BASE_URL + "conceptual/number-one-albums.png"} alt="Number One Albums tab showing the range slider and results table" className="step-img" />
    </article>
  )
}
