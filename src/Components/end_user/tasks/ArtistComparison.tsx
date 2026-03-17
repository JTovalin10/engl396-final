export default function ArtistComparison() {
  return (
    <article className="endpoint-card">
      <h3>Comparing Two Artists' Ratings Over Time</h3>
      <p>The <strong>Artist Comparison</strong> tab generates a <em>comparative line chart</em> that plots two artists' album ratings side by side across different years, making it easy to see how each artist's ratings compare over time. The first artist is shown in red and the second in blue. Each point on the chart represents the owner's rating for one album released in that year — if an artist has multiple albums from the same year, multiple points appear for that year.</p>
      <ol>
        <li>Click the <strong>Artist Comparison</strong> tab.
          <img src="/task/ArtistComparison/S1.jpg" alt="Artist Comparison tab showing two drop-down menus for selecting a first and second artist" className="step-img" />
        </li>
        <li>Click the <strong>First band or artist</strong> <em>drop-down menu</em> and select your first artist.
          <img src="/task/ArtistComparison/S2.png" alt="First band or artist drop-down menu open with a list of artists to select from" className="step-img" />
        </li>
        <li>Click the <strong>Second band or artist</strong> <em>drop-down menu</em>.
          <ol className="sub-steps">
            <li>Select <strong>Acid House Kings</strong>. The chart generates automatically — no Submit button is needed. If done correctly, the chart looks like the one shown below.</li>
          </ol>
          <img src="/task/ArtistComparison/S3.jpg" alt="Completed comparative line chart with two colored lines plotted by year and rating" className="step-img" />
          <p>You see one line and one dot. The black dot represents 10,000 Maniacs — they appear as a single dot because the owner has ranked only one of their albums, from 1993, with a rating of 8. The blue line represents Acid House Kings, which spans from 1997 to 2005 and stays flat at 6, indicating the owner consistently rated their albums a 6 across that period.</p>
        </li>
      </ol>
      <p className="note">Note: An artist only appears on the chart for years in which the owner has at least one ranked album.</p>
    </article>
  )
}
