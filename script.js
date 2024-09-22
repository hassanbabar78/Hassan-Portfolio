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

};

  