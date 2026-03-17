export default function Vinyl() {
  return (
    <article className="endpoint-card">
      <h3>Finding Albums Not Yet in the Vinyl Collection</h3>
      <p>The <strong>Vinyl</strong> tab displays all albums the owner does not yet own on vinyl that meet a minimum rating threshold you select. Results show every album at or above that rating, sorted by rating in descending order, making it easy to identify top candidates for the vinyl collection.</p>
      <ol>
        <li>Click the <strong>Vinyl</strong> tab.
          <img src={import.meta.env.BASE_URL + "task/Vinyl/S1.jpg"} alt="Vinyl tab showing the Select which albums to display drop-down menu and a Submit button" className="step-img" />
        </li>
        <li>Click the <strong>Select which albums to display</strong> <em>drop-down menu</em>.
          <img src={import.meta.env.BASE_URL + "task/Vinyl/S2.jpg"} alt="Drop-down menu open showing minimum rating threshold options" className="step-img" />
          <ol className="sub-steps">
            <li>Select <strong>9 and higher</strong>.
              <img src={import.meta.env.BASE_URL + "task/Vinyl/S3.jpg"} alt="Data table listing albums rated 9 and above not yet owned on vinyl, with Album, Artist, and Rating columns" className="step-img" />
            </li>
            <li>Click <strong>Submit</strong>. If done correctly, only albums rated 9 and above appear, as shown below.
              <img src={import.meta.env.BASE_URL + "task/Vinyl/S4.jpg"} alt="Completed Vinyl data table showing full results for the selected minimum rating" className="step-img" />
            </li>
          </ol>
        </li>
      </ol>
      <p className="note">Note: Once you have clicked Submit for the first time, you do not need to click it again. Selecting a new rating from the <em>drop-down menu</em> automatically updates the results.</p>
    </article>
  )
}
