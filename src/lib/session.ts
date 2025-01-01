"server only";

import { cache } from "react";

export const getCurrentUser = cache(async () => {
  return { id: 1, name: "me" }; // { id: 1, name: "hello" };
});
