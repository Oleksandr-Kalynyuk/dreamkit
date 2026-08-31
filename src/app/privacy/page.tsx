import Link from "next/link";
import {
  ArrowLeft,
  Shield,
  Mail,
} from "lucide-react";

export const metadata = {
  title: "Privacy Policy | DreamKit UI",
  description:
    "Privacy Policy for DreamKit UI.",
};

export default function PrivacyPolicyPage() {
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
              <Shield className="h-5 w-5 text-amber-300" />
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.18em] text-amber-300/70">
                Legal
              </p>

              <h1 className="mt-1 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Privacy Policy
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
            Welcome to our UI Library platform (the &quot;Service&quot;). This Privacy
            Policy explains how we collect, use, and protect your personal
            information when you use our website, download or copy our UI
            elements, dashboards, or subscribe to our newsletter.
          </p>

          <p className="mt-5 text-sm leading-7 text-zinc-400">
            We respect your privacy and are committed to protecting your
            personal data in accordance with applicable data protection laws,
            including the General Data Protection Regulation (GDPR) and the
            California Consumer Privacy Act (CCPA), where applicable.
          </p>
        </div>

        {/* Content */}
        <article className="space-y-12 text-sm leading-7 text-zinc-400">
          <section>
            <SectionTitle number="01">
              Data We Collect and How We Collect It
            </SectionTitle>

            <p className="mt-5">
              We only collect the minimum amount of data necessary to provide
              our UI components and services.
            </p>

            <SubTitle>
              A. Information You Provide to Us Voluntarily
            </SubTitle>

            <ul className="mt-4 list-disc space-y-3 pl-5 marker:text-amber-300/60">
              <li>
                <strong className="text-zinc-200">
                  Newsletter &amp; Waitlist Sign-up:
                </strong>{" "}
                If you subscribe to our updates before or after our official
                launch, we collect your Email address and Name.
              </li>

              <li>
                <strong className="text-zinc-200">
                  Account Registration:
                </strong>{" "}
                When you register an account to access premium elements, we
                may collect your Name, Email address, and account credentials.
              </li>
            </ul>

            <SubTitle>
              B. Information Collected Automatically
            </SubTitle>

            <ul className="mt-4 list-disc space-y-3 pl-5 marker:text-amber-300/60">
              <li>
                <strong className="text-zinc-200">
                  Usage Data:
                </strong>{" "}
                We may track which UI elements, code snippets, or dashboards
                are copied or downloaded in order to improve the library.
              </li>

              <li>
                <strong className="text-zinc-200">
                  Technical Log Data:
                </strong>{" "}
                Our hosting providers may automatically process standard
                technical information, such as IP address, browser type, and
                operating system, for security and system stability.
              </li>
            </ul>

            <SubTitle>
              C. Cookies
            </SubTitle>

            <p className="mt-4">
              We may use cookies and similar technologies to keep you logged
              into your account, remember interface preferences, and analyze
              website traffic. You can disable cookies in your browser
              settings, although some features may stop working correctly.
            </p>
          </section>

          <section>
            <SectionTitle number="02">
              How We Use Your Data
            </SectionTitle>

            <ul className="mt-5 list-disc space-y-3 pl-5 marker:text-amber-300/60">
              <li>
                To deliver, maintain, and improve our UI library and code
                components.
              </li>

              <li>
                To send product updates, newsletters, and promotional offers
                where you have provided the appropriate consent.
              </li>

              <li>
                To detect, prevent, and address technical issues or security
                threats.
              </li>
            </ul>
          </section>

          <section>
            <SectionTitle number="03">
              Third-Party Service Providers and Payment Processing
            </SectionTitle>

            <p className="mt-5">
              We do not sell your personal data. We may share necessary
              information with trusted third-party service providers that
              help us operate the Service.
            </p>

            <SubTitle>
              Payment Processing
            </SubTitle>

            <p className="mt-4">
              Paid subscriptions and financial transactions are intended to be
              handled by our merchant of record, PayPro Global. Depending on
              the transaction, PayPro Global may process billing and
              geographic information needed to complete the purchase and
              determine applicable taxes.
            </p>

            <SubTitle>
              Hosting &amp; Infrastructure
            </SubTitle>

            <p className="mt-4">
              Our website and code repositories may be hosted using services
              such as GitHub, Vercel, or other infrastructure providers.
            </p>

            <SubTitle>
              Artificial Intelligence Features
            </SubTitle>

            <p className="mt-4">
              If we introduce AI features that generate or customize UI code,
              prompts may be processed through third-party AI APIs. We will
              disclose applicable providers and processing practices as those
              features become available.
            </p>
          </section>

          <section>
            <SectionTitle number="04">
              Data Retention
            </SectionTitle>

            <p className="mt-5">
              We retain personal information only for as long as reasonably
              necessary to fulfill the purposes described in this policy or
              where retention is required by law. If you unsubscribe from
              marketing communications, your email may be removed from active
              marketing lists, subject to legitimate operational or legal
              retention requirements.
            </p>
          </section>

          <section>
            <SectionTitle number="05">
              Your Rights
            </SectionTitle>

            <p className="mt-5">
              Depending on your location and applicable law, you may have
              rights regarding your personal data, including:
            </p>

            <ul className="mt-4 list-disc space-y-3 pl-5 marker:text-amber-300/60">
              <li>
                <strong className="text-zinc-200">
                  Right to Access:
                </strong>{" "}
                request a copy of personal data we hold about you.
              </li>

              <li>
                <strong className="text-zinc-200">
                  Right to Correction:
                </strong>{" "}
                request that inaccurate information be updated or corrected.
              </li>

              <li>
                <strong className="text-zinc-200">
                  Right to Deletion:
                </strong>{" "}
                request deletion of personal information where applicable.
              </li>

              <li>
                <strong className="text-zinc-200">
                  Right to Opt-Out:
                </strong>{" "}
                unsubscribe from marketing communications at any time.
              </li>
            </ul>

            <p className="mt-5">
              To exercise an applicable privacy right, contact us using the
              address provided below.
            </p>
          </section>

          <section>
            <SectionTitle number="06">
              International Data Transfers
            </SectionTitle>

            <p className="mt-5">
              As a global service, information may be transferred to and
              processed in countries outside your home region. Where required,
              we will use appropriate safeguards and transfer mechanisms
              recognized by applicable data protection law.
            </p>
          </section>

          <section>
            <SectionTitle number="07">
              Changes to This Privacy Policy
            </SectionTitle>

            <p className="mt-5">
              We may update this Privacy Policy from time to time to reflect
              changes to the product, service providers, or applicable legal
              obligations. We will update the &quot;Last Updated&quot; date when the
              policy changes.
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
                    Privacy contact
                  </p>

                  <p className="mt-2 text-sm text-zinc-300">
                    dreamkitsupport@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </section>
        </article>

        <BackToTop />
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

function BackToTop() {
  return (
    <div className="mt-16 border-t border-white/[0.07] pt-8">
      <Link
        href="/"
        className="text-xs text-zinc-600 transition-colors hover:text-zinc-300"
      >
        ← Back to DreamKit
      </Link>
    </div>
  );
}