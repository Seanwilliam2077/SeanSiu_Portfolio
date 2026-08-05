/* Portfolio content — keep visual styling in _globalColor.scss and component SCSS files. */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Zijun Xiao",
  title: "Hi, I'm Zijun",
  subTitle: emoji(
    "A Technical Artist, Graphics Engineer and Researcher focused on real-time rendering, PCG and Agent automation, neural rendering, DCC pipelines, and game-engine R&D."
  ),
  resumeLink: "",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/Seanwilliam2077",
  linkedin: "https://www.linkedin.com/in/zijunxiao",
  gmail: "seanwilliam2077@gmail.com",
  phone: "+86 19370987201",
  display: true
};

const skillsSection = {
  title: "Technical Art & Graphics",
  subTitle: "REAL-TIME RENDERING · PCG / AGENT PIPELINES · NEURAL RENDERING · DCC AUTOMATION",
  skills: [
    emoji("⚡ Programming Languages: C++, C#, Python, HLSL and CUDA"),
    emoji(
      "⚡ Engines & Tools: Unreal Engine 5, Unity, Vulkan, PyTorch, Houdini, Maya, Blender, Substance Painter/Designer and RenderDoc"
    ),
    emoji(
      "⚡ Core TA Domains: custom rendering pipelines, performance profiling, memory management, complex materials and shaders, procedural animation (IK), 3DGS and PCG / Agent automation"
    ),
    emoji(
      "⚡ Neural Rendering R&D: 3D Gaussian Splatting, large-scale 3D scene reconstruction and explicit 3D world models, and Transformer-based / generative neural rendering — e.g. VortexGaussians, real-time simulation-driven fire & smoke rendered as native Gaussian-splatting content"
    )
  ],
  softwareSkills: [
    {
      skillName: "C++",
      logo: require("./assets/images/tech/cplusplus.svg").default
    },
    {skillName: "C#", logo: require("./assets/images/tech/csharp.svg").default},
    {
      skillName: "Python",
      logo: require("./assets/images/tech/python.svg").default
    },
    {skillName: "CUDA", logo: require("./assets/images/tech/nvidia.svg").default},
    {
      skillName: "Vulkan",
      logo: require("./assets/images/tech/vulkan.svg").default
    },
    {
      skillName: "PyTorch",
      logo: require("./assets/images/tech/pytorch.svg").default
    },
    {
      skillName: "Unreal Engine 5",
      logo: require("./assets/images/tech/unrealengine.svg").default
    },
    {
      skillName: "Unity",
      logo: require("./assets/images/tech/unity.svg").default
    },
    {
      skillName: "Houdini",
      logo: require("./assets/images/tech/houdini.svg").default
    },
    {
      skillName: "Maya",
      logo: require("./assets/images/tech/autodeskmaya.svg").default
    },
    {
      skillName: "Blender",
      logo: require("./assets/images/tech/blender.svg").default
    }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Georgia Institute of Technology",
      subHeader: "M.S. in Computer Graphics",
      duration: "Sep 2025 - Jun 2027",
      desc:
        "Focus: real-time rendering pipelines, low-level graphics implementation, C++/Python, Unity development, machine learning and high-performance computing.",
      descBullets: []
    },
    {
      schoolName: "Savannah College of Art and Design (SCAD)",
      subHeader: "M.S. in Game Development",
      duration: "Sep 2024 - Aug 2025",
      desc:
        "Focus: Unreal Engine game production, 3D art, art pipelines and DCC workflows.",
      descBullets: []
    },
    {
      schoolName: "South China Normal University",
      subHeader: "B.S. in Finance",
      duration: "Sep 2019 - Jun 2023",
      desc: "",
      descBullets: []
    }
  ]
};

const techStack = {
  viewSkillBars: false,
  experience: [
    {Stack: "Rendering & Shaders", progressPercentage: "90%"},
    {Stack: "PCG & Agent Pipelines", progressPercentage: "90%"},
    {Stack: "Tools & DCC Automation", progressPercentage: "85%"}
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      company: "Tencent",
      companylogo: require("./assets/images/tencent.png"),
      date: "Dec 2025 - Present",
      descBullets: [
        "Domestic Publishing · Ecosystem Development Dept · Pre-research Team",
        "Cross Tech · AI Engine Dept · PCG Team & Frontier Lab"
      ]
    },
    {
      company: "Seasun (Kingsoft)",
      companylogo: require("./assets/images/seasun.png"),
      date: "Jul 2023 - Dec 2023",
      descBullets: [
        "JX3 (Sword Net 3) · Engine Dev Dept · QA Pipeline Team"
      ]
    }
  ]
};

