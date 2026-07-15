export default function BooksPage() {
  const years = [
    {
      year: "MBBS First Year",
      subjects: [
        {
          name: "Anatomy",
          books: [
            "B.D. Chaurasia",
            "Vishram Singh",
            "Gray's Anatomy",
            "Netter Atlas",
            "Snell Anatomy",
          ],
        },
        {
          name: "Physiology",
          books: [
            "Guyton & Hall",
            "Ganong",
            "AK Jain",
            "Sembulingam",
          ],
        },
        {
          name: "Biochemistry",
          books: [
            "Harper",
            "Satyanarayana",
            "Vasudevan",
            "Lippincott",
          ],
        },
      ],
    },

    {
      year: "MBBS Second Year",
      subjects: [
        {
          name: "Pathology",
          books: [
            "Robbins Basic Pathology",
            "Harsh Mohan",
            "Ramdas Nayak",
          ],
        },
        {
          name: "Pharmacology",
          books: [
            "KDT (Katzung equivalent)",
            "Shanbhag",
            "Gobind Rai Garg",
          ],
        },
        {
          name: "Microbiology",
          books: [
            "Apurba Sastry",
            "Ananthanarayan",
            "Baveja",
          ],
        },
      ],
    },

    {
      year: "MBBS Third Year",
      subjects: [
        {
          name: "Community Medicine",
          books: [
            "Park's PSM",
            "Suryakantha",
          ],
        },
        {
          name: "Forensic Medicine",
          books: [
            "Reddy & Murthy",
            "Parikh",
          ],
        },
      ],
    },

    {
      year: "MBBS Final Year",
      subjects: [
        {
          name: "Medicine",
          books: [
            "Harrison's",
            "API Textbook",
            "Archit Boloor",
          ],
        },
        {
          name: "Surgery",
          books: [
            "Bailey & Love",
            "Manipal Manual of Surgery",
            "SRB Surgery",
          ],
        },
        {
          name: "Obstetrics & Gynaecology",
          books: [
            "DC Dutta",
            "Shaw's Textbook",
          ],
        },
        {
          name: "Pediatrics",
          books: [
            "Ghai Essential Pediatrics",
            "OP Ghai",
          ],
        },
        {
          name: "Orthopedics",
          books: [
            "Maheshwari",
            "Apley",
          ],
        },
        {
          name: "ENT",
          books: [
            "Dhingra",
            "Bhatia",
          ],
        },
        {
          name: "Ophthalmology",
          books: [
            "Khurana",
            "Parsons",
          ],
        },
        {
          name: "Dermatology",
          books: [
            "S Sacchidanand",
            "Rook's Dermatology",
          ],
        },
        {
          name: "Psychiatry",
          books: [
            "A Short Textbook of Psychiatry",
            "Kaplan & Sadock",
          ],
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-12">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-6xl font-bold text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          MBBS Books Library
        </h1>

        <p className="text-center text-gray-400 mt-4 text-xl">
          NMC Curriculum Based Recommended Books for MBBS Students
        </p>

        {years.map((year) => (
          <section key={year.year} className="mt-16">
            <h2 className="text-4xl font-bold mb-8 text-cyan-400">
              {year.year}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {year.subjects.map((subject) => (
                <div
                  key={subject.name}
                  className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-6"
                >
                  <h3 className="text-2xl font-bold text-blue-300">
                    {subject.name}
                  </h3>

                  <ul className="mt-4 space-y-2 text-gray-300">
                    {subject.books.map((book) => (
                      <li key={book}>📘 {book}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        ))}

      </div>
    </main>
  );
}