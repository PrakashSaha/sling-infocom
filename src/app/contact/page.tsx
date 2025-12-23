export default function ContactPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p className="mt-4 text-gray-600">Provide contact details or a contact form here for visitors to reach out.</p>
      <div className="mt-6 max-w-md">
        <label className="block">
          <span className="text-sm font-medium">Email</span>
          <input className="mt-1 p-2 w-full border rounded bg-white" placeholder="you@example.com" />
        </label>
        <label className="block mt-4">
          <span className="text-sm font-medium">Message</span>
          <textarea className="mt-1 p-2 w-full border rounded bg-white" rows={5} placeholder="How can we help?" />
        </label>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Send</button>
      </div>
    </main>
  );
}
