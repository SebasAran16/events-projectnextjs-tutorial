import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="header">
      <div className="header-div">
        <Image
          src={"/images/logo_black.png"}
          alt="Logo"
          width={50}
          height={50}
        />
        <nav className="nav-bar">
          <Link href="/">Home</Link>
          <Link href="/events">Events</Link>
          <Link href="/about-us">About Us</Link>
        </nav>
      </div>
    </header>
  );
};
