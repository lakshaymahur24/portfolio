export default function About() {
  return (
    <section className="section grid md:grid-cols-2 gap-12 items-center">

      <img
        src="/profile.jpg"
        className="rounded-2xl"
      />

      <div>
        <h2 className="text-4xl font-bold mb-4">About Me</h2>

        <p className="text-gray-400 text-lg leading-relaxed">
          I’m Lakshay Mahur, a Product Designer focused on building
          scalable digital experiences combining UX and product thinking.
        </p>
      </div>

    </section>
  );
}
