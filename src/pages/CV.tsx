export default function CV() {
  return (
    <div className="space-y-8">
      <h1>Curriculum Vitae</h1>

      <section>
        <h2>Education</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold border-b-2 pb-1">
              M.S. in Materials Science and Engineering
            </h3>
            <p className="text-muted-foreground">Hunan University, June 2025</p>
            <p className="mt-1">GPA: 3.68/4.0 • Changsha, Hunan, China</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold border-b-2 pb-1">
              B.S. in Materials Science and Engineering
            </h3>
            <p className="text-muted-foreground">Dalian Jiaotong University, June 2022</p>
            <p className="mt-1">GPA: 86.61/100 • Dalian, Liaoning, China</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Professional Experience</h2>
        <div>
          <h3 className="text-xl font-semibold border-b-2 pb-1">
            Postgraduate Research Assistant
          </h3>
          <p className="text-muted-foreground">August 2025 - Present</p>
          <p className="mt-1">Hunan University, Changsha, Hunan</p>
          <p className="mt-2">Conducting advanced research in computational materials science</p>
        </div>
      </section>

      <section>
        <h2>Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold border-b-2 pb-1 mb-3">
              Computational Tools
            </h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>VASP (Vienna Ab initio Simulation Package)</li>
              <li>High-throughput tools: AFLOW, Pymatgen, Elastool</li>
              <li>Machine learning: scikit-learn, ASE, SHAP, SISSO</li>
              <li>Molecular dynamics: LAMMPS</li>
              <li>Python programming (advanced), Shell scripting</li>
              <li>High-Performance Computing</li>
              <li>DeePMD (basic)</li>
              <li>Active learning (basic)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold border-b-2 pb-1 mb-3">
              Languages
            </h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>English (fluent, IELTS 6.5)</li>
              <li>Chinese (native)</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2>Honors & Awards</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Outstanding Graduate of Hunan University, 2025</li>
          <li>National Graduate Scholarship, 2024</li>
          <li>Outstanding Graduate of Dalian City, 2022</li>
          <li>First Prize, National College Students Mathematics Competition, Liaoning Province, 2021</li>
        </ul>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Feel free to reach out to me at{" "}
          <a href="mailto:djtulgd@gmail.com">djtulgd@gmail.com</a> or connect with me on{" "}
          <a href="https://github.com/lgd-matlab" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          . I'm always interested in discussing computational materials science, machine learning 
          applications, and potential collaborations.
        </p>
      </section>
    </div>
  );
}
