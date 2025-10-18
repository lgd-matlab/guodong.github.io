---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

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
* Machine learning-based prediction of defect properties
* High-throughput materials simulations
* First-principles calculations of defect energetics

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

Skills
======
* **Computational Tools**
  * VASP (Vienna Ab initio Simulation Package)
  * High-throughput tools: AFLOW, Pymatgen
  * Machine learning: scikit-learn, ASE, SHAP, SISSO
  * Molecular dynamics: LAMMPS
  * Python programming
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
