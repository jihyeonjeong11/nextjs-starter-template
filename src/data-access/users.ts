import { database } from "@/db";
import { User, accounts, users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { UserId } from "@/use-cases/types";
import { hashPassword } from "./utils";
import { getAccountByUserId } from "@/data-access/accounts";

export async function getUserByEmail(email: string) {
  const user = await database.query.users.findFirst({
    where: eq(users.email, email),
  });

  return user;
}

export async function createUser(email: string) {
  const [user] = await database
    .insert(users)
    .values({
      email,
    })
    .returning();
  return user;
}

export async function verifyPassword(email: string, plainTextPassword: string) {
  const user = await getUserByEmail(email);

  if (!user) {
    return false;
  }

  const account = await getAccountByUserId(user.id);

  if (!account) {
    return false;
  }

  const salt = account.salt;
  const savedPassword = account.password;

  if (!salt || !savedPassword) {
    return false;
  }

  const hash = await hashPassword(plainTextPassword, salt);
  return account.password == hash;
}
