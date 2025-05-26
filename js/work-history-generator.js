
$(document).ready(function () {

const workHistory = [
  {
    companyLogo: "images/companyLogos/hometown-services-logo.png",
    companyUrl: "https://www.hometownservices.com",
    jobTitle: "JSON Developer",
    companyName: "HomeTown Services",
    startDate: "April 2025",
    endDate: "Present",
    summary: "Developed and maintained custom JSON-based call scripts to optimize CSR workflows for clients like John Moore and Texas Air Zone. Worked closely with CSRs, managers, and trainers to gather requirements, implement job types, QA test logic, and maintain version control. Ensured smooth deployment and accurate routing of customer interactions using ServiceTitan.",
    bullets: [
      "Built dynamic JSON scripts tailored to client workflows and needs.",
      "Collaborated with stakeholders to gather feedback and implement updates.",
      "QA-tested scripts to ensure expected logic paths and error handling.",
      "Structured job types and business units for accurate service routing.",
      "Utilized Git-based version control to track and deploy script changes.",
      "Reduced logic redundancy and improved script performance in production."
    ],
    tech: [
      "JSON", "ServiceTitan", "Workflow Automation", "Conditional Logic",
      "Version Control", "Git", "QA Testing", "Debugging", "Agile Collaboration",
      "Client Communication", "Error Handling", "Scripting", "Logic Trees"
    ]
  },
  {
    companyLogo: "images/companyLogos/lucentary-logo.png",
    companyUrl: "https://lucentary.com",
    jobTitle: "Apprentice",
    companyName: "Lucentary Academy",
    startDate: "September 2024",
    endDate: "Present",
    summary: "Gained hands-on experience developing full-stack applications using C#, Java, Python, Node.js, and Vue.js. Built diverse system-level and web-based solutions with an emphasis on maintainability, testing, and scalability. Mastered key computer science principles and applied best practices across TDD, JSON scripting, debugging, and Windows development.",
    bullets: [
      "Built console, web, and background services using C# .NET and Java.",
      "Applied Test-Driven Development to write reliable, scalable code.",
      "Created and validated JSON scripts to support service integration.",
      "Used Git for version control and collaborated in Agile teams.",
      "Debugged real-world applications to resolve logic and runtime issues.",
      "Explored memory allocation, garbage collection, and design patterns."
    ],
    tech: [
      "C# .NET", "Java", "Python", "Node.js", "Vue.js", "JSON", "TDD",
      "Visual Studio", "Agile", "Debugging", "Git", "System-Level Programming",
      "Design Patterns", "Memory Management", "Windows Application Development"
    ]
  },
  {
    companyLogo: "images/companyLogos/syncopationAI-logo.png",
    companyUrl: "https://syncopation.ai",
    jobTitle: "Intern",
    companyName: "SyncopationAI",
    startDate: "April 2024",
    endDate: "May 2025",
    summary: "Designed and maintained a responsive marketing website using JavaScript, jQuery, and CSS3. Enhanced interactivity with features like an audio carousel and automated demo request forms. Focused on cross-browser compatibility, responsiveness, and UX improvements using real-time feedback and iterative testing.",
    bullets: [
      "Developed and styled responsive pages using HTML, CSS3, and JS.",
      "Implemented audio carousel and collapsible UI components.",
      "Integrated demo request form using EmailJS and Mailtrap.",
      "Ensured responsiveness with CSS3 media queries.",
      "Deployed and maintained updates on Bluehost and GoDaddy.",
      "Improved UX through layout testing and real-time feedback cycles."
    ],
    tech: [
      "JavaScript", "jQuery", "HTML5", "CSS3", "EmailJS", "Mailtrap",
      "Responsive Design", "Bluehost", "GoDaddy", "AJAX",
      "UI/UX", "DOM Manipulation", "Web Hosting", "Media Queries"
    ]
  },
  {
    companyLogo: "images/companyLogos/mba-logo.jpeg",
    companyUrl: "https://www.marciabrenner.com",
    jobTitle: "Software Engineer / Web Developer",
    companyName: "Marcia Brenner Associates",
    startDate: "March 2022",
    endDate: "January 2024",
    summary: "Led feature development for PowerSchool plugins used across K-12 education platforms. Managed complex data integrations using AngularJS, MySQL, Oracle, and JSON to streamline fee processing, behavior tracking, and snack assessments. Collaborated with clients and cross-functional teams to ensure high-quality plugin delivery and performance.",
    bullets: [
      "Built AngularJS plugin features for student behavior and fee tracking.",
      "Wrote optimized MySQL queries to enhance plugin performance.",
      "Created JSON configs for plugin logic without altering core code.",
      "Integrated new Oracle tables for After School Care data tracking.",
      "Worked within PowerSchool SIS to deploy features to web portals.",
      "Used 3rd-party relay servers to manage secure portal CRUD access."
    ],
    tech: [
      "AngularJS", "JavaScript (ES5/ES6)", "MySQL", "Oracle", "JSON",
      "PowerSchool SIS", "jQuery", "AJAX", "Data Modeling", "Plugin Development",
      "Cross-Portal Integration", "SQL Joins", "Query Optimization",
      "Client Collaboration", "SIS Platforms", "Secure Data Access"
    ]
  }
];


  const maxVisibleBadges = 8;
  function bindTechExpand(button, techList, techArray, startIndex) {
    button.on("click", function () {
      button.remove();
      for (let i = startIndex; i < techArray.length; i++) {
        techList.append(`<li class="badge badge-tech bg-success text-white">${techArray[i]}</li>`);
      }

      const collapse = $('<li class="badge badge-tech bg-success text-white toggle-techstack">Show Less</li>');
      collapse.on("click", function () {
        techList.children().remove();
        techArray.forEach((tech, i) => {
          if (i < maxVisibleBadges - 1) {
            techList.append(`<li class="badge badge-tech bg-success text-white">${tech}</li>`);
          }
        });

        const newExpand = $(`<li class="badge badge-tech bg-success text-white toggle-techstack">+${techArray.length - maxVisibleBadges + 1}</li>`);
        bindTechExpand(newExpand, techList, techArray, maxVisibleBadges - 1);
        techList.append(newExpand);
      });
      techList.append(collapse);
    });
  }

  workHistory.forEach((job, i) => {
    const summaryWords = job.summary.split(" ");
    const summaryShort = summaryWords.slice(0, 20).join(" ");

    const card = $('#templates .work-history-template').clone().removeClass('work-history-template');
    card.find('.work-logo').attr('src', job.companyLogo).attr('alt', job.companyName);
    card.find('.work-title').text(job.jobTitle);
    card.find('.work-company').html(`<a href="${job.companyUrl}" target="_blank" rel="noopener noreferrer" class="text-decoration-none text-muted">${job.companyName} <i class="fas fa-up-right-from-square ms-1" style="font-size: 0.75rem;"></i></a>`);
    card.find('.work-dates').text(`${job.startDate} – ${job.endDate}`);
    card.find('.summary-text').text(summaryShort + '...');

    const techList = card.find(".tech-list");
    const toggleBtn = card.find(".toggle-details");
    const bulletList = card.find(".job-points");
    const summaryPara = card.find(".summary-text");

    job.bullets.forEach(point => {
      bulletList.append(`<li class="mb-1">${point}</li>`);
    });

    toggleBtn.on("click", function () {
      const expanded = toggleBtn.attr("aria-expanded") === "true";
      if (expanded) {
        summaryPara.text(summaryShort + '...');
        bulletList.slideUp();
        toggleBtn.text("Read More ▾");
        toggleBtn.attr("aria-expanded", "false");
      } else {
        summaryPara.text(job.summary);
        bulletList.slideDown();
        toggleBtn.text("Read Less ▴");
        toggleBtn.attr("aria-expanded", "true");
      }
    });

    const hiddenCount = job.tech.length - maxVisibleBadges + 1;
    job.tech.forEach((tech, index) => {
      const badge = $(`<li class="badge badge-tech bg-success text-white">${tech}</li>`);
      if (index < maxVisibleBadges - 1) {
        techList.append(badge);
      } else if (index === maxVisibleBadges - 1) {
        const expandBtn = $(`<li class="badge badge-tech bg-success text-white toggle-techstack">+${hiddenCount}</li>`);
        bindTechExpand(expandBtn, techList, job.tech, index);
        techList.append(expandBtn);
        return false;
      }
    });

    $('#work-history .row').append(card);
  });
});
