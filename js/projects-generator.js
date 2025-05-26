$(document).ready(function () {
    const maxVisibleBadges = 8;

const projects = [
  {
    github: "https://github.com/Youssef-Najjarine/fitness-pal",
    img: "images/projects/fitnessPaL.png",
    title: "Fitness Pal",
    description: "Track workouts, calculate BMR, and manage meals using Express.js and JSON storage.",
    demo: "https://raw.githubusercontent.com/Youssef-Najjarine/fitness-pal/master/full-fitnessPalDemo.gif",
    tech: [
    "React.js", "Express.js", "Node.js", "JavaScript", "jQuery", "HTML5", "CSS3", "Bootstrap",
      "JSON", "RESTful APIs", "Unit Testing", "BMR Calculator", "Form Validation",
      "Session Management", "Error Handling", "Component Logic", "Console Logging",
      "Responsive Design", "Debugging", "Visual Studio Code", "Git", "GitHub"
    ]
  },
  {
    github: "https://github.com/Youssef-Najjarine/anime-fans",
    img: "images/projects/animeTrivia.png",
    title: "Anime Fans",
    description: "A trivia app pulling API data and using AJAX to display dynamic anime quizzes.",
    demo: "https://user-images.githubusercontent.com/71291742/145110268-b60c0a8d-8cb5-409f-9b7f-e9fd378bbf58.gif",
    tech: [
    "JavaScript", "jQuery", "HTML5", "CSS3","Bootstrap", "AJAX", "JSON Parsing", 
      "Public APIs", "Fetch API", "Responsive Design", "Edge Case Handling", 
      "Debugging", "Figma", "Wireframing", "API Integration", "Mobile Optimization", 
      "UI/UX", "Visual Studio Code", "Git", "GitHub"
    ]
  },
  {
    github: "https://github.com/Youssef-Najjarine/student-profile-2088",
    img: "images/projects/profileSearch.png",
    title: "Profile Manager",
    description: "Search and manage student profiles using Node.js, MySQL/PostgreSQL, and React.",
    demo: "https://user-images.githubusercontent.com/71291742/153488000-5d5fcdc5-5e32-4921-b5fa-83fc093e8d39.gif",
    tech: [
      "React", "Node.js", "Express.js", "PostgreSQL", "MySQL", 
      "CRUD Operations", "Routing", "Axios", "Hooks", "Bootstrap", 
      "HTML5", "CSS3", "Responsive Tables", "Component Design", "Data Mapping", 
      "REST API", "Debugging", "Nodemon", "Visual Studio Code", "Git", "GitHub"
    ]
  },
  {
    github: "https://github.com/Youssef-Najjarine/driving-game",
    img: "images/projects/drivingGame.png",
    title: "Driving Game",
    description: "A fun and simple HTML5, CSS, and JavaScript driving game with obstacle avoidance.",
    demo: "https://raw.githubusercontent.com/Youssef-Najjarine/driving-game/master/driving-game-demo.gif",
    tech: [
      "JavaScript", "Canvas API", "Game Loop", "HTML5", "CSS3", "Collision Detection", 
      "Keyboard Events", "Object-Oriented JS", "DOM Manipulation", "Score Tracking", 
      "Sprites", "Animations", "Local Storage", "Responsive Layout", 
      "Visual Studio Code", "Git", "GitHub"
    ]
  },
  {
    github: "https://github.com/Youssef-Najjarine/code-journal",
    img: "images/projects/codeJournal.png",
    title: "Code Journal",
    description: "A dynamic journal for coders to store notes with HTML5, CSS3, and JavaScript.",
    demo: "https://raw.githubusercontent.com/Youssef-Najjarine/code-journal/master/code-journal-demo.gif",
    tech: [
      "HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Local Storage", 
      "Form Handling", "Dark Mode Toggle", "Event Listeners", "State Management", 
      "DOM Manipulation", "Responsive Design", "Modal Popups", "Font Awesome", 
      "Git", "GitHub", "Visual Studio Code"
    ]
  },
  {
    github: "https://github.com/Youssef-Najjarine/week-planner",
    img: "images/projects/weeklyPlanner.png",
    title: "Weekly Planner",
    description: "A weekly planner app built using HTML5, CSS3, and vanilla JavaScript.",
    demo: "https://raw.githubusercontent.com/Youssef-Najjarine/week-planner/master/imgs/weekly-planner-demo.gif",
    tech: [
      "HTML5", "CSS3", "Vanilla JavaScript", "jQuery", "Bootstrap", 
      "Local Storage", "Event Delegation", "Responsive UI", "Time Slots", 
      "Form Submission", "User Input", "Date Handling", "Object Arrays", 
      "State Persistence", "DOM Manipulation", "Visual Cues", "Git", "GitHub"
    ]
  }
];

    function bindExpandButton(button, project, index, techList, hiddenCount) {
    button.on('click', function () {
        button.remove();
        for (let j = index; j < project.tech.length; j++) {
        techList.append(`<li class="badge badge-tech bg-success text-white">${project.tech[j]}</li>`);
        }

        const collapse = $('<li class="badge badge-tech bg-success text-white toggle-techstack">Show Less</li>');
        collapse.on('click', function () {
        techList.children().remove();

        // Re-render the first badges
        project.tech.forEach((tech, k) => {
            if (k < maxVisibleBadges - 1) {
            techList.append(`<li class="badge badge-tech bg-success text-white">${tech}</li>`);
            }
        });

        // Recreate and rebind the expand button
        const newExpandBtn = $(`<li class="badge badge-tech bg-success text-white toggle-techstack">+${hiddenCount}</li>`);
        bindExpandButton(newExpandBtn, project, index, techList, hiddenCount);
        techList.append(newExpandBtn);
        });

        techList.append(collapse);
    });
    }

    projects.forEach(project => {
    const clone = $('#templates .project-template').clone();
    clone.find('.github-link').attr('href', project.github);
    clone.find('.project-img').attr('src', project.img).attr('alt', project.title);
    clone.find('.project-title').text(project.title);
    clone.find('.project-description').text(project.description);
    clone.find('.project-demo').attr('href', project.demo);

    const techList = clone.find('.tech-list');
    const hiddenCount = project.tech.length - maxVisibleBadges + 1;

    project.tech.forEach((tech, index) => {
        const badge = $(`<li class="badge badge-tech bg-success text-white">${tech}</li>`);
        if (index < maxVisibleBadges - 1) {
        techList.append(badge);
        } else if (index === maxVisibleBadges - 1) {
        const expandBtn = $(`<li class="badge badge-tech bg-success text-white toggle-techstack">+${hiddenCount}</li>`);
        bindExpandButton(expandBtn, project, index, techList, hiddenCount);
        techList.append(expandBtn);
        return false; // Break loop after adding expand button
        }
    });

    $('#projects .row').append(clone);
    });
});