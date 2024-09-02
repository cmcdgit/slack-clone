//opens a boundary between server and client
"use client";

import { CreateWorkspaceModal } from "@/features/workspaces/components/create-workspace-modal";
import { useEffect, useState } from "react";

export const Modals = () => {
  // potential hydration error start--->
  // fix for jotai implementation that only renders modals if in client side rendering
  const [mounted, setMounted] = useState(false);

  // useEffect can only be called on client side rendering CSR
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  // <---end

  return (
    <>
      <CreateWorkspaceModal />
    </>
  );
};
