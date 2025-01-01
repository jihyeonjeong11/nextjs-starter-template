import { LoginError } from "./errors";

export async function signInUseCase(email: string, password: string) {
  if (email === "a@a.com") {
    return { id: "testid" };
  } else {
    throw new LoginError();
  }
  // const user = await getUserByEmail(email);

  // if (!user) {
  //   throw new LoginError();
  // }

  // const isPasswordCorrect = await verifyPassword(email, password);

  // if (!isPasswordCorrect) {
  //   throw new LoginError();
  // }
}
