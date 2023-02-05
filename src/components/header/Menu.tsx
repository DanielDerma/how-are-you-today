import { useUser } from "@supabase/auth-helpers-react";
import Link from "next/link";
import { useRouter } from "next/router";

const Menu = () => {
  const user = useUser();
  const { pathname } = useRouter();
  return (
    <ul className="flex flex-col items-end gap-y-3 border-2 bg-white p-4 md:rounded-lg md:border-0 md:p-0">
      <Link href="/" className={`${pathname === "/" ? "font-semibold" : ""}`}>
        <li>Home</li>
      </Link>
      {user && (
        <>
          <Link
            href="/exercises"
            className={`${pathname === "/exercises" ? "font-semibold" : ""}`}
          >
            <li>Exercises</li>
          </Link>
          <Link
            href="/summary"
            className={`${pathname === "/summary" ? "font-semibold" : ""}`}
          >
            <li>Summary</li>
          </Link>
        </>
      )}

      <Link
        href="/faq"
        className={`${pathname === "/faq" ? "font-semibold" : ""}`}
      >
        <li>FAQ</li>
      </Link>
    </ul>
  );
};

export default Menu;
