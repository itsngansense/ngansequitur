import Link from 'next/link'
import Image from 'next/image'
import LogoPrimary from '../../public/logo/ncs-logomark-4k.svg'

export default function HeaderNav() {
  return (
    <nav>
      <Link href="/">
        <Image
          src={LogoPrimary}
          alt="Company Logo"
          sizes="100vw"
          style={{
            width: '150px',
            height: 'auto',
          }}
        />
      </Link>
    </nav>
  )
}