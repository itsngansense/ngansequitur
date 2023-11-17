// acc case study
import Link from 'next/link'
import Image from 'next/image'

export default function caseStudy() {
  return (
    <article>
      <header className="project-header">
        <h1 className="project-title">Meridian</h1>
        <p className="project-subtitle">Travel Content Site for Chase Sapphire Reserve</p>
      </header>
      <section className="project-summary">
        <h2>Overview</h2>
        <p>Meridian is a travel site, focusing on a new monthly destination, along with content aimed at those who like to go off the beaten path. It was Vox Creative&apos;s first property and launched in partnership with Chase Sapphire Reserve.</p>
      </section>
      <section className="project-details">
        <h2>Project Details</h2>
        <p>I worked on a team with two other designers to come up with the best layout, photo and type treatments, and helped create new sponsorship types and placements. We created a style guide that would allow for easy migration to Chorus, Vox Media&apos;s in-house CMS.</p>
        <p>I also helped with the front-end styling of the website.</p>
        <p>Please note site has moved onto Chorus (Vox Media&apos;s in-house CMS) and layout and design has since changed. I was only involved in the first iteration.</p>
        <p>
          <a href="https://web.archive.org/web/20161016081808/http://www.meridian.net/a/site">check out the site</a>
        </p>
        <h3>Press</h3>
        <p>
          <cite>
            <a href="https://www.voxmedia.com/about-vox-media/2016/10/11/13242244/vox-creative-launches-its-first-property-meridian">Vox Creative launches its first property: Meridian</a>
          </cite> by Andrea Rogoff, Oct. 11th 2016.
        </p>
        <p>
          <cite>
            <a href="https://www.wsj.com/articles/vox-is-launching-a-travel-content-site-for-chase-1476180001">Vox is Launching a Travel Content Site for Chase</a>
          </cite> by Mike Shields for The Wall Street Journal, Oct. 11th 2016.
        </p>
      </section>

      <aside>
        <section>
          <span>timeline</span>
          <p>october 2017</p>
          <p>4 weeks (check on this)</p>
        </section>
        <section>
          <span>company</span>
          <p>vox media/vox creative</p>
        </section>
        <section>
          <span>client</span>
          <p>chase sapphire reserve</p>
        </section>
        <section>
          <span>role + responsibilities</span>
          <ul>
            <li>branded content</li>
            <li>advertising</li>
            <li>html & css</li>
            <li>visual layout</li>
            <li>animation</li>
          </ul>
        </section>
        <section>
          <span>team</span>
          <ul>
            <li>matt sullivan (maybe)</li>
            <li>alisha ramos</li>
            <li>zach mattheus (check spelling)</li>
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
            <li>command line</li>
            <li>sublime text</li>
            <li>chorus</li>
          </ul>
        </section>
      </aside>
    </article>
  )
}
