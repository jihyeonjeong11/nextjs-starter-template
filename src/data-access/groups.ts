import { database } from "@/db";
import { groups } from "@/db/schema";
import { UserId } from "@/use-cases/types";
import { omit } from "@/util/utils";
import { eq } from "drizzle-orm";

function appendGroupMemberCount<T extends { memberships: any[] }>(group: T) {
  return omit(
    {
      ...group,
      memberCount: group.memberships.length + 1,
    },
    "memberships"
  );
}

export async function getGroupsByUser(userId: UserId) {
  const userGroups = await database.query.groups.findMany({
    where: eq(groups.userId, userId),
    with: {
      memberships: true,
    },
  });

  return userGroups.map(appendGroupMemberCount);
}

//   export async function getGroupsByMembership(userId: UserId) {
//     const userMemberships = await database.query.memberships.findMany({
//       where: eq(memberships.userId, userId),
//       with: {
//         group: {
//           with: {
//             memberships: true,
//           },
//         },
//       },
//     });

//     return userMemberships.map((membership) => {
//       const group = membership.group;
//       return appendGroupMemberCount(group);
//     });
//   }
