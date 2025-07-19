"use client";
import ClientNavbar from "@/components/ClientNavbar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ClientNavbar />
      <main>{children}</main>
    </>
  );
}
