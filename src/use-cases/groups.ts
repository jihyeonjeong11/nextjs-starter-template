import { getGroupsByUser } from "@/data-access/groups";
import { UserSession } from "./types";

export async function getGroupsByUserUseCase(authenticatedUser: UserSession) {
  return [
    ...(await getGroupsByUser(authenticatedUser.id)),
    //   ...(await getGroupsByMembership(authenticatedUser.id)),
  ];
}
