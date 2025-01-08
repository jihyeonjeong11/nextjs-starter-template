import { cache } from "react";
import { getUserProfileUseCase } from "@/use-cases/users";
import { ProfileImage } from "./profile-image";
import { ProfileName } from "./profile-name";

export const getUserProfileLoader = cache(getUserProfileUseCase);

export default async function SettingsPage() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <ProfileImage />
        <ProfileName />
      </div>
    </div>
  );
}
