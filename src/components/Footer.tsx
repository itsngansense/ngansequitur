import Link from 'next/link'
import Image from 'next/image'
import LogoSecondary from '../../public/logo/ncs-logomark-secondary.svg'

export default function Footer() {
  return (
    <footer>
      <Link href="/">
        <Image
          src={LogoSecondary}
          alt="Company Logo"
          sizes="100vw"
          style={{
            width: '150px',
            height: 'auto',
          }}
        />
      </Link>
    </footer>
  )
}