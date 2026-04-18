import { useRef, useState } from 'react';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  }
  return (
    <section className="c-space my-20" id="contact">

      <div className="relative min-h-screen flex items-center justify-center flex-col">

        <img
          src="/assets/terminal.png"
          alt="bg"
          className="absolute inset-0 min-h-screen object-cover opacity-20"
        />

        <div className="contact-container relative z-10">

          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Let's talk
          </h3>

          <p className="text-gray-400 mt-3 text-sm sm:text-base">
            Whether you’re looking to build a new website or project, I’m here to help.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col space-y-5"
          >

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Full Name"
              className="bg-black/40 p-3 rounded-md text-white outline-none"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Email"
              className="bg-black/40 p-3 rounded-md text-white outline-none"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Your Message..."
              className="bg-black/40 p-3 rounded-md text-white outline-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-500 hover:bg-blue-600 transition p-3 rounded-md text-white flex items-center justify-center gap-2"
            >
              {loading ? "Sending..." : "Send Message"}

              <img
                src="/assets/arrow-up.png"
                className="w-4 h-4"
              />
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;