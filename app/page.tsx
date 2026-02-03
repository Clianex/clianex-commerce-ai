import Header from "@/components/layout/Header";

export default function LandingPage() {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-7xl px-6 py-24">
        <h1 className="text-5xl font-semibold tracking-tight text-neutral">
          AI Commerce,
          <span className="block text-neutral-400">
            built for scale
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-neutral-400">
          Clianex is a modular AI commerce platform designed for automation,
          growth and enterprise reliability.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href="/marketplace"
            className="rounded-md bg-white px-6 py-3 text-sm font-medium text-black"
          >
            Explore marketplace
          </a>

          <a
            href="/dashboard"
            className="rounded-md border border-white/20 px-6 py-3 text-sm text-white"
          >
            Go to dashboard
          </a>
        </div>
      </main>
    </>
  );
}
