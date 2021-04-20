import React, { lazy, Suspense } from "react";
import Hero from "./Hero";
// import ProjectGallery from "./ProjectGallery";
import Loading from "../../g-components/Loading";
import AOS from "aos";
import ContactCTA from "./ContactCTA";
AOS.init({
  anchorPlacement: "bottom-bottom",
});

const ProjectGallery = lazy(() => import("./ProjectGallery.js"));

const Projects = () => {
  return (
    <>
      <div className="container d-flex flex-column align-items-center">
        <div className="row w-100 d-flex flex-column align-items-center justify-content-center mt-5">
          <div className="col-12 d-flex justify-content-center align-items-center hero-container">
            <Hero />
          </div>
          <Suspense fallback={<Loading />}>
            <ProjectGallery />
          </Suspense>
        </div>
      </div>
      <div className="container-fluid d-flex flex-column align-items-center justify-content-center pr-0 pl-0">
        <ContactCTA />
      </div>
    </>
  );
};

export default Projects;
