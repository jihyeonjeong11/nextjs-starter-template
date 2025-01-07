import {
  createUser,
  getUserByEmail,
  verifyPassword,
} from "@/data-access/users";
import { LoginError, PublicError } from "./errors";
import { createAccount } from "@/data-access/accounts";
import {
  uniqueNamesGenerator,
  Config,
  colors,
  animals,
} from "unique-names-generator";
import { createProfile } from "@/data-access/profiles";

export async function signInUseCase(email: string, password: string) {
  const user = await getUserByEmail(email);

  if (!user) {
    throw new LoginError();
  }

  const isPasswordCorrect = await verifyPassword(email, password);

  if (!isPasswordCorrect) {
    throw new LoginError();
  }

  return { id: user.id };
}

export async function registerUserUseCase(email: string, password: string) {
  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    throw new PublicError("An user with that email already exists.");
  }

  const user = await createUser(email);
  await createAccount(user.id, password);

  const displayName = uniqueNamesGenerator({
    dictionaries: [colors, animals],
    separator: " ",
    style: "capital",
  });
  await createProfile(user.id, displayName);

  // try {
  //   const token = await createVerifyEmailToken(user.id);
  //   await sendEmail(
  //     email,
  //     `Verify your email for ${applicationName}`,
  //     <VerifyEmail token={token} />
  //   );
  // } catch (error) {
  //   console.error(
  //     "Verification email would not be sent, did you setup the resend API key?",
  //     error
  //   );
  // }

  return { id: user.id };
}
