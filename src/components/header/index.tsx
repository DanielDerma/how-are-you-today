import { Menu } from "@headlessui/react";
import { useUser } from "@supabase/auth-helpers-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { forwardRef } from "react";
import Login from "./Login";
import MenuOptions from "./Menu";
import Tooltip from "./Tooltip";
import logo from "/public/logo.svg";

const MyLink = forwardRef((props: any, ref) => {
  let { href, children, ...rest } = props;
  return <Link href={href}>{children}</Link>;
});
MyLink.displayName = "MyLink";

const Header = () => {
  const user = useUser();

  return (
    <div className="mb-5 md:mb-10">
      <div className="mb-5 flex justify-between">
        <h1 className="w-[130px] text-2xl font-bold leading-none md:w-[500px] md:text-7xl">
          how are you today?
        </h1>
        <div className="flex flex-col items-end">
          <Image
            src={logo}
            alt="logo"
            width={55}
            height={55}
            className="mb-4 hidden md:block"
          />
          <div className="hidden md:block">
            <MenuOptions />
          </div>
          <Menu as="div" className="relative text-left md:hidden">
            <Menu.Button className="cursor-default">
              <Image
                src={logo}
                alt="logo"
                width={55}
                height={55}
                className="mb-4"
              />
            </Menu.Button>
            <Menu.Items className="absolute right-0">
              <Menu.Item>
                <MenuOptions />
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
      </div>
      <div className="hidden justify-between md:flex">
        <Tooltip />
        <Login />
      </div>
    </div>
  );
};

export default Header;
