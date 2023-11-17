// acc case study
import Link from 'next/link'
import Image from 'next/image'

export default function caseStudy() {
  return (
    <article>
      <header className="project-header">
        <h1 className="project-title">advertising</h1>
        <p className="project-subtitle">selected campaigns from automattic + vox media</p>
      </header>
      <section className="project-summary">
        <h2>Overview</h2>
        <p>Automattic: Evergreen Display Ads for WordPress Redesign</p>
        <p>Vox Media: Design & Development of In-House Custom Ads</p>
      </section>
      <section className="project-details">
        <h2>Project Details</h2>
      </section>

      <aside>
        <section>
          <span>timeline</span>
          <p>2017</p>
          <p>UPDATE THIS?!</p>
        </section>
        <section>
          <span>clients shown:</span>
          <ul>
            <li>wordpress</li>
            <li>kingsford</li>
            <li>nars</li>
            <li>collectively</li>
            <li>buick</li>
            <li>buffalo wild wings</li>
            <li>virgin america</li>
          </ul>
        </section>
        <section>
          <span>role + responsibilities</span>
          <ul>
            <li>visual design</li>
            <li>conceptual design</li>
            <li>ui/ux design</li>
            <li>html/css</li>
          </ul>
        </section>
        <section>
          <span>tools</span>
          <ul>
            <li>flexitive html ads</li>
            <li>adobe photoshop</li>
            <li>toggl track</li>
            <li>g-suite</li>
            <li>asana</li>
            <li>trello</li>
            <li>slack</li>
          </ul>
        </section>
      </aside>
    </article>
  )
}
