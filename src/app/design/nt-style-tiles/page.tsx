// acc case study
import Link from 'next/link'
import Image from 'next/image'

export default function caseStudy() {
  return (
    <article>
      <header className="project-header">
        <h1 className="project-title">Style Tiles</h1>
        <p className="project-subtitle">Moodboarding & Creating Style Guides</p>
      </header>
      <section className="project-summary">
        <h2>Overview</h2>
        <p>At New Target, I led the design team in creating quality custom web solutions for nonprofits, government agencies, associations, and commercial businesses.</p>
        <p>The first step in our design process was to create style tiles, a mash-up between style guides and moodboards.</p>
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
            <li>ncss</li>
            <li>higher education skincare</li>
            <li>practice greenhealth</li>
          </ul>
        </section>
        <section>
          <span>role + responsibilities</span>
          <ul>
            <li>visual design</li>
            <li>branding</li>
            <li>conceptual design</li>
          </ul>
        </section>
        <section>
          <span>tools</span>
          <ul>
            <li>sketch</li>
            <li>adobe photoshop</li>
          </ul>
        </section>
      </aside>
    </article>
  )
}
