---
layout: page
layout_style: 'sophisticated'
title: "Resources"
description: "References, eBooks, slides, R/Python code, and other resources for learning and applying causal inference methods."
---

<div class="content-block">
  <h2>Comprehensive Causal Inference Resource Library</h2>

  <p>This collection brings together the best resources for learning, teaching, and applying causal inference methods. All resources are curated for quality, accessibility, and practical utility.</p>

  <div class="content-grid">
    <div class="content-grid-card">
      <div class="content-grid-card-icon">📚</div>
      <h3>Textbooks & eBooks</h3>
      <p>Foundational textbooks, free online books, and essential readings for every level of expertise.</p>
      <a href="#textbooks" class="button button-text">Browse textbooks →</a>
    </div>

    <div class="content-grid-card">
      <div class="content-grid-card-icon">📊</div>
      <h3>Code Repositories</h3>
      <p>R and Python code examples, replication materials, and implementation guides for causal methods.</p>
      <a href="#code" class="button button-text">Explore code →</a>
    </div>

    <div class="content-grid-card">
      <div class="content-grid-card-icon">🎓</div>
      <h3>Course Materials</h3>
      <p>Slides, lecture notes, problem sets, and syllabi from university courses on causal inference.</p>
      <a href="#courses" class="button button-text">View materials →</a>
    </div>

    <div class="content-grid-card">
      <div class="content-grid-card-icon">🔬</div>
      <h3>Research Papers</h3>
      <p>Key papers, literature reviews, and methodological advances in causal inference.</p>
      <a href="#papers" class="button button-text">Read papers →</a>
    </div>

    <div class="content-grid-card">
      <div class="content-grid-card-icon">🛠️</div>
      <h3>Software Tools</h3>
      <p>R packages, Python libraries, and specialized software for causal analysis.</p>
      <a href="#software" class="button button-text">Discover tools →</a>
    </div>

    <div class="content-grid-card">
      <div class="content-grid-card-icon">🎥</div>
      <h3>Video Lectures</h3>
      <p>Recorded lectures, tutorials, and conference talks from experts in the field.</p>
      <a href="#videos" class="button button-text">Watch videos →</a>
    </div>
  </div>
</div>

</div>

<div class="content-block">
  <h2 id="textbooks">Textbooks & eBooks</h2>

  <div class="content-card">
    <h3>Foundational Texts</h3>
    <ol>
      <li><strong>Hernán, M. A., & Robins, J. M. (2020). <em>Causal Inference: What If</em>. Chapman & Hall/CRC.</strong>
        <ul>
          <li><a href="https://www.hsph.harvard.edu/miguel-hernan/causal-inference-book/">Free online version</a></li>
          <li>Comprehensive, accessible introduction to potential outcomes framework</li>
          <li>Focus on epidemiology but widely applicable</li>
        </ul>
      </li>

      <li><strong>Imbens, G. W., & Rubin, D. B. (2015). <em>Causal Inference for Statistics, Social, and Biomedical Sciences: An Introduction</em>. Cambridge University Press.</strong>
        <ul>
          <li>Rigorous treatment of Rubin causal model</li>
          <li>Excellent for graduate students and researchers</li>
        </ul>
      </li>

      <li><strong>Angrist, J. D., & Pischke, J. S. (2014). <em>Mastering 'Metrics: The Path from Cause to Effect</em>. Princeton University Press.</strong>
        <ul>
          <li>Intuitive introduction to five key methods: RCTs, regression, IV, RDD, DiD</li>
          <li>Engaging writing style with real-world examples</li>
        </ul>
      </li>

      <li><strong>Pearl, J., Glymour, M., & Jewell, N. P. (2016). <em>Causal Inference in Statistics: A Primer</em>. Wiley.</strong>
        <ul>
          <li>Introduction to causal diagrams and do-calculus</li>
          <li>Complementary to potential outcomes approach</li>
        </ul>
      </li>
    </ol>
  </div>
</div>

