import { auth } from "@/auth";

export default async function ChatDashboardPage() {
  const session = await auth();
  return (
    <div style={{ color: "white", fontSize: "3rem" }}>
      {JSON.stringify(session)}
    </div>
  );
}
