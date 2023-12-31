import Link from 'next/link'
import Image from 'next/image'
import logoPrimary from '../../public/images/logo/ncs-logomark-primary.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export default function HeaderNav() {
  return (
    <header>
      <Link href="/" className="logo">
        <Image
          src={logoPrimary}
          alt="Company Logo"
          className="logo"
          priority
        />
      </Link>
      <nav>
        <ul>
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