<div class="content-block">
  <div class="content-card">
    <h3>Advanced Texts</h3>
    <ol start="5">
      <li><strong>Pearl, J. (2009). <em>Causality: Models, Reasoning, and Inference</em> (2nd ed.). Cambridge University Press.</strong>
        <ul>
          <li>Seminal work on structural causal models</li>
          <li>Advanced mathematical treatment</li>
        </ul>
      </li>

      <li><strong>Morgan, S. L., & Winship, C. (2014). <em>Counterfactuals and Causal Inference: Methods and Principles for Social Research</em> (2nd ed.). Cambridge University Press.</strong>
        <ul>
          <li>Bridges potential outcomes and structural equation modeling</li>
          <li>Strong focus on social science applications</li>
        </ul>
      </li>

      <li><strong>Cunningham, S. (2021). <em>Causal Inference: The Mixtape</em>. Yale University Press.</strong>
        <ul>
          <li><a href="https://mixtape.scunning.com/">Free online version</a></li>
          <li>Practical focus with Stata, R, and Python code</li>
          <li>Covers modern methods including synthetic control</li>
        </ul>
      </li>
    </ol>
  </div>
</div>

<div class="content-block">
  <div class="content-card">
    <h3>Specialized Topics</h3>
    <ol start="8">
      <li><strong>Athey, S., & Imbens, G. W. (2019). <em>The Econometrics of Randomized Experiments</em>. In Handbook of Field Experiments.</strong>
        <ul>
          <li>Advanced treatment of experimental design and analysis</li>
        </ul>
      </li>

      <li><strong>Van der Laan, M. J., & Rose, S. (2011). <em>Targeted Learning: Causal Inference for Observational and Experimental Data</em>. Springer.</strong>
        <ul>
          <li>Advanced statistical framework for causal inference</li>
          <li>Focus on machine learning integration</li>
        </ul>
      </li>
    </ol>
  </div>
</div>

<div class="content-block">
  <div class="content-card">
    <h3>Free Online Resources</h3>
    <ol start="10">
      <li><strong>The Effect: An Introduction to Research Design and Causality</strong>
        <ul>
          <li><a href="https://theeffectbook.net/">Online book</a> by Nick Huntington-Klein</li>
          <li>Interactive examples and visualizations</li>
        </ul>
      </li>

      <li><strong>Causal Data Science</strong>
        <ul>
          <li><a href="https://matheusfacure.github.io/python-causality-handbook/landing-page.html">Online course notes</a></li>
          <li>Python-focused with practical examples</li>
        </ul>
      </li>
    </ol>
  </div>
</div>

<div class="content-block">
  <h2 id="code">Code Repositories & Examples</h2>

  <div class="content-card">
    <h3>R Resources</h3>
    <ol>
      <li><strong>Causal Inference Cheat Sheet</strong>
        <ul>
          <li><a href="https://github.com/gsbDBI/Causal-Inference-Cheatsheet">GitHub Repository</a></li>
          <li>Quick reference for common methods and R packages</li>
        </ul>
      </li>

      <li><strong>Causal Impact R Package</strong>
        <ul>
          <li><a href="https://cran.r-project.org/web/packages/CausalImpact/vignettes/CausalImpact.html">CRAN</a></li>
          <li>Bayesian structural time-series for causal inference</li>
        </ul>
      </li>

      <li><strong>MatchIt Package</strong>
        <ul>
          <li><a href="https://kosukeimai.github.io/MatchIt/">Documentation</a></li>
          <li>Nonparametric preprocessing for parametric causal inference</li>
        </ul>
      </li>

      <li><strong>fixest Package</strong>
        <ul>
          <li><a href="https://lrberge.github.io/fixest/">Website</a></li>
          <li>Fast fixed-effects estimation for difference-in-differences</li>
        </ul>
      </li>
    </ol>
  </div>
</div>

<div class="content-block">
  <div class="content-card">
    <h3>Python Resources</h3>
    <ol start="5">
      <li><strong>DoWhy Library</strong>
        <ul>
          <li><a href="https://github.com/py-why/dowhy">GitHub</a></li>
          <li>End-to-end causal inference library from Microsoft Research</li>
        </ul>
      </li>

      <li><strong>Causal ML Package</strong>
        <ul>
          <li><a href="https://causalml.readthedocs.io/">Documentation</a></li>
          <li>Machine learning methods for causal inference</li>
        </ul>
      </li>

      <li><strong>EconML Library</strong>
        <ul>
          <li><a href="https://github.com/microsoft/EconML">GitHub</a></li>
          <li>Heterogeneous treatment effects estimation</li>
        </ul>
      </li>
    </ol>
  </div>
