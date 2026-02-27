"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";
import { Toaster } from "./ui/toaster";
import SearchParamsWatcher from "./search-params-watcher";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      {children}
      <Toaster />
      <SearchParamsWatcher />
    </SessionProvider>
  );
}
