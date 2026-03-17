export default function FavoriteArtists() {
  return (
    <article className="endpoint-card">
      <h3>Favorite Artists</h3>
      <p>This section filters the owner's top-rated artists by a minimum album count and displays up to 15 results in a data table showing each artist's name, average rating, and number of albums. You can also choose to include or exclude EPs and live albums. Results are sorted by average rating in descending order.</p>
      <img src={import.meta.env.BASE_URL + "conceptual/favorite-artists.png"} alt="Favorite Artists tab showing the filter controls and top-rated artists table" className="step-img" />
    </article>
  )
}
