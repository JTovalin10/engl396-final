export default function Task() {
  return (
    <section className="endpoint-section" id="tasks">
      <h2>Task Documentation</h2>

      <div className="endpoint-card">
        <h3>Getting Started</h3>
        <p>In this guide, you will learn how to use each of the <em>aggregation</em> tools within <i>My Favorite Albums</i>. Use the navigation links above to jump to any tab.</p>
        <p><strong>Audience:</strong> End users with little to no programming experience who want to explore and analyze the owner's album collection through the <i>My Favorite Albums</i> web interface.</p>
        <p><strong>Prerequisites:</strong> Familiarity with basic web browser interaction such as clicking buttons, selecting from menus, and dragging sliders.</p>
        <p><strong>Starting point:</strong> The <i>My Favorite Albums</i> website is open in your browser.</p>
        <p className="note">Note: any words that are italicized have definitions in the appendix at the bottom of this page.</p>
      </div>

      <div className="endpoint-card" id="number-one-albums">
        <h3>Browsing Number One Albums by Year Range</h3>
        <p>Use this tab to browse the owner's top-ranked album for each year within a time period you define. By adjusting the <em>range slider</em>, you can expand or narrow the year range, and the <em>data table</em> updates to show the number one album for each year in your selected range. This walkthrough guides you through the <em>range slider</em> with an example.</p>
        <ol>
          <li>Click the <strong>Number One Albums</strong> tab. A <em>range slider</em> and 6 albums in a <em>data table</em> appear like the image below (the range slider is set from 1993 to 1998 at the beginning).
            <img src="../task/Images/EndUser/NumberOneAlbums/S1.jpg" alt="Number One Albums tab showing a range slider set from 1993 to 1998 and a data table with 6 albums" className="step-img" />
          </li>
          <li>Drag your mouse over the right <em>handle</em> and slide it to 2010. If done correctly, the last album in the <em>data table</em> has the year 2010, as shown below.
            <img src="../task/Images/EndUser/NumberOneAlbums/S2.jpg" alt="Range slider with right handle moved to 2010, data table showing last entry as year 2010" className="step-img" />
          </li>
          <li>Drag your mouse over the left <em>handle</em> and slide it to 2000. If done correctly, the first album in the <em>data table</em> contains the year 2000 or later, as shown below.
            <img src="../task/Images/EndUser/NumberOneAlbums/S3.jpg" alt="Range slider with left handle moved to 2000, data table showing first entry as year 2000 or later" className="step-img" />
          </li>
        </ol>
      </div>

      <div className="endpoint-card" id="top-albums-by-year">
        <h3>Viewing Top Albums for a Specific Year</h3>
        <p>The <strong>Top Albums by Year</strong> tab lets you see every album the owner ranked in a given year, listed from highest to lowest rank. This is useful when you want to explore what the owner was listening to during a particular year rather than just seeing the single top album. In this tutorial, you select 1995 to see the full ranked list for that year.</p>
        <ol>
          <li>Click the <strong>Top Albums by Year</strong> tab.
            <img src="../task/Images/EndUser/TopAlbumsByYear/S1.jpg" alt="Top Albums by Year tab showing the Choose a year drop-down menu and a Submit button" className="step-img" />
          </li>
          <li>Click the <strong>Choose a year</strong> <em>drop-down menu</em>.
            <img src="../task/Images/EndUser/TopAlbumsByYear/S2.jpg" alt="Drop-down menu open with a list of years to select from" className="step-img" />
          </li>
          <li>Select a year. For this tutorial, select <strong>1995</strong>.
            <img src="../task/Images/EndUser/TopAlbumsByYear/S3.jpg" alt="Data table displaying ranked albums for 1995 with (What's the Story) Morning Glory? listed as the number one album" className="step-img" />
          </li>
          <li>Click <strong>Submit</strong>. If done correctly, the number one album for 1995 is <em>(What's the Story) Morning Glory?</em>, as shown below.
            <img src="../task/Images/EndUser/TopAlbumsByYear/S4.jpg" alt="Completed Top Albums by Year data table showing full results for 1995" className="step-img" />
          </li>
        </ol>
        <p className="note">Note: Once you have clicked Submit for the first time, you do not need to click it again — selecting a new year from the <em>drop-down menu</em> automatically updates the results.</p>
      </div>

      <div className="endpoint-card" id="artists-albums">
        <h3>Browsing an Artist's Ranked Albums</h3>
        <p>The <strong>Artist's Albums</strong> tab lets you explore every album the owner has ranked for a specific artist, including each album's release year and rating. Below the <em>data table</em>, the tab also shows the artist's total ranked album count and average rating — a summary that becomes especially useful for artists with many albums in the database. In this tutorial, you look up two artists to see how the tab works and how it updates when you switch artists.</p>
        <ol>
          <li>Click the <strong>Artist's Albums</strong> tab.
            <img src="../task/Images/EndUser/ArtistsAlbums/S1.jpg" alt="Artist's Albums tab showing the Choose a band or artist drop-down menu and a Submit button" className="step-img" />
          </li>
          <li>Click the <strong>Choose a band or artist</strong> <em>drop-down menu</em> and select <strong>10,000 Maniacs</strong>.
            <img src="../task/Images/EndUser/ArtistsAlbums/S2.jpg" alt="Drop-down menu open showing a list of artists in alphabetical order" className="step-img" />
          </li>
          <li>Click <strong>Submit</strong>. If done correctly, 10,000 Maniacs has one ranked album — <em>MTV Unplugged</em>. Below the table, the total album count and average rating are displayed, as shown below.
            <img src="../task/Images/EndUser/ArtistsAlbums/S3.jpg" alt="Data table showing 10,000 Maniacs with one ranked album MTV Unplugged and the album count and average rating displayed below" className="step-img" />
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
        <img src="../task/Images/EndUser/ArtistsAlbums/S4.jpg" alt="Data table automatically updating to show A.C. Newman's ranked album The Slow Wonder" className="step-img" />
      </div>

      <div className="endpoint-card" id="favorite-artists">
        <h3>Filtering the Owner's Top-Rated Artists by Album Count</h3>
        <p>The <strong>Favorite Artists</strong> tab shows the owner's highest-rated artists filtered by a minimum number of ranked albums — useful for focusing on artists the owner has listened to most. Results are capped at a maximum of 15 artists, sorted by average rating from highest to lowest. In this tutorial, you adjust the filters to see how the results change.</p>
        <ol>
          <li>Click the <strong>Favorite Artists</strong> tab.
            <img src="../task/Images/EndUser/FavoriteArtists/S1.jpg" alt="Favorite Artists tab showing the Minimum number of albums drop-down menu, the Exclude EPs and Live Albums checkbox, and a Submit button" className="step-img" />
          </li>
          <li>Click <strong>Submit</strong>. The default setting requires a minimum of 10 albums and does not exclude EPs or Live Albums. If done correctly, 6 artists appear in the <em>data table</em>, as shown below.
            <img src="../task/Images/EndUser/FavoriteArtists/S2.jpg" alt="Data table showing 6 artists with the default minimum of 10 albums and EPs and Live Albums not excluded" className="step-img" />
            <p className="note">Note: Once you have clicked Submit for the first time, you do not need to click it again — adjusting the filters automatically updates the results.</p>
          </li>
          <li>Click the <strong>Exclude EPs and Live Albums</strong> checkbox. You do not need to click Submit again — the app automatically refreshes the results. If done correctly, 7 artists now appear, as the count now includes EPs and Live Albums, as shown below.
            <img src="../task/Images/EndUser/FavoriteArtists/S3.jpg" alt="Data table refreshed to show 7 artists after checking the Exclude EPs and Live Albums checkbox" className="step-img" />
          </li>
          <li>Click the <strong>Minimum number of albums</strong> <em>drop-down menu</em>.
            <img src="../task/Images/EndUser/FavoriteArtists/S4.jpg" alt="Minimum number of albums drop-down menu open showing numeric options" className="step-img" />
            <ol className="sub-steps">
              <li>Select <strong>8</strong>. The app refreshes automatically — no need to click Submit. If done correctly, 10 artists now appear in the <em>data table</em>, sorted by rating in descending order. Note that this count includes EPs and Live Albums, as shown below.</li>
            </ol>
          </li>
        </ol>
        <img src="../task/Images/EndUser/FavoriteArtists/S5.jpg" alt="Data table showing 10 artists after selecting a minimum of 8 albums with EPs and Live Albums included" className="step-img" />
      </div>

      <div className="endpoint-card" id="artist-comparison">
        <h3>Comparing Two Artists' Ratings Over Time</h3>
        <p>The <strong>Artist Comparison</strong> tab generates a <em>comparative line chart</em> that plots two artists' album ratings side by side across different years, making it easy to see how each artist's ratings compare over time. The first artist is shown in red and the second in blue. Each point on the chart represents the owner's rating for one album released in that year — if an artist has multiple albums from the same year, multiple points appear for that year.</p>
        <ol>
          <li>Click the <strong>Artist Comparison</strong> tab.
            <img src="../task/Images/EndUser/ArtistComparison/S1.jpg" alt="Artist Comparison tab showing two drop-down menus for selecting a first and second artist" className="step-img" />
          </li>
          <li>Click the <strong>First band or artist</strong> <em>drop-down menu</em> and select your first artist.
            <img src="../task/Images/EndUser/ArtistComparison/S2.png" alt="First band or artist drop-down menu open with a list of artists to select from" className="step-img" />
          </li>
          <li>Click the <strong>Second band or artist</strong> <em>drop-down menu</em>.
            <ol className="sub-steps">
              <li>Select <strong>Acid House Kings</strong>. The chart generates automatically — no Submit button is needed. If done correctly, the chart looks like the one shown below.</li>
            </ol>
            <img src="../task/Images/EndUser/ArtistComparison/S3.jpg" alt="Completed comparative line chart with two colored lines plotted by year and rating" className="step-img" />
            <p>You see one line and one dot. The black dot represents 10,000 Maniacs — they appear as a single dot because the owner has ranked only one of their albums, from 1993, with a rating of 8. The blue line represents Acid House Kings, which spans from 1997 to 2005 and stays flat at 6, indicating the owner consistently rated their albums a 6 across that period.</p>
          </li>
        </ol>
        <p className="note">Note: an artist only appears on the chart for years in which the owner has at least one ranked album.</p>
      </div>

      <div className="endpoint-card" id="vinyl">
        <h3>Finding Albums Not Yet in the Vinyl Collection</h3>
        <p>The <strong>Vinyl</strong> tab displays all albums the owner does not yet own on vinyl that meet a minimum rating threshold you select. Results show every album at or above that rating, sorted by rating in descending order — making it easy to identify top candidates for the vinyl collection.</p>
        <ol>
          <li>Click the <strong>Vinyl</strong> tab.
            <img src="../task/Images/EndUser/Vinyl/S1.jpg" alt="Vinyl tab showing the Select which albums to display drop-down menu and a Submit button" className="step-img" />
          </li>
          <li>Click the <strong>Select which albums to display</strong> <em>drop-down menu</em>.
            <img src="../task/Images/EndUser/Vinyl/S2.jpg" alt="Drop-down menu open showing minimum rating threshold options" className="step-img" />
            <ol className="sub-steps">
              <li>Select <strong>9 and higher</strong>.
                <img src="../task/Images/EndUser/Vinyl/S3.jpg" alt="Data table listing albums rated 9 and above not yet owned on vinyl, with Album, Artist, and Rating columns" className="step-img" />
              </li>
              <li>Click <strong>Submit</strong>. If done correctly, only albums rated 9 and above appear, as shown below.
                <img src="../task/Images/EndUser/Vinyl/S4.jpg" alt="Completed Vinyl data table showing full results for the selected minimum rating" className="step-img" />
              </li>
            </ol>
          </li>
        </ol>
        <p className="note">Note: Once you have clicked Submit for the first time, you do not need to click it again — selecting a new rating from the <em>drop-down menu</em> automatically updates the results.</p>
      </div>

      <div className="endpoint-card" id="appendix">
        <h3>Terminology</h3>
        <ul>
          <li><strong>Aggregate:</strong> To filter and combine data based on criteria you select.</li>
          <li><strong>Comparative Line Chart:</strong> A visual representation of data used to compare and contrast two or more data sets.</li>
          <li><strong>Data Table:</strong> A structured display of information organized into rows and columns.</li>
          <li><strong>Drop-Down Menu:</strong> A graphical user interface element that allows users to choose from a list of options that appears when they click on or hover over a button or other control.</li>
          <li><strong>Handle:</strong> The draggable element on a range slider that users interact with to select a value or range of values. It moves along the slider's track and visually indicates the current selected value(s). In a dual-range slider, there are typically two handles — one for the minimum value and one for the maximum value — allowing users to define a specific range.</li>
          <li><strong>Range Slider:</strong> A user interface component that allows you to select a range of values from a set of numbers.</li>
        </ul>
      </div>
    </section>
  )
}
