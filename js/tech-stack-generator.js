$(document).ready(function () {
  const techStack = [
    // JavaScript-related
    { img: 'images/icons/react_icon.png', header: 'React', description: 'JavaScript UI Framework' },
        { img: 'images/icons/react_native_icon.png', header: 'React Native', description: 'iOS & Android Framework' },
    { img: 'images/icons/vue_icon.png', header: 'vue', description: 'Progressive JS Framework' },
    { img: 'images/icons/angular_icon.png', header: 'Angular', description: 'JavaScript UI Framework' },
    { img: 'images/icons/angularjs_icon.png', header: 'AngularJS', description: 'Legacy JS Framework' },
    { img: 'images/icons/typescript_icon.png', header: 'TypeScript', description: 'Typed Superset of JS' },
    { img: 'images/icons/javaScript_icon.png', header: 'JavaScript', description: 'ES5/ES6' },
    { img: 'images/icons/jquery_icon.png', header: 'jQuery', description: 'DOM Manipulation Library' },
    { img: 'images/icons/nodejs_icon.png', header: 'Node.js', description: 'Backend JavaScript Runtime' },
    { img: 'images/icons/express_icon.png', header: 'Express', description: 'Node.js Web Framework' },
    { img: 'images/icons/npm_icon.png', header: 'npm', description: 'Node Package Manager' },
    { img: 'images/icons/webpack_icon.png', header: 'Webpack', description: 'Module Bundler' },
    { img: 'images/icons/babel_icon.png', header: 'Babel', description: 'JavaScript Compiler' },

    // C# / .NET
    { img: 'images/icons/c_sharp_icon.png', header: 'C#', description: 'Object-Oriented Language' },
    { img: 'images/icons/net_icon.png', header: '.NET', description: 'Microsoft Framework' },
    { img: 'images/icons/visual_studio_icon.png', header: 'Visual Studio', description: 'C# IDE' },

    // Java / Spring
    { img: 'images/icons/java_icon.png', header: 'Java', description: 'Object-Oriented Language' },
    { img: 'images/icons/springBoot_icon.png', header: 'Spring Boot', description: 'Java Microservice Framework' },
    { img: 'images/icons/springData_icon.png', header: 'Spring Data', description: 'Java ORM/Data Layer' },
    { img: 'images/icons/IntelliJ_icon.png', header: 'IntelliJ', description: 'JetBrains-Powered Java IDE' },
    { img: 'images/icons/eclipse_icon.png', header: 'Eclipse', description: 'Java IDE' },

    // Python
    { img: 'images/icons/python_icon.png', header: 'Python', description: 'Multi-Paradigm Language' },
    { img: 'images/icons/anaconda_icon.png', header: 'Anaconda', description: 'Data Science Platform' },
    { img: 'images/icons/pycharm_icon.png', header: 'PyCharm', description: 'Python IDE by JetBrains' },
    { img: 'images/icons/jupyter_icon.png', header: 'Jupyter', description: 'Interactive Notebook Environment' },

    // Cloud & APIs
    { img: 'images/icons/aws_icon.png', header: 'AWS', description: 'Amazon Web Services' },
    { img: 'images/icons/azure_icon.png', header: 'Azure', description: 'Microsoft Cloud Platform' },
    { img: 'images/icons/azure_devops_icon.png', header: 'Azure DevOps', description: 'Cloud DevOps platform' },
    { img: 'images/icons/api_icon.png', header: 'API', description: 'Application Programming Interface' },

    // Databases
    { img: 'images/icons/mySql_icon.png', header: 'MySQL', description: 'Relational Database' },
    { img: 'images/icons/sql_icon.png', header: 'SQL', description: 'Structured Query Language' },
    { img: 'images/icons/postgresql_icon.png', header: 'PostgreSQL', description: 'Open Source RDBMS' },
    { img: 'images/icons/oracle_icon.png', header: 'Oracle', description: 'Enterprise DBMS' },
    { img: 'images/icons/microsoftSqlServer_icon.png', header: 'MSSQL', description: 'Microsoft SQL Server' },

    // Tools
    { img: 'images/icons/github_icon.png', header: 'GitHub', description: 'Source Code Hosting' },
    { img: 'images/icons/gitlab_icon.png', header: 'GitLab', description: 'DevOps Platform' },
    { img: 'images/icons/git_icon.png', header: 'Git', description: 'Version Control System' },
    { img: 'images/icons/cmder_icon.png', header: 'cmder', description: 'Terminal Emulator for Windows' },
    { img: 'images/icons/vsCode_icon.png', header: 'VS Code', description: 'Visual Studio Code' },
    { img: 'images/icons/mssm_icon.png', header: 'SSMS', description: 'SQL Server Management Studio' },
    { img: 'images/icons/figma_icon.png', header: 'Figma', description: 'UI/UX Design Tool' },
  ];

  techStack.forEach(function (item) {
    let clonedTemp = $('#templates .tech-stack-template').clone();
    clonedTemp.find('img').attr('src', item.img);
    clonedTemp.find('.s-title').text(item.header);
    clonedTemp.find('p').text(item.description);
    $('#tech-stack .row').append(clonedTemp);
  });
});
