export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Navbar */}
      <nav className="sticky top-0 z-50 flex justify-between items-center px-8 py-5 backdrop-blur-md bg-black/30 border-b border-white/10">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          MedAce AI
        </h1>
        <div className="flex items-center gap-6">
  <a href="/" className="hover:text-cyan-400">
    Home
  </a>

  <a href="/mbbs" className="hover:text-cyan-400">
    MBBS
  </a>

  <a href="#" className="hover:text-cyan-400">
    NEET PG
  </a>

  <a href="#" className="hover:text-cyan-400">
    Books
  </a>
          <button className="px-4 py-2 border border-white/20 rounded-lg hover:bg-white/10 transition">
            Login
          </button>

          <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:scale-105 transition">
            Sign Up
          </button>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-slate-950/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8">

          <h1 className="text-6xl md:text-8xl font-extrabold leading-tight">
            Ace Your
            <br />
            Medical Exams
          </h1>

          <h2 className="mt-6 text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Smarter Preparation.
            <br />
            Better Results.
          </h2>

          <p className="mt-8 text-xl text-gray-300 max-w-2xl">
            One platform for NEET PG, INI-CET, FMGE & USMLE preparation with
            AI-powered analytics and smart learning.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 font-semibold hover:scale-105 transition">
              Start Learning Free
            </button>

            <button className="px-8 py-4 rounded-xl border border-white/20 backdrop-blur-md hover:bg-white/10 transition">
              Explore Features
            </button>
          </div>

        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-8 -mt-16 relative z-20">
        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center">
            <h2 className="text-5xl font-bold text-blue-400">50K+</h2>
            <p className="text-gray-300 mt-2">Students</p>
          </div>

          <div className="bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center">
            <h2 className="text-5xl font-bold text-cyan-400">10K+</h2>
            <p className="text-gray-300 mt-2">MCQs</p>
          </div>

          <div className="bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center">
            <h2 className="text-5xl font-bold text-purple-400">500+</h2>
            <p className="text-gray-300 mt-2">Mock Tests</p>
          </div>

        </div>
      </section>

      {/* Exams */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <h2 className="text-5xl font-bold text-center mb-16">
          Exams We Cover
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {[
            { name: "NEET PG", icon: "🩺" },
            { name: "INI-CET", icon: "📋" },
            { name: "USMLE", icon: "⚕️" },
            { name: "FMGE", icon: "💊" },
          ].map((exam) => (
            <div
              key={exam.name}
              className="bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-blue-500/50 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-5xl mb-4">{exam.icon}</div>

              <h3 className="text-2xl font-bold">
                {exam.name}
              </h3>

              <p className="mt-4 text-gray-300">
                Dedicated question bank, mock tests and AI guidance.
              </p>

              <button className="mt-6 text-cyan-400 font-semibold">
                Explore →
              </button>
            </div>
          ))}

        </div>
      </section>
{/* ========================================== */}
{/* MBBS Learning Hub */}
{/* ========================================== */}

<section className="max-w-7xl mx-auto px-8 py-24">

<h2 className="text-5xl font-bold text-center mb-4">
MBBS Learning Hub
</h2>

<p className="text-center text-gray-400 mb-16">
Complete resources according to NMC CBME Curriculum
</p>

<div className="grid md:grid-cols-4 gap-8">

{/* First Year */}

<div className="bg-slate-900/70 backdrop-blur-xl rounded-3xl border border-white/10 p-8 hover:border-blue-500 transition">

<div className="text-5xl mb-4">📘</div>

<h3 className="text-3xl font-bold mb-4">
1st Year MBBS
</h3>

<ul className="space-y-2 text-gray-300">

<li>🦴 Anatomy</li>
<li>🫀 Physiology</li>
<li>🧬 Biochemistry</li>

</ul>

<h4 className="mt-6 text-blue-400 font-bold">
Recommended Books
</h4>

<ul className="mt-3 space-y-1 text-sm text-gray-400">

<li>• B.D. Chaurasia</li>
<li>• Gray's Anatomy for Students</li>
<li>• Vishram Singh</li>
<li>• Guyton & Hall</li>
<li>• Ganong</li>
<li>• AK Jain Physiology</li>
<li>• Satyanarayana Biochemistry</li>
<li>• Harper's Biochemistry</li>
<li>• Vasudevan</li>

</ul>

</div>

{/* Second Year */}

<div className="bg-slate-900/70 backdrop-blur-xl rounded-3xl border border-white/10 p-8 hover:border-cyan-500 transition">

<div className="text-5xl mb-4">🧫</div>

<h3 className="text-3xl font-bold mb-4">
2nd Year MBBS
</h3>

<ul className="space-y-2 text-gray-300">

<li>🔬 Pathology</li>
<li>💊 Pharmacology</li>
<li>🦠 Microbiology</li>

</ul>

<h4 className="mt-6 text-cyan-400 font-bold">
Recommended Books
</h4>

<ul className="mt-3 space-y-1 text-sm text-gray-400">

<li>• Robbins Basic Pathology</li>
<li>• Harsh Mohan</li>
<li>• K.D. Tripathi</li>
<li>• Katzung</li>
<li>• Apurba Sastry</li>
<li>• Ananthanarayan</li>

</ul>

</div>

{/* Third Year */}

<div className="bg-slate-900/70 backdrop-blur-xl rounded-3xl border border-white/10 p-8 hover:border-purple-500 transition">

<div className="text-5xl mb-4">🏥</div>

<h3 className="text-3xl font-bold mb-4">
3rd Year MBBS
</h3>

<ul className="space-y-2 text-gray-300">

<li>🌍 Community Medicine</li>
<li>⚖️ Forensic Medicine</li>
<li>👁️ Ophthalmology</li>
<li>👂 ENT</li>

</ul>

<h4 className="mt-6 text-purple-400 font-bold">
Recommended Books
</h4>

<ul className="mt-3 space-y-1 text-sm text-gray-400">

<li>• Park PSM</li>
<li>• Parikh FMT</li>
<li>• Khurana Ophthalmology</li>
<li>• Dhingra ENT</li>

</ul>

</div>

{/* Final Year */}

<div className="bg-slate-900/70 backdrop-blur-xl rounded-3xl border border-white/10 p-8 hover:border-pink-500 transition">

<div className="text-5xl mb-4">⚕️</div>

<h3 className="text-3xl font-bold mb-4">
Final Year MBBS
</h3>

<ul className="space-y-2 text-gray-300">

<li>❤️ Medicine</li>
<li>🔪 Surgery</li>
<li>👶 Pediatrics</li>
<li>🤰 Obstetrics & Gynaecology</li>

</ul>

<h4 className="mt-6 text-pink-400 font-bold">
Recommended Books
</h4>

<ul className="mt-3 space-y-1 text-sm text-gray-400">

<li>• Harrison's Medicine</li>
<li>• Davidson's Medicine</li>
<li>• Bailey & Love</li>
<li>• SRB Surgery</li>
<li>• D.C. Dutta</li>
<li>• Ghai Pediatrics</li>

</ul>

</div>

</div>

</section>
      {/* Features */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <h2 className="text-5xl font-bold text-center mb-16">
          Why Choose MedAce AI?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-cyan-400">
              10,000+ MCQs
            </h3>

            <p className="mt-4 text-gray-300">
              High-quality exam-focused questions with detailed explanations.
            </p>
          </div>

          <div className="bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-blue-400">
              Mock Tests
            </h3>

            <p className="mt-4 text-gray-300">
              Real exam simulation with detailed performance analysis.
            </p>
          </div>

          <div className="bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-purple-400">
              AI Analytics
            </h3>

            <p className="mt-4 text-gray-300">
              Identify weak subjects and improve faster with AI insights.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-blue-900/60 to-purple-900/60 p-12">

          <h2 className="text-5xl font-bold">
            Join Thousands of Successful Aspirants
          </h2>

          <p className="mt-6 text-xl text-gray-300">
            Begin your journey with MedAce AI today.
          </p>

          <button className="mt-8 px-10 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 font-semibold hover:scale-105 transition">
            Join MedAce AI
          </button>

        </div>

      </section>

    </main>
  );
}