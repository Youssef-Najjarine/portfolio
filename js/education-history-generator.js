$(document).ready(function () {
const educationHistory = [
  {
    logo: "images/companyLogos/grand-circus-logo.png",
    name: "Grand Circus",
    location: "Detroit, Michigan",
    graduation: "September 2025",
    url: "https://www.grandcircus.co/",
    summary: "Six-month full-stack bootcamp focused on C# .NET, Java, Spring Boot, and ASP.NET Core. Emphasized test-driven development, API development, and CI/CD deployment using Azure, with group-based capstone projects and system architecture foundations.",
    bullets: [
      "Built full-stack web apps using ASP.NET Core, Java, and Spring Boot.",
      "Created RESTful APIs with structured routing and data models.",
      "Developed console apps and backend services in C# and Java.",
      "Deployed projects using Azure with CI/CD and cloud architecture.",
      "Practiced TDD and unit testing in enterprise-level applications.",
      "Collaborated in Agile teams on capstone projects and peer reviews."
    ],
    tech: [
      "C# .NET", "ASP.NET Core", "Java", "Spring Boot", "Spring Data", "SQL Server", "Azure",
      "CI/CD", "TDD", "REST APIs", "Agile", "JSON", "MVC Architecture", "Console Applications"
    ],
    certificates: []
  },
  {
    logo: "images/companyLogos/lucentary-logo.png",
    name: "Lucentary Academy",
    location: "Fort Worth, Texas",
    graduation: "Present",
    url: "https://lucentary.com/",
    summary: "Apprenticeship program centered on system-level programming, C# .NET, Java, and full-stack software development. Focused on design patterns, memory handling, and multi-layered applications with practical exposure to debugging and architecture design.",
    bullets: [
      "Built applications using C#, Java, Python, Node.js, and Visual Studio.",
      "Created console apps, web apps, services, and Windows tools.",
      "Learned memory management, garbage collection, and low-level structures.",
      "Wrote and maintained structured JSON for service integration.",
      "Practiced TDD, version control, and modular development.",
      "Explored layered architecture, dependency injection, and debugging."
    ],
    tech: [
      "C# .NET", "Java", "Python", "Node.js", "Visual Studio", "TDD", "System-Level Programming",
      "Design Patterns", "Memory Management", "Windows Services", "JSON", "Debugging",
      "Architecture Design", "Git", "Agile"
    ],
    certificates: [
      {
        label: "White Belt",
        link: "https://drive.google.com/file/d/1XKi1qOXVcF79hjRe1ipoH3sNWHlQJ8kO/view?usp=sharing"
      }
    ]
  },
  {
    logo: "images/companyLogos/learningFuze-logo.png",
    name: "Learning Fuze",
    location: "Irvine, California",
    graduation: "December 2021",
    url: "https://learningfuze.com/",
    summary: "A full-time, immersive 1,000+ hour software engineering bootcamp focused on modern full-stack web development. Emphasized team collaboration, Agile methodologies, and scalable CRUD architecture using React and Express.",
    bullets: [
      "Built full-stack apps using React.js, Node.js, Express, and PostgreSQL.",
      "Used Git/GitHub and Agile to collaborate on group projects.",
      "Designed and built backend services delivering RESTful APIs.",
      "Managed database operations and implemented CRUD functionality.",
      "Improved UI/UX through responsive layouts and error handling.",
      "Presented projects and collaborated in code reviews and sprints."
    ],
    tech: [
      "React.js", "Node.js", "Express.js", "PostgreSQL", "JavaScript (ES6)", "HTML5", "CSS3",
      "Agile", "Git", "GitHub", "JSON", "REST APIs", "Responsive Design", "Debugging"
    ],
    certificates: [
      {
        label: "Module 1",
        link: "https://drive.google.com/file/d/1Yqp5qlYeLb4cXnDgO6sMUIeG6FSd1qlO/view?usp=sharing"
      },
      {
        label: "Module 2",
        link: "https://drive.google.com/file/d/1hFreje1EN9M5VadKcYtgOKncu_tq5Mc2/view?usp=sharing"
      },
      {
        label: "Module 3",
        link: "https://drive.google.com/file/d/1jfX2ZmrR30AU2Okq8NVGCGmJ5Og_QHXY/view?usp=sharing"
      }
    ]
  }
];


  const maxVisibleBadges = 8;

  function bindTechExpand(button, techList, techArray, startIndex) {
    button.on("click", function () {
      button.remove();
      for (let i = startIndex; i < techArray.length; i++) {
        techList.append(`<li class='badge badge-tech bg-education text-white'>${techArray[i]}</li>`);
      }

      const collapse = $(`<li class='badge badge-tech bg-education text-white toggle-techstack'>Show Less</li>`);
      collapse.on("click", function () {
        techList.children().remove();
        techArray.slice(0, maxVisibleBadges - 1).forEach(tech =>
          techList.append(`<li class='badge badge-tech bg-education text-white'>${tech}</li>`)
        );
        const newExpand = $(`<li class='badge badge-tech bg-education text-white toggle-techstack'>+${techArray.length - maxVisibleBadges + 1}</li>`);
        bindTechExpand(newExpand, techList, techArray, maxVisibleBadges - 1);
        techList.append(newExpand);
      });

      techList.append(collapse);
    });
  }

  educationHistory.forEach(school => {
    const summaryWords = school.summary.split(" ");
    const summaryShort = summaryWords.slice(0, 20).join(" ") + (summaryWords.length > 20 ? "..." : "");

    const card = $('#templates .education-template').clone().removeClass('education-template');
    card.find(".edu-logo").attr("src", school.logo).attr("alt", school.name);
    card.find(".edu-title").html(`
      <a href="${school.url}" target="_blank" class="text-decoration-none text-primary fw-bold">
        ${school.name}
        <i class="fas fa-up-right-from-square ms-1" style="font-size: 0.75rem;"></i>
      </a>`);
    card.find(".edu-location").text(school.location);
    card.find(".edu-date").text(`${school.graduation}`);

    const summaryPara = card.find(".edu-summary");
    const bulletList = card.find(".edu-points");
    const toggleBtn = card.find(".toggle-details");
    summaryPara.text(summaryShort);

    school.bullets.forEach(point => {
      bulletList.append(`<li class="mb-1 ps-2">${point}</li>`);
    });

    toggleBtn.on("click", function () {
      const expanded = toggleBtn.attr("aria-expanded") === "true";
      if (expanded) {
        summaryPara.text(summaryShort);
        bulletList.slideUp();
        toggleBtn.text("Read More ▾").attr("aria-expanded", "false");
      } else {
        summaryPara.text(school.summary);
        bulletList.slideDown();
        toggleBtn.text("Read Less ▴").attr("aria-expanded", "true");
      }
    });

    const techList = card.find(".tech-list");
    school.tech.forEach((tech, index) => {
      if (index < maxVisibleBadges - 1) {
        techList.append(`<li class='badge badge-tech bg-education text-white'>${tech}</li>`);
      } else if (index === maxVisibleBadges - 1) {
        const expandBtn = $(`<li class='badge badge-tech bg-education text-white toggle-techstack'>+${school.tech.length - maxVisibleBadges + 1}</li>`);
        bindTechExpand(expandBtn, techList, school.tech, index);
        techList.append(expandBtn);
      }
    });

    if (Array.isArray(school.certificates) && school.certificates.length > 0) {
      const certSection = $(`
        <div class="certificates text-end mt-2">
          <span class="fw-semibold me-2 d-block">Certificate(s)</span>
          <div class="d-flex flex-wrap justify-content-end gap-2 mt-1 certificate-links">
            ${school.certificates.map((cert, idx) => `
              <a href="${cert.link}" target="_blank" class="btn btn-sm btn-outline-primary toggle-details">${cert.label}</a>
              ${(idx + 1) % 3 === 0 ? '<div class="w-100"></div>' : ''}
            `).join("")}
          </div>
        </div>
      `);
      card.find(".education-card").prepend(certSection);
    }

    $('#education .row').append(card);
  });
});
