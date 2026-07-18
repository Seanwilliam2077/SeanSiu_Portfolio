import React, {useEffect} from "react";
import "./ProjectDetailPage.scss";
import projectDetails from "../../projectDetails";
import {useLocalStorage} from "../../hooks/useLocalStorage";

function Video({video}) {
  if (!video) return null;
  if (video.type === "vimeo") {
    return (
      <div className="detail-video-wrapper">
        <iframe
          src={`https://player.vimeo.com/video/${video.id}`}
          title="project video"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  }
  return (
    <div className="detail-video-wrapper detail-video-native">
      <video src={video.src} controls preload="metadata"></video>
    </div>
  );
}

export default function ProjectDetailPage({slug}) {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark] = useLocalStorage("isDark", darkPref.matches);
  const detail = projectDetails[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!detail) {
    return (
      <div className={isDark ? "dark-mode detail-page" : "detail-page"}>
        <div className="detail-container">
          <a className="detail-back" href="#projects">
            ← Back
          </a>
          <h1 className="detail-title">Project not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className={isDark ? "dark-mode detail-page" : "detail-page"}>
      <div className="detail-container">
        <a className="detail-back" href="#projects">
          ← Back to all projects
        </a>
        <h1 className="detail-title">{detail.title}</h1>

        <div className="detail-meta">
          {detail.meta.map((m, i) => (
            <span key={i} className="detail-chip">
              {m}
            </span>
          ))}
        </div>

        {detail.roles ? (
          <div className="detail-meta detail-roles">
            {detail.roles.map((r, i) => (
              <span key={i} className="detail-chip detail-chip-role">
                {r}
              </span>
            ))}
          </div>
        ) : null}

        <p className="detail-intro">{detail.intro}</p>

        {detail.externalLinks
          ? detail.externalLinks.map((l, i) => (
              <a
                key={i}
                className="detail-external-link"
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {l.name} ↗
              </a>
            ))
          : null}

        <Video video={detail.video} />

        {detail.extraVideos
          ? detail.extraVideos.map((v, i) => (
              <div key={i} className="detail-extra-video">
                <h3 className="detail-section-heading">{v.label}</h3>
                <Video video={v} />
              </div>
            ))
          : null}

        {detail.sections.map((s, i) => (
          <div key={i} className="detail-section">
            <h2 className="detail-section-heading">{s.heading}</h2>
            {s.body ? <p className="detail-section-body">{s.body}</p> : null}
            {s.bullets ? (
              <ul className="detail-section-list">
                {s.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}

        {detail.gallery && detail.gallery.length ? (
          <div className="detail-section">
            <h2 className="detail-section-heading">Gallery</h2>
            <div className="detail-gallery">
              {detail.gallery.map((src, i) => (
                <img key={i} src={src} alt={`${detail.title} ${i + 1}`} />
              ))}
            </div>
          </div>
        ) : null}

        <a className="detail-back detail-back-bottom" href="#projects">
          ← Back to all projects
        </a>
      </div>
    </div>
  );
}
