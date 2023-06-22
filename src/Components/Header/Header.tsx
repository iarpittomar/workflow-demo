"use client";

import Link from "next/link";
import logoIcon from "@/assets/mgtIconWhite.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  //   const userData = getCookie("user-data")
  //     ? JSON.parse(getCookie("user-data") as string)
  //     : null;

  const path = usePathname();

  const userData = { firstName: "", image: "" };

  return (
    <header className="bg-primary h-[80px] min-h-[80px] sticky top-0 z-50">
      <div className="flex items-center justify-between px-8 leading-body-3 font-semibold text-body-3 mx-auto h-[80px] min-h-[80px]">
        <nav className="h-full w-full flex items-center justify-between">
          <div className="flex items-center h-full">
            <Link href="/">
              <Image
                src={logoIcon}
                alt="Logo"
                className="h-20"
                width="200"
                height="200"
              />
            </Link>
            {!userData && (
              <ul className="list-none flex items-center h-full text-white-900">
                <Link
                  key="jobSearch"
                  href="/"
                  className="h-full flex items-center border-transparent"
                >
                  <li className="pl-5 pr-4">Job Search</li>
                </Link>
                <Link
                  key="jobSeeker"
                  href="/jobSeeker/signIn"
                  className={`h-full flex items-center border-transparent ${
                    path.includes("/jobSeeker")
                      ? "border-b-4 border-white-800"
                      : ""
                  }`}
                >
                  <li className="pl-5 pr-4">Job Seekers</li>
                </Link>
                <Link
                  key="jobProvider"
                  href="/jobProvider/signIn"
                  className={`h-full flex items-center border-transparent ${
                    path.includes("/jobProvider")
                      ? "border-b-4 border-white-800"
                      : ""
                  }`}
                >
                  <li className="pl-5 pr-4">Employers/Recruiter</li>
                </Link>
                <Link
                  key="about"
                  href="/"
                  className="h-full flex items-center border-transparent"
                >
                  <li className="pl-5 pr-4">About</li>
                </Link>
              </ul>
            )}
          </div>

          <div className="flex">
            {userData?.firstName ? (
              <div className="flex items-center">
                <p className="text-sm font-medium leading-[19px] text-white mr-3">
                  {userData?.firstName}
                </p>
                {userData?.image ? (
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <Image src={userData?.image} alt="user image"></Image>
                    </div>
                  </div>
                ) : (
                  <div className="avatar online placeholder">
                    <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                      <span className="text-xl">AT</span>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                className="bg-green-800 px-[32px] py-[12px] rounded-[10px] text-white-900"
                href="/jobProvider/signIn"
              >
                Sign In
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
