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
};

  