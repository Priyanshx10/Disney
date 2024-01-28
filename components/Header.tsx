import Image from "next/image"
import Link from "next/link"
import { ThemeToggler } from "./ThemeToggler"
import SearchInput from "./SearchInput"


function Header() {
  return (
    <header className="Fixed w-full z-20 top-0 items-center justify-between flex p-5 bg-gradient-to-t from-grey-200/0 via-gray-900/25 to-gray-900">
       <Link href="/" className="mr-10"></Link>
       <Image src="https://links.papareact.com/a943ae" 
         alt="Disney logo"
         width={120}
         height={100}
         className=" cursor-pointer invert-0 dark:invert"
       />

       <div className="flex space-x-2">
          <SearchInput />
          {/*Search Input*/}
          
          <ThemeToggler />
       </div>
    </header>
  )
}

export default Header