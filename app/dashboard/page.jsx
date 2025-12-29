import { auth } from "@clerk/nextjs";

export default function Dashboard() {
  const { userId } = auth();

  return (
    <main style={{ padding: 40 }}>
      <h1>Dashboard</h1>
      <p>User ID: {userId}</p>
    </main>
  );
}
