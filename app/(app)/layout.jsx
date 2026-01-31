import Header from "@/components/layout/Header";
import AppShell from "@/components/layout/AppShell";

export default function AppLayout({ children }) {
  return (
    <>
      <Header />
      <AppShell>{children}</AppShell>
    </>
  );
}
