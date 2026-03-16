# My Favorite Albums — Conceptual Overview

My Favorite Albums is a web application that allows users to explore and analyze one person's album rating and annual ranking data through interactive data visualizations.

---

## Users

In this conceptual overview, you will learn when to use the data aggregation tools within My Favorite Albums. Below are the tabs available in the application.

**Prerequisites:** fundamental computer skills to use the app.

### Number One Albums

This section uses a range slider to aggregate data and show the owner's favorite album for each year within the selected range. At the bottom of the page, a data table displays the owner's favorite album by year with the following fields: Year, Album, and Artist.

### Top Albums by Year

This section uses a drop-down menu that allows you to select one specific year, defaulting to 1993. When you choose a year, it displays a data table of the owner's favorite albums for that year and where each album ranks. The fields on the table are: Ranking, Album, and Artist.

### Artist's Albums

This section uses a drop-down menu to select a specific artist and see what albums the owner has listened to, the year they were released, and the rating the owner gives each album. This data is displayed in a data table with the following fields: Album, Year, and Rating. At the bottom of the data table, you will see the number of albums ranked for the selected artist and the average rating.

### Favorite Artists

This section uses a drop-down menu that creates a data table with at most 15 artists, organized by Artist, Rating, and the number of albums they have. You interact with the data table by selecting the minimum number of albums in the drop-down menu, and you can choose to include EPs and live albums. The table is organized by average rating in descending order.

### Artist Comparison

This section creates a comparison between two artists that you select. It generates a comparative line chart that displays each artist's average rating of albums released in a given year. These lines are distinguished by color: the first artist you select is red and the second artist you select is blue.

### Vinyl

This section uses a drop-down menu where you can select a minimum rating to find the top-rated albums that the person does not own on vinyl, sorted in descending order by rating. It displays a data table with the fields Album, Artist, and Rating.

---

### Appendix: Terminology

**Range Slider:** A user interface component that allows you to select a range of values from a set of numbers.

**Handle:** The draggable element on a range slider that users interact with to select a value or range of values. It moves along the slider's track and visually indicates the current selected value(s). In a dual-range slider, there are typically two handles — one for the minimum value and one for the maximum value — allowing users to define a specific range.

**Drop-Down Menu:** A graphical user interface element that allows users to choose from a list of options that appears when they click on or hover over a button or other control.

**Comparative Line Chart:** A visual representation of data used to compare and contrast two or more data sets.

**Aggregate:** To filter and combine data based on criteria you select.

---

## Programmers

This section explains how the files in My Favorite Albums work together to produce the application. The codebase uses R with the Shiny, dplyr, and ggplot2 libraries. If you are familiar with any event-driven web framework — such as Flask, Django, or Express — the structure will feel familiar. The core idea is the same: a UI layer collects user input, a server layer processes it, and helper modules handle the logic for each feature.

The dataset (`Data/album-ranking.csv`) is the single data source for the entire application. It contains the following fields: Year, Ranking, Album, Artist, Rating, Vinyl, EP, and Live.

**Prerequisites:** familiarity with general programming concepts. Knowledge of R is helpful but not required.

### How the App is Structured

The application is divided into three layers:

1. **Entry point** — `app.R` loads all libraries, sources all helper files, and launches the app by connecting the UI and server.
2. **UI layer** — `app_ui.R` defines the layout and input controls the user sees. It reads the CSV once to populate drop-down menus and sliders, then hands off to the server.
3. **Server layer** — `app_server.R` listens for user input and calls the appropriate helper function. When a user changes a drop-down or slider, Shiny automatically re-runs the relevant block of server code — this is called **reactivity** and is the key concept to understand in any Shiny app.

Each of the remaining files is a self-contained helper module that handles the data logic for one tab. The server calls these functions and renders their output back to the UI.

### Tab-to-File Mapping

| Tab | File | Functions Called |
|---|---|---|
| Home | `home.R` | `total_album_count()`, `total_band_count()`, `most_pop_artist()` |
| Number One Albums | `number_one_albums.R` | `number_one_album()` |
| Top Albums by Year | `albums_by_year.R` | `year_albums()` |
| Artist's Albums | `albums_by_band.R` | `albums_by_bands()`, `band_album_count()`, `band_mean_rating()` |
| Favorite Artists | `fav_bands.R` | `favorite_bands()` |
| Artist Comparison | `compare_bands.R` | `band_album_comparison_chart()` |
| Vinyl | `vinyl.R` | `missing_vinyl()` |

### File Descriptions

#### `app.R`

The entry point of the application. It loads the required libraries (Shiny, dplyr, ggplot2), sources every helper file, and calls `shinyApp()` to launch the app by connecting `app_ui.R` and `app_server.R`. To run the app locally, open this file in RStudio and click **Run App**, or run `shiny::runApp()` from the project directory in the R console.

#### `app_ui.R`

Defines what the user sees. It loads the album data from the CSV and uses it to populate the controls — drop-down menus, sliders, and checkboxes — across seven tabs. Each tab specifies its inputs and a placeholder for its output. The actual data that fills those placeholders is determined by `app_server.R`.

#### `app_server.R`

The bridge between the UI and the helper files. For each tab, it reads the user's selection and passes it to the corresponding helper function, then renders the result. Because Shiny is reactive, this happens automatically whenever the user changes an input — no manual refresh needed.

#### `home.R`

Provides three summary statistics displayed on the home tab: the total number of albums in the dataset, the total number of unique artists, and the artist with the most albums.

#### `number_one_albums.R`

Takes a start year and end year from the range slider and returns the top-ranked album for each year in that range, sorted by year in ascending order.

#### `albums_by_year.R`

Takes a single year from a drop-down menu and returns a table of all albums ranked that year, showing Ranking, Album, and Artist sorted by ranking order. The `all_years` variable pre-populates the drop-down by extracting every unique year from the dataset.

#### `albums_by_band.R`

Takes an artist name and returns a table of that artist's albums showing Album, Year, and Rating sorted by year. Two helper functions — `band_mean_rating()` and `band_album_count()` — compute the average rating and total album count displayed below the table. All three functions share the same `filter()` and `select()` pattern from dplyr. The `all_bands` variable pre-populates the drop-down alphabetically.

#### `fav_bands.R`

Takes two inputs: a minimum album count and whether to include EPs and live albums. It filters the dataset accordingly and returns the top 15 artists sorted by average rating in descending order.

#### `compare_bands.R`

Takes two artist selections and produces a comparative line chart using ggplot2. Each artist's average rating per year is plotted as a line — red for the first artist, blue for the second.

#### `vinyl.R`

Takes a minimum rating and returns a table of top-rated albums the owner does not own on vinyl, sorted by rating descending and then alphabetically by album name.

#### `Data/album-ranking.csv`

The CSV file that all data aggregation functions operate on. It is loaded once in `app_ui.R` to populate the UI controls, and again in each helper file via the shared `album_data` dataset.

### Key Concept: Shiny Reactivity

In a standard script, code runs top to bottom once. In a Shiny app, the server function contains **reactive blocks** that re-execute automatically when their inputs change. For example, when a user picks a different artist in the Artist's Albums tab, Shiny detects that the input changed and re-runs the block that calls `albums_by_bands()` — without any additional wiring required. Understanding this eliminates most confusion about why code in `app_server.R` is organized the way it is.
