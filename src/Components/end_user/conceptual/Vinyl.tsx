export default function Vinyl() {
  return (
    <article className="endpoint-card">
      <h3>Vinyl</h3>
      <p>This section uses a drop-down menu where you can select a minimum rating to find the top-rated albums that the person does not own on vinyl, sorted in descending order by rating. It displays a data table with the fields Album, Artist, and Rating.</p>
      <img src={import.meta.env.BASE_URL + "conceptual/Top-Rated Albums Not Owned on Vinyl.png"} alt="Vinyl tab showing the rating filter and table of albums not yet owned on vinyl" className="step-img" />
    </article>
  )
}
