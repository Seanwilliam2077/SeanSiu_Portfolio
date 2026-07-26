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
    "A Technical Artist and Computer Graphics M.S. candidate at Georgia Tech, focused on real-time rendering, PCG and Agent automation, neural rendering, DCC pipelines, and game-engine R&D. Currently based in Atlanta and a U.S. Green Card holder."
  ),
  resumeLink: "resume.pdf",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/Seanwilliam2077",
  linkedin: "https://www.linkedin.com/in/zijunxiao",
  gmail: "zxiao316@gatech.edu",
  display: true
};

const skillsSection = {
  title: "Technical Art & Graphics",
  subTitle: "REAL-TIME RENDERING · PCG / AGENT PIPELINES · NEURAL RENDERING · DCC AUTOMATION",
  skills: [
    emoji("⚡ Programming Languages: C++, C#, Python, Java and HLSL"),
    emoji(
      "⚡ Engines & Tools: Unreal Engine 5, Unity, Maya, Blender, Substance Painter/Designer and RenderDoc"
    ),
    emoji(
      "⚡ Core TA Domains: custom rendering pipelines, performance profiling, memory management, complex materials and shaders, procedural animation (IK), 3DGS and PCG / Agent automation"
    ),
    emoji(
      "⚡ R&D Capabilities: cross-functional collaboration, automated asset review, large-scale data processing and engineering deployment of frontier graphics technology"
    )
  ],
  softwareSkills: [
    {skillName: "C++", fontAwesomeClassname: "fas fa-code"},
    {skillName: "C#", fontAwesomeClassname: "fas fa-laptop-code"},
    {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "Java", fontAwesomeClassname: "fab fa-java"},
    {skillName: "HLSL", fontAwesomeClassname: "fas fa-paint-brush"},
    {skillName: "Unreal Engine 5", fontAwesomeClassname: "fas fa-gamepad"},
    {skillName: "Unity", fontAwesomeClassname: "fab fa-unity"},
    {skillName: "Maya", fontAwesomeClassname: "fas fa-cubes"},
    {skillName: "Blender", fontAwesomeClassname: "fas fa-cube"},
    {skillName: "Substance", fontAwesomeClassname: "fas fa-palette"},
    {skillName: "RenderDoc", fontAwesomeClassname: "fas fa-chart-line"},
    {skillName: "3DGS · PCG · Agents", fontAwesomeClassname: "fas fa-project-diagram"}
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Georgia Institute of Technology",
      logo: require("./assets/images/gtLogo.svg"),
      subHeader: "M.S. in Computer Graphics",
      duration: "Sep 2025 - Jun 2027",
      desc:
        "Focus: real-time rendering pipelines, low-level graphics implementation, C++/Python, Unity development, machine learning and high-performance computing.",
      descBullets: []
    },
    {
      schoolName: "Savannah College of Art and Design (SCAD)",
      logo: require("./assets/images/scadLogo.svg"),
      subHeader: "M.S. in Game Development",
      duration: "Sep 2024 - Aug 2025",
      desc:
        "Focus: Unreal Engine game production, 3D art, art pipelines and DCC workflows.",
      descBullets: []
    },
    {
      schoolName: "South China Normal University",
      logo: require("./assets/images/scnuLogo.svg"),
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
      role: "Technical Artist (PCG)",
      company: "Tencent · Game AI Engine Department",
      companylogo: require("./assets/images/tencentLogo.svg"),
      date: "May 2026 - Present",
      desc:
        "Building production-ready Agent × LLM × PCG workflows for large-scale game-content generation.",
      descBullets: [
        "Developed an Agent × LLM × PCG white-box generation pipeline for Delta Force, enabling minute-level level production through natural-language intent with node-level control.",
        "Built Veda for visual editing and real-time PCG preview inside UE5; developed MochiAgent to translate designer intent into executable PCG node sequences.",
        "Adapted EasyLayout to Mochi's unicast delegate interface for seamless orchestration across the generation workflow.",
        "Built a one-click world-model content pipeline from fps / video count / duration / optional theme to LLM prompts, AI three-image generation, UE white-box scenes, automatic camera rigs, MRQ rendering and mp4 export, with real-time web progress and direct video playback. The six-stage flow covers Web UI, prompt generation, Phase A images, Phase B white-box capture, Phase C encoding and atomic JSON progress aggregation.",
        "Implemented dynamic capacity based on camera-rig candidates surviving collision and image-quality checks, allowing the orchestrator to consume scenes on demand without wasting image-generation API calls. Propagated fps × duration through CLI, phase_b_args and shared capture_config into LevelSequence, MRQ and ffmpeg for frame-rate consistency.",
        "Made Phase A/B/C idempotent and resumable, launched each editor shard as a fresh process to control memory accumulation, added MRQ timeout drain and shard kill fallbacks, and enforced disk-peak prechecks. Fixed all 22 confirmed defects from a 25-agent adversarial review."
      ]
    },
    {
      role: "Next-Generation Neural Rendering Research",
      company: "Frontier Lab (Tencent) · Frontier Rendering Group",
      companylogo: require("./assets/images/frontierLogo.svg"),
      date: "Dec 2025 - Present",
      desc:
        "Exploring deployable, interactive, editable and generative neural representations for game worlds.",
      descBullets: [
        "Designed explicit 3D world-model workflows that extend 3DGS from visual reconstruction to controllable game-scene representations using engine cameras, GT pose, depth, Mesh and semantics.",
        "Explored lightweight mobile/Web 3DGS through block partitioning, LoD trees, streaming, compression and fixed-budget quality/performance control; co-scheduled Mesh and 3DGS by LoD to address depth occlusion, boundary blending and lighting consistency for stable on-device deployment.",
        "Investigated Transformer-based and generative neural rendering from Scene tokens to Image tokens, using Attention to model light transport and converting low-cost G-buffer / low-poly renders into high-quality, style- and semantic-controllable images through upscaling, style transfer, GI completion and temporal synthesis.",
        "Developed UE5 Substrate materials with custom attributes for Neural Rendering and a C++ editor plugin for large-scale asset data extraction and cleaning, with closed-loop validation under frame-rate, VRAM, bandwidth and power constraints."
      ]
    },
    {
      role: "Technical Artist",
      company: "Seasun (Kingsoft)",
      companylogo: require("./assets/images/seasunLogo.svg"),
      date: "Jul 2023 - Dec 2023",
      desc:
        "Supported an engine migration through rendering validation, performance profiling and technical-art pipeline standards.",
      descBullets: [
        "Migrated art assets across engines and validated compatibility and visual fidelity for complex scenes and materials in the new rendering pipeline.",
        "Profiled high-load scenes and helped resolve excessive Draw Calls, abnormal Overdraw and VRAM over-budget issues that caused frame drops and stutter.",
        "Helped establish asset-production specifications and a pre-emptive inspection flow that protected visual quality while enforcing performance budgets."
      ]
    }
  ]
};

