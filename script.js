window.alert("Welcome here!!!")

// HOME PAGE
const mainPageData = {
    Home: "HOME",
    About: "ABOUT",
    Projects: "PROJECTS",
    Skills: "SKILLS",
    Education: "EDUCATION",
    Contact: "CONTACT",
    WelcomeMessage: "مرحباً",
    Intro: "Hi!",
    Name: "I'm Muhammad Hassan!",
    Role: "Front End Developer",
    LogoSrc: "./mypic.jpg",
    SidePic: "./pic3.jpg"
};

// ABOUT PAGE 
const AboutMySelf = {
    title: "ABOUT US",
    subtitle: "WHO AM I?",
    description1: "I am Muhammad Hassan who is currently a student of bachelor's in computer science department here at ITU, Punjab Pakistan",
    description2: "I've been here since 2022 and It's been an outstanding journey here. SO far, I have learned many skills including web-development as front end developer, coding skills, creativity, innovative ideas, and many more.",
    features: [
        {
            icon: "./ideas_icon.png",
            title: "Innovation",
            description: "Focused on bringing creative solutions to challenging problems"
        },
        {
            icon: "./web_icon.png",
            title: "Web Design",
            description: "Skilled in creating responsive, user-friendly web designs with a focus on clean layout and intuitive navigation."
        },
        {
            icon: "./software_icon.png",
            title: "Software",
            description: "Experienced in developing efficient software solutions tailored to user needs"
        },
        {
            icon: "./App_icon.png",
            title: "Application",
            description: "Focused on creating efficient, scalable applications for diverse platforms"
        }
    ]
};

// PROJECTS PAGE
const AboutProjects = {
    title: "PROJECTS",
    subtitle1: "HERE ARE MY FEW",
    subtitle2: "PROJECTS",
    projects: [
        {
            title: "SHOGI",
            icon: "./pro1.jpg"
        },
        {
            title: "LUDO",
            icon: "./pro2.jpg"
        },
        {
           title: "PAINT APP",
           icon: "./pro3.jpg"
        },
        {
            title: "EXCEL",
            icon: "./pro6.jpg"
        },
        {
            title: "DOS",
            icon: "./pro5.jpg"
        },
        {
            title: "SEO",
            icon: "./pro6.jpg"
        }
    ]
};

// SKILLS PAGE
const AboutSkills = {
    title: "MY SPECIALITY",
    subtitle1: "MY SKILLS",
    skills: [
        {
            title: "HTML5",
            percentage: "100%"
        },
        {
            title: "CSS3",
            percentage: "100%"
        },
        {
           title: "JAVASCRIPT",
            percentage: "80%"
        },
        {
            title: "SQL",
            percentage: "100%"
        },
        {
            title: "WordPress",
            percentage: "30%"
        },
        {
            title: "PhotoShop",
            percentage: "50%"
        }
    ]
};

window.onload = function()
{
    // Update the sidebar menu
    document.querySelector("a[href='#home']").innerHTML = mainPageData.Home;
    document.querySelector("a[href='#About']").innerHTML = mainPageData.About;
    document.querySelector("a[href='#Projects']").innerHTML = mainPageData.Projects;
    document.querySelector("a[href='#Skills']").innerHTML = mainPageData.Skills;
    document.querySelector("a[href='#Education']").innerHTML = mainPageData.Education;
    document.querySelector(".sidebar li:last-child").innerHTML = mainPageData.Contact;

    // Update the main section
    document.querySelector(".welcome").innerHTML = mainPageData.WelcomeMessage;
    document.querySelector(".ppart1 .intro").innerHTML = mainPageData.Intro;
    document.querySelector(".ppart1 .intro + br + .intro").innerHTML = mainPageData.Name;
    document.querySelector(".intro1").innerHTML = `<i>${mainPageData.Role}</i>`;

    // Update images
    document.querySelector(".logo img").src = mainPageData.LogoSrc;
    document.querySelector(".ppart2 img").src = mainPageData.SidePic;

    // PAGE 2
    // Populate the About section
    document.querySelector("#About .leftspace:nth-of-type(1)").innerHTML = AboutMySelf.title;
    document.querySelector("#About .bigfont").innerHTML = AboutMySelf.subtitle;
    document.querySelector("#About p:nth-of-type(1)").innerHTML = AboutMySelf.description1;
    document.querySelector("#About p:nth-of-type(2)").innerHTML = AboutMySelf.description2;

    // Populate the features (Innovation, Web Design, etc.)
    AboutMySelf.features.forEach((val, index) => {
        document.querySelector(`.Box${index + 1} .iconsize`).src = val.icon;
        document.querySelector(`.Box${index + 1} .bigfont`).innerHTML = val.title;
        document.querySelector(`.Box${index + 1} p`).innerHTML = val.description;
    });

    // PAGE 3
    // Populate the Project section
    document.querySelector("#Projects .leftspace.padmtop").innerHTML = AboutProjects.title;
    document.querySelector("#Projects .leftspace:nth-of-type(2)").innerHTML = AboutProjects.subtitle1;
    document.querySelector("#Projects .leftspace:nth-of-type(3)").innerHTML = AboutProjects.subtitle2;

    // Populate the projects (SHOGI, LUDO, PAINTAPP etc)
    AboutProjects.projects.forEach((val, index) => {
        document.querySelector(`.box${index + 1} .fullsize`).src = val.icon;
        document.querySelector(`.box${index + 1} .prodisplay`).innerHTML = val.title;
    });

    // PAGE 4
    // Populate the Skills section
    document.querySelector("#Skills .leftspace:nth-of-type(1) ").innerHTML = AboutSkills.title;
    document.querySelector("#Skills .leftspace:nth-of-type(2)").innerHTML = AboutSkills.subtitle1;

    // Populate the Skills (HTML5, CSS3, JAVASCRIPT etc)
    AboutSkills.skills.forEach((val, index) => {
        document.querySelector(`.sk${index + 1}`).innerHTML = val.title;
        document.querySelector(`.progress-bar${index + 1}`).innerHTML = val.percentage;
    });


};

  