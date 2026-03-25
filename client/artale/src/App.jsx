import React from "react";
import { Sidebar } from "./components/templates/Sidebar";
import { Hero } from "./components/organisms/Hero";
import { Header } from "./components/templates";
import { SectionHeader } from "./components/organisms/SectionHeader";
import { GalleryImgCollection } from "./components/molecules";

const App = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="relative left-56 w-[calc(100%-280px)] flex flex-col items-center py-8 px-8 gap-5">
          <Header/>
          <Hero />
          <SectionHeader/>
           <GalleryImgCollection/>
        </div>
      </div>
    </>
  );
};

export default App;