const openSource = {
  showGithubProfile: "false",
  display: false
};

const bigProjects = {
  title: "Project Experience",
  subtitle: "SELECTED GAME DEVELOPMENT · TECHNICAL ART · DCC PIPELINE WORK",
  projects: [
    {
      image: require("./assets/images/wolfSoga.png"),
      projectName: "ARPG Game Project",
      projectDesc:
        "Technical Artist / Technical Designer — built combat hit detection and WPO/dynamic-mask skill shaders; led open-world LOD, batching and memory optimization that reduced rendering overhead by 30%; developed multi-stage Boss AI with Behavior Trees and FSM while controlling CPU Tick cost.",
      footerLink: [
        {name: "Read More", url: "#/project/arpg-game-project"},
        {name: "Watch Video", url: "https://vimeo.com/1111774512"}
      ]
    },
    {
      image: require("./assets/images/rpgParkour.png"),
      projectName: "Parkour Animation & DCC Tooling System",
      projectDesc:
        "Technical Animation — implemented procedural IK and animation-blueprint solutions for uneven-terrain foot placement and climbing hand interaction; built Python/MEL Maya automation for one-click character and animation import to UE5 with standardized skeleton and rigging rules.",
      footerLink: [
        {name: "Read More", url: "#/project/parkour-dcc-tooling"},
        {name: "Watch Video", url: "https://vimeo.com/1110810152"}
      ]
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Art Projects 🎨"),
  subtitle: "",
  achievementsCards: [],
  display: false
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
  number: "19370987201",
  email_address: "zxiao316@gatech.edu"
};

const twitterDetails = {
  userName: "",
  display: false
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
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
