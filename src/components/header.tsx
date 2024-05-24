import Image from "next/image";
import Link from "next/link";

const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/posts",
    label: "Posts",
  },
];
export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-7 border-b">
      <Image
        src="https://bytegrad.com/course-assets/youtube/example-logo.png"
        alt="Logo"
        className="w-[35px] h-[35px]"
        width="35"
        height="35"
      />
      <nav>
        <ul className="flex gap-x-5 text-[14px] font-bold">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link className=" text-zinc-400" href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
