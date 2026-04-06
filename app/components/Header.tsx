import Link from "next/link";
import { AlignJustify } from "lucide-react";

export function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 border-b bg-background/50 backdrop-blur-[12px]">
      <div className="container mx-auto flex h-14 w-full items-center justify-between">
        <Link className="text-md flex items-center justify-center font-medium" href="/">
          Magic UI
        </Link>
        <div className="ml-auto hidden md:flex h-full items-center">
          <Link className="mr-6 text-sm" href="/signin">
            Log in
          </Link>
          <Link
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-9 px-4 py-2 text-sm"
            href="/signup"
          >
            Sign up
          </Link>
        </div>
        <button className="ml-6 md:hidden">
          <span className="sr-only">Toggle menu</span>
          <AlignJustify className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}
