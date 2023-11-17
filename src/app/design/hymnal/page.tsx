// acc case study
import Link from 'next/link'
import Image from 'next/image'

export default function caseStudy() {
  return (
    <article>
      <header className="project-header">
        <h1 className="project-title">Hymnal</h1>
        <p className="project-subtitle">Making ads sing on Vox Media&apos;s advertising publishing platform</p>
      </header>
      <section className="project-summary">
        <h2>Overview</h2>
        <p>some overview text here explaining what hymnal is</p>
        <p>I worked on the design and development of Vox Media&apos;s proprietary custom display and native ad unit publishing platform, Hymnal, during my time on the Ad Platforms Team.</p>
        <p>I was involved in a number of design sprints to create new and intuitive features to push the platform forward.</p>
      </section>
      <section className="project-details">
        <h2>Project Details</h2>
        <p>favoriting ads capabilities</p>
        <p>spit screen and scrolling experience</p>
        <p>pattern library</p>
        <p>Before working on the Ad Platforms team, I was an avid Hymnal user as a developer on the Revenue Executions Team. That gave me an advantage when I started designing and developing for Hymnal and could really speak for its users and their day to day process. My team members and I developed a reusable pattern library for the platform as well.</p>
        <p>Before working on the Ad Platforms team, I was an avid user of Vox Media&apos;s proprietary custom display and native ad unit publishing platform, Hymnal as a developer on the Revenue Executions Team. That gave me an advantage when I started designing and developing for Hymnal and could really speak for its users and their day to day process. On the Ad Platforms team, I was involved in a number of design sprints to create intuitive features and push the platform forward. My team members and I worked to develop a re-usable pattern library as well. My responsibilities ranged from brainstorming, sketching, wireframing, conducting user testing, prototyping all the way through execution.</p>
        <p><strong>EDIT THIS PLEASE:</strong> Ngan and Matt have both worked on Vox Media&apos;s in-house advertising design team. That makes them uniquely suited to better understand what that team needs to execute Vox Media&apos;s vision of beautiful advertising on the web. Here they are working hard at improving the UI of our advertising platform, which is a tricky task since it is used by people who design but know little code, people who code and know a little design, and people who know enough of both design and code just to get by when launching campaigns.</p>
        <h3>Press</h3>
        <p>
          <cite>
            <a href="https://product.voxmedia.com/2016/7/1/12061866/vox-products-kit-caboodle-june-2016">Vox Product&apos;s Kit & Caboodle</a>
          </cite> by Kat Molloy for Vox Media Product Blog, 2016.
        </p>
      </section>

      <aside>
        <section>
          <span>timeline</span>
          <p>april to september 2016</p>
          <p>6 months</p>
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
            <li>matt sullivan</li>
            <li>alisha ramos</li>
            <li>winston hearn</li>
            <li>corri skinner</li>
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
