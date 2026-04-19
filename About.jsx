export default function About() {
  return (
    <section className="section grid md:grid-cols-2 gap-10 items-center">
      <img src="/profile.jpg" className="rounded-xl" />

      <div>
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-400">
          I'm Lakshay Mahur, a Product Designer focused on building scalable
          digital experiences combining UX and product thinking.
        </p>
      </div>
    </section>
  );
}
