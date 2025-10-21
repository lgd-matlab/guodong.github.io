---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

About Me
======
Hello! I'm Guodong Lu (鲁国栋), a Research Assistant at Hunan University in Changsha, China. I specialize in computational materials science with a focus on machine learning applications in materials design and first-principles calculations.

I earned my M.S. in Materials Science and Engineering from Hunan University (June 2025, GPA: 3.68/4.0) and my B.S. from Dalian Jiaotong University (June 2022, GPA: 86.61/100). Currently, I continue my research as a Research Assistant at Hunan University (August 2025 - Present).

Education
======
* **M.S. in Materials Science and Engineering**, Hunan University, June 2025
  * GPA: 3.68/4.0
  * Changsha, Hunan, China

* **B.S. in Materials Science and Engineering**, Dalian Jiaotong University, June 2022
  * GPA: 86.61/100
  * Dalian, Liaoning, China

Professional Experience
======
* **August 2025 - Present: Postgraduate Research Assistant**
  * Hunan University, Changsha, Hunan
  * Conducting advanced research in computational materials science

Research Interests
======
My research focuses on computational materials science with specific interests in:

* **Machine Learning in Materials Science**: Active learning, interpretable ML models (SISSO, SHAP), and data-driven materials discovery
* **First-Principles Calculations**: Using DFT (VASP) to investigate atomic-scale interactions in metallic systems
* **High-Throughput Computations**: Implementing automated workflows for large-scale materials screening
* **Molecular Dynamics**: Large-scale atomistic simulations for complex material systems

Research Experience
======

### Entropy-driven highly chaotic MXene-based heterostructures as an efficient sulfur redox electrocatalysts for Li-S battery
*Co-first author, 2024*

* Utilized DFT to investigate energy and diffusion behavior of triple-interface MXene-based heterostructures
* Co-first authored publication in *Advanced Functional Materials* (2024)

### First-principles investigation of the interaction between oxygen and alloy atoms in α-zirconium
*First author, 2024*

* Executed DFT to analyze interactions between oxygen and alloying elements in α-Zr
* Predicted effects of alloying elements on oxygen diffusion based on theoretical models
* First-authored publication in *Journal of Nuclear Materials* (2024)

### Development of a Zr-Nb-H-O reactive force field for molecular dynamics simulations of in-reactor corrosion
*Co-author, 2024*

* Performed comprehensive DFT on Zr-Nb-Sn-H-O systems with 100+ atomic configurations including vacancy, interstitial, and substitutional interactions
* Generated training data for ReaxFF
* Co-authored publication in *Computational Materials Science* (2024)

### Machine Learning Method to Investigate the Influence of Alloy Elements on Non-Metal Interstitials in HCP Metals
*First author, 2025*

* Built a DFT dataset of 1,050 HCP configurations with non-metal interstitials under substitutional alloying to quantify interactions
* Using SISSO and SHAP, derived compact, interpretable formulas that accurately predict interstitial stability and formation energy
* First-authored publication in *Materials & Design* (2025)

Personal Interests
======
Beyond research, I enjoy a variety of activities that help me maintain balance and perspective:

* **History & Knowledge Organization**: I'm an avid reader of history books, with particular interests in world history, military history, and Chinese history. I also enjoy books on time management and knowledge organization systems, which help me stay productive and organized in both research and daily life.

* **Sports & Fitness**: I play table tennis (ping-pong) regularly and visit the gym to exercise. Physical activity helps me stay energetic and manage stress, especially during challenging research periods. Staying active keeps my mind sharp and focused.

* **Self-Hosted Projects**: I enjoy experimenting with GitHub projects on my personal server. It's a fun way to explore new technologies, practice deployment skills, and learn about server management outside of my research work.

Skills
======
* **Computational Tools**
  * VASP (Vienna Ab initio Simulation Package)
  * High-throughput tools: AFLOW, Pymatgen, Elastool
  * Machine learning: scikit-learn, ASE, SHAP, SISSO
  * Molecular dynamics: LAMMPS
  * Python programming (advanced), Shell scripting
  * High-Performance Computing: Experience with parallel computing and cluster environments
  * DeePMD (basic)
  * Active learning (basic)

* **Languages**
  * English (fluent, IELTS 6.5)
  * Chinese (native)

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Talks & Presentations
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>

Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Honors & Awards
======
* Outstanding Graduate of Hunan University, 2025
* National Graduate Scholarship, 2024
