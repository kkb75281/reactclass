import React from "react";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Slider from "./components/section/Slider";
import Image from "./components/section/Image";
import Imagetext from "./components/section/Imagetext";
import Card from "./components/section/Card";
import Banner from "./components/section/Banner";
import Text from "./components/section/Text";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Header fonts="nexon" />
      <Main>
        <Slider />
        <Image attr={["section", "nexon", "type", "container"]} />
        <Imagetext attr={["section", "nexon", "brown", "type", "container"]} />
        <Card attr={["section", "nexon", "type", "container"]} />
        <Banner attr={["nexon", "type"]} />
        <Text attr={["section", "nexon", "type", "container"]} />
      </Main>
      <Footer attr={["section", "nexon", "brown", "type", "container"]} />
    </>
  );
}

export default App;
