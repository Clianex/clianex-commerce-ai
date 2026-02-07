import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-7xl px-6 py-4">
        {/* Hero */}
        <h1 className="text-5xl font-semibold tracking-tight">
          About Clianex
        </h1>

        <p className="mt-6 max-w-2xl text-neutral-400">
          Clianex is a modular AI commerce platform designed for automation,
          scalable growth, and enterprise-grade reliability. We help companies
          build intelligent commerce systems that adapt, scale, and perform at
          the highest level.
        </p>

        {/* CTAs */}
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

        {/* SEO Content */}
        <section className="mt-24 grid gap-16 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">
              A Modular AI Commerce Platform
            </h2>
            <p className="mt-4 text-neutral-400">
              Clianex is built around a modular architecture that allows
              businesses to compose their commerce stack using AI-powered
              components. This flexibility enables teams to automate processes,
              integrate new capabilities, and evolve their systems without
              friction.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              Automation That Scales With You
            </h2>
            <p className="mt-4 text-neutral-400">
              From operational workflows to customer interactions, Clianex uses
              artificial intelligence to reduce manual work and improve
              efficiency. Our platform is designed to scale seamlessly as your
              business grows, supporting complex enterprise use cases.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              Built for Enterprise Reliability
            </h2>
            <p className="mt-4 text-neutral-400">
              Reliability is a core principle at Clianex. We focus on performance,
              security, and availability to ensure that mission-critical commerce
              operations run smoothly in demanding enterprise environments.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              Our Vision
            </h2>
            <p className="mt-4 text-neutral-400">
              We believe the future of commerce is intelligent, automated, and
              modular. Clianex exists to give organizations the tools they need
              to build adaptive AI-driven commerce ecosystems that last.
            </p>
          </div>
		  
        </section> 
		
		<Footer /> 
		
      </main>

    </>
  );
}

