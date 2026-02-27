"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { useAppKit } from "@reown/appkit/react";
import { useSession } from "next-auth/react";

const navigator = [
  {
    name: "HOME",
    href: "/",
  },
  {
    name: "TASK CENTER",
    href: "/task-center",
  },
  {
    name: "INVITE FRIENDS",
    href: "/invite-friends",
  },
];

export interface NavbarProps {
  height: number;
}

const walletIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="size-6"
  >
    <path d="M2.273 5.625A4.483 4.483 0 0 1 5.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 3H5.25a3 3 0 0 0-2.977 2.625ZM2.273 8.625A4.483 4.483 0 0 1 5.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 6H5.25a3 3 0 0 0-2.977 2.625ZM5.25 9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H15a.75.75 0 0 0-.75.75 2.25 2.25 0 0 1-4.5 0A.75.75 0 0 0 9 9H5.25Z" />
  </svg>
);

const loadingIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6 animate-spin"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
    />
  </svg>
);

export default function Navbar({ height }: NavbarProps) {
  const router = useRouter();
  const { open } = useAppKit();
  const { data, status } = useSession();
  const address = data?.address;

  return (
    <nav
      className={`h-[${height}px] sticky z-50 top-0 px-4 py-2 flex justify-between items-center bg-base-100`}
    >
      <Image
        src="/images/entrova-logo-white.png"
        alt="Entrova Logo"
        width={128}
        height={40.16}
      />
      <div className="flex gap-2 items-center md:gap-8">
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger className="h-9 text-white border-white border px-3 py-2 rounded-lg md:px-6 md:py-2.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-4"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {navigator.map(({ name, href }) => (
                <DropdownMenuItem key={name} onClick={() => router.push(href)}>
                  {name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="text-white font-semibold gap-4 hidden md:flex">
          {navigator.map(({ name, href }) => (
            <Link key={name} className="hover:text-[#9588e8]" href={href}>
              {name}
            </Link>
          ))}
        </div>
        <Button
          className="px-3 py-2 rounded-lg md:px-6 md:py-2 md:min-w-[180px]"
          onClick={() => open()}
        >
          {status === "loading" ? loadingIcon : walletIcon}
          <span className="hidden md:block">
            {status === "authenticated" &&
              address &&
              `${address.slice(0, 6)}....${address.slice(-4)}`}
            {status === "unauthenticated" && "Wallet Connect"}
            {status === "loading" && "Connecting..."}
          </span>
        </Button>
      </div>
    </nav>
  );
}
