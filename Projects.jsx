export default function Projects() {
  return (
    <section id="work" className="section">
      <h2 className="text-4xl font-bold mb-10">Selected Work</h2>

      <div className="space-y-6">
        <div className="p-6 border rounded-xl">
          <h3 className="text-2xl font-semibold">Spotify Case Study</h3>
          <p className="text-gray-400">Product strategy & UX improvements</p>
        </div>

        <div className="p-6 border rounded-xl">
          <h3 className="text-2xl font-semibold">Splitwise Redesign</h3>
          <p className="text-gray-400">Finance UX redesign</p>
        </div>

        <div className="p-6 border rounded-xl">
          <h3 className="text-2xl font-semibold">Learn It</h3>
          <p className="text-gray-400">Learning product UX</p>
        </div>
      </div>
    </section>
  );
}
