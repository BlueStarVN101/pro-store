import Image from "next/image";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import Menu from "./menu";


const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper w-full flex items-center py-5 justify-between px-20">
        {/* LEFT: Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.svg"
            alt={`${APP_NAME} Logo`}
            height={32}
            width={32}
            priority
          />
          <span className="hidden lg:block font-bold text-2xl">{APP_NAME}</span>
        </Link>

        {/* RIGHT: Actions */}
        <div className="ml-auto flex items-center gap-2 flex-nowrap">
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;
