import { useState, useEffect } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

interface ChildLink {
  label: string
  to: string
}

interface NavItem {
  label: string
  to?: string
  children?: ChildLink[]
}

const endUserNav: NavItem[] = [
  {
    label: 'Conceptual Overview',
    children: [
      { label: 'What is My Favorite Albums?', to: '/end-user/conceptual/intro' },
      { label: 'Number One Albums', to: '/end-user/conceptual/number-one-albums' },
      { label: 'Top Albums by Year', to: '/end-user/conceptual/top-albums-by-year' },
      { label: "Artist's Albums", to: '/end-user/conceptual/artists-albums' },
      { label: 'Favorite Artists', to: '/end-user/conceptual/favorite-artists' },
      { label: 'Artist Comparison', to: '/end-user/conceptual/artist-comparison' },
      { label: 'Vinyl', to: '/end-user/conceptual/vinyl' },
    ],
  },
  {
    label: 'Tasks',
    children: [
      { label: 'Browsing Number One Albums by Year Range', to: '/end-user/tasks/number-one-albums' },
      { label: 'Viewing Top Albums for a Specific Year', to: '/end-user/tasks/top-albums-by-year' },
      { label: "Browsing an Artist's Ranked Albums", to: '/end-user/tasks/artists-albums' },
      { label: "Filtering the Owner's Top-Rated Artists", to: '/end-user/tasks/favorite-artists' },
      { label: "Comparing Two Artists' Ratings Over Time", to: '/end-user/tasks/artist-comparison' },
      { label: 'Finding Albums Not Yet in the Vinyl Collection', to: '/end-user/tasks/vinyl' },
    ],
  },
  {
    label: 'Reference',
    children: [
      { label: 'Quick Start', to: '/end-user/reference/quick-start' },
      { label: 'Home Statistics', to: '/end-user/reference/home-statistics' },
      { label: 'number_one_album', to: '/end-user/reference/number-one-album' },
      { label: 'year_albums', to: '/end-user/reference/year-albums' },
      { label: 'albums_by_bands', to: '/end-user/reference/albums-by-bands' },
      { label: 'favorite_bands', to: '/end-user/reference/favorite-bands' },
      { label: 'band_album_comparison_chart', to: '/end-user/reference/band-comparison' },
      { label: 'missing_vinyl', to: '/end-user/reference/missing-vinyl' },
      { label: 'Data Schema', to: '/end-user/reference/data-schema' },
    ],
  },
  { label: 'Terminology', to: '/end-user/terminology' },
]

const developerNav: NavItem[] = [
  {
    label: 'Conceptual Overview',
    children: [
      { label: 'Prerequisites', to: '/developer/conceptual/prerequisites' },
      { label: 'What is a Shiny App?', to: '/developer/conceptual/shiny-app' },
      { label: 'How the App is Structured', to: '/developer/conceptual/how-app-is-structured' },
      { label: 'How the Core Files Work Together', to: '/developer/conceptual/core-files' },
      { label: 'Tab-to-File Mapping', to: '/developer/conceptual/tab-to-file-mapping' },
      { label: 'Tab Helper Files', to: '/developer/conceptual/helper-files' },
      { label: 'Data', to: '/developer/conceptual/data' },
    ],
  },
  {
    label: 'Tasks',
    children: [
      { label: 'Setting Up R, RStudio, and Required Packages', to: '/developer/tasks/setup' },
      { label: 'Setting Up album-ranking.csv', to: '/developer/tasks/album-csv' },
      { label: 'Defining the Application Layout', to: '/developer/tasks/app-ui-r' },
      { label: 'Connecting Input to Data Functions', to: '/developer/tasks/app-server-r' },
      { label: 'Adding a New Tab and Function', to: '/developer/tasks/adding-tab' },
      { label: 'Running the Application', to: '/developer/tasks/app-r' },
    ],
  },
  { label: 'Reference', to: '/developer/reference' },
]

type Audience = 'end-user' | 'developer'


export default function Sidebar() {
  const location = useLocation()
  const navigate = useNavigate()

  const isDevPath = location.pathname.startsWith('/developer')
  const [audience, setAudience] = useState<Audience>(isDevPath ? 'developer' : 'end-user')
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})

  // Keep audience in sync when navigating via Home page buttons
  useEffect(() => {
    if (location.pathname.startsWith('/developer')) setAudience('developer')
    else if (location.pathname.startsWith('/end-user')) setAudience('end-user')
  }, [location.pathname])

  const activeNav = audience === 'end-user' ? endUserNav : developerNav

  // Auto-expand the parent whose child matches the current route
  useEffect(() => {
    const updates: Record<string, boolean> = {}
    activeNav.forEach(item => {
      if (item.children) {
        const hasActive = item.children.some(child => location.pathname === child.to)
        if (hasActive) updates[item.label] = true
      }
    })
    setExpanded(prev => ({ ...prev, ...updates }))
  }, [location.pathname, audience])

  // When switching audience, navigate to the first page of that audience
  const switchAudience = (next: Audience) => {
    setAudience(next)
    setExpanded({})
    if (next === 'end-user') {
      navigate('/end-user/conceptual/intro')
    } else {
      navigate('/developer/conceptual/prerequisites')
    }
  }

  const toggle = (label: string) => {
    setExpanded(prev => ({ ...prev, [label]: !prev[label] }))
  }

  return (
    <nav className="sidebar">
      <div className="sidebar-home">
        <NavLink to="/" className={({ isActive }) => isActive ? 'sidebar-home-link active' : 'sidebar-home-link'}>
          My Favorite Albums
        </NavLink>
      </div>

      <div className="sidebar-audience-toggle">
        <button
          className={audience === 'end-user' ? 'audience-btn active' : 'audience-btn'}
          onClick={() => switchAudience('end-user')}
        >
          End User
        </button>
        <button
          className={audience === 'developer' ? 'audience-btn active' : 'audience-btn'}
          onClick={() => switchAudience('developer')}
        >
          Developer
        </button>
      </div>

      <div className="sidebar-nav">
        {activeNav.map(item => {
          if (item.to) {
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}
              >
                {item.label}
              </NavLink>
            )
          }

          const isOpen = !!expanded[item.label]

          return (
            <div key={item.label} className="sidebar-parent">
              <button
                className="sidebar-parent-btn"
                onClick={() => toggle(item.label)}
                aria-expanded={isOpen}
              >
                <span>{item.label}</span>
                <span className="sidebar-chevron">{isOpen ? '▾' : '▸'}</span>
              </button>
              {isOpen && (
                <div className="sidebar-children">
                  {item.children!.map(child => (
                    <NavLink
                      key={child.to}
                      to={child.to}
                      className={({ isActive }) => isActive ? 'sidebar-child-link active' : 'sidebar-child-link'}
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </nav>
  )
}
