// acc case study
import Link from 'next/link'
import Image from 'next/image'

export default function caseStudy() {
  return (
    <article>
      <header className="project-header">
        <h1 className="project-title">KFC Zinger x The Verge</h1>
        <p className="project-subtitle">Building a Microsite to Keep Track of a Chicken Sandwich&apos;s Space Launch</p>
      </header>
      <section className="project-summary">
        <h2>Overview</h2>
        <p>Yes, KFC really did launch a chicken sandwich into space and they teamed up with The Verge to update everyone along the way through a branded microsite, custom ads, and a video series.</p>
        <p>I was involved in the entirety of the project, from design to development and assisting with updates.</p>
      </section>
      <section className="project-details">
        <h2>Project Details</h2>
        <a href="https://www.theverge.com/ad/15758508/space-command-chicken-zinger">check out the site</a>
        <h3>Press</h3>
      </section>

      <aside>
        <section>
          <span>timeline</span>
          <p>2017 CHECK THIS</p>
          <p>UPDATE THIS</p>
        </section>
        <section>
          <span>company</span>
          <p>vox media</p>
        </section>
        <section>
          <span>client</span>
          <p>kfc x the verge</p>
        </section>
        <section>
          <span>role + responsibilities</span>
          <ul>
            <li>ui/ux design</li>
            <li>branded content</li>
            <li>advertising</li>
            <li>html & css</li>
            <li>web design</li>
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
            <li>vox media chorus</li>
          </ul>
        </section>
      </aside>
    </article>
  )
}
