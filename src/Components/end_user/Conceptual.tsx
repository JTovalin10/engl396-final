export default function Conceptual() {
  return (
    <section className="endpoint-section" id="conceptual">
      <h2>Conceptual Overview</h2>

      <div className="endpoint-card">
        <h3>What is My Favorite Albums?</h3>
        <p>In this conceptual overview, you will learn when to use the data aggregation tools within <i>My Favorite Albums</i>. Below are the tabs available in the application.</p>
        <p><strong>Prerequisites:</strong> fundamental computer skills to use the app.</p>
      </div>

      <div className="endpoint-card">
        <h3>Number One Albums</h3>
        <p>This section uses a range slider to aggregate data and show the owner's favorite album for each year within the selected range. At the bottom of the page, a data table displays the owner's favorite album by year with the following fields: Year, Album, and Artist.</p>
      </div>

      <div className="endpoint-card">
        <h3>Top Albums by Year</h3>
        <p>This section uses a drop-down menu that allows you to select one specific year, defaulting to 1993. When you choose a year, it displays a data table of the owner's favorite albums for that year and where each album ranks. The fields on the table are: Ranking, Album, and Artist.</p>
      </div>

      <div className="endpoint-card">
        <h3>Artist's Albums</h3>
        <p>This section uses a drop-down menu to select a specific artist and see what albums the owner has listened to, the year they were released, and the rating the owner gives each album. This data is displayed in a data table with the following fields: Album, Year, and Rating. At the bottom of the data table, you will see the number of albums ranked for the selected artist and the average rating.</p>
      </div>

      <div className="endpoint-card">
        <h3>Favorite Artists</h3>
        <p>This section uses a drop-down menu that creates a data table with at most 15 artists, organized by Artist, Rating, and the number of albums they have. You interact with the data table by selecting the minimum number of albums in the drop-down menu, and you can choose to include EPs and live albums. The table is organized by average rating in descending order.</p>
      </div>

      <div className="endpoint-card">
        <h3>Artist Comparison</h3>
        <p>This section creates a comparison between two artists that you select. It generates a comparative line chart that displays each artist's average rating of albums released in a given year. These lines are distinguished by color: the first artist you select is red and the second artist you select is blue.</p>
      </div>

      <div className="endpoint-card">
        <h3>Vinyl</h3>
        <p>This section uses a drop-down menu where you can select a minimum rating to find the top-rated albums that the person does not own on vinyl, sorted in descending order by rating. It displays a data table with the fields Album, Artist, and Rating.</p>
      </div>

      <div className="endpoint-card">
        <h3>Terminology</h3>
        <ul>
          <li><strong>Range Slider:</strong> A user interface component that allows you to select a range of values from a set of numbers.</li>
          <li><strong>Handle:</strong> The draggable element on a range slider that users interact with to select a value or range of values. It moves along the slider's track and visually indicates the current selected value(s). In a dual-range slider, there are typically two handles — one for the minimum value and one for the maximum value — allowing users to define a specific range.</li>
          <li><strong>Drop-Down Menu:</strong> A graphical user interface element that allows users to choose from a list of options that appears when they click on or hover over a button or other control.</li>
          <li><strong>Comparative Line Chart:</strong> A visual representation of data used to compare and contrast two or more data sets.</li>
          <li><strong>Aggregate:</strong> To filter and combine data based on criteria you select.</li>
        </ul>
      </div>
    </section>
  )
}
