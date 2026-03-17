export default function TopAlbumsByYear() {
  return (
    <article className="endpoint-card">
      <h3>Viewing Top Albums for a Specific Year</h3>
      <p>The <strong>Top Albums by Year</strong> tab lets you see every album the owner ranked in a given year, listed from highest to lowest rank. This is useful when you want to explore what the owner was listening to during a particular year rather than just seeing the single top album. In this tutorial, you select 1995 to see the full ranked list for that year.</p>
      <ol>
        <li>Click the <strong>Top Albums by Year</strong> tab.
          <img src="/task/TopAlbumsByYear/S1.jpg" alt="Top Albums by Year tab showing the Choose a year drop-down menu and a Submit button" className="step-img" />
        </li>
        <li>Click the <strong>Choose a year</strong> <em>drop-down menu</em>.
          <img src="/task/TopAlbumsByYear/S2.jpg" alt="Drop-down menu open with a list of years to select from" className="step-img" />
        </li>
        <li>Select a year. For this tutorial, select <strong>1995</strong>.
          <img src="/task/TopAlbumsByYear/S3.jpg" alt="Data table displaying ranked albums for 1995 with (What's the Story) Morning Glory? listed as the number one album" className="step-img" />
        </li>
        <li>Click <strong>Submit</strong>. If done correctly, the number one album for 1995 is <em>(What's the Story) Morning Glory?</em>, as shown below.
          <img src="/task/TopAlbumsByYear/S4.jpg" alt="Completed Top Albums by Year data table showing full results for 1995" className="step-img" />
        </li>
      </ol>
      <p className="note">Note: Once you have clicked Submit for the first time, you do not need to click it again. Selecting a new year from the <em>drop-down menu</em> automatically updates the results.</p>
    </article>
  )
}
