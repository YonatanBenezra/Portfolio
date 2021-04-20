import React from "react";

import GallerySection from "./components/GallerySection";
import { sectionData as FullstackCourseData } from "./data/FullstackCourseData";
import { sectionData as GooloData } from "./data/GooloData";
import { sectionData as TripleIGroupData } from "./data/TripleIGroupData";
import { sectionData as ShaaliLachData } from "./data/ShaaliLachData";

const ProjectGallery = () => {
  return (
    <div className="col-12 d-flex flex-column align-items-center">
      <GallerySection sectionData={FullstackCourseData} />
      <GallerySection sectionData={GooloData} />
      <GallerySection sectionData={TripleIGroupData} />
      <GallerySection sectionData={ShaaliLachData} />
    </div>
  );
};

export default ProjectGallery;
