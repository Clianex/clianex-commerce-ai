export const dynamic = "force-dynamic";
import Header from "@/components/layout/Header";

export default function BlogPage() {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-7xl px-6 py-24">
        {/* Hero */}
        <h1 className="text-5xl font-semibold tracking-tight">
          Clianex Blog
        </h1>

        <p className="mt-6 max-w-2xl text-neutral-400">
          Insights, guides, and expert perspectives on AI commerce, automation,
          and enterprise technology. Learn how intelligent systems are shaping
          the future of scalable digital commerce.
        </p>

        {/* Intro SEO */}
        <section className="mt-16 max-w-3xl">
          <h2 className="text-2xl font-semibold">
            Insights on AI-Driven Commerce
          </h2>
          <p className="mt-4 text-neutral-400">
            The Clianex Blog is a knowledge hub for teams building modern commerce
            platforms with artificial intelligence. We explore topics such as
            modular AI architectures, automation strategies, enterprise
            scalability, and the evolving role of AI in digital business.
          </p>
        </section>

        {/* Categories / Topics */}
        <section className="mt-20 grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-medium">
              AI & Automation
            </h3>
            <p className="mt-3 text-neutral-400 text-sm">
              Practical applications of artificial intelligence, workflow
              automation, and intelligent systems in commerce and operations.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium">
              Commerce & Growth
            </h3>
            <p className="mt-3 text-neutral-400 text-sm">
              Strategies for scaling digital commerce platforms, improving
              performance, and driving sustainable business growth.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium">
              Enterprise Technology
            </h3>
            <p className="mt-3 text-neutral-400 text-sm">
              Architecture, reliability, and security insights for building
              enterprise-grade commerce and AI solutions.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-24">
          <a
            href="/blog/latest"
            className="inline-flex items-center rounded-md border border-white/20 px-6 py-3 text-sm text-white"
          >
            Read latest articles
          </a>
        </div>
      </main>
    </>
  );
}

