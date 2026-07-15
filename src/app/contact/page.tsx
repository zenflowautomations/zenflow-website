import { Navigation } from "@/components/navigation";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col noise-overlay relative">
      <Navigation />
      <main className="flex-1 pt-20">
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}