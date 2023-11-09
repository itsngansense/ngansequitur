import Link from 'next/link'
import Image from 'next/image'
import LogoPrimary from '../../public/logo/ncs-logomark-primary.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export default function HeaderNav() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <Image
                src={LogoPrimary}
                alt="Company Logo"
                priority={true}
                sizes="100vw"
                style={{
                  width: '150px',
                  height: 'auto',
                }}
              />
            </Link>
          </li>
          <li><Link href="/">home</Link></li>
          <li><Link href="/about">about</Link></li>
          <li><Link href="/design">design</Link></li>
          <li><Link href="/art">art</Link></li>
          <li>
            <a href="https://ngansequitur.bigcartel.com">shop <FontAwesomeIcon icon={faArrowUpRightFromSquare}/></a>
          </li>
          <li><Link href="/contact">contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}
