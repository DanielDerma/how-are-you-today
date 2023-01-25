import Image from "next/image"
import Link from "next/link"
import Login from "./Login"
import Tooltip from "./Tooltip"
import logo from '/public/logo.svg'

const Header = () => {
  return (
    <div className="mb-10">
      <div className="flex justify-between mb-10">
        <div className="w-[500px]">
          <h1 className="text-7xl font-bold leading-none">how are you today?</h1>
        </div>
        <div className="flex flex-col items-end">
          <Link
            href="/"
          >
            <Image
              src={logo}
              alt="logo"
              width={55}
              height={55}
              className="mb-4"
            />
          </Link>

          <ul className="gap-y-3 font-semibold flex flex-col items-end">
            <Link href="/account">
              <li>Account</li>
            </Link>
            <Link href="/about">
              <li>About</li>
            </Link>
            <Link href="/faq">
              <li>FAQ</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <Tooltip />
        </div>
        <div className="flex flex-col">
          <Login />
        </div>
      </div>
    </div>
  )
}

export default Header