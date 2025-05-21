$(document).ready(function () {
  const projects = [
    {
      github: "https://github.com/Youssef-Najjarine/fitness-pal",
      img: "images/fitnessPaL.png",
      title: "Fitness Pal",
      description: "Track workouts, calculate BMR, and manage meals using Express.js and JSON storage.",
      demo: "https://raw.githubusercontent.com/Youssef-Najjarine/fitness-pal/master/full-fitnessPalDemo.gif"
    },
    {
      github: "https://github.com/Youssef-Najjarine/anime-fans",
      img: "images/animeTrivia.png",
      title: "Anime Fans",
      description: "A trivia app pulling API data and using AJAX to display dynamic anime quizzes.",
      demo: "https://user-images.githubusercontent.com/71291742/145110268-b60c0a8d-8cb5-409f-9b7f-e9fd378bbf58.gif"
    },
    {
      github: "https://github.com/Youssef-Najjarine/student-profile-2088",
      img: "images/profileSearch.png",
      title: "Profile Manager",
      description: "Search and manage student profiles using Node.js, MySQL/PostgreSQL, and React.",
      demo: "https://user-images.githubusercontent.com/71291742/153488000-5d5fcdc5-5e32-4921-b5fa-83fc093e8d39.gif"
    },
    {
      github: "https://github.com/Youssef-Najjarine/driving-game",
      img: "images/drivingGame.png",
      title: "Driving Game",
      description: "A fun and simple HTML5, CSS, and JavaScript driving game with obstacle avoidance.",
      demo: "https://raw.githubusercontent.com/Youssef-Najjarine/driving-game/master/driving-game-demo.gif"
    },
    {
      github: "https://github.com/Youssef-Najjarine/code-journal",
      img: "images/codeJournal.png",
      title: "Code Journal",
      description: "A dynamic journal for coders to store notes with HTML5, CSS3, and JavaScript.",
      demo: "https://raw.githubusercontent.com/Youssef-Najjarine/code-journal/master/code-journal-demo.gif"
    },
    {
      github: "https://github.com/Youssef-Najjarine/week-planner",
      img: "images/weeklyPlanner.png",
      title: "Weekly Planner",
      description: "A weekly planner app built using HTML5, CSS3, and vanilla JavaScript.",
      demo: "https://raw.githubusercontent.com/Youssef-Najjarine/week-planner/master/imgs/weekly-planner-demo.gif"
    }
  ];

  projects.forEach(project => {
    const clone = $('#templates .project-template').clone();
    clone.find('.github-link').attr('href', project.github);
    clone.find('.project-img').attr('src', project.img).attr('alt', project.title);
    clone.find('.project-title').text(project.title);
    clone.find('.project-description').text(project.description);
    clone.find('.project-demo').attr('href', project.demo);
    $('#projects .row').append(clone);
  });
});