const openSource = {
  showGithubProfile: "false",
  display: false
};

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
          name: "Read More",
          url: "#/project/wolf-soga"
        },
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
          name: "Read More",
          url: "#/project/rpg-parkour-system"
        },
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
          name: "Read More",
          url: "#/project/city-of-sorrow"
        },
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
          name: "Read More",
          url: "#/project/let-me-out"
        },
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
          name: "Read More",
          url: "#/project/roi-journey"
        },
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
          name: "Read More",
          url: "#/project/cyber-shoot-vr"
        },
        {
          name: "Watch Video",
          url: "https://video.wixstatic.com/video/29049e_ce09018aceef4d0a97830b2db4640750/720p/mp4/file.mp4"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const appProjects = {
  title: "App Projects",
  subtitle: "PRODUCT & AI ENGINEERING — FLUTTER · GOOGLE CLOUD · GEMINI",
  projects: [
    {
      image: require("./assets/images/gobuzz.png"),
      projectName: "GoBuzz — Location-Based Social App",
      projectDesc:
        "A Flutter app that helps international students and newcomers find nearby people who share their niche interests, built for the Google AI Vibeathon with a team of 5. Anonymous location-based matching on Google Maps, asynchronous message drops and multiplayer rooms, plus AI avatar generation powered by Vertex AI Gemini through a FastAPI backend on Cloud Run — the client never touches Google credentials.",
      footerLink: [
        {name: "Read More", url: "#/project/gobuzz"},
        {name: "Watch Demo", url: "https://www.youtube.com/shorts/ZHFhkxaPVQo"},
        {
          name: "GitHub",
          url: "https://github.com/GuGuYou/GoogleConnectTheWorld"
        }
      ]
    }
  ],
  display: true
};

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
          name: "Read More",
          url: "#/project/character-art"
        },
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
          name: "Read More",
          url: "#/project/environment-art"
        },
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
          name: "Read More",
          url: "#/project/texture-project"
        },
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

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

const talkSection = {
  title: "TALKS",
  subtitle: "",
  talks: [],
  display: false
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  podcast: [],
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "Download my current resume",
  display: false
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "I am open to conversations about technical art, real-time rendering, PCG / Agent pipelines, neural rendering and game-engine R&D.",
  numbers: ["+86 19370987201", "+1 646 247 6700"],
  email_address: "zxiao316@gatech.edu"
};

const twitterDetails = {
  userName: "",
  display: false
};

const cgaiProjects = {
  title: "Graphics Tech Exploration",
  subtitle:
    "REAL-TIME RENDERING SHOWREEL — SDF · VOLUMETRICS · NERF · GAUSSIAN SPLATTING · PHYSICS · DIFFUSION",
  projects: [
    {
      projectName: "SDF & Ray Marching",
      projectDesc:
        "Analytic signed-distance fields sphere-traced in a GLSL fragment shader, shaded with Phong lighting.",
      footerLink: [{name: "Watch & Details", url: "#/project/sdf-ray-marching"}]
    },
    {
      projectName: "Neural Implicit Surfaces (SIREN)",
      projectDesc:
        "A SIREN MLP learns a mesh SDF, is serialized into GLSL, and ray-marched as a neural surface.",
      footerLink: [{name: "Watch & Details", url: "#/project/neural-implicit-surfaces"}]
    },
    {
      projectName: "Volumetric Rendering",
      projectDesc:
        "Ray-marched smoke and flame built from 3D noise with Henyey-Greenstein scattering.",
      footerLink: [{name: "Watch & Details", url: "#/project/volumetric-rendering"}]
    },
    {
      projectName: "Neural Radiance Fields",
      projectDesc:
        "A tiny MLP with positional encoding and differentiable volume rendering synthesizes novel views.",
      footerLink: [{name: "Watch & Details", url: "#/project/nerf"}]
    },
    {
      projectName: "2D Gaussian Splatting",
      projectDesc:
        "Scenes reconstructed as anisotropic 2D Gaussians, sorted and alpha-blended in screen space.",
      footerLink: [{name: "Watch & Details", url: "#/project/gaussian-splatting-2d"}]
    },
    {
      projectName: "Vortex Gaussians",
      projectDesc:
        "The first system to generate fire and smoke by forward physical simulation in real time and render them as native Gaussian-splatting content. Vortex particles and 3D Gaussians are the same point primitive — no voxelization, meshing or simulation-to-renderer conversion — so flames share one depth order with a reconstructed 3DGS scene and occlude it correctly. 8.9 ms/frame (112 FPS) in a single-file WebGL2 prototype.",
      footerLink: [
        {name: "Watch & Details", url: "#/project/vortex-gaussians"},
        {
          name: "Live Demo",
          url: "https://seanwilliam2077.github.io/VortexGaussians/"
        },
        {
          name: "Code",
          url: "https://github.com/Seanwilliam2077/VortexGaussians"
        }
      ]
    },
    {
      projectName: "Position-Based Dynamics (XPBD)",
      projectDesc:
        "An XPBD constraint solver simulates ropes and rings with stable, compliant real-time physics.",
      footerLink: [{name: "Watch & Details", url: "#/project/xpbd-physics"}]
    },
    {
      projectName: "Diffusion Models",
      projectDesc:
        "Latent-diffusion / DDIM text-to-image generation with a U-Net denoiser conditioned on text.",
      footerLink: [{name: "Watch & Details", url: "#/project/diffusion-models"}]
    }
  ],
  display: true
};

const isHireable = true;

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
  appProjects,
  cgaiProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
