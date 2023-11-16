// acc case study
import Link from 'next/link'
import Image from 'next/image'

export default function caseStudy() {
  return (
    <article>
      <header className="project-header">
        <h1 className="project-title">Ten+99</h1>
        <p className="project-subtitle">Logo design for local DC/MD/VA curated lifestyle brand</p>
      </header>
      <section className="project-summary">
        <h2>Overview</h2>
        <p>logo design for curated lifestyle brand, specializing in apparel</p>
      </section>
      <section className="project-details">
        <h2>Project Details</h2>
      </section>

      <aside>
        <section>
          <span>timeline</span>
          <p>jun 9, 2017 to nov 2, 2017</p>
          <p>5 months</p>
        </section>
        <section>
          <span>client</span>
          <p>John Lee</p>
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
            <li>pen and paper</li>
            <li>adobe illustrator</li>
          </ul>
        </section>
      </aside>
    </article>
  )
}
