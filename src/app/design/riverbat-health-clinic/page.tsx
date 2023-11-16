// acc case study
import Link from 'next/link'
import Image from 'next/image'
import accLogo from '/public/images/acc/acc-district-logo.png'
import designProcess from '/public/images/acc/design-process.png'

export default function caseStudy() {
  return (
    <article>
      <header className="project-header">
        <h1 className="project-title">Riverbat Health Clinic</h1>
        <p className="project-subtitle">Designing a Community + Teaching Primary Care Clinic for Austin Community College</p>
      </header>
      <section className="project-summary">
        <h2>Overview</h2>
        <p>Austin Community College (ACC) is a pillar of Central Texas, providing affordable access to higher education and workforce training to the community. The Riverbat Health Clinic will be opening on ACC&apos;s Eastview campus, serving both ACC community health and clinical training needs. For patients, this clinic offers the potential for interprofessional and integrated primary care that truly puts them at the center, with potential for co-location of mental health, dentistry, and telehealth. For students across 14 health science disciplines, it would provide opportunities to develop and practice clinical skills on-site and collaborate and learn alongside faculty.</p>
        <p>Eventually, it is our hope to expand and open services to Eastview&apos;s surrounding community, but will only be available to ACC&apos;s community (students, faculty, staff) when it first launches. The mission of the clinic will be to enhance student success by providing quality primary healthcare services in a nurturing, student-focused, and cost-effective manner, with a focus on increasing equity, reducing health disparities, and strengthening community partnerships.  </p>

        <h3>challenge</h3>
        <p>How might we design a primary care clinic that serves both the ACC community&apos;s health care needs and the future clinical education needs of some or all of ACC&apos;s 14 Health Sciences?</p>

        <h3>objectives</h3>
        <ul>
          <li>Discover services, experiences, and spatial elements of a clinic ACC&apos;s community would value most</li>
          <li>Provide research-based guidance for clinic design, layout, build, and further development</li>
          <li>Design a student health center that fosters community and growth within the ACC Eastview campus</li>
          <li>Understand both the individual and large community needs of ACC&apos;s diverse population while prioritizing solutions that promote flexibility and scalability for growth as those needs change</li>
          <li>Deliver design direction that is insightful, actionable, and aligns with students&apos; values and ACC&apos;s mission</li>
          <li>Collaborate with stakeholders and community members in co-designing the future clinic</li>
        </ul>
      </section>
      <section className="project-details">
        <h2>Design Process</h2>
        <p>Our team took an iterative non-linear approach to promote design-thinking and continuous learning.  Being aware of our own beliefs and biases in relationship with/to ACC&apos;s future patients and reflecting on the potential impact we have on the clinic&apos;s outcomes is carried throughout our design process for this project.</p>

        <figure>
          <Image
            src={ designProcess }
            alt="design process diagram"
          />
          <figcaption> Modified frameworks from <a href="https://dschool.stanford.edu">Hasso Plattner Institute of Design at Stanford (d.school)</a> and <a href="https://www.interaction-design.org/literature/article/stage-1-in-the-design-thinking-process-empathise-with-your-users">Interaction Design Foundation</a>.
          </figcaption>
        </figure>
        <hr/>
        <h3>
          <span>phase 1: notice</span>
          project planning + organization
        </h3>
        <p>Before we kicked-off the project with our clients, we wanted to learn a bit more about ACC as an institution as well as their mission and values to provide us with some context to draft our project proposal to ensure our plan aligns with them.</p>
        <p>We started by creating a Team Charter that outlined all of our teammates&apos; working styles and personal values. A few of us hadn&apos;t had the opportunity to work together before, so this was really helpful to understand how we each wanted to grow our skills through this project as well as being able to play to our strengths and set ourselves up for success.</p>
        <p>Taking the time to do this allowed our team to develop self-awareness of our individual identities, values, emotions, biases, and assumptions before conducting research. Noticing how our own backgrounds and attitudes builds humility, curiousity, and courage when empathizing with anyone we&apos;ll interact with during our qualitative research phase.</p>

        <h4>team values</h4>
        <ul>
          <li>Efficiency and process-oriented</li>
          <li>Design-driven</li>
          <li>Respect</li>
          <li>Collaboration</li>
          <li>Transparency and honesty</li>
          <li>Positive attitude</li>
          <li>Reliability and flexibility</li>
          <li>Embracing ambiguity</li>
          <li>Creativity</li>
        </ul>
        <p>We then had an official project kick-off meeting to introduce ourselves to our primary stakeholders at ACC and build a rapport with them. It was here that we decided on having a weekly 45 minute check-in meeting to share updates, impediments, and gather input from all involved parties.</p>
        <p>Aside from our weekly client meetings, since all our team members had pretty hectic schedules, we decided to use digital tools such as Miro, Slack, Trello, Box, and Google Drive to name a few to work and collaborate asynchronously. </p>
        <p>Even though the tools helped, our team always felt most aligned whenever we had face-to-face meetings and discussions. After a few weeks, we began utilizing a weekly 1-hour design sprint meeting on Monday mornings to ensure we were all on the same page as far as priorities and tasks we needed to tackle during that week. As things move and change so quickly on a day-to-day basis, I also created an automation using Slack reminders to have Slackbot ping our group&apos;s private channel every morning at 10:30am for daily standups (also known as scrum) where everyone would share their updates for the day including: how they&apos;re feeling, what they worked on yesterday, what they&apos;re working on today including priority tasks, anything that may be blocking them, as well as optional kudos/news to share if they needed to provide more context.</p>
        <hr/>
        <h3>
          <span>phase 2: empathize</span>
          Research Methods + Participants
        </h3>
        <p>Over the next month, we recruited ACC students and were connected to various faculty/staff members through our stakeholders to participate in our research for the clinic design. Our team utilized a variety of primary, secondary, and analogous research methods to have a better understanding of the constraints we&apos;d be working in addition to diving deeper into the experiences, emotions, and motivations of ACC&apos;s community members that we&apos;d be designing for.</p>

        <h5>What did we want to learn and discover?</h5>
        <ol>
          <li>What do ACC students value most when seeking primary care?</li>
          <li>What does a truly collaborative, interprofessional, and integrated primary care space look like in the context of ACC&apos;s community?</li>
          <li>How can the clinic be flexible and grow with its ever-changing community and their diverse needs?</li>
          <li>What constraints do we have regarding the built environment we&apos;re working with and its impact on the ideas we prototype?</li>
        </ol>

        <h5>Getting the lay of the land</h5>
        <p>What we learned from our project kick-off was that our team would not be designing a newly built clinic, but rather coming up with solutions within an existing building at ACC&apos;s Eastview Campus that had been recently vacated. </p>
        <p>To better understand what we&apos;d be working with, we scheduled a tour with our clients to walk through the space and get our bearings before we started talking to people. What we found out was that we didn&apos;t actually have the entire two-story building to work with either as the second floor would still be utilized for a few classrooms as well as faculty/staff offices. Additionally, we learned that the remaining room on the first floor separated by the breezeway would be occupied by the Amplify Clinic, a Mental Health Clinic for transition-age youth through ACC&apos;s partnership with Dell Medical.</p>

        <h4>participants</h4>
        <p>over the next few weeks, we ended up talking to:</p>

        <p>
          <span>21</span>
          ACC students
        </p>

        <p>
          <span>19+</span>
          ACC faculty/staff, through individual interviews and at the health Sciences Department chair meeting on 3/11/22
        </p>

        <p>
          <span>8</span>
          Dell Medical students fulfilling clinical requirements
        </p>

        <p>
          <span>3</span>
          subject matter experts on wayfinding, programmatic architecture, interior design, and healthcare strategy
        </p>

        <p>
          <span>51+</span>
          individuals in total
        </p>

        <h4>methods</h4>
        <h5>primary research</h5>
        <ul>
          <li>tour of building 3000, future clinic site, health sciences building across the street which includes the dental hygiene clinic, eastview campus and surrounding area overall</li>
          <li>contextual interviews with students, faculty, and staff including administration, student support services, and facilities/construction</li>
          <li>co-creation design activities including intercepts and card sorts at eastview (guerilla card sorty activity and surveys) and highland (guerilla interviews and whiteboard activity) campuses</li>
          <li>documentary-style diary studies</li>
          <li>online surveys</li>
        </ul>
        <h5>secondary research</h5>
        <ul>
          <li>desk research</li>
          <li>existing clinical models</li>
          <li>client-provided surveys</li>
          <li>acc academic master plans</li>
          <li>acc make it center</li>
          <li>acc welcome center</li>
          <li>design principles + guidelines</li>
        </ul>
        <h5>analogous research</h5>
        <ul>
          <li>coworking spaces</li>
          <li>spas and wellness centers</li>
          <li>restaurants</li>
          <li>digital spaces</li>
          <li>virtual reality and gaming</li>
          <li>museums</li>
          <li>event spaces</li>
        </ul>
        <hr/>
        <h3>
          <span>phase 3: define</span>
          data synthesis + key insights
        </h3>
        <p>One of our biggest challenges in this project was narrowing down and defining the scope of our work, based on feasibility based on our timeline. The initial ask from our clients was to develop designs surrounding a patient-centered clinic experience and services, as well as establishing a business model. As a way to prioritize ACC&apos;s student population and their perspectives, we made the decision to not move forward with the business model as it was the least student-focused element of the preferred design deliverables. This allowed us to really hone in on making sure students felt empowered and involved in this process now and in the future.</p>
        <p>Three core themes emerged from our research findings after speaking and interacting with all our participants, seeing the world through their eyes, understanding their feelings, and just appreciating them as human-beings. By empathizing with our participants, we were able to communicate their experiences to our stakeholders and amplify their voices so their needs would be seen and heard. In particular, what we wanted most was to narrow down all of the information we gathered into inspirational and actionable next steps that would help us generate ideas to test based off their input.</p>

        <h4>
          <span>insight #1</span>
          Students want a modern, inclusive, and accessible space that accommodates and is flexible to the unique needs of ACC&apos;s diverse community and the populations they intend to serve.
        </h4>
        <h4>
          <span>insight #2</span>
          A patient&apos;s experience extends beyond the clinic walls, starting before they reach the parking lot. Navigating the clinic space and care delivery process needs to be intuitive and transparent.
        </h4>
        <h4>
          <span>insight #3</span>
          Students want to be seen as a whole person, not just a stack of symptoms, feeling valued when a holistic approach is taken to understand them before proceeding with treatment.
        </h4>
        <hr/>
        <h3>
          <span>phase 4: ideate</span>
          generating and prioritizing ideas from students&apos; words
        </h3>
        <p>We took quotes and sample images from ACC student interviews about what makes a space feel welcoming and inviting to them and what they&apos;d like to see in a clinic. </p>
        <p>The first part of this phase involved a three-part ideation workshop. Our team started off by rapidly generating concepts and quickly sketching them out, all under the premise that there are no stupid or dumb ideas. Each of us then shared our individual ideas with the rest of the team before we voted on 5 concepts to narrow down to.</p>
        <p>After we chose 5 concepts, we continued with another round of brainstorming by passing around those ideas and coming up with ways to either improve them or add onto them or use them in other contexts.</p>
        <p>Through creating a concept pin-up presentation that we shared during our next Design in Health Studio class, we were able to elicit feedback from our classmates as well as our instructors that provided us with valuable feedback on which ideas we should move forward with. This allowed us to come up with a plan on how to best prototype and iterate on our concepts along the way.</p>
        <hr/>
        <h3>
          <span>phase 5: prototype</span>
          selected concepts and rapid prototyping
        </h3>
        <p>details coming soon</p>
        <hr/>
        <h3>
          <span>phase 6: test</span>
          prototype testing + eliciting qualitative feedback
        </h3>
        <p>details coming soon</p>
        <hr/>
        <h3>
          <span>phase 7: reflect</span>
          key takeaways and next steps
        </h3>
        <p>details coming soon. check out our <a href="https://files.cargocollective.com/c1411182/ACC-DESIGN-GUIDELINES.pdf">design guidelines [pdf]</a> if you&apos;re curious!</p>
        <hr/>
        <h4>special thanks</h4>
        <p>we couldn&apos;t have done it without the help of our incredible clients at ACC, who were kind, generous, and collaborative.</p>
      </section>

      <aside>
        <section>
          <span>client</span>
          <Image
            src={ accLogo }
            alt="ACC District Logo"
          />
        </section>
        <section>
          <span>context</span>
          <p>MA Design in Health Studio Capstone Project</p>
        </section>
        <section>
          <span>course instructors</span>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/natalie-privett">natalie privett</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/laurenmgardner">lauren gardner</a>
            </li>
          </ul>
        </section>
        <section>
          <span>role + responsibilities</span>
          <ul>
            <li>project management</li>
            <li>systems design</li>
            <li>spatial design</li>
            <li>experience design</li>
            <li>research</li>
            <li>prototyping</li>
            <li>usability design</li>
            <li>visual design</li>
            <li>content strategy</li>
            <li>storytelling</li>
          </ul>
        </section>
        <section>
          <span>tools</span>
          <ul>
            <li>miro</li>
            <li>g-suite</li>
            <li>microsoft office</li>
            <li>zoom</li>
            <li>box</li>
            <li>slack</li>
            <li>adobe creative suite</li>
            <li>figma</li>
            <li>trello</li>
          </ul>
        </section>
        <section>
          <span>team</span>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/alisa-elliott-3-78704/">alisa elliott</a>, client engagement, systems design
            </li>
            <li>
              <a href="https://www.linkedin.com/in/krezia-anne-savella">krezia savella</a>, experience design, research
            </li>
            <li>
              <a href="https://www.linkedin.com/in/nina-lemieux-712389a4">nina lemieux</a>, experience design, research
            </li>
            <li>
              <a href="https://www.linkedin.com/in/takeuchirie">rie takeuchi</a>, wayfinding design, research
            </li>
          </ul>
        </section>
        <section>
          <span>duration</span>
          <p>jan 25 - may 13, 2022</p>
          <p>15 weeks</p>
        </section>
      </aside>
    </article>
  )
}
