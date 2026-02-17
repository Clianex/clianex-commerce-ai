import { prisma } from "@/lib/prisma";
import { PurchaseStatus } from "@prisma/client";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

/**
 * Dashboard Billing Page
 * ----------------------
 * - Lista compras del usuario
 * - Estado tipado correctamente con PurchaseStatus (evita errores TS)
 * - Preparado para Stripe Webhooks ya implementados
 */

export default async function BillingPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const purchases = await prisma.purchase.findMany({
    where: { clerkUserId: userId },
    include: { module: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-2xl font-semibold">Billing</h1>
        <p className="text-sm text-muted-foreground">
          Historial de compras y licencias activas
        </p>
      </div>

      <div className="rounded-xl border">
        <table className="w-full text-sm">
          <thead className="border-b bg-muted/40">
            <tr>
              <th className="p-4 text-left">Módulo</th>
              <th className="p-4 text-left">Importe</th>
              <th className="p-4 text-left">Estado</th>
              <th className="p-4 text-left">Fecha</th>
            </tr>
          </thead>

          <tbody>
            {purchases.length === 0 && (
              <tr>
                <td className="p-6 text-muted-foreground" colSpan={4}>
                  No hay compras todavía.
                </td>
              </tr>
            )}

            {purchases.map((purchase) => (
              <tr key={purchase.id} className="border-b">
                <td className="p-4 font-medium">{purchase.module.name}</td>

                <td className="p-4">
                  {(purchase.amount / 100).toFixed(2)} {purchase.currency.toUpperCase()}
                </td>

                <td className="p-4">
                  <StatusBadge status={purchase.status} />
                </td>

                <td className="p-4 text-muted-foreground">
                  {new Date(purchase.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* STATUS BADGE (TIPADO CORRECTO)                                              */
/* -------------------------------------------------------------------------- */

function StatusBadge({ status }: { status: PurchaseStatus }) {
  /**
   * MUY IMPORTANTE:
   * El Record está tipado con PurchaseStatus
   * → evita el error:
   * "string can't be used to index type"
   */
  const map: Record<PurchaseStatus, string> = {
    PAID: "bg-green-500/10 text-green-600",
    REFUNDED: "bg-yellow-500/10 text-yellow-600",
    FAILED: "bg-red-500/10 text-red-600",
  };

  return (
    <span className={`rounded-full px-3 py-1 text-xs font-medium ${map[status]}`}>
      {status}
    </span>
  );
}
