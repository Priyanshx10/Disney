import Image from "next/image"
import Link from "next/link"

function Header() {
  return (
    <header>
       <Link href="/"></Link>
       <Image src="https://links.papareact.com/a943ae" alt="Disney logo"
         width={120}
         height={100}
         className=" cursor-pointer invergit"
       />
    </header>
  )
}

export default Header