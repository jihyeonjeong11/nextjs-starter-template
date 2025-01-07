import { database } from "@/db";
import { accounts } from "@/db/schema";
import { UserId } from "@/use-cases/types";
import { eq } from "drizzle-orm";
import crypto from "crypto";
import { hashPassword } from "./utils";

export async function getAccountByUserId(userId: UserId) {
  const account = await database.query.accounts.findFirst({
    where: eq(accounts.userId, userId),
  });

  return account;
}

export async function createAccount(userId: UserId, password: string) {
  const salt = crypto.randomBytes(128).toString("base64");
  const hash = await hashPassword(password, salt);
  const [account] = await database
    .insert(accounts)
    .values({
      userId,
      accountType: "email",
      password: hash,
      salt,
    })
    .returning();
  return account;
}
