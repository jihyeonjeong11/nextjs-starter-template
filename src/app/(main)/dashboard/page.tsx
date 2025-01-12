import { cn } from "@/lib/utils";
import Image from "next/image";

import { cardStyles, pageTitleStyles } from "@/styles/common";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { btnIconStyles, btnStyles } from "@/styles/icons";
import { Search } from "lucide-react";
import { assertAuthenticated } from "@/lib/session";
import { getGroupsByUserUseCase } from "@/use-cases/groups";

export default async function DashboardPage() {
  const user = await assertAuthenticated();

  const groups = await getGroupsByUserUseCase(user); // check db schema

  return (
    <div
      className={cn(
        "space-y-8 container mx-auto py-24 min-h-screen max-w-2xl flex flex-col items-center"
      )}
    >
      <div className="flex justify-between items-center">
        <h1 className={pageTitleStyles}>Your Groups</h1>
      </div>

      <div
        className={cn(
          cardStyles,
          "flex flex-col items-center gap-6 p-12 w-full"
        )}
      >
        <Image
          src="/empty-state/no-data.svg"
          width="200"
          height="200"
          alt="no image placeholder image"
        ></Image>
        <h2>Uh-oh, you don't own any groups</h2>

        <div className="flex gap-4">
          {/* <CreateGroupButton /> */}

          <Button asChild className={btnStyles} variant={"secondary"}>
            <Link href={`/browse`}>
              <Search className={btnIconStyles} /> Browse Groups
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