</div>

<div class="content-block">
  <div class="content-card">
    <h3>Interactive Tutorials</h3>
    <ol start="8">
      <li><strong>Causal Inference with R</strong>
        <ul>
          <li><a href="https://rstudio.cloud/project/1283782">RStudio Cloud</a></li>
          <li>Interactive environment with pre-loaded datasets</li>
        </ul>
      </li>

      <li><strong>Python Causal Inference Tutorials</strong>
        <ul>
          <li><a href="https://github.com/amit-sharma/causal-inference-tutorial">Colab Notebooks</a></li>
          <li>Google Colab notebooks with executable code</li>
        </ul>
      </li>
    </ol>
  </div>
</div>

<div class="content-block">
  <div class="content-card">
    <h3>Replication Materials</h3>
    <ol start="10">
      <li><strong>Social Science Reproduction Project</strong>
        <ul>
          <li><a href="https://social-science-data-editors.github.io/">Website</a></li>
          <li>Code and data for replicating published studies</li>
        </ul>
      </li>

      <li><strong>AEA RCT Registry</strong>
        <ul>
          <li><a href="https://www.socialscienceregistry.org/">Website</a></li>
          <li>Pre-analysis plans and replication materials</li>
        </ul>
      </li>
    </ol>
  </div>
</div>

<div class="content-block">
  <h2 id="courses">Course Materials</h2>

  <div class="content-card">
    <h3>University Course Syllabi</h3>
    <ol>
      <li><strong>Harvard University - STAT 186: Causal Inference</strong>
        <ul>
          <li><a href="https://canvas.harvard.edu/courses/82337">Syllabus</a></li>
          <li>Taught by Prof. Edoardo Airoldi</li>
        </ul>
      </li>

      <li><strong>Stanford University - MS&E 226: Fundamentals of Causal Inference</strong>
        <ul>
          <li><a href="https://web.stanford.edu/~swager/teaching.html">Course website</a></li>
          <li>Taught by Prof. Stefan Wager</li>
        </ul>
      </li>

      <li><strong>UC Berkeley - STAT 240: Causal Inference</strong>
        <ul>
          <li><a href="https://www.stat.berkeley.edu/~ryantibs/causal/">Materials</a></li>
          <li>Taught by Prof. Rina Foygel Barber</li>
        </ul>
      </li>
    </ol>
  </div>
</div>

<div class="content-block">
  <div class="content-card">
    <h3>Lecture Slides & Notes</h3>
    <ol start="4">
      <li><strong>Causal Inference Slides Collection</strong>
        <ul>
          <li><a href="https://github.com/jrnold/causal-inference-notes">GitHub</a></li>
          <li>Comprehensive slide decks covering multiple methods</li>
        </ul>
      </li>

      <li><strong>Potential Outcomes Framework</strong>
        <ul>
          <li><a href="https://www.mattblackwell.org/files/teaching/s05-framework.pdf">PDF Notes</a></li>
          <li>Clear introduction to Rubin causal model</li>
        </ul>
      </li>
    </ol>
  </div>
</div>

<div class="content-block">
  <div class="content-card">
    <h3>Problem Sets & Exams</h3>
    <ol start="6">
      <li><strong>MIT 14.387: Applied Econometrics</strong>
        <ul>
          <li><a href="https://economics.mit.edu/grad/14.387">Problem sets</a></li>
          <li>Causal inference applications in economics</li>
        </ul>
      </li>

      <li><strong>Princeton ORF 524: Causal Inference</strong>
        <ul>
          <li><a href="https://www.princeton.edu/~yishaiz/causal-inference.html">Assignments</a></li>
          <li>Theoretical and applied problems</li>
        </ul>
      </li>
    </ol>
  </div>
</div>

