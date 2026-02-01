import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { hasModuleAccess } from "@/lib/permissions";

export default async function BillingPage() {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const allowed = await hasModuleAccess(userId, "billing");

  if (!allowed) {
    redirect("/dashboard/modules");
  }

  return (
    <div>
      <h1 className="text-4xl font-bold">Billing</h1>
      {/* contenido real */}
    </div>
  );
}
