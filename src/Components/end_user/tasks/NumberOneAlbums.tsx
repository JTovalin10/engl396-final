export default function NumberOneAlbums() {
  return (
    <article className="endpoint-card">
      <h3>Browsing Number One Albums by Year Range</h3>
      <p>Use this tab to browse the owner's top-ranked album for each year within a time period you define. By adjusting the <em>range slider</em>, you can expand or narrow the year range, and the <em>data table</em> updates to show the number one album for each year in your selected range. This walkthrough guides you through the <em>range slider</em> with an example.</p>
      <ol>
        <li>Click the <strong>Number One Albums</strong> tab. A <em>range slider</em> and 6 albums in a <em>data table</em> appear like the image below (the range slider is set from 1993 to 1998 at the beginning).
          <img src="/task/Images/EndUser/NumberOneAlbums/S1.jpg" alt="Number One Albums tab showing a range slider set from 1993 to 1998 and a data table with 6 albums" className="step-img" />
        </li>
        <li>Drag your mouse over the right <em>handle</em> and slide it to 2010. If done correctly, the last album in the <em>data table</em> has the year 2010, as shown below.
          <img src="/task/Images/EndUser/NumberOneAlbums/S2.jpg" alt="Range slider with right handle moved to 2010, data table showing last entry as year 2010" className="step-img" />
        </li>
        <li>Drag your mouse over the left <em>handle</em> and slide it to 2000. If done correctly, the first album in the <em>data table</em> contains the year 2000 or later, as shown below.
          <img src="/task/Images/EndUser/NumberOneAlbums/S3.jpg" alt="Range slider with left handle moved to 2000, data table showing first entry as year 2000 or later" className="step-img" />
        </li>
      </ol>
    </article>
  )
}