<div class="content-block">
  <h2 id="papers">Key Research Papers</h2>

  <div class="content-card">
    <h3>Foundational Papers</h3>
    <ol>
      <li><strong>Rubin, D. B. (1974). Estimating causal effects of treatments in randomized and nonrandomized studies. <em>Journal of Educational Psychology</em>, 66(5), 688-701.</strong>
        <ul>
          <li>Introduces potential outcomes framework</li>
        </ul>
      </li>

      <li><strong>Rosenbaum, P. R., & Rubin, D. B. (1983). The central role of the propensity score in observational studies for causal effects. <em>Biometrika</em>, 70(1), 41-55.</strong>
        <ul>
          <li>Foundation for propensity score methods</li>
        </ul>
      </li>

      <li><strong>Angrist, J. D., Imbens, G. W., & Rubin, D. B. (1996). Identification of causal effects using instrumental variables. <em>Journal of the American Statistical Association</em>, 91(434), 444-455.</strong>
        <ul>
          <li>Formalizes IV estimation</li>
        </ul>
      </li>
    </ol>
  </div>
</div>

<div class="content-block">
  <div class="content-card">
    <h3>Modern Advances</h3>
    <ol start="4">
      <li><strong>Athey, S., & Imbens, G. (2016). Recursive partitioning for heterogeneous causal effects. <em>Proceedings of the National Academy of Sciences</em>, 113(27), 7353-7360.</strong>
        <ul>
          <li>Causal forests for heterogeneous treatment effects</li>
        </ul>
      </li>

      <li><strong>Chernozhukov, V., Chetverikov, D., Demirer, M., Duflo, E., Hansen, C., Newey, W., & Robins, J. (2018). Double/debiased machine learning for treatment and structural parameters. <em>The Econometrics Journal</em>, 21(1), C1-C68.</strong>
        <ul>
          <li>Machine learning for causal inference</li>
        </ul>
      </li>

      <li><strong>Abadie, A., Diamond, A., & Hainmueller, J. (2010). Synthetic control methods for comparative case studies: Estimating the effect of California's tobacco control program. <em>Journal of the American Statistical Association</em>, 105(490), 493-505.</strong>
        <ul>
          <li>Synthetic control method</li>
        </ul>
      </li>
    </ol>
  </div>
</div>

<div class="content-block">
  <div class="content-card">
    <h3>Literature Reviews</h3>
    <ol start="7">
      <li><strong>Imbens, G. W. (2020). Potential outcome and directed acyclic graph approaches to causality: Relevance for empirical practice in economics. <em>Journal of Economic Literature</em>, 58(4), 1129-1179.</strong>
        <ul>
          <li>Comprehensive review of causal inference in economics</li>
        </ul>
      </li>

      <li><strong>Hernán, M. A. (2018). The C-word: Scientific euphemisms do not improve causal inference from observational data. <em>American Journal of Public Health</em>, 108(5), 616-619.</strong>
        <ul>
          <li>Clear thinking about causal language</li>
        </ul>
      </li>
    </ol>
  </div>
</div>

<div class="content-block">
  <h2 id="software">Software Tools</h2>

  <div class="content-card">
    <h3>R Packages</h3>
    <ol>
      <li><strong><code>causalverse</code></strong> - Meta-package for causal inference</li>
      <li><strong><code>MatchIt</code></strong> - Matching methods for causal inference</li>
      <li><strong><code>WeightIt</code></strong> - Weighting methods for causal inference</li>
      <li><strong><code>fixest</code></strong> - Fast fixed-effects estimation</li>
      <li><strong><code>ivpack</code></strong> - Instrumental variables estimation</li>
      <li><strong><code>rdrobust</code></strong> - Regression discontinuity</li>
      <li><strong><code>gsynth</code></strong> - Generalized synthetic control</li>
      <li><strong><code>grf</code></strong> - Generalized random forests for causal inference</li>
      <li><strong><code>DoubleML</code></strong> - Double machine learning</li>
      <li><strong><code>medflex</code></strong> - Mediation analysis</li>
    </ol>
  </div>
</div>

<div class="content-block">
  <div class="content-card">
    <h3>Python Libraries</h3>
    <ol>
      <li><strong><code>DoWhy</code></strong> - End-to-end causal inference</li>
      <li><strong><code>CausalML</code></strong> - Machine learning for causal inference</li>
      <li><strong><code>EconML</code></strong> - Heterogeneous treatment effects</li>
      <li><strong><code>causalnex</code></strong> - Causal discovery and reasoning</li>
      <li><strong><code>pgmpy</code></strong> - Probabilistic graphical models</li>
      <li><strong><code>lingam</code></strong> - Linear non-Gaussian causal models</li>
    </ol>
  </div>
