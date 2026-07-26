/* Project detail content aligned with the current resume. Existing images and videos are reused to preserve the site's visual design. */

const wix = id =>
  `https://static.wixstatic.com/media/${id}/v1/fit/w_1000,h_1000,q_80/img.png`;

const projectDetails = {
  "arpg-game-project": {
    title: "ARPG Game Project",
    meta: [
      "Type: Action RPG",
      "Engine: Unreal Engine 5",
      "Role: Technical Artist / Technical Designer",
      "Period: Dec 2022 - Present"
    ],
    roles: [
      "Technical Art",
      "Shader Development",
      "Performance Optimization",
      "AI Systems",
      "Technical Design"
    ],
    intro:
      "A personal ARPG project focused on technical art, responsive combat presentation, scalable open-world performance and production-ready AI behavior. The work combines rendering, game logic and engine optimization into one playable development loop.",
    video: {type: "vimeo", id: "1111774512"},
    sections: [
      {
        heading: "Skill VFX & Visual Feedback",
        bullets: [
          "Implemented high-precision combat hit detection for reliable gameplay feedback.",
          "Developed complex skill-effect shaders using World Position Offset (WPO) and dynamic masks to strengthen impact, readability and visual tension."
        ]
      },
      {
        heading: "Scene Performance Optimization & Memory Tuning",
        bullets: [
          "Led performance management for high-load open-world scenes.",
          "Applied multi-level LOD strategies, strict static/dynamic batching (GPU Instancing / Batching) and memory-culling solutions.",
          "Reduced overall rendering overhead by 30% without sacrificing visual quality."
        ]
      },
      {
        heading: "AI Logic & Multi-Entity Performance",
        bullets: [
          "Combined Behavior Trees and finite-state machines (FSM) to build multi-stage Boss encounters.",
          "Optimized CPU Tick cost for entity-heavy combat scenarios to keep complex AI computation frame-rate stable."
        ]
      }
    ],
    gallery: [
      "29049e_85ba48946368470d8edf3c2e266c9500~mv2.png",
      "29049e_ebb82a4e1f014d27b9dd78d52c2f0148~mv2.png",
      "29049e_7749d561da1447829284d06ef32ddbc5~mv2.png",
      "29049e_bc6238e4478947da90f693cf4ffdbc2c~mv2.png",
      "29049e_710d5f0a42eb45b692129316a00ca436~mv2.png",
      "29049e_67a35f60562f438a8e889f6ac39ddf19~mv2.png",
      "29049e_12f89d9681534d7b9ad815080e69cd96~mv2.png",
      "29049e_2dad878110f94e5cb4c44f7c6d4610e4~mv2.png"
    ].map(wix)
  },

  "parkour-dcc-tooling": {
    title: "Parkour Animation & DCC Tooling System",
    meta: [
      "Type: Procedural Animation & Tooling",
      "Engine: Unreal Engine 5",
      "DCC: Maya",
      "Role: Technical Animation",
      "Period: Dec 2022 - Present"
    ],
    roles: [
      "Technical Animation",
      "Procedural IK",
      "Animation Blueprints",
      "Python / MEL Tooling",
      "Pipeline Standards"
    ],
    intro:
      "A technical-animation and DCC automation system designed to improve character interaction quality and shorten the iteration path from Maya to Unreal Engine 5.",
    video: {type: "vimeo", id: "1110810152"},
    sections: [
      {
        heading: "Procedural Animation & IK Solver",
        bullets: [
          "Used inverse kinematics (IK) and engine animation blueprints to solve bipedal foot placement on complex uneven terrain.",
          "Implemented procedural climbing hand interaction to improve the physical realism and continuity of dynamic movement."
        ]
      },
      {
        heading: "DCC Automation Pipeline & Standards",
        bullets: [
          "Wrote Maya automation tools in Python/MEL for one-click character and animation asset import from DCC to UE5.",
          "Established and enforced rigorous skeleton and rigging standards to enable efficient, seamless art-asset iteration."
        ]
      }
    ],
    gallery: [
      "29049e_cd901c9b091442429d7e66ec09631f68~mv2.png",
      "29049e_c7550af672cf46deb856263d8617716a~mv2.png",
      "29049e_ae9215275ad140a482e4d778010d19ea~mv2.png",
      "29049e_26277a5e1c0a4ee19fa938463f734dd5~mv2.png",
      "29049e_5086968ad2b64555854fc6abac859560~mv2.png",
      "29049e_df524253eecd46d69b072f5a17fdc053~mv2.png",
      "29049e_de834235fe084f90a6221f176a783e26~mv2.png",
      "29049e_468a5e35a5ce425b8f58855b9e4e9ef7~mv2.png"
    ].map(wix)
  }
};

export default projectDetails;
