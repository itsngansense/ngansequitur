// acc case study
import Link from 'next/link'
import Image from 'next/image'

export default function caseStudy() {
  return (
    <article>
      <header className="project-header">
        <h1 className="project-title">Zinn Education Project</h1>
        <p className="project-subtitle">Website Redesign for Zinn Education Project</p>
      </header>
      <section className="project-summary">
        <h2>Overview</h2>
        <p>At New Target, I led the website redesign for Zinn Education Project. Through focus groups, we learned that the site looked too busy and was hard to navigate. ZEP&apos;s highest priorities were to make their <strong>Teaching Materials</strong> more easily accessible for its members and to better engage users through their content.</p>
      </section>
      <section className="project-details">
        <h2>Project Details</h2>
        <p>Using their existing brand colors, I came up with a design to refresh their web presence in a clean and modern way. I focused on using strong imagery to complement their content, making it easier for users to digest.</p>
        <p>Website is still in development.</p>
        <h3>Press</h3>
      </section>

      <aside>
        <section>
          <span>timeline</span>
          <p>2017 UPDATE THIS</p>
          <p>UPDATE THIS...weeks?months?</p>
        </section>
        <section>
          <span>client</span>
          <p>Zinn Education Project</p>
        </section>
        <section>
          <span>role + responsibilities</span>
          <ul>
            <li>ui/ux design</li>
            <li>web design</li>
            <li>user testing</li>
          </ul>
        </section>
        <section>
          <span>tools</span>
          <ul>
            <li>g-suite</li>
            <li>sketch</li>
            <li>adobe photoshop</li>
            <li>drupal</li>
            <li>zoho projects</li>
          </ul>
        </section>
      </aside>
    </article>
  )
}