</div>

<div class="content-block">
  <div class="content-card">
    <h3>Specialized Software</h3>
    <ol>
      <li><strong>DAGitty</strong> - <a href="http://dagitty.net/">Web tool</a> for drawing and analyzing DAGs</li>
      <li><strong>Causal Fusion</strong> - <a href="https://www.causalfusion.com/">Platform</a> for causal discovery</li>
      <li><strong>Tetrad</strong> - <a href="http://www.phil.cmu.edu/tetrad/">Software</a> for causal modeling</li>
    </ol>
  </div>
</div>

<div class="content-block">
  <h2 id="videos">Video Lectures & Tutorials</h2>

  <div class="content-card">
    <h3>Lecture Series</h3>
    <ol>
      <li><strong>MIT OpenCourseWare: Causal Inference</strong>
        <ul>
          <li><a href="https://www.youtube.com/playlist?list=PLUl4u3cNGP60gL8hRk9c-5gW8-0-1-2-3">YouTube playlist</a></li>
          <li>Complete course lectures</li>
        </ul>
      </li>

      <li><strong>Harvard Data Science: Causal Inference</strong>
        <ul>
          <li><a href="https://www.youtube.com/watch?v=GTgZfCltMm8">YouTube</a></li>
          <li>Introductory lectures</li>
        </ul>
      </li>

      <li><strong>Stanford Causal Inference Seminar</strong>
        <ul>
          <li><a href="https://www.youtube.com/c/StanfordCausalInference">YouTube channel</a></li>
          <li>Research talks and tutorials</li>
        </ul>
      </li>
    </ol>
  </div>
</div>

<div class="content-block">
  <div class="content-card">
    <h3>Conference Talks</h3>
    <ol start="4">
      <li><strong>Causal Data Science Meeting</strong>
        <ul>
          <li><a href="https://www.causalscience.org/meetings/">Recordings</a></li>
          <li>Annual conference recordings</li>
        </ul>
      </li>

      <li><strong>Atlantic Causal Inference Conference</strong>
        <ul>
          <li><a href="https://acic2022.github.io/">Website</a></li>
          <li>Conference presentations</li>
        </ul>
      </li>
    </ol>
  </div>
</div>

<div class="content-block">
  <div class="content-card">
    <h3>Tutorial Videos</h3>
    <ol start="6">
      <li><strong>Causal Inference with R - DataCamp</strong>
        <ul>
          <li><a href="https://www.datacamp.com/courses/causal-inference-with-r">Course</a></li>
          <li>Interactive video tutorials</li>
        </ul>
      </li>

      <li><strong>Python Causal Inference - YouTube Tutorials</strong>
        <ul>
          <li><a href="https://www.youtube.com/playlist?list=PL2SOU6wwxB0uwwH80KTQ6ht66KWxbzTIo">Playlist</a></li>
          <li>Step-by-step implementations</li>
        </ul>
      </li>
    </ol>
  </div>
</div>

<div class="content-block">
  <h2>Contributing to This Resource Library</h2>

  <div class="content-card">
    <p>This resource library is community-maintained. To suggest additions or corrections:</p>
    <ol>
      <li><strong>Submit a resource</strong>: Email <a href="mailto:zephyr.v@outlook.com">zephyr.v@outlook.com</a> with:
        <ul>
          <li>Resource title and description</li>
          <li>URL or citation</li>
          <li>Brief justification for inclusion</li>
          <li>Your name (optional, for acknowledgment)</li>
        </ul>
      </li>
      <li><strong>Report issues</strong>: Found a broken link or outdated information? Let us know.</li>
      <li><strong>Share widely</strong>: These resources are freely available. Please share with colleagues and students.</li>
    </ol>
  </div>
</div>

<div class="content-quote">
  "The most exciting phrase to hear in science, the one that heralds new discoveries, is not 'Eureka!' but 'That's funny...'"
  <div class="content-quote-author">— Isaac Asimov</div>
</div>