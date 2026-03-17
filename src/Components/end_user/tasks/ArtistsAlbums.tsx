export default function ArtistsAlbums() {
  return (
    <article className="endpoint-card">
      <h3>Browsing an Artist's Ranked Albums</h3>
      <p>The <strong>Artist's Albums</strong> tab lets you explore every album the owner has ranked for a specific artist, including each album's release year and rating. Below the <em>data table</em>, the tab also shows the artist's total ranked album count and average rating — a summary that becomes especially useful for artists with many albums in the database. In this tutorial, you look up two artists to see how the tab works and how it updates when you switch artists.</p>
      <ol>
        <li>Click the <strong>Artist's Albums</strong> tab.
          <img src="/task/Images/EndUser/ArtistsAlbums/S1.jpg" alt="Artist's Albums tab showing the Choose a band or artist drop-down menu and a Submit button" className="step-img" />
        </li>
        <li>Click the <strong>Choose a band or artist</strong> <em>drop-down menu</em> and select <strong>10,000 Maniacs</strong>.
          <img src="/task/Images/EndUser/ArtistsAlbums/S2.jpg" alt="Drop-down menu open showing a list of artists in alphabetical order" className="step-img" />
        </li>
        <li>Click <strong>Submit</strong>. If done correctly, 10,000 Maniacs has one ranked album — <em>MTV Unplugged</em>. Below the table, the total album count and average rating are displayed, as shown below.
          <img src="/task/Images/EndUser/ArtistsAlbums/S3.jpg" alt="Data table showing 10,000 Maniacs with one ranked album MTV Unplugged and the album count and average rating displayed below" className="step-img" />
          <p className="note">Note: Once you have clicked Submit for the first time, you do not need to click it again — selecting a new artist from the <em>drop-down menu</em> automatically updates the results.</p>
        </li>
        <li>
          <ol className="sub-steps">
            <li>Click the <strong>Choose a band or artist</strong> <em>drop-down menu</em> again.</li>
            <li>Select <strong>A.C. Newman</strong>.
              <p>Because you have already clicked Submit for a previous artist, the app automatically displays the new artist's albums without requiring you to click Submit again.</p>
              If done correctly, you see <em>The Slow Wonder</em>, as shown below.
            </li>
          </ol>
        </li>
      </ol>
      <img src="/task/Images/EndUser/ArtistsAlbums/S4.jpg" alt="Data table automatically updating to show A.C. Newman's ranked album The Slow Wonder" className="step-img" />
    </article>
  )
}
