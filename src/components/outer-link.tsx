import Image from "next/image";
import React from "react";

export interface OuterLinkProps {
  defaultLogo: string;
  hoverLogo?: string;
  href: string;
}

export default function OuterLink({
  defaultLogo,
  hoverLogo = defaultLogo,
  href,
}: OuterLinkProps) {
  return (
    <li className="bg-black hover:bg-[#9588e8] rounded-full size-8">
      <a className="group block size-full p-2 rounded-full" href={href}>
        <Image
          className="block group-hover:hidden"
          src={`/images/${defaultLogo}`}
          alt="X Logo"
          width={24}
          height={24}
        />
        <Image
          className="hidden group-hover:block"
          src={`/images/${hoverLogo}`}
          alt="X Logo"
          width={24}
          height={24}
        />
      </a>
    </li>
  );
}
