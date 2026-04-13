---
layout: page
layout_style: 'sophisticated'
title: "Course Title Here"
description: "Course description here - a brief overview of what students will learn in this course."
course_level: "Beginner/Intermediate/Advanced" # Choose one
course_duration: "Estimated duration in weeks/hours"
prerequisites: "List of prerequisites here"
instructor: "Instructor Name Here"
instructor_bio: "Brief instructor bio here"
---

<div class="content-block">
  <h1>{{ page.title }}</h1>
  
  <div class="content-card">
    <h2 class="content-card-title">Course Overview</h2>
    <div class="content-card-content">
      <p><strong>Course Level:</strong> {{ page.course_level }}</p>
      <p><strong>Estimated Duration:</strong> {{ page.course_duration }}</p>
      <p><strong>Prerequisites:</strong> {{ page.prerequisites }}</p>
      
      <div class="content-highlight">
        <div class="content-highlight-title">What You'll Learn</div>
        <div class="content-highlight-content">
          <p>This course provides a comprehensive introduction to [topic] in causal inference. By the end of this course, you will be able to:</p>
          <ul>
            <li>Understand the fundamental concepts and assumptions of [method]</li>
            <li>Apply [method] to real-world research questions</li>
            <li>Implement [method] using R/Python with appropriate diagnostics</li>
            <li>Interpret results and communicate findings effectively</li>
            <li>Recognize limitations and potential pitfalls of [method]</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="content-block">
  <h2 class="content-block-title">Instructor</h2>
  
  <div class="content-card">
    <h2 class="content-card-title">{{ page.instructor }}</h2>
    <div class="content-card-content">
      <p>{{ page.instructor_bio }}</p>
      
      <div class="content-highlight">
        <div class="content-highlight-title">Teaching Philosophy</div>
        <div class="content-highlight-content">
          <p>I believe that effective learning happens when abstract concepts are connected to concrete examples. Throughout this course, we'll move from intuitive explanations to mathematical foundations, and finally to practical implementation.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="content-block">
  <h2 class="content-block-title">Course Structure</h2>
  
  <div class="content-card">
    <h2 class="content-card-title">Modules & Learning Path</h2>
    <div class="content-card-content">
      <p>This course is organized into [number] modules, each building on the previous one. You can work through the material at your own pace, but we recommend following the suggested sequence.</p>
      
      <div class="content-grid">
        <div class="content-grid-card">
          <div class="content-principle-number">1</div>
          <div class="content-principle-title">Module 1: Foundations</div>
          <div class="content-principle-description">
            <ul>
              <li>Introduction to the problem</li>
              <li>Key assumptions and notation</li>
              <li>Historical context and motivation</li>
            </ul>
          </div>
        </div>
        
        <div class="content-grid-card">
          <div class="content-principle-number">2</div>
          <div class="content-principle-title">Module 2: Theory</div>
          <div class="content-principle-description">
            <ul>
              <li>Mathematical formulation</li>
              <li>Identification strategies</li>
              <li>Estimation approaches</li>
            </ul>
          </div>
        </div>
        
        <div class="content-grid-card">
          <div class="content-principle-number">3</div>
          <div class="content-principle-title">Module 3: Application</div>
          <div class="content-principle-description">
            <ul>
              <li>Step-by-step implementation</li>
              <li>Diagnostics and validation</li>
              <li>Interpretation of results</li>
            </ul>
          </div>
        </div>
        
        <div class="content-grid-card">
          <div class="content-principle-number">4</div>
          <div class="content-principle-title">Module 4: Advanced Topics</div>
          <div class="content-principle-description">
            <ul>
              <li>Extensions and variations</li>
              <li>Common pitfalls and solutions</li>
              <li>Current research frontiers</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="content-block">
  <h2 class="content-block-title">Mathematical Foundations</h2>
  
  <div class="content-card">
    <h2 class="content-card-title">Key Concepts & Notation</h2>
    <div class="content-card-content">
      <p>Before diving into the method, let's establish the mathematical framework. We'll use the potential outcomes notation introduced by Donald Rubin:</p>
      
      <div class="content-highlight">
        <div class="content-highlight-title">Potential Outcomes Framework</div>
        <div class="content-highlight-content">
          <p>For each unit $i$, we define:</p>
          <ul>
            <li>$Y_i(1)$: Outcome if unit $i$ receives treatment</li>
            <li>$Y_i(0)$: Outcome if unit $i$ does not receive treatment</li>
            <li>$D_i$: Treatment indicator (1 if treated, 0 otherwise)</li>
            <li>$X_i$: Observed covariates</li>
          </ul>
          <p>The fundamental problem of causal inference is that we only observe one potential outcome for each unit:</p>
          <p>$$Y_i^{obs} = D_i Y_i(1) + (1 - D_i) Y_i(0)$$</p>
        </div>
      </div>
      
      <div class="content-highlight">
        <div class="content-highlight-title">Average Treatment Effect (ATE)</div>
        <div class="content-highlight-content">
          <p>The primary quantity of interest is often the Average Treatment Effect:</p>
          <p>$$\tau = \mathbb{E}[Y_i(1) - Y_i(0)]$$</p>
          <p>Under certain assumptions, we can estimate $\tau$ from observed data.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="content-block">
  <h2 class="content-block-title">Implementation Examples</h2>
  
  <div class="content-card">
    <h2 class="content-card-title">Hands-On Practice</h2>
    <div class="content-card-content">
      <p>Learning by doing is essential. Below are code examples that demonstrate key concepts from the course.</p>
      
      <div class="content-highlight">
        <div class="content-highlight-title">Example 1: Simulating Data</div>
        <div class="content-highlight-content">
          <p>Let's start by simulating a dataset to understand the data-generating process:</p>
          
          ```r
          # Set seed for reproducibility
          set.seed(123)
          
          # Number of observations
          n <- 1000
          
          # Generate covariates
          X1 <- rnorm(n, mean = 0, sd = 1)
          X2 <- rbinom(n, size = 1, prob = 0.5)
          
          # Generate treatment assignment (depends on covariates)
          propensity_score <- plogis(0.5 * X1 + 0.3 * X2)
          D <- rbinom(n, size = 1, prob = propensity_score)
          
          # Generate potential outcomes
          Y0 <- 2 + 0.8 * X1 + 0.5 * X2 + rnorm(n, sd = 0.5)
          Y1 <- Y0 + 2.5  # True treatment effect = 2.5
          
          # Observed outcome
          Y_obs <- D * Y1 + (1 - D) * Y0
          
          # Create data frame
          data <- data.frame(Y = Y_obs, D = D, X1 = X1, X2 = X2)
          head(data)
          ```
          
          <p>This simulation creates a dataset where treatment assignment depends on covariates (confounding), and the true treatment effect is 2.5.</p>
        </div>
      </div>
      
      <div class="content-highlight">
        <div class="content-highlight-title">Example 2: Implementing the Method</div>
        <div class="content-highlight-content">
          <p>Now let's implement [method name] to estimate the treatment effect:</p>
          
          ```r
          # Load required packages
          library(tidyverse)
          library(MatchIt)  # For matching methods
          library(broom)    # For tidy results
          
          # Simple implementation of [method]
          # Replace with actual method implementation
          estimate_effect <- function(data) {
            # Your implementation here
            # This is a placeholder for the actual method
            model <- lm(Y ~ D + X1 + X2, data = data)
            return(tidy(model))
          }
          
          # Estimate the effect
          results <- estimate_effect(data)
          print(results)
          ```
          
          <p>The output shows our estimate of the treatment effect. Compare this to the true value of 2.5.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="content-block">
  <h2 class="content-block-title">Required Readings</h2>
  
  <div class="content-card">
    <h2 class="content-card-title">Core References</h2>
    <div class="content-card-content">
      <p>These readings provide the theoretical foundation for the course. We recommend reading them in the order listed.</p>
      
      <div class="content-highlight">
        <div class="content-highlight-title">Foundational Papers</div>
        <div class="content-highlight-content">
          <ol>
            <li><strong>Author, A., & Author, B. (Year).</strong> "Title of foundational paper." <em>Journal Name</em>, Volume(Issue), pages. doi:DOI_NUMBER — Essential reading that introduces the core concepts.</li>
            <li><strong>Author, C., et al. (Year).</strong> "Title of methodological paper." <em>Journal Name</em>, Volume(Issue), pages. doi:DOI_NUMBER — Provides the mathematical details and proofs.</li>
            <li><strong>Author, D. (Year).</strong> "Title of application paper." <em>Journal Name</em>, Volume(Issue), pages. doi:DOI_NUMBER — Shows how the method is applied in practice.</li>
          </ol>
        </div>
      </div>
      
      <div class="content-highlight">
        <div class="content-highlight-title">Textbooks & Chapters</div>
        <div class="content-highlight-content">
          <ul>
            <li><strong>Hernán, M. A., & Robins, J. M. (2020).</strong> <em>Causal Inference: What If.</em> Chapman & Hall/CRC. — Chapter X covers [topic] in depth.</li>
            <li><strong>Angrist, J. D., & Pischke, J. S. (2009).</strong> <em>Mostly Harmless Econometrics.</em> Princeton University Press. — Chapter Y provides an accessible introduction.</li>
            <li><strong>Pearl, J. (2009).</strong> <em>Causality: Models, Reasoning, and Inference.</em> Cambridge University Press. — Chapter Z offers the graphical perspective.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="content-block">
  <h2 class="content-block-title">Additional Resources</h2>
  
  <div class="content-card">
    <h2 class="content-card-title">Further Learning</h2>
    <div class="content-card-content">
      <p>These resources will help you deepen your understanding and stay current with developments in the field.</p>
      
      <div class="content-grid">
        <div class="content-grid-card">
          <div class="content-principle-number">📊</div>
          <div class="content-principle-title">Software Packages</div>
          <div class="content-principle-description">
            <ul>
              <li><strong>R:</strong> `causal`, `MatchIt`, `tmle`, `grf`</li>
              <li><strong>Python:</strong> `causalml`, `dowhy`, `econml`</li>
              <li><strong>Stata:</strong> `teffects`, `psmatch2`</li>
            </ul>
          </div>
        </div>
        
        <div class="content-grid-card">
          <div class="content-principle-number">🎓</div>
          <div class="content-principle-title">Online Courses</div>
          <div class="content-principle-description">
            <ul>
              <li><a href="https://www.coursera.org/learn/causal-inference" target="_blank">Causal Inference Specialization</a> (Coursera)</li>
              <li><a href="https://www.edx.org/learn/causal-inference" target="_blank">Causal Diagrams</a> (edX)</li>
              <li><a href="https://www.mit.edu/~jmheiman/228S06/" target="_blank">MIT Causal Inference Course</a> (OpenCourseWare)</li>
            </ul>
          </div>
        </div>
        
        <div class="content-grid-card">
          <div class="content-principle-number">📝</div>
          <div class="content-principle-title">Practice Datasets</div>
          <div class="content-principle-description">
            <ul>
              <li><a href="https://www.openml.org/" target="_blank">OpenML</a> — Repository of datasets for machine learning</li>
              <li><a href="https://www.kaggle.com/datasets" target="_blank">Kaggle Datasets</a> — Community-contributed datasets</li>
              <li><a href="https://www.icpsr.umich.edu/" target="_blank">ICPSR</a> — Social science data archive</li>
            </ul>
          </div>
        </div>
        
        <div class="content-grid-card">
          <div class="content-principle-number">💬</div>
          <div class="content-principle-title">Community & Discussion</div>
          <div class="content-principle-description">
            <ul>
              <li><a href="https://stats.stackexchange.com/questions/tagged/causal-inference" target="_blank">Cross Validated</a> — Q&A for statisticians</li>
              <li><a href="https://www.reddit.com/r/CausalInference/" target="_blank">r/CausalInference</a> — Reddit community</li>
              <li><a href="https://github.com/feiran-z/Multiplicity" target="_blank">This Project's GitHub</a> — Discussion and issues</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="content-block">
  <h2 class="content-block-title">Assessment & Certification</h2>
  
  <div class="content-card">
    <h2 class="content-card-title">Learning Outcomes Verification</h2>
    <div class="content-card-content">
      <p>To help you track your progress and demonstrate your learning, we provide the following assessment options:</p>
      
      <div class="content-highlight">
        <div class="content-highlight-title">Self-Assessment Exercises</div>
        <div class="content-highlight-content">
          <p>Each module includes practice problems with solutions. These are designed to reinforce key concepts and build confidence.</p>
          <ul>
            <li><strong>Conceptual Questions:</strong> Test your understanding of assumptions and intuition</li>
            <li><strong>Mathematical Exercises:</strong> Work through derivations and proofs</li>
            <li><strong>Coding Challenges:</strong> Implement methods on new datasets</li>
            <li><strong>Case Studies:</strong> Apply the method to real research questions</li>
          </ul>
        </div>
      </div>
      
      <div class="content-highlight">
        <div class="content-highlight-title">Final Project</div>
        <div class="content-highlight-content">
          <p>The capstone project allows you to apply what you've learned to a problem of your choice:</p>
          <ol>
            <li><strong>Proposal:</strong> Define a research question and data source</li>
            <li><strong>Analysis Plan:</strong> Specify your causal identification strategy</li>
            <li><strong>Implementation:</strong> Conduct the analysis with appropriate diagnostics</li>
            <li><strong>Report:</strong> Write up your findings with proper interpretation</li>
          </ol>
          <p>Submit your final project for feedback from the instructor and community.</p>
        </div>
      </div>
      
      <div class="content-highlight">
        <div class="content-highlight-title">Certificate of Completion</div>
        <div class="content-highlight-content">
          <p>Upon completing all modules and the final project, you can request a certificate of completion. This certificate:</p>
          <ul>
            <li>Verifies your mastery of the course material</li>
            <li>Can be shared on LinkedIn and other professional platforms</li>
            <li>Includes a unique verification code for employers to confirm</li>
          </ul>
          <p><em>Note: The certificate is issued free of charge as part of our commitment to open education.</em></p>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="content-block">
  <h2 class="content-block-title">Frequently Asked Questions</h2>
  
  <div class="content-card">
    <h2 class="content-card-title">Common Questions</h2>
    <div class="content-card-content">
      
      <div class="content-highlight">
        <div class="content-highlight-title">Q: How much time should I dedicate to this course?</div>
        <div class="content-highlight-content">
          <p><strong>A:</strong> We recommend dedicating 4-6 hours per week for {{ page.course_duration }}. This includes reading, watching videos, completing exercises, and working on the final project. You can adjust the pace based on your background and schedule.</p>
        </div>
      </div>
      
      <div class="content-highlight">
        <div class="content-highlight-title">Q: What if I don't have the prerequisites?</div>
        <div class="content-highlight-content">
          <p><strong>A:</strong> We provide review materials for key prerequisites. If you're missing background in a specific area, we recommend:</p>
          <ol>
            <li>Starting with our <a href="{{ site.baseurl }}/courses/empirical-research-fundamentals/">Empirical Research Fundamentals</a> course</li>
            <li>Working through the prerequisite review exercises in Module 0</li>
            <li>Asking questions in the discussion forum - our community is here to help!</li>
          </ol>
        </div>
      </div>
      
      <div class="content-highlight">
        <div class="content-highlight-title">Q: Is this course suitable for my research area?</div>
        <div class="content-highlight-content">
          <p><strong>A:</strong> Causal inference methods are applicable across many disciplines including economics, epidemiology, political science, education, and business. The examples in this course come from multiple fields, and you'll learn to adapt the methods to your specific research questions.</p>
        </div>
      </div>
      
      <div class="content-highlight">
        <div class="content-highlight-title">Q: Can I get help if I'm stuck?</div>
        <div class="content-highlight-content">
          <p><strong>A:</strong> Absolutely! We offer several support options:</p>
          <ul>
            <li><strong>Discussion Forum:</strong> Post questions and help others</li>
            <li><strong>Office Hours:</strong> Live Q&A sessions with the instructor</li>
            <li><strong>Peer Study Groups:</strong> Connect with other learners</li>
            <li><strong>Email Support:</strong> For private or complex questions</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="content-block">
  <h2 class="content-block-title">Get Started</h2>
  
  <div class="content-card">
    <h2 class="content-card-title">Begin Your Learning Journey</h2>
    <div class="content-card-content">
      <p>Ready to explore the roads not taken in causal inference? Here's how to begin:</p>
      
      <div class="content-grid">
        <div class="content-grid-card">
          <div class="content-principle-number">1</div>
          <div class="content-principle-title">Review Prerequisites</div>
          <div class="content-principle-description">Make sure you have the necessary background. Complete any review materials if needed.</div>
        </div>
        
        <div class="content-grid-card">
          <div class="content-principle-number">2</div>
          <div class="content-principle-title">Set Up Your Environment</div>
          <div class="content-principle-description">Install R or Python and the required packages. Test with the setup script provided.</div>
        </div>
        
        <div class="content-grid-card">
          <div class="content-principle-number">3</div>
          <div class="content-principle-title">Start with Module 1</div>
          <div class="content-principle-description">Begin with the foundational concepts. Don't rush - understanding the basics is crucial.</div>
        </div>
        
        <div class="content-grid-card">
          <div class="content-principle-number">4</div>
          <div class="content-principle-title">Engage with the Community</div>
          <div class="content-principle-description">Introduce yourself in the forum. Learning together enhances the experience for everyone.</div>
        </div>
      </div>
      
      <div class="content-highlight">
        <div class="content-highlight-title">Technical Setup Checklist</div>
        <div class="content-highlight-content">
          <p>Before starting, ensure you have:</p>
          <ul>
            <li>✅ R (version 4.0+) or Python (version 3.8+) installed</li>
            <li>✅ RStudio or Jupyter Notebook set up</li>
            <li>✅ Required packages installed (list provided in Module 0)</li>
            <li>✅ A code editor you're comfortable with</li>
            <li>✅ Stable internet connection for accessing resources</li>
          </ul>
          <p><a href="{{ site.baseurl }}/resources/#software-setup">Detailed setup instructions are available in our resources section.</a></p>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="content-quote">
  "The only way to learn mathematics is to do mathematics."
  <div class="content-quote-author">— Paul Halmos</div>
</div>

<div class="content-block">
  <h2 class="content-block-title">Need Help?</h2>
  
  <div class="content-card">
    <h2 class="content-card-title">Support & Contact</h2>
    <div class="content-card-content">
      <p>We're here to support your learning journey. If you encounter any issues or have questions:</p>
      
      <div class="content-highlight">
        <div class="content-highlight-title">Contact Options</div>
        <div class="content-highlight-content">
          <ul>
            <li><strong>Course Questions:</strong> Use the discussion forum for content-related questions (helps other learners too!)</li>
            <li><strong>Technical Issues:</strong> Report bugs or technical problems on our <a href="https://github.com/feiran-z/Multiplicity/issues" target="_blank">GitHub Issues page</a></li>
            <li><strong>Private Inquiries:</strong> For personal or sensitive matters, email <a href="mailto:zephyr.v@outlook.com">zephyr.v@outlook.com</a></li>
            <li><strong>Feedback:</strong> We welcome suggestions for improving the course. Use our <a href="{{ site.baseurl }}/contact/">contact form</a></li>
          </ul>
        </div>
      </div>
      
      <p>We typically respond within 2-3 business days. For urgent technical issues during assignments, please mention "URGENT" in your forum post subject line.</p>
    </div>
  </div>
</div>