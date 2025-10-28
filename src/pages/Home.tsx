export default function Home() {
  return (
    <article>
      <h1>About Me</h1>
      
      <div className="prose prose-lg max-w-none space-y-6">
        <p>
          Hello! I'm <strong>Guodong Lu (鲁国栋)</strong>, a Research Assistant at Hunan University in Changsha, China. 
          I specialize in computational materials science with a focus on machine learning applications in materials 
          design and first-principles calculations.
        </p>

        <p>
          I earned my M.S. in Materials Science and Engineering from Hunan University (June 2025, GPA: 3.68/4.0) 
          and my B.S. from Dalian Jiaotong University (June 2022, GPA: 86.61/100). Currently, I continue my research 
          as a Research Assistant at Hunan University (August 2025 - Present).
        </p>

        <section className="mt-8">
          <h2>Research Interests</h2>
          <p>My research focuses on computational materials science with specific interests in:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              <strong>Machine Learning in Materials Science</strong>: Active learning, interpretable ML models 
              (SISSO, SHAP), and data-driven materials discovery
            </li>
            <li>
              <strong>First-Principles Calculations</strong>: Using DFT (VASP) to investigate atomic-scale 
              interactions in metallic systems
            </li>
            <li>
              <strong>High-Throughput Computations</strong>: Implementing automated workflows for large-scale 
              materials screening
            </li>
            <li>
              <strong>Molecular Dynamics</strong>: Large-scale atomistic simulations for complex material systems
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2>Personal Interests</h2>
          <p>Beyond research, I enjoy a variety of activities that help me maintain balance and perspective:</p>
          
          <div className="space-y-4 ml-4">
            <div>
              <h3 className="text-xl font-semibold border-b-2 pb-1">History & Knowledge Organization</h3>
              <p>
                I'm an avid reader of history books, with particular interests in world history, military history, 
                and Chinese history. I also enjoy books on time management and knowledge organization systems, 
                which help me stay productive and organized in both research and daily life.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold border-b-2 pb-1">Sports & Fitness</h3>
              <p>
                I play table tennis (ping-pong) regularly and visit the gym to exercise. Physical activity helps 
                me stay energetic and manage stress, especially during challenging research periods. Staying active 
                keeps my mind sharp and focused.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold border-b-2 pb-1">Self-Hosted Projects</h3>
              <p>
                I enjoy experimenting with GitHub projects on my personal server. It's a fun way to explore new 
                technologies, practice deployment skills, and learn about server management outside of my research work.
              </p>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
