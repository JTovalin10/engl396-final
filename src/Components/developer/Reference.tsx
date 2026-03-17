import { Link } from 'react-router-dom'

export default function Reference() {
  return (
    <article className="endpoint-card">
      <h3>Reference</h3>
      <p>The <Link to="/end-user/reference/quick-start">end user reference documentation</Link> provides a high-level overview of every function in the application, including its parameters, return values, and example calls. It is the fastest way to look up what a function expects and what it returns.</p>
      <p>The <a href="https://github.com/JTovalin10/MyFavoriteAlbums/tree/8e02ea7aa69cccae1828870a47553ff918251d72" target="_blank" rel="noopener">source code for each helper file</a> contains the full implementation. Reading the source alongside the reference documentation is the most effective way to understand how a function works before modifying it.</p>
    </article>
  )
}
