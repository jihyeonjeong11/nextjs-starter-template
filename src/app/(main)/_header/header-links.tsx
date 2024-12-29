"use client";

import { Button } from "@/components/ui/button";
import useMediaQuery from "@/hooks/use-media-query";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function HeaderLinks({
  isAuthenticated = false,
}: {
  isAuthenticated: boolean;
}) {
  const path = usePathname();
  const { isMobile } = useMediaQuery();
  const isLandingPage = path === "/";

  if (isMobile) return null;
  return (
    <>
      {(isLandingPage || !isAuthenticated) && (
        <div className="hidden md:flex gap-4">
          <Button variant={"link"} asChild>
            <Link href="/#features">Features</Link>
          </Button>

          <Button variant={"link"} asChild>
            <Link href="/#pricing">Pricing</Link>
          </Button>

          <Button variant={"link"} asChild>
            <Link href={"/browse"}>Browse Placeholders</Link>
          </Button>
        </div>
      )}
    </>
  );
}
