import Link from "next/link";
import {
  ArrowLeft,
  FileText,
  Mail,
  ShieldCheck,
} from "lucide-react";

export const metadata = {
  title: "Terms of Service | DreamKit UI",
  description: "Terms of Service for DreamKit UI.",
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-[#070709] text-zinc-100">
      <div className="mx-auto max-w-4xl px-6 py-20 sm:py-28">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 text-xs text-zinc-600 transition-colors hover:text-zinc-300"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to DreamKit
          </Link>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-300/10 bg-amber-300/[0.05]">
              <FileText className="h-5 w-5 text-amber-300" />
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.18em] text-amber-300/70">
                Legal
              </p>

              <h1 className="mt-1 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Terms of Service
              </h1>
            </div>
          </div>

          <p className="mt-5 text-sm text-zinc-600">
            Last Updated: August 29, 2026
          </p>
        </div>

        {/* Intro */}
        <div className="mb-12 rounded-2xl border border-white/[0.07] bg-white/[0.015] p-6 sm:p-8">
          <p className="text-sm leading-7 text-zinc-400">
            Welcome to DreamKit UI (the &quot;Service&quot;, &quot;Platform&quot;, &quot;we&quot;, or
            &quot;our&quot;). By accessing our website, using our UI elements,
            dashboards, components, or copying our code (collectively, the
            &quot;Components&quot;), you agree to be bound by these Terms of Service
            (&quot;Terms&quot;).
          </p>

          <p className="mt-5 text-sm leading-7 text-zinc-400">
            If you do not agree to these Terms, please do not use our Platform
            or Components.
          </p>
        </div>

        {/* Content */}
        <article className="space-y-12 text-sm leading-7 text-zinc-400">
          <section>
            <SectionTitle number="01">
              License and Permitted Use
            </SectionTitle>

            <p className="mt-5">
              Subject to your compliance with these Terms and any applicable
              component-specific license, DreamKit UI grants you a
              non-exclusive, non-transferable license to use its Free and
              Premium Components for permitted projects.
            </p>

            <SubTitle>
              What You CAN Do
            </SubTitle>

            <ul className="mt-4 list-disc space-y-3 pl-5 marker:text-amber-300/60">
              <li>
                Use the Components to build personal, educational, or
                commercial websites and applications.
              </li>

              <li>
                Use the Components to build websites and projects for clients.
              </li>

              <li>
                Modify, customize, and alter the code for the needs of your
                specific project.
              </li>
            </ul>

            <SubTitle>
              What You CANNOT Do
            </SubTitle>

            <ul className="mt-4 list-disc space-y-3 pl-5 marker:text-amber-300/60">
              <li>
                Redistribute, resell, lease, license, or sublicense the
                Components as standalone items, as a template, or as part of a
                competing UI library, toolkit, or page builder.
              </li>

              <li>
                Package DreamKit source code, rename it under your own brand,
                or represent the original library as your own product for
                public distribution.
              </li>

              <li>
                Create a tool or application that allows end users to build
                their own websites using DreamKit Components as a substitute
                for DreamKit itself.
              </li>
            </ul>

            <div className="mt-5 rounded-2xl border border-amber-300/10 bg-amber-300/[0.025] p-5 text-sm text-zinc-300">
              You are welcome to use DreamKit UI to make your own applications
              and client projects look better. You may not resell DreamKit&apos;s
              source code itself as a competing product.
            </div>
          </section>

          <section>
            <SectionTitle number="02">
              Intellectual Property
            </SectionTitle>

            <p className="mt-5">
              Subject to licenses explicitly granted for individual
              Components, original designs, source code, layouts, branding,
              logos, graphics, and the compilation of the DreamKit UI library
              remain the intellectual property of the Platform creator.
            </p>

            <p className="mt-4">
              Your use of the Service does not transfer ownership of the
              underlying DreamKit UI library or its branding to you.
            </p>
          </section>

          <section>
            <SectionTitle number="03">
              Subscription, Lifetime Access, and Billing
            </SectionTitle>

            <p className="mt-5">
              When paid access is available, DreamKit may offer recurring
              subscription plans and one-time lifetime access products.
            </p>

            <SubTitle>
              Pricing Models
            </SubTitle>

            <p className="mt-4">
              Pricing, billing intervals, included features, and future
              updates will be displayed clearly at the time of purchase.
            </p>

            <SubTitle>
              Payment Processing
            </SubTitle>

            <p className="mt-4">
              Financial transactions may be processed through our merchant of
              record, PayPro Global, which may handle payment processing,
              applicable taxes, billing records, and related transaction
              services.
            </p>

            <SubTitle>
              Refunds
            </SubTitle>

            <p className="mt-4">
              Any applicable refund rights or policies will be displayed at
              checkout and may also be governed by the merchant of record&apos;s
              purchase terms. Nothing in these Terms is intended to remove
              consumer rights that cannot lawfully be excluded.
            </p>
          </section>

          <section>
            <SectionTitle number="04">
              AI-Generated Content
            </SectionTitle>

            <p className="mt-5">
              DreamKit may introduce AI features that allow users to generate,
              customize, or modify UI code based on prompts.
            </p>

            <ul className="mt-4 list-disc space-y-3 pl-5 marker:text-amber-300/60">
              <li>
                You are responsible for your prompts and for reviewing
                generated output before using it.
              </li>

              <li>
                You are responsible for ensuring that your inputs and
                resulting code do not violate third-party rights or applicable
                laws.
              </li>
            </ul>
          </section>

          <section>
            <SectionTitle number="05">
              Disclaimer of Warranties
            </SectionTitle>

            <div className="mt-5 rounded-2xl border border-white/[0.07] bg-white/[0.015] p-5">
              <p className="uppercase leading-7 tracking-[0.02em] text-zinc-300">
                THE SERVICE AND COMPONENTS ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS
                AVAILABLE&quot; BASIS, TO THE MAXIMUM EXTENT PERMITTED BY
                APPLICABLE LAW.
              </p>
            </div>

            <p className="mt-5">
              DreamKit UI does not guarantee that every Component will be
              error-free, bug-free, or compatible with every third-party
              framework, browser, operating system, or project configuration.
            </p>

            <p className="mt-4">
              You are responsible for testing and integrating Components into
              your projects.
            </p>
          </section>

          <section>
            <SectionTitle number="06">
              Termination
            </SectionTitle>

            <p className="mt-5">
              We may suspend or terminate access to the Platform or premium
              features where reasonably necessary to address serious
              violations of these Terms, including unauthorized redistribution
              of restricted source code or misuse of the Service.
            </p>
          </section>

          <section>
            <SectionTitle number="07">
              Changes to These Terms
            </SectionTitle>

            <p className="mt-5">
              We may update these Terms from time to time to reflect changes
              in DreamKit, payment arrangements, features, or applicable legal
              requirements. We will post updated Terms on this page and update
              the &quot;Last Updated&quot; date.
            </p>
          </section>

          <section>
            <SectionTitle number="08">
              Contact Us
            </SectionTitle>

            <div className="mt-5 rounded-2xl border border-white/[0.07] bg-white/[0.015] p-5">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />

                <div>
                  <p className="text-xs uppercase tracking-[0.12em] text-zinc-600">
                    Support
                  </p>

                  <p className="mt-2 text-sm text-zinc-300">
                    dreamkitsupport@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </section>
        </article>

        <div className="mt-16 border-t border-white/[0.07] pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/"
              className="text-xs text-zinc-600 transition-colors hover:text-zinc-300"
            >
              ← Back to DreamKit
            </Link>

            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.12em] text-zinc-700">
              <ShieldCheck className="h-3.5 w-3.5" />
              DreamKit UI
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function SectionTitle({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-baseline gap-3 border-b border-white/[0.07] pb-4">
      <span className="font-mono text-[10px] text-amber-300/60">
        {number}
      </span>

      <h2 className="text-lg font-semibold tracking-[-0.02em] text-zinc-100 sm:text-xl">
        {children}
      </h2>
    </div>
  );
}

function SubTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h3 className="mt-7 text-sm font-semibold text-zinc-200">
      {children}
    </h3>
  );
}