// acc case study
import Link from 'next/link'
import Image from 'next/image'

export default function caseStudy() {
  return (
    <article>
      <header className="project-header">
        <h1 className="project-title">LAJC 287(g) Protest Graphics</h1>
        <p className="project-subtitle">Pro-bono design work for the Legal Aid Justice Center</p>
      </header>
      <section className="project-summary">
        <h2>Overview</h2>
        <p>Some pro-bono work I did for the Legal Aid Justice Center, creating posters and yard signs to protest the Culpeper County Sheriff&apos;s Office&apos;s participation with U.S. Immigration and Customs Enforcement under Immigration and Nationality Act <a href="https://en.wikipedia.org/wiki/Immigration_and_Nationality_Act_Section_287(g)"> Section 287(g)</a>.</p>
        <p>partnered with sophia gregg, attorney for LAJC&apos;s immigrant advocacy program</p>
      </section>
      <section className="project-details">
        <h2>Project Details</h2>
        <p>Designed posters and buttons for Legal Aid Justice Center to protest the Culpeper County Sheriff&apos;s Office&apos;s participation with U.S. Immigration and Customs Enforcement under 287(g).</p>
        <h3>Press</h3>
        <p>
          <cite>
            <a href="https://www.insidenova.com/culpeper/archive/debate-rages-over-sheriff-s-interest-in-287-g-program/article_0ab187ea-c1d6-59d4-8574-ac60a03b4c19.html">Debate rages over sheriff&apos;s interest in 287(g) program</a>
          </cite>, by Jeff Say for Culpeper Times, Dec 7, 2017.
        </p>
      </section>

      <aside>
        <section>
          <span>timeline</span>
          <p>feb 8 to march 12, 2018</p>
          <p>1 month</p>
        </section>
        <section>
          <span>client</span>
          <p>Legal Aid Justice Center</p>
        </section>
        <section>
          <span>role + responsibilities</span>
          <ul>
            <li>graphic + visual design</li>
            <li>poster design</li>
            <li>button design</li>
          </ul>
        </section>
        <section>
          <span>tools</span>
          <ul>
            <li>g-suite</li>
            <li>dropbox</li>
            <li>adobe illustrator</li>
            <li>adobe photoshop</li>
          </ul>
        </section>
      </aside>
    </article>
  )
}
