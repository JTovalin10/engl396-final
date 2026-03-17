export default function WhatIsShinyApp() {
  return (
    <article className="endpoint-card">
      <h3>What is a Shiny App?</h3>
      <p>Shiny is an R package from Posit that lets you build interactive web applications directly from R code — no HTML, CSS, or JavaScript required. A Shiny app is structured around two things: a <strong>UI</strong> that defines what the user sees, and a <strong>server</strong> that defines what happens when they interact with it.</p>

      <h4>How Shiny Differs from a Regular R Script</h4>
      <p>In a standard R script, code runs top to bottom once and produces a fixed output. In a Shiny app, the server function contains <strong>reactive blocks</strong> that re-execute automatically whenever their inputs change. This means the application is always live — outputs update in real time without rerunning the whole script.</p>
      <p>For example, when a user picks a different artist in the Artist's Albums tab, Shiny detects that <code>input$band_select</code> changed and automatically re-runs the block that calls <code>albums_by_bands()</code> — no page reload, no manual refresh, no extra wiring required.</p>

      <h4>The shinyApp() Function</h4>
      <p><code>shinyApp(ui, server)</code> is the call that actually starts the application. It takes two arguments:</p>
      <ul>
        <li><code>ui</code> — the UI object defined in <code>app_ui.R</code>, describing the layout and controls.</li>
        <li><code>server</code> — the server function defined in <code>app_server.R</code>, containing the reactive logic.</li>
      </ul>
      <p>In <i>My Favorite Albums</i>, this call lives in <code>app.R</code> after all libraries are loaded and all helper files are sourced.</p>

      <h4>Reactivity in Practice</h4>
      <p>Reactivity is the key concept to understand in any Shiny app. The pattern used throughout <code>app_server.R</code> is:</p>
      <div className="example-block">
        <pre><code>{`observeEvent(input$submit_id, {
  output$output_id <- renderTable({
    helper_function(input$input_id)
  })
})`}</code></pre>
      </div>
      <ul>
        <li><code>observeEvent</code> — listens for the Submit button click.</li>
        <li><code>input$input_id</code> — reads the current value of a UI control.</li>
        <li><code>renderTable</code> / <code>renderPlot</code> — wraps the result so Shiny knows how to display it.</li>
        <li><code>output$output_id</code> — writes the result to the matching placeholder in <code>app_ui.R</code>.</li>
      </ul>
      <p>After the first Submit click, any change to <code>input$input_id</code> automatically triggers the block again — this is why users only need to click Submit once per tab.</p>

      <h4>Further Reading</h4>
      <ul>
        <li><a href="https://shiny.posit.co/r/reference/shiny/latest/" target="_blank" rel="noopener">Shiny function reference</a></li>
        <li><a href="https://mastering-shiny.org/" target="_blank" rel="noopener">Mastering Shiny (free book by Hadley Wickham)</a></li>
      </ul>
    </article>
  )
}
