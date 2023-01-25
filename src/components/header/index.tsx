import Image from "next/image"
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
        <div className="flex flex-col">
          <Image
            src={logo}
            alt="logo"
            width={55}
            height={55}
            className="mb-4"
          />
          <ul className="gap-y-3">
            <li>Account</li>
            <li>About</li>
            <li>FAQ</li>
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