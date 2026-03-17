export default function FavoriteArtists() {
  return (
    <article className="endpoint-card">
      <h3>Favorite Artists</h3>
      <p>This section uses a drop-down menu that creates a data table with at most 15 artists, organized by Artist, Rating, and the number of albums they have. You interact with the data table by selecting the minimum number of albums in the drop-down menu, and you can choose to include EPs and live albums. The table is organized by average rating in descending order.</p>
      <img src="/conceptual/Artists with Highly Rated Albums.png" alt="Favorite Artists tab showing the filter controls and top-rated artists table" className="step-img" />
    </article>
  )
}
