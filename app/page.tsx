export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 shadow-sm">
        <h1 className="text-2xl font-bold text-blue-600">MedAce AI</h1>

        <div className="space-x-4">
          <button className="px-4 py-2 border rounded-lg">
            Login
          </button>

          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center py-24 px-6">
        <h1 className="text-6xl font-bold">
          Ace Your Medical Exams
        </h1>

        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
          One platform for NEET PG, INI-CET, FMGE and USMLE preparation with
          AI-powered analytics and smart learning.
        </p>

        <button className="mt-10 bg-blue-600 text-white px-8 py-4 rounded-xl text-lg">
          Start Free
        </button>
      </section>
{/* Student Stats */}
<div className="grid md:grid-cols-3 gap-6 px-8 py-10">
  <div className="text-center">
    <h2 className="text-4xl font-bold text-blue-600">10k+</h2>
    <p>Students</p>
  </div>

  <div className="text-center">
    <h2 className="text-4xl font-bold text-blue-600">10K+</h2>
    <p>MCQs</p>
  </div>

  <div className="text-center">
    <h2 className="text-4xl font-bold text-blue-600">500+</h2>
    <p>Mock Tests</p>
  </div>
</div>
      {/* Exam Cards */}
      <section className="grid md:grid-cols-4 gap-6 px-8 pb-20">
        {["NEET PG", "INI-CET", "USMLE", "FMGE"].map((exam) => (
          <div
            key={exam}
            className="p-8 rounded-2xl shadow-lg border hover:scale-105 transition"
          >
            <h2 className="text-2xl font-bold">{exam}</h2>
            <p className="mt-3 text-gray-600">
              Dedicated question bank and mock tests.
            </p>
          </div>
        ))}
      </section>

      {/* Features */}
      <section className="bg-gray-100 py-20 px-8">
        <h2 className="text-4xl font-bold text-center">
          Why Choose MedAce AI?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-xl">
            <h3 className="font-bold text-xl">10,000+ MCQs</h3>
            <p className="mt-2">Practice high-yield questions daily.</p>
          </div>

          <div className="bg-white p-6 rounded-xl">
            <h3 className="font-bold text-xl">Mock Tests</h3>
            <p className="mt-2">Real exam simulation experience.</p>
          </div>

          <div className="bg-white p-6 rounded-xl">
            <h3 className="font-bold text-xl">AI Analytics</h3>
            <p className="mt-2">
              Find weak subjects and improve faster.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}