// design landing page
import projects from './projects.json'
import Link from 'next/link'
import Image from 'next/image'

export default function Design() {
  return (
    <>
      <section>
        <h1>portfolio</h1>
        <p>some text here about design process</p>
      </section>
      <h2>selected works</h2>
      <section className="selected-works">
        {projects.map((project) => {
          return(
            <figure className="project" key={project.id}>
              <Image src={project.cover} alt={project.alt} />
              <h2>{project.title}</h2>
              <p>{project.excerpt}</p>
              <Link href={project.slug}>View More</Link>
            </figure>
          )}
        )}
      </section>
    </>
  )
}
