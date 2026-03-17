import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="home">
      <div className="home-header">
        <h1>My Favorite Albums</h1>
        <p className="home-subtitle">Documentation</p>
        <p className="home-desc">
          <i>My Favorite Albums</i> is an interactive web application for exploring and analyzing one person's album ratings and annual rankings. This documentation covers everything from basic usage to extending the application with new features.
        </p>
      </div>

      <div className="home-cards">
        <button className="home-card" onClick={() => navigate('/end-user/conceptual/intro')}>
          <h2>End User Docs</h2>
          <p>Learn how to navigate and use each tab in the application. Includes conceptual overviews, step-by-step task walkthroughs with screenshots, a full function reference, and a terminology guide.</p>
          <span className="home-card-cta">Get started →</span>
        </button>

        <button className="home-card" onClick={() => navigate('/developer/conceptual/prerequisites')}>
          <h2>Developer Docs</h2>
          <p>Understand how the codebase is structured, how the core files work together, and how to run, modify, and extend the application. Includes setup instructions, file-by-file descriptions, and a guide to adding new tabs.</p>
          <span className="home-card-cta">Get started →</span>
        </button>
      </div>
    </div>
  )
}
