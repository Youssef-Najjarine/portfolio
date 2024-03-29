
$(document).ready(function() {
    const skills = [

        {
            icon: '',
            img: 'images/react_icon.png',
            header: 'React',
            description: '__________'
            
        },
        {
            icon: '',
            img: 'images/angularjs_icon.png',
            header: 'angularjs',
            description: '__________'
            
        },
        {
            icon: '',
            img: 'images/javaScript_icon.png',
            header: 'JavaScript',
            description: 'ES5/ES6'
        },
        {
            icon: '',
            img: 'images/jquery_icon.png',
            header: 'jquery',
            description: '__________'
            
        },
        {
            icon: '',
            img: 'images/nodejs_icon.png',
            header: 'node',
            description: '__________'
            
        },
        {
            icon: '',
            img: 'images/express_icon.png',
            header: 'express',
            description: '__________'
            
        },
        {
            icon: '',
            img: 'images/mySql_icon.png',
            header: 'mysql',
            description: '__________'
            
        },
        {
            icon: '',
            img: 'images/postgresql_icon.png',
            header: 'postgresql',
            description: '__________'
            
        },
        {
            icon: '',
            img: 'images/oracle_icon.png',
            header: 'oracle',
            description: '__________'
            
        },
        {
            icon: '',
            img: 'images/html5_icon.png',
            header: 'html5',
            description: '__________'
            
        },
        {
            icon: '',
            img: 'images/css3_icon.png',
            header: 'css3',
            description: '__________'
            
        },
        {
            icon: '',
            img: 'images/bootstrap_icon.png',
            header: 'bootstrap',
            description: '3 and 4'
            
        },
        {
            icon: '',
            img: 'images/figma_icon.png',
            header: 'figma',
            description: '__________'
            
        }
    ]
    skills.forEach(function(skill) {
        let clonedTemp;
        if(skill.icon) clonedTemp = $('#templates .skills-template').clone();
        else clonedTemp = $('#templates .skills-img-template').clone();
        clonedTemp.find('img').attr('src', skill.img);
        clonedTemp.find('i').addClass(skill.icon);
        clonedTemp.find('.s-title').text(skill.header);
        clonedTemp.find('p').text(skill.description);
        $('#skills .row').append(clonedTemp);

    });

    const tools = [
        {
            icon: '',
            img: 'images/github_icon.png',
            header: 'github',
            description: '__________'
            
        },
        {
            icon: '',
            img: 'images/gitlab_icon.png',
            header: 'gitlab',
            description: '__________'
            
        },
        {
            icon: '',
            img: 'images/vsCode_icon.png',
            header: 'vs code',
            description: 'Visual Studio'
            
        },
        {
            icon: '',
            img: 'images/babel_icon.png',
            header: 'babel',
            description: '__________'
        },
        {
            icon: '',
            img: 'images/npm_icon.png',
            header: 'npm',
            description: 'Node Package Manager'
            
        },
        {
            icon: '',
            img: 'images/webpack_icon.png',
            header: 'webpack',
            description: '__________'
            
        }
    ];
    tools.forEach(function(tool) {
        let clonedTemp;
        if(tool.icon) clonedTemp = $('#templates .tools-template').clone();
        else clonedTemp = $('#templates .tools-img-template').clone();
        clonedTemp.find('img').attr('src', tool.img);
        clonedTemp.find('i').addClass(tool.icon);
        clonedTemp.find('.s-title').text(tool.header);
        clonedTemp.find('p').text(tool.description);
        $('#tools .row').append(clonedTemp);

    })
});