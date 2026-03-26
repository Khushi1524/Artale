import React from "react";
import { Sidebar } from "./components/templates/Sidebar";
import { Hero } from "./components/organisms/Hero";
import { Header } from "./components/templates";
import { SectionHeader } from "./components/organisms/SectionHeader";
import { GalleryCollection, MMimgCollection } from "./components/molecules";
import { GalleryCard } from "./components/atoms/GalleryCard";

const App = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="relative left-32 w-[calc(100%-265px)] flex flex-col items-center py-8 px-8 gap-5 m-auto">
          <Header/>
          <Hero />
          <SectionHeader/>
           <MMimgCollection/>
           <GalleryCollection/>
        </div>
      </div>
    </>
  );
};

export default App;
