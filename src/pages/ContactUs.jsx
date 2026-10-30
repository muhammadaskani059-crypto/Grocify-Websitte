import Heading from '../components/Heading'

const ContactUs = () => {
  return (
    <main className="mx-auto max-w-350 px-10 pb-20 pt-36">
      <Heading highlight="Contact" heading="Us" />
      <div className="mx-auto mt-8 max-w-2xl text-center">
        <p className="text-lg leading-8 text-zinc-600">
          Have a question about an order or product? Send our team a message and we’ll be happy to help.
        </p>
        <p className="mt-3 text-zinc-600">
          You can also email us at{' '}
          <a className="font-semibold text-orange-500 hover:text-orange-600" href="mailto:support@grocify.com">
            support@grocify.com
          </a>
          .
        </p>
      </div>

      <form
        action="mailto:support@grocify.com"
        method="post"
        encType="text/plain"
        className="mx-auto mt-10 max-w-2xl space-y-5 rounded-2xl border border-orange-100 bg-white p-6 shadow-lg shadow-orange-100/50 sm:p-8"
      >
        <div>
          <label htmlFor="contact-name" className="mb-2 block font-semibold text-zinc-800">Name</label>
          <input
            id="contact-name"
            name="Name"
            type="text"
            autoComplete="name"
            required
            className="w-full rounded-lg border border-zinc-300 px-4 py-3 outline-none transition focus:border-orange-400"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-2 block font-semibold text-zinc-800">Email</label>
          <input
            id="contact-email"
            name="Email"
            type="email"
            autoComplete="email"
            required
            className="w-full rounded-lg border border-zinc-300 px-4 py-3 outline-none transition focus:border-orange-400"
          />
        </div>
        <div>
          <label htmlFor="contact-message" className="mb-2 block font-semibold text-zinc-800">Message</label>
          <textarea
            id="contact-message"
            name="Message"
            rows="5"
            required
            className="w-full resize-y rounded-lg border border-zinc-300 px-4 py-3 outline-none transition focus:border-orange-400"
          />
        </div>
        <button
          type="submit"
          className="rounded-full bg-orange-500 px-7 py-3 font-semibold text-white transition-colors hover:bg-orange-600"
        >
          Send message
        </button>
      </form>
    </main>
  )
}

export default ContactUs
