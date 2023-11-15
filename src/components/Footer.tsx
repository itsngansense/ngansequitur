import Link from 'next/link'
import Image from 'next/image'
import logoSecondary from '../../public/images/logo/ncs-logomark-secondary.svg'

export default function Footer() {
  return (
    <footer>
      <Link href="/">
        <Image
          src={logoSecondary}
          alt="Company Logo"
          className="logo"
        />
      </Link>
    </footer>
  )
}
