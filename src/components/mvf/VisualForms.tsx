import { siteEmail } from "@/data/mvf-content";

export function ContactFormVisual() {
  return (
    <form className="grid gap-8" aria-label="Contact form visual mockup">
      <div className="grid gap-8 md:grid-cols-2">
        <Field label="First Name *" id="first-name" />
        <Field label="Last Name *" id="last-name" />
      </div>
      <Field label="Email *" id="email" type="email" />
      <Field label="Subject" id="subject" />
      <label className="grid gap-4 text-lg font-bold text-mvf-grey" htmlFor="message">
        Type your message
        <textarea
          id="message"
          rows={6}
          className="resize-none border-0 border-b border-mvf-line bg-transparent px-0 py-3 text-mvf-ink outline-none"
        />
      </label>
      <button type="button" className="mx-auto mt-2 text-lg font-medium text-mvf-blue">
        Send
      </button>
    </form>
  );
}

export function DonationPlaceholder() {
  return (
    <div className="grid gap-8 text-mvf-ink md:grid-cols-2">
      <section>
        <h2 className="text-3xl font-bold text-mvf-grey">Let&apos;s Make A Change</h2>
        <p className="mt-6 text-lg leading-8">Here are some ways you can donate:</p>
      </section>
      <section className="border-l-0 border-mvf-border md:border-l md:pl-12">
        <h3 className="text-xl font-bold">In Person</h3>
        <p className="mt-5 leading-7">Moonee Valley Foundation</p>
        <h3 className="mt-10 text-xl font-bold">Email Us</h3>
        <a className="mt-5 block underline" href={`mailto:${siteEmail}`}>
          {siteEmail}
        </a>
      </section>
    </div>
  );
}

function Field({ label, id, type = "text" }: { label: string; id: string; type?: string }) {
  return (
    <label className="grid gap-4 text-lg font-bold text-mvf-grey" htmlFor={id}>
      {label}
      <input id={id} type={type} className="border-0 border-b border-mvf-line bg-transparent px-0 py-3 text-mvf-ink outline-none" />
    </label>
  );
}
