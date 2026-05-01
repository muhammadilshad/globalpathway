import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { Mail, MapPin, Clock } from "lucide-react";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = buildMetadata({
  title: "Contact GlobalPathway — Report Errors, Suggest Tools",
  description:
    "Contact the GlobalPathway team to report data errors, suggest new tools, or ask general questions. We respond within 48 hours.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main>
      <div className="bg-[#f7f9fc] border-b border-[#e2e8f0] py-10">
        <Container narrow>
          <Breadcrumbs items={[{ label: "Contact" }]} />
          <h1 className="font-serif text-4xl font-bold text-[#0f1419] mt-4">Contact Us</h1>
          <p className="text-[#64748b] mt-2 text-lg">We read every message and reply within 48 hours.</p>
        </Container>
      </div>

      <Container narrow className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="md:col-span-3">
            <h2 className="font-serif text-xl font-semibold text-[#0f1419] mb-4">Send a Message</h2>
            <ContactForm />
          </div>

          <div className="md:col-span-2 space-y-5">
            <h2 className="font-serif text-xl font-semibold text-[#0f1419]">Get in Touch</h2>

            <div className="flex gap-3">
              <Mail className="h-4 w-4 text-[#64748b] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs font-semibold text-[#0f1419]">Email</p>
                <a href="mailto:hello@globalpathway.app" className="text-sm text-[#0f2a47] hover:underline">
                  hello@globalpathway.app
                </a>
              </div>
            </div>

            <div className="flex gap-3">
              <Clock className="h-4 w-4 text-[#64748b] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs font-semibold text-[#0f1419]">Response Time</p>
                <p className="text-sm text-[#64748b]">Within 48 hours on business days</p>
              </div>
            </div>

            <div className="flex gap-3">
              <MapPin className="h-4 w-4 text-[#64748b] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs font-semibold text-[#0f1419]">Address</p>
                <p className="text-sm text-[#64748b]">
                  GlobalPathway<br />
                  hello@globalpathway.app
                </p>
              </div>
            </div>

            <div className="p-4 bg-amber-50 border border-[#d97706]/20 rounded-md">
              <p className="text-xs text-[#64748b] leading-relaxed">
                <strong className="text-[#0f1419]">Important:</strong> We cannot provide immigration advice or answer questions about your specific case. For legal advice, please consult a licensed immigration attorney in your jurisdiction.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
