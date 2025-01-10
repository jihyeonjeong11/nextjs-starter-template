"use client";
import { EditorProvider } from "@tiptap/react";
import { useRef } from "react";
import {
  extensions,
  MenuBar,
} from "../../groups/[groupId]/info/edit-group-info-form";

export function EditBioForm({ bio }: { bio: string }) {
  const htmlRef = useRef<string>(bio);

  return (
    <div className="w-full space-y-4">
      <EditorProvider
        onUpdate={({ editor }) => {
          htmlRef.current = editor.getHTML();
        }}
        slotBefore={<MenuBar />}
        extensions={extensions}
        content={bio}
        editable={true}
      ></EditorProvider>
    </div>
  );
}
