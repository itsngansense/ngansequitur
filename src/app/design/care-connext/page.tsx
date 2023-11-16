// acc case study
import Link from 'next/link'
import Image from 'next/image'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function caseStudy() {
  return (
    <article>
      <header className="project-header">
        <h1 className="project-title">Care Connext</h1>
        <p className="project-subtitle">Supporting and Maintaining Caregivers&apos; Mental Health and Wellness with Comprehensive Self-Care Services</p>
      </header>
      <section className="project-summary">
        <h2>Overview</h2>
        <p>According to the U.S. Cenus Bureau&apos;s Population Projections, the number of Americans ages 65 and older has been projected to nearly double what it was in 2018 from 52 million to 95 million by 2060. Many of these individuals will likely require the assistance of a caretaker, an undeniably important role that often leaves them overworked, undercompensated, and feeling the physical and emotional tolls of the job. Not only do caregivers put their lives aside to help others, but they&apos;re also expected to handle it with grace and left to figure it out alone. </p>

        <h3>objectives</h3>
        <p>My team was given six days to design a product and/or service that will improve the life of a caregiver. Our goal was to ensure that what we created would empower caregivers to take care of themselves in order to continue providing quality care to others.</p>
        <h4>Focus areas</h4>
        <ol>
          <li>Allow caregivers to gain confidence and knowledge about how to provide care</li>
          <li>Enable caregivers to help each other create positive experiences for themselves and their patients</li>
          <li>Enable caregivers to monitor their own self-care as well as the needs of the person they care for in a structured manner</li>
        </ol>
      </section>
      <section className="project-details">
        <h2>Design Process + Methods</h2>
        <p>
          <strong>
            empathize
            <FontAwesomeIcon icon={faCaretRight}/>
            define
            <FontAwesomeIcon icon={faCaretRight}/>
            ideate
            <FontAwesomeIcon icon={faCaretRight}/>
            prototype
            <FontAwesomeIcon icon={faCaretRight}/>
            test
            <FontAwesomeIcon icon={faCaretRight}/>
            implement
          </strong>
        </p>
        <p>My team&apos;s interative process involved actively listening to caregivers&apos; struggles and using their experiences and stories to inform our brainstorming sessions for self-care and wellness products that could be provided in multiple modalities. Feel free to dive deeper into each part of our process in more detail below: </p>

        <details>
          <summary>research + insights</summary>
          <h4>understanding the emotional and physical stress of caregiving</h4>
          <p>Our team started by creating a mindmap to identify an aspect of caregiving we wanted to delve into. Drawing from our own experiences as a patient/caregiver ourselves or knowing caretakers within our family and friends, my team ultimately decided to focus on addressing mental health and overall wellness. </p>
          <p>In order to capture the breadth of caregiving experiences in the limited States in the amount of time we had, our team split up and interviewed two individuals who became caregivers under very different circumstances. Blake, Rachel, and I interviewed a middle-aged woman who was caring for her aging mother while Emily and Nikhil spoke to caregiver in his twenties who had cared for a college friend of his with an unknown degenerative musculoskeletal disease that greatly inhibited his Activities of Daily Living (ADLs). </p>
          <p>After our interviews, we created personas and ecosystem maps outlining how each caregiver interacted with their environments and synthesized our research findings. Through this process, we were able to uncover common themes between interviews and gained thoughtful insights that would inform the design criteria for our prototype designs. </p>

          <p><strong>main themes</strong></p>
          <ul>
            <li>It is typical for there be an emotional connection between the caregiver and the person being cared for, which may lead to growing pains that affect both individuals as the roles in their relationship changes.</li>
            <li>A caregiver&apos;s overall mental health and their stress levels are directly impacted by whether the patient&apos;s health conditions improve or decline over time.</li>
            <li>Caretakers experience both physical and emotional strain and exhaustion but have no clear guidance on how to manage this.</li>
          </ul>

          <p><strong>key insights</strong></p>
          <ul>
            <li>When children become caregivers to their elderly parents, their relationship dynamics are two-fold: there are increased pressures to meet their parents&apos; expectations, leading to the neglect of their own self-care and well-being.</li>
            <li>Patients&apos; met milestones tip the metaphorical balance towards hope for a better future while unmet milestones tip the balance towards gut-wrenching disappointment. Although we hope for the former, health outcomes are too often out of our control. Even so, the mental health of caregivers mirror this metaphorical balance.</li>
            <li>Caregivers can find a reprieve/respite from the stresses of caregiving through support system. A caregiver without a support system is more vulnerable to the stresses that are intrinsic to the caregiving experience. In this way the success of these support systems can either make or break one&apos;s experience as a caregiver by bolstering or neglecting the mental health and personal needs of the caregiver.</li>
          </ul>
        </details>

        <details>
          <summary>design criteria + ideation</summary>
          <h4>creating the caregiver&apos;s self-care and mental health toolkit</h4>
          <p>After developing insights from our interviews and finding common themes between the contrasting interviewees&apos; experiences in caregiving, we established that <strong>our design must...</strong></p>
          <ol>
            <li>enable caregivers to feel fulfilled, gratified, and confident in their caregiving abilities, </li>
            <li>provide caregivers intuitive ways for finding and maintaining support systems around them, and</li>
            <li>help them embrace unfavorable health outcomes while fostering a healthy state of mind. </li>
          </ol>
        </details>

        <details>
          <summary>prototyping + user testing</summary>
          <h4>walking a mile in a caregiver&apos;s shoes</h4>
          <p>After several rounds of rapid ideation, we ended up creating a variety of lo-fidelity prototypes to showcase to our class and had them run through the experience (in the shoes of our caretaker personas) to test our assumptions on whether our product offerings were accessible, easy to understand, as well as gather feedback on how we could make it better. Overall, our service was tested with 20+ individuals, many of whom have served as caregivers.</p>
          <p>Caregivers come from all different backgrounds, and we wanted to account for that in our designs, by offering multiple modalities (analog, digital, hybrid) to ensure our service meets the needs of a variety of users and their unique lifestyles. We prototyped a mobile app, website, and a subscription wellness kit that could be mailed to the caregivers home. Each of the products all shared these features: Self-care exercises, support group advocacy and resources, as well as tools to enable caregivers to feel fulfilled and gratified from their caregiving duties. </p>
        </details>

        <h2>solution</h2>
        <p><strong>target demographic:</strong> Our final product is marketed to caregivers who want to treat themselves or friends/family members who want to show their appreciation to the caregiver in their lives by giving them a thoughtful gift that keeps on giving month after month. </p>

        <h2>reflections + future aspirations</h2>
        <p>After our user-testing session, we were provided feedback on what went well in addition to ways we could improve our product. Overall, it was well received but due to time constraints, we weren&apos;t able to go in to detail about how our customers would be able to customize their experience based on their preferences on digital or analog items, or a hybrid of both. It was a bit overwhelming for some people and they were confused about the abundance of products in front of them, so I think if we were able to create more detailed and hi-fidelity prototypes in the future and provide people more time to interact with them, it would&apos;ve answered a lot of questions. </p>
        <p>Some aspects we didn&apos;t consider was how our products would be funded or what would happen if a penpal stopped responding. To address the first problem, we decided that if we weren&apos;t able to get by on donations as a non-profit organization, we would have to resort to instilling a pricing model, which I&apos;m not sure would work unless we had time to research how to implement that and get people to sign up for it as a monthly subscription. As far as penpals go, we would need to come up with alternatives for situations where someone stops writing letters to their penpal or if someone moves, how they&apos;d be able to keep in touch. We discussed adding a chat feature as well as refining the way forums may be utilized as a resource for caregivers to connect with other caregivers for support. </p>
        <p>Looking to the future, we <strong>identified five ways to refine our ideas and move our concept forward</strong>, including: </p>
        <ol>
          <li>optimize hybrid use-cases</li>
          <li>larger stakeholder analysis</li>
          <li>research app/website feasibility and logistics</li>
          <li>recruit professionals</li>
          <li>locate and obtain funding resources</li>
        </ol>
      </section>

      <aside>
        <section>
          <span>timeline</span>
          <p>august 2021</p>
          <p>6 days</p>
        </section>
        <section>
          <span>role + responsibilities</span>
          <ul>
            <li>user experience</li>
            <li>branding + logo design</li>
            <li>3d prototyping</li>
            <li>research</li>
            <li>synthesis</li>
            <li>user testing</li>
            <li>visual design</li>
          </ul>
        </section>
        <section>
          <span>tools</span>
          <ul>
            <li>miro</li>
            <li>g-suite</li>
            <li>zoom</li>
            <li>box</li>
            <li>groupme</li>
            <li>adobe illustrator</li>
          </ul>
        </section>
        <section>
          <span>team</span>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/rachel-ancar">rachel ancar</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/nikhil-mahadevan">nikhil mahadevan</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/blake-smith-962020a2/">blake smith, md</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/yan-emily">emily yan, ms</a>
            </li>
          </ul>
        </section>
        <section>
          <span>course(s) + instructors</span>
          <ul>
            <li>intro to design thinking, <a href="https://www.linkedin.com/in/graygarmon">gray garmon</a></li>
            <li>eliciting + inspiring participant data, <a href="https://www.linkedin.com/in/jonfreach">jon freach</a></li>
            <li>sketching for communication, <a href="https://www.linkedin.com/in/verenapaepcke">verena paepcke-hjeltness</a></li>
            <li>3d prototyping, <a href="https://designcreativetech.utexas.edu/jose-perez-mfa">josé perez</a></li>
          </ul>
        </section>
      </aside>
    </article>
  )
}
