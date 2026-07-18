import React, {useEffect, useState} from "react";
import "./App.scss";
import Main from "./containers/Main";
import ProjectDetailPage from "./containers/projectDetailPage/ProjectDetailPage";

const getRoute = () => {
  const match = window.location.hash.match(/^#\/project\/([\w-]+)/);
  return match ? {page: "project", slug: match[1]} : {page: "main"};
};

function App() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const onHashChange = () => {
      const next = getRoute();
      setRoute(prev => {
        // Returning from a detail page to a section anchor (#projects etc.):
        // the anchor target only exists after Main re-renders, so scroll manually.
        if (prev.page === "project" && next.page === "main") {
          const id = window.location.hash.replace("#", "");
          setTimeout(() => {
            const el = id && document.getElementById(id);
            if (el) el.scrollIntoView();
          }, 100);
        }
        return next;
      });
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <div>
      {route.page === "project" ? (
        <ProjectDetailPage slug={route.slug} />
      ) : (
        <Main />
      )}
    </div>
  );
}

export default App;
