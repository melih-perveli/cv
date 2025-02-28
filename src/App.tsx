import picture from "./assets/WhatsApp Görsel 2025-02-28 saat 17.35.35_360c3ea8.jpg";

export default function App() {
  return (
    <div className="overflow-hidden bg-slate-100">
      {/* Main container with soft shadow */}
      <div className="relative">
        {/* Decorative background elements */}
        <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-500 rounded-full opacity-10 blur-2xl"></div>
        <div className="absolute top-1/3 -right-10 w-80 h-80 bg-purple-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-teal-500 rounded-full opacity-10 blur-2xl"></div>

        {/* CV Content */}
        <div className="relative overflow-hidden">
          {/* Header with curved shape */}
          <div className="relative pt-8 pb-16 px-8 print:pt-6 print:pb-12">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600 to-indigo-700 print:from-blue-600 print:to-blue-600"></div>

            {/* Simple curved transition */}
            <div
              className="absolute -bottom-1 left-0 w-full h-8 bg-slate-100"
              style={{
                borderTopLeftRadius: "100% 100%",
                borderTopRightRadius: "100% 100%",
              }}
            ></div>

            <div className="relative z-10 flex">
              {/* Photo placeholder */}
              <div className="mr-8">
                <div className="w-40 h-40 rounded-full border-4 border-white shadow-xl overflow-hidden bg-white">
                  {/* Replace with your actual photo */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <img
                      src={picture}
                      alt="Melih Perveli"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Name and title */}
              <div className="text-white">
                <h1 className="text-3xl font-bold tracking-tight print:text-2xl">
                  Melih Perveli
                </h1>
                <h2 className="text-lg mt-1 opacity-90 font-light print:text-base">
                  Senior Frontend Developer
                </h2>

                {/* Contact info */}
                <div className="flex flex-wrap gap-4 mt-4 text-xs">
                  <div className="flex items-center bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                    <span className="mr-1">📧</span>{" "}
                    melihperveli@windowslive.com
                  </div>
                  <div className="flex items-center bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                    <span className="mr-1">📱</span> +90 542 835 0793
                  </div>
                  <div className="flex items-center bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                    <span className="mr-1">📍</span> Nilüfer, Bursa
                  </div>
                  <div className="flex items-center bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                    <span className="mr-1">🎂</span> 16.07.1993
                  </div>
                  <div className="flex items-center bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                    <span className="mr-1">🌍</span> Turkish (Native), English
                    (Professional)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="px-8 py-2">
            {/* Three column layout for main content */}
            <div className="grid grid-cols-3 gap-6">
              {/* Left column with About Me, Skills, and Education */}
              <div className="col-span-1">
                {/* About me section */}
                <div className="bg-white rounded-2xl p-6 shadow-lg mb-6 relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full opacity-50"></div>
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold text-blue-700 mb-3 print:text-base">
                      ABOUT ME
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm print:text-xs">
                      My academic background and the choices I made during my
                      university education steered me towards marketing and
                      sales. However, I was not feeling fulfilled. Wanting to
                      turn a new page in my career, I took a significant risk
                      and decided to become a software developer. Thanks to my
                      previous experience in team management, I am currently
                      leading a team. My past sales experience now helps me
                      resolve communication issues between customers and
                      developers. I enjoy continuing my career in this field and
                      have no regrets about the work I've done or the decisions
                      I've made in the past.
                    </p>
                  </div>
                </div>

                {/* Skills section */}
                <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
                  <h3 className="text-lg font-bold text-blue-700 mb-4 print:text-base">
                    SKILLS
                  </h3>

                  <div className="space-y-3 print:space-y-2">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2 text-sm print:text-xs">
                        Frameworks & Libraries
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "React",
                          "Vue",
                          "Svelte",
                          "Next.js",
                          "Nuxt",
                          "TypeScript",
                          "JavaScript",
                        ].map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-800 text-xs print:text-[10px] rounded-full shadow-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-700 mb-2 text-sm print:text-xs">
                        State Management & APIs
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Redux",
                          "Zustand",
                          "Pinia",
                          "Vuex",
                          "React Query",
                          "Axios",
                        ].map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 bg-gradient-to-r from-teal-50 to-emerald-50 text-teal-800 text-xs print:text-[10px] rounded-full shadow-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-700 mb-2 text-sm print:text-xs">
                        Development Tools
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Git",
                          "Webpack",
                          "Vite",
                          "Chart.js",
                          "HTML/CSS",
                          "TailwindCSS",
                        ].map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-800 text-xs print:text-[10px] rounded-full shadow-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-700 mb-2 text-sm print:text-xs">
                        Design & Other
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Figma",
                          "Adobe Illustrator",
                          "Responsive Design",
                          "UI/UX",
                          "Performance",
                          "Accessibility",
                        ].map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 bg-gradient-to-r from-amber-50 to-orange-50 text-amber-800 text-xs print:text-[10px] rounded-full shadow-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Education section */}
                <div className="bg-white rounded-2xl p-6 shadow-lg relative overflow-hidden">
                  <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-amber-200 rounded-full opacity-40"></div>

                  <div className="relative z-10">
                    <h3 className="text-lg font-bold text-amber-700 mb-4 print:text-base">
                      EDUCATION
                    </h3>

                    <div className="mb-4">
                      <h4 className="font-bold text-sm print:text-xs">
                        Uludağ University
                      </h4>
                      <p className="text-amber-600 text-sm print:text-xs">
                        Bachelor of Business Administration
                      </p>
                      <p className="text-sm text-gray-500 print:text-[10px]">
                        2014 - 2018
                      </p>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-bold text-sm print:text-xs">
                        BTK Akademi
                      </h4>
                      <p className="text-amber-600 text-sm print:text-xs">
                        Advanced JavaScript & Modern CSS Development
                      </p>
                      <p className="text-sm text-gray-500 print:text-[10px]">
                        2022
                      </p>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-bold text-sm print:text-xs">
                        Vue Mastery
                      </h4>
                      <p className="text-amber-600 text-sm print:text-xs">
                        Vue.js 3 Production-Ready Applications
                      </p>
                      <p className="text-sm text-gray-500 print:text-[10px]">
                        2021
                      </p>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-bold text-sm print:text-xs">
                        Frontend Masters
                      </h4>
                      <p className="text-amber-600 text-sm print:text-xs">
                        JavaScript: The Hard Parts & Async Patterns
                      </p>
                      <p className="text-sm text-gray-500 print:text-[10px]">
                        2020
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience column */}
              <div className="col-span-2">
                <div className="bg-white rounded-2xl p-6 shadow-lg mb-6 relative overflow-hidden">
                  <div className="absolute -top-12 -right-12 w-24 h-24 bg-yellow-200 rounded-full opacity-40"></div>
                  <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-blue-200 rounded-full opacity-40"></div>

                  <div className="relative z-10">
                    <h3 className="text-lg font-bold text-blue-700 mb-6 print:text-base">
                      PROFESSIONAL EXPERIENCE
                    </h3>

                    {/* Current Role */}
                    <div className="relative border-l-2 border-blue-300 pl-6 pb-6">
                      <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0"></div>
                      <div className="mb-4">
                        <div className="flex justify-between items-start">
                          <h4 className="font-bold text-lg">
                            Frontend Developer
                          </h4>
                          <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                            Apr 2022 - Present
                          </span>
                        </div>
                        <p className="text-blue-600 font-medium">
                          3Pounds • Istanbul
                        </p>
                        <p className="mt-2 text-gray-700">
                          Started as a Project Lead, successfully managing
                          multiple large-scale corporate projects. As of March
                          2024, promoted to Frontend Team Lead, overseeing the
                          entire frontend development team and technical
                          direction.
                        </p>
                        <div className="mt-3 space-y-2">
                          <div className="bg-slate-50 p-2 rounded-lg print:bg-gray-50">
                            <h5 className="font-semibold text-sm print:text-xs">
                              Fimple
                            </h5>
                            <p className="text-xs text-gray-600 print:text-[10px]">
                              09/24 - 02/25 A configurable white-label banking
                              solution with customizable themes and multilingual
                              support for financial institutions
                            </p>
                          </div>
                          <div className="bg-slate-50 p-2 rounded-lg print:bg-gray-50">
                            <h5 className="font-semibold text-sm print:text-xs">
                              YKBank
                            </h5>
                            <p className="text-xs text-gray-600 print:text-[10px]">
                              05/23 - 08/24 Web and backoffice construction of
                              YapıKredi bank, which opened a branch in Germany
                            </p>
                          </div>
                          <div className="bg-slate-50 p-2 rounded-lg print:bg-gray-50">
                            <h5 className="font-semibold text-sm print:text-xs">
                              Fitune
                            </h5>
                            <p className="text-xs text-gray-600 print:text-[10px]">
                              08/23 - 02/24 A website construction that creates
                              a website with artificial intelligence support in
                              under 30 seconds and makes it ready to be
                              published in a fully editable way
                            </p>
                          </div>
                          <div className="bg-slate-50 p-2 rounded-lg print:bg-gray-50">
                            <h5 className="font-semibold text-sm print:text-xs">
                              Qcharge
                            </h5>
                            <p className="text-xs text-gray-600 print:text-[10px]">
                              01/23 - 12/23 A business that enables the
                              management and installation of electric vehicle
                              charging stations
                            </p>
                          </div>
                          <div className="bg-slate-50 p-2 rounded-lg print:bg-gray-50">
                            <h5 className="font-semibold text-sm print:text-xs">
                              TrtIzle (TVOS)
                            </h5>
                            <p className="text-xs text-gray-600 print:text-[10px]">
                              06/22 - 08/22 Implemented Google Ad integration
                              for the tvOS application
                            </p>
                          </div>
                          <div className="bg-slate-50 p-2 rounded-lg print:bg-gray-50">
                            <h5 className="font-semibold text-sm print:text-xs">
                              TRT.net.tr
                            </h5>
                            <p className="text-xs text-gray-600 print:text-[10px]">
                              04/22 - 01/23 Turkey's official radio and
                              television channel
                            </p>
                          </div>
                        </div>
                        <p className="mt-3 text-gray-700">
                          In this work experience, I learned the agile working
                          method, Web working principles, team lead and how to
                          use the frontend tools I used much more efficiently.
                        </p>
                      </div>
                    </div>

                    {/* Previous Roles */}
                    <div className="relative border-l-2 border-blue-300 pl-6 pb-6">
                      <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0"></div>
                      <div className="mb-4">
                        <div className="flex justify-between items-start">
                          <h4 className="font-bold text-lg">
                            Frontend Developer
                          </h4>
                          <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                            Jun 2021 - Jan 2022
                          </span>
                        </div>
                        <p className="text-blue-600 font-medium">
                          eMcBilisim • Istanbul
                        </p>
                        <p className="mt-2 text-gray-700">
                          Work experience with a team that designs Ponzi schemes
                          and develops both e-commerce channels and back office
                          channels. In this work experience, I added Vue and
                          TypeScript to my own talent pool.
                        </p>
                      </div>
                    </div>

                    <div className="relative border-l-2 border-blue-300 pl-6 pb-6">
                      <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0"></div>
                      <div className="mb-4">
                        <div className="flex justify-between items-start">
                          <h4 className="font-bold text-lg">
                            Frontend Developer
                          </h4>
                          <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                            Jan 2020 - May 2021
                          </span>
                        </div>
                        <p className="text-blue-600 font-medium">
                          Alfa Gama Tasarım • Kocaeli
                        </p>
                        <p className="mt-2 text-gray-700">
                          What I try to learn much more as a developer is
                          non-corporate but workload work experience. At this
                          stage, over 100 websites have been developed for SMEs,
                          preparing me for professional IT business.
                        </p>
                      </div>
                    </div>

                    <div className="relative border-l-2 border-blue-300 pl-6 pb-6">
                      <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0"></div>
                      <div className="mb-4">
                        <div className="flex justify-between items-start">
                          <h4 className="font-bold text-lg">
                            Junior Developer
                          </h4>
                          <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                            Sep 2019 - Jan 2020
                          </span>
                        </div>
                        <p className="text-blue-600 font-medium">
                          Kapıda Pazar • Kocaeli
                        </p>
                        <p className="mt-2 text-gray-700">
                          Experience of leaving behind a sales career to become
                          a software developer and starting to work as a junior
                          and trying to make mobile applications with
                          react-native.
                        </p>
                      </div>
                    </div>

                    <div className="relative border-l-2 border-blue-300 pl-6">
                      <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0"></div>
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="font-bold text-lg">
                            Sales & Marketing
                          </h4>
                          <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                            2012 - 2019
                          </span>
                        </div>
                        <p className="text-blue-600 font-medium">
                          Various Companies
                        </p>
                        <p className="mt-2 text-gray-700">
                          Progressive career growth from promoter to regional
                          manager in various companies and sectors, gaining
                          extensive experience in sales, marketing, and team
                          management.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
