/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Zijun Xiao",
  title: "Hi, I'm Zijun",
  subTitle: emoji(
    "A game programmer 🎮 based in Los Angeles, building combat systems, enemy AI and movement mechanics with Unreal Engine and Unity — from 3D ARPGs to VR shooters on Meta Quest."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Seanwilliam2077",
  gmail: "Seanwilliam2077@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "GAME PROGRAMMER · UNREAL & UNITY · REAL-TIME 3D",
  skills: [
    emoji(
      "⚡ Gameplay programming in Unreal: third-person combat, parkour/movement systems, enemy & boss AI"
    ),
    emoji(
      "⚡ Unity C# development: 3D ARPG, 2D platformer & puzzle games, VR FPS on Meta Quest"
    ),
    emoji(
      "⚡ 3D art pipeline: character, environment and texture work with Blender, Maya and Substance"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Unreal Engine",
      fontAwesomeClassname: "fas fa-gamepad"
    },
    {
      skillName: "Unity",
      fontAwesomeClassname: "fab fa-unity"
    },
    {
      skillName: "C++ / Blueprint",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "C#",
      fontAwesomeClassname: "fas fa-laptop-code"
    },
    {
      skillName: "VR · Meta Quest",
      fontAwesomeClassname: "fas fa-vr-cardboard"
    },
    {
      skillName: "Blender",
      fontAwesomeClassname: "fas fa-cube"
    },
    {
      skillName: "Maya",
      fontAwesomeClassname: "fas fa-cubes"
    },
    {
      skillName: "Substance",
      fontAwesomeClassname: "fas fa-paint-brush"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Your University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Your Degree",
      duration: "20xx - 20xx",
      desc: "",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Game Development",
      progressPercentage: "85%"
    },
    {
      Stack: "Graphics Programming",
      progressPercentage: "75%"
    },
    {
      Stack: "Tools & Pipeline",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Your Role",
      company: "Company",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "20xx – Present",
      desc: ""
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Game Projects",
  subtitle: "SELECTED WORK — FROM 3D ARPG COMBAT TO VR SHOOTERS",
  projects: [
    {
      image:
        require("./assets/images/wolfSoga.png"),
      projectName: "Wolf Soga",
      projectDesc:
        "3D ARPG built in Unreal by a team of 5 (solo programmer with 4 artists) in 2 months. I built the third-person combat system (dodge, parry, melee & magic), four enemy AI archetypes including the final boss, the item system and the full UI.",
      footerLink: [
        {
          name: "Watch Video",
          url: "https://vimeo.com/1111774512"
        }
      ]
    },
    {
      image:
        require("./assets/images/rpgParkour.png"),
      projectName: "RPG Parkour System",
      projectDesc:
        "A complete parkour system for ARPGs, built solo in Unreal in 2 months — slide, vault/mantle, beam walk, edge grab, cover, wall run & climb, dodge/sprint, plus enemy AI perception and branching NPC dialogue, assembled into a playable level.",
      footerLink: [
        {
          name: "Watch Video",
          url: "https://vimeo.com/1110810152"
        }
      ]
    },
    {
      image:
        require("./assets/images/cityOfSorrow.png"),
      projectName: "City Of Sorrow",
      projectDesc:
        "My first game: a 3D ARPG in Unity set in a medieval fantasy castle, built solo in 3 months — 12 enemy types with distinct attack patterns in C#, level scripting, shortcut elevators and respawn design.",
      footerLink: [
        {
          name: "Watch Video",
          url: "https://vimeo.com/1111780483"
        }
      ]
    },
    {
      image:
        require("./assets/images/letMeOut.png"),
      projectName: "Let Me Out",
      projectDesc:
        "2D pixel-art text puzzle game made in 48 hours for Global Game Jam 2024 (theme: Make Us Laugh) with a team of 3 — a funny story set in a hospital ward. I was producer and programmer.",
      footerLink: [
        {
          name: "Watch Video",
          url: "https://vimeo.com/1111777397"
        }
      ]
    },
    {
      image:
        require("./assets/images/roiJourney.png"),
      projectName: "ROI Journey",
      projectDesc:
        "A 2D platformer about exploration and emotional healing, built solo in Unity over 3 months — five hand-crafted scenes follow a boy's journey from a dark forest to a colorful city.",
      footerLink: [
        {
          name: "Watch Video",
          url: "https://video.wixstatic.com/video/29049e_c95801204e1c4d639ca2a89dbdb7e5f7/1080p/mp4/file.mp4"
        }
      ]
    },
    {
      image:
        require("./assets/images/cyberShoot.jpg"),
      projectName: "Cyber Shoot (VR)",
      projectDesc:
        "VR FPS prototype for Meta Quest 3 built in two weeks — a sci-fi robot uprising with a Bullet Time mechanic that lets you catch enemy bullets mid-air or dodge them.",
      footerLink: [
        {
          name: "Watch Video",
          url: "https://video.wixstatic.com/video/29049e_ce09018aceef4d0a97830b2db4640750/720p/mp4/file.mp4"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Art Projects 🎨"),
  subtitle: "CHARACTER, ENVIRONMENT AND TEXTURE WORK",
  achievementsCards: [
    {
      title: "Character Art",
      subtitle:
        "Full character pipeline — sketch, model, texture, render — in Blender and Substance Painter.",
      image:
        require("./assets/images/characterArt.jpg"),
      imageAlt: "Character art render",
      footerLink: [
        {
          name: "Reference",
          url: "https://www.artstation.com/artwork/oOd8GL"
        }
      ]
    },
    {
      title: "Environment Art",
      subtitle:
        "Environment scene from block-out to final render in Maya with Substance Painter & Designer.",
      image:
        require("./assets/images/environmentArt.png"),
      imageAlt: "Environment art render",
      footerLink: [
        {
          name: "Watch Video",
          url: "https://video.wixstatic.com/video/29049e_993577cc22d3417aa10798b914628c31/480p/mp4/file.mp4"
        }
      ]
    },
    {
      title: "Texture Project",
      subtitle:
        "Material and texture studies in Maya with Substance Painter & Designer.",
      image:
        require("./assets/images/textureArt.png"),
      imageAlt: "Texture project render",
      footerLink: [
        {
          name: "Material",
          url: "https://vimeo.com/1111551668"
        },
        {
          name: "Render",
          url: "https://vimeo.com/1111556250"
        },
        {
          name: "Substance",
          url: "https://vimeo.com/1111553665"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: "",
  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Interested in games, graphics or just want to say hi? My inbox is open for all.",
  number: "+1 (646) 247 6700",
  email_address: "Seanwilliam2077@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
