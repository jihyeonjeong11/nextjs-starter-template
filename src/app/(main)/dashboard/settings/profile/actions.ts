import { authenticatedAction } from "@/lib/safe-actions";
import { updateProfileNameUseCase } from "@/use-cases/users";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export const updateProfileNameAction = authenticatedAction
  .createServerAction()
  .input(
    z.object({
      profileName: z.string(),
    })
  )
  .handler(async ({ input, ctx }) => {
    await updateProfileNameUseCase(ctx.user.id, input.profileName);
    revalidatePath(`/dashboard/settings/profile`);
  });
