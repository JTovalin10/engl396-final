export default function FavoriteArtists() {
  return (
    <article className="endpoint-card">
      <h3>Filtering the Owner's Top-Rated Artists by Album Count</h3>
      <p>The <strong>Favorite Artists</strong> tab shows the owner's highest-rated artists filtered by a minimum number of ranked albums — useful for focusing on artists the owner has listened to most. Results are capped at a maximum of 15 artists, sorted by average rating from highest to lowest. In this tutorial, you adjust the filters to see how the results change.</p>
      <ol>
        <li>Click the <strong>Favorite Artists</strong> tab.
          <img src="/task/Images/EndUser/FavoriteArtists/S1.jpg" alt="Favorite Artists tab showing the Minimum number of albums drop-down menu, the Exclude EPs and Live Albums checkbox, and a Submit button" className="step-img" />
        </li>
        <li>Click <strong>Submit</strong>. The default setting requires a minimum of 10 albums and does not exclude EPs or Live Albums. If done correctly, 6 artists appear in the <em>data table</em>, as shown below.
          <img src="/task/Images/EndUser/FavoriteArtists/S2.jpg" alt="Data table showing 6 artists with the default minimum of 10 albums and EPs and Live Albums not excluded" className="step-img" />
          <p className="note">Note: Once you have clicked Submit for the first time, you do not need to click it again — adjusting the filters automatically updates the results.</p>
        </li>
        <li>Click the <strong>Exclude EPs and Live Albums</strong> checkbox. You do not need to click Submit again — the app automatically refreshes the results. If done correctly, 7 artists now appear, as shown below.
          <img src="/task/Images/EndUser/FavoriteArtists/S3.jpg" alt="Data table refreshed to show 7 artists after checking the Exclude EPs and Live Albums checkbox" className="step-img" />
        </li>
        <li>Click the <strong>Minimum number of albums</strong> <em>drop-down menu</em>.
          <img src="/task/Images/EndUser/FavoriteArtists/S4.jpg" alt="Minimum number of albums drop-down menu open showing numeric options" className="step-img" />
          <ol className="sub-steps">
            <li>Select <strong>8</strong>. The app refreshes automatically — no need to click Submit. If done correctly, 10 artists now appear in the <em>data table</em>, sorted by rating in descending order.</li>
          </ol>
        </li>
      </ol>
      <img src="/task/Images/EndUser/FavoriteArtists/S5.jpg" alt="Data table showing 10 artists after selecting a minimum of 8 albums with EPs and Live Albums included" className="step-img" />
    </article>
  )
}
