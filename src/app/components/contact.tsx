const Contact = () => {
  return (
    <section id="contact" className="flex flex-col pt-24">
      <h3 className="text-xl font-semibold mb-2">Contact</h3>

      <div className="rounded-2xl border border-zinc-800 bg-linear-to-b from-[#121212] to-[#0b0b0b] p-6">
        <p className="text-zinc-300 max-w-xl">
          Building something interesting or have an opportunity in mind? I'm
          always open to discussing new ideas, collaborations, or roles.
        </p>

        <div className="mt-6 flex flex-col gap-3 text-sm">
          <a
            href="mailto:pranavpokale99@gmail.com"
            className="flex items-center justify-between rounded-lg border border-zinc-800 px-4 py-3 hover:border-zinc-600 transition"
          >
            <span>Email</span>
            <span className="text-zinc-400">pranavpokale99@gmail.com</span>
          </a>

          {/* <a
            href="https://github.com/merlin9900"
            target="_blank"
            className="flex items-center justify-between rounded-lg border border-zinc-800 px-4 py-3 hover:border-zinc-600 transition"
          >
            <span>GitHub</span>
            <span className="text-zinc-400">@merlin9900</span>
          </a> */}

          <a
            href={"https://www.linkedin.com/in/pranavpokale"}
            target="_blank"
            className="flex items-center justify-between rounded-lg border border-zinc-800 px-4 py-3 hover:border-zinc-600 transition"
          >
            <span>LinkedIn</span>
            <span className="text-zinc-400">Let's connect</span>
          </a>

          <a
            href={"https://discord.com/users/merlin99"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-lg border border-zinc-800 px-4 py-3 hover:border-zinc-600 transition"
          >
            <span>Discord</span>
            <span className="text-zinc-400">Say hi</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
