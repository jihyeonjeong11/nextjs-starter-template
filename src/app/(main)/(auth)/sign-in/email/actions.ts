"use server";

import { rateLimitByKey } from "@/lib/limiter";
import { unauthenticatedAction } from "@/lib/safe-actions";
import { signInUseCase } from "@/use-cases/users";
import { z } from "zod";
import { createServerActionProcedure } from "zsa";

export const signInAction = unauthenticatedAction
  .createServerAction()
  .input(
    z.object({
      email: z.string().email(),
      password: z.string().min(8),
    })
  )
  .handler(async ({ input }) => {
    await rateLimitByKey({ key: input.email, limit: 3, window: 10000 });
    const user = await signInUseCase(input.email, input.password);
  });

// export const signInAction = unauthenticatedAction
// .createServerAction()
// .input(
//   z.object({
//     email: z.string().email(),
//     password: z.string().min(8),
//   })
// )
// .handler(async ({ input }) => {
//   await rateLimitByKey({ key: input.email, limit: 3, window: 10000 });
//   const user = await signInUseCase(input.email, input.password);
//   await setSession(user.id);
//   redirect(afterLoginUrl);
// });
