// acc case study
import Link from 'next/link'
import Image from 'next/image'

export default function caseStudy() {
  return (
    <article>
      <header className="project-header">
        <h1 className="project-title">Aloe Self Care</h1>
        <p className="project-subtitle">Site refresh for Aloe Self-Care App Website v1</p>
      </header>
      <section className="project-summary">
        <h2>Overview</h2>
        <p>site refresh for Aloe App&apos;s first website featuring kickstarter campaign — layout design, ux design, front-end web development, content strategy. probono work. site maintenance.</p>
        <p>
          <a href="https://web.archive.org/web/20171110091400/https://aloe.club/">https://aloe.club</a>: version 1 of website for aloe app. current website: <a href="https://www.aloebud.app/">https://aloebud.app</a>
        </p>
      </section>
      <section className="project-details">
        <h2>Project Details</h2>
        <p>Design, development, content strategy and consultation for aloe.club, a self-care community.</p>
      </section>

      <aside>
        <section>
          <span>timeline</span>
          <p>jun to dec 2017</p>
          <p>6 months</p>
        </section>
        <section>
          <span>client</span>
          <p>Aloe App</p>
        </section>
        <section>
          <span>role + responsibilities</span>
          <ul>
            <li>layout design</li>
            <li>ux design</li>
            <li>html + css</li>
            <li>content strategy</li>
            <li>site maintenance</li>
          </ul>
        </section>
        <section>
          <span>team</span>
          <ul>
            <li>amber discko</li>
            <li>stef pause</li>
          </ul>
        </section>
        <section>
          <span>tools</span>
          <ul>
            <li>html & css</li>
            <li>sublime text</li>
            <li>g-suite</li>
            <li>slack</li>
          </ul>
        </section>
      </aside>
    </article>
  )
}
