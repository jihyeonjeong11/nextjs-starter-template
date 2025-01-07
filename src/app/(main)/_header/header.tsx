import Image from "next/image";
import Link from "next/link";
import { HeaderLinks } from "./header-links";
import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/lib/session";

export default async function Header() {
  const user = await getCurrentUser();
  const isSignedIn = !!user;

  return (
    <div className="px-5 md:px-6">
      <div className="mx-auto flex w-full max-w-7xl py-4 justify-between">
        <div className="flex justify-between gap-10 items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/group.jpeg"
              alt="Group Finder Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-sm md:text-base lg:text-2xl font-bold">
              Placeholder app
            </span>
          </Link>
          <HeaderLinks isAuthenticated={!!user} />
        </div>
        <div className="flex items-center justify-between gap-5">
          {isSignedIn ? (
            <Button asChild variant="secondary">
              <Link href="/sign-in">Profile</Link>
            </Button>
          ) : (
            <Button asChild variant="secondary">
              <Link href="/sign-in">Sign In</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
