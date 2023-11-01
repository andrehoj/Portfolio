"use client";
import Link from "next/link";

export default function Tabs({ tab, setOpen, pathname }) {
  return (
    <div className="flex items-center">
      <Link
        className={`text-md px-40 md:px-2 text-gray-400 transition-all duration-100 hover:text-main_white ${
          pathname === tab.link && "text-main_white"
        }`}
        onClick={() => {
          setOpen(false);
        }}
        href={tab.link}
      >
        <span>{tab.name}</span>
      </Link>
    </div>
  );
}
