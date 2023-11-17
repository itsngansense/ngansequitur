// acc case study
import Link from 'next/link'
import Image from 'next/image'

export default function caseStudy() {
  return (
    <article>
      <header className="project-header">
        <h1 className="project-title">Insights</h1>
        <p className="project-subtitle">Vox Media&apos;s Seller Resource Center, Analytics Platform</p>
      </header>
      <section className="project-summary">
        <h2>Overview</h2>
        <p>I helped redesign and add new features to Insights (formerly known as the Seller Resource Center), Vox Media&apos;s data analytics platform. My team established modular design patterns to help assess our brand partner&apos;s performance.</p>
      </section>
      <section className="project-details">
        <h2>Project Details</h2>
        <p>One of the main challenges of the project was introducing design patterns that would work across a variety of campaigns and highlight the most relevant information from the data story. </p>
        <p>We used a blend of data visualization and natural language summaries as well as reused elements from Hymnal to tie the two products together.</p>
      </section>

      <aside>
        <section>
          <span>timeline</span>
          <p>september 2016 - jan 2017</p>
          <p>4 months</p>
        </section>
        <section>
          <span>company</span>
          <p>vox media</p>
        </section>
        <section>
          <span>role + responsibilities</span>
          <ul>
            <li>user research</li>
            <li>ui/ux design</li>
            <li>html & css</li>
          </ul>
        </section>
        <section>
          <span>team</span>
          <ul>
            <li>corri skinner</li>
            <li>josh laincz</li>
            <li>alisha ramos</li>
          </ul>
        </section>
        <section>
          <span>tools</span>
          <ul>
            <li>trello</li>
            <li>slack</li>
            <li>g-suite</li>
            <li>sketch</li>
            <li>hymnal</li>
            <li>command line</li>
            <li>sublime text</li>
          </ul>
        </section>
      </aside>
    </article>
  )
}
