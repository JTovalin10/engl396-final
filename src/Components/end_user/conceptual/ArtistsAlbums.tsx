export default function ArtistsAlbums() {
  return (
    <article className="endpoint-card">
      <h3>Artist's Albums</h3>
      <p>This section uses a drop-down menu to select a specific artist and see what albums the owner has listened to, the year they were released, and the rating the owner gives each album. This data is displayed in a data table with the following fields: Album, Year, and Rating. At the bottom of the data table, you will see the number of albums ranked for the selected artist and the average rating.</p>
      <img src="/conceptual/About an Artist's Albums.png" alt="Artist's Albums tab showing the artist drop-down and album data table with rating summary" className="step-img" />
    </article>
  )
}
