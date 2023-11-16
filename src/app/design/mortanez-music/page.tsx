// acc case study
import Link from 'next/link'
import Image from 'next/image'

export default function caseStudy() {
  return (
    <article>
      <header className="project-header">
        <h1 className="project-title">Michelle Ortañez Music</h1>
        <p className="project-subtitle">Logo and Business Card designs for Private Music Instructor</p>
      </header>
      <section className="project-summary">
        <h2>Overview</h2>
        <p>business card and logo designs for my best friend, who&apos;s starting out her private music teaching career. she&apos;s also a new mom and wanted to emphasize that in her branding, especially since her student base is primarily K-12!</p>
      </section>
      <section className="project-details">
        <h2>Project Details</h2>
      </section>

      <aside>
        <section>
          <span>timeline</span>
          <p>sep 7, 2018 to mar 19, 2019</p>
          <p>6 months</p>
        </section>
        <section>
          <span>client</span>
          <p>michelle ortañez music</p>
        </section>
        <section>
          <span>role + responsibilities</span>
          <ul>
            <li>brand identity</li>
            <li>logo designs</li>
            <li>strategy</li>
            <li>market research</li>
          </ul>
        </section>
        <section>
          <span>tools</span>
          <ul>
            <li>g-suite</li>
            <li>adobe illustrator</li>
            <li>adobe indesign</li>
          </ul>
        </section>
      </aside>
    </article>
  )
}
