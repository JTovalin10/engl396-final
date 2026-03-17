import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Sidebar from './Components/Sidebar'

import EuWhatIsMFA from './Components/end_user/conceptual/WhatIsMFA'
import EuConceptualNumberOne from './Components/end_user/conceptual/NumberOneAlbums'
import EuConceptualTopByYear from './Components/end_user/conceptual/TopAlbumsByYear'
import EuConceptualArtistsAlbums from './Components/end_user/conceptual/ArtistsAlbums'
import EuConceptualFavoriteArtists from './Components/end_user/conceptual/FavoriteArtists'
import EuConceptualArtistComparison from './Components/end_user/conceptual/ArtistComparison'
import EuConceptualVinyl from './Components/end_user/conceptual/Vinyl'

import EuTaskNumberOne from './Components/end_user/tasks/NumberOneAlbums'
import EuTaskTopByYear from './Components/end_user/tasks/TopAlbumsByYear'
import EuTaskArtistsAlbums from './Components/end_user/tasks/ArtistsAlbums'
import EuTaskFavoriteArtists from './Components/end_user/tasks/FavoriteArtists'
import EuTaskArtistComparison from './Components/end_user/tasks/ArtistComparison'
import EuTaskVinyl from './Components/end_user/tasks/Vinyl'

import EuRefQuickStart from './Components/end_user/reference/QuickStart'
import EuRefHomeStats from './Components/end_user/reference/HomeStatistics'
import EuRefNumberOneAlbum from './Components/end_user/reference/NumberOneAlbum'
import EuRefYearAlbums from './Components/end_user/reference/YearAlbums'
import EuRefAlbumsByBands from './Components/end_user/reference/AlbumsByBands'
import EuRefFavoriteBands from './Components/end_user/reference/FavoriteBands'
import EuRefBandComparison from './Components/end_user/reference/BandComparison'
import EuRefMissingVinyl from './Components/end_user/reference/MissingVinyl'
import EuRefDataSchema from './Components/end_user/reference/DataSchema'

import EuTerminology from './Components/end_user/Terminology'

import DevHowAppIsStructured from './Components/developer/conceptual/HowAppIsStructured'
import DevCoreFiles from './Components/developer/conceptual/CoreFiles'
import DevTabToFileMapping from './Components/developer/conceptual/TabToFileMapping'
import DevHelperFiles from './Components/developer/conceptual/HelperFiles'
import DevWhatIsShinyApp from './Components/developer/conceptual/WhatIsShinyApp'

import DevSetup from './Components/developer/tasks/Setup'
import DevAlbumCsv from './Components/developer/tasks/AlbumCsv'
import DevAppR from './Components/developer/tasks/AppR'
import DevAppUiR from './Components/developer/tasks/AppUiR'
import DevAppServerR from './Components/developer/tasks/AppServerR'
import DevAddingTab from './Components/developer/tasks/AddingTab'

import DevReference from './Components/developer/Reference'

export default function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      <main className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/end-user/conceptual/intro" replace />} />

          {/* End User — Conceptual */}
          <Route path="/end-user/conceptual/intro" element={<EuWhatIsMFA />} />
          <Route path="/end-user/conceptual/number-one-albums" element={<EuConceptualNumberOne />} />
          <Route path="/end-user/conceptual/top-albums-by-year" element={<EuConceptualTopByYear />} />
          <Route path="/end-user/conceptual/artists-albums" element={<EuConceptualArtistsAlbums />} />
          <Route path="/end-user/conceptual/favorite-artists" element={<EuConceptualFavoriteArtists />} />
          <Route path="/end-user/conceptual/artist-comparison" element={<EuConceptualArtistComparison />} />
          <Route path="/end-user/conceptual/vinyl" element={<EuConceptualVinyl />} />

          {/* End User — Tasks */}
          <Route path="/end-user/tasks/number-one-albums" element={<EuTaskNumberOne />} />
          <Route path="/end-user/tasks/top-albums-by-year" element={<EuTaskTopByYear />} />
          <Route path="/end-user/tasks/artists-albums" element={<EuTaskArtistsAlbums />} />
          <Route path="/end-user/tasks/favorite-artists" element={<EuTaskFavoriteArtists />} />
          <Route path="/end-user/tasks/artist-comparison" element={<EuTaskArtistComparison />} />
          <Route path="/end-user/tasks/vinyl" element={<EuTaskVinyl />} />

          {/* End User — Reference */}
          <Route path="/end-user/reference/quick-start" element={<EuRefQuickStart />} />
          <Route path="/end-user/reference/home-statistics" element={<EuRefHomeStats />} />
          <Route path="/end-user/reference/number-one-album" element={<EuRefNumberOneAlbum />} />
          <Route path="/end-user/reference/year-albums" element={<EuRefYearAlbums />} />
          <Route path="/end-user/reference/albums-by-bands" element={<EuRefAlbumsByBands />} />
          <Route path="/end-user/reference/favorite-bands" element={<EuRefFavoriteBands />} />
          <Route path="/end-user/reference/band-comparison" element={<EuRefBandComparison />} />
          <Route path="/end-user/reference/missing-vinyl" element={<EuRefMissingVinyl />} />
          <Route path="/end-user/reference/data-schema" element={<EuRefDataSchema />} />

          {/* End User — Terminology */}
          <Route path="/end-user/terminology" element={<EuTerminology />} />

          {/* Developer — Conceptual */}
          <Route path="/developer/conceptual/how-app-is-structured" element={<DevHowAppIsStructured />} />
          <Route path="/developer/conceptual/core-files" element={<DevCoreFiles />} />
          <Route path="/developer/conceptual/tab-to-file-mapping" element={<DevTabToFileMapping />} />
          <Route path="/developer/conceptual/helper-files" element={<DevHelperFiles />} />
          <Route path="/developer/conceptual/shiny-app" element={<DevWhatIsShinyApp />} />

          {/* Developer — Tasks */}
          <Route path="/developer/tasks/setup" element={<DevSetup />} />
          <Route path="/developer/tasks/album-csv" element={<DevAlbumCsv />} />
          <Route path="/developer/tasks/app-r" element={<DevAppR />} />
          <Route path="/developer/tasks/app-ui-r" element={<DevAppUiR />} />
          <Route path="/developer/tasks/app-server-r" element={<DevAppServerR />} />
          <Route path="/developer/tasks/adding-tab" element={<DevAddingTab />} />

          {/* Developer — Reference */}
          <Route path="/developer/reference" element={<DevReference />} />
        </Routes>
      </main>
    </div>
  )
}
