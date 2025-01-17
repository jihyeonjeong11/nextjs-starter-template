import { createGroup, getGroupsByUser } from "@/data-access/groups";
import { UserSession } from "./types";
import { PublicError } from "./errors";

export async function getGroupsByUserUseCase(authenticatedUser: UserSession) {
  return [
    ...(await getGroupsByUser(authenticatedUser.id)),
    //   ...(await getGroupsByMembership(authenticatedUser.id)),
  ];
}

export async function createGroupUseCase(
  authenticatedUser: UserSession,
  newGroup: {
    name: string;
    description: string;
  }
) {
  // const numberOfGroups = await countUserGroups(authenticatedUser.id);

  // const subscription = await getSubscription(authenticatedUser.id);
  // const plan = getSubscriptionPlan(subscription);

  // if (
  //   numberOfGroups >=
  //   (plan === "premium" ? MAX_GROUP_PREMIUM_LIMIT : MAX_GROUP_LIMIT)
  // ) {
  //   throw new PublicError("You have reached the maximum number of groups");
  // }

  await createGroup({ ...newGroup, userId: authenticatedUser.id });
}
