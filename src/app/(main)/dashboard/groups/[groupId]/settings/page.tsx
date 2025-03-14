import { ConfigurationPanel } from "@/components/configuration-panel";
import { assertAuthenticated } from "@/lib/session";
import { pageTitleStyles } from "@/styles/common";
import { getGroupByIdUseCase } from "@/use-cases/groups";
import Image from "next/image";
import { getGroupImageUrl } from "./util";
import { GroupVisibilitySwitch } from "./visibility-switch";

export default async function Settings({
  params,
}: {
  params: Promise<{ groupId: string }>;
}) {
  const { groupId } = await params;
  const user = await assertAuthenticated();
  const groupIdInt = parseInt(groupId);
  const group = await getGroupByIdUseCase(user, groupIdInt);

  if (!group) {
    return <div>Group not found</div>;
  }

  return (
    <div className="space-y-8">
      <h1 className={`${pageTitleStyles} text-center md:text-left`}>
        Group Settings
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ConfigurationPanel title={"Group Image"}>
          <div className="flex flex-col gap-8">
            <Image
              src={getGroupImageUrl(group)}
              width={200}
              height={200}
              className="w-full h-[100px] object-cover"
              alt="image of the group"
            />
            <p className="dark:text-gray-400 text-sm">
              Upload a group image to make your group stand out.
            </p>
            {/* <BannerUploadForm groupId={group.id} /> */}
          </div>
        </ConfigurationPanel>

        {/* <ConfigurationPanel title={"Group Name"}>
          <GroupNameForm groupId={group.id} groupName={group?.name ?? ""} />
        </ConfigurationPanel> */}

        <ConfigurationPanel title={"Group Visibility"}>
          <div className="flex flex-col gap-8">
            <p className="dark:text-gray-400 text-sm">
              Groups are private by default. If you want random people on the
              internet to find and join your group without an invite, switch
              this to on.
            </p>
            <GroupVisibilitySwitch group={group} />
          </div>
        </ConfigurationPanel>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ConfigurationPanel title={"Group Description"}>
          <GroupDescriptionForm
            groupId={group.id}
            description={group?.description ?? ""}
          />
        </ConfigurationPanel>

        <ConfigurationPanel title={"Social Links"}>
          <SocialLinksForm group={group} />
        </ConfigurationPanel>
      </div> */}
    </div>
  );
}
