import React from "react";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Action from "./components/Action";
import images from "./img/images";

function Home() {
  return (
    <div className="home-wrapper">
      <Hero title="Welcome to the Gen Alpha Store!" description="Da most lit and sigma site for da drippy ohio merch!" />
      <div className="cards">
        <Card title="Skibidi Plush!" description="Wanna slide this to da rizzler?" img={images.skibidiPlush} />
        <Card title="Sigma Hoodie!" description="Tryna fanum tax da aura?" img={images.sigmaHoodie} />
        <Card title="Gyatt Poster!" description="No cap, sigma gyatt on the wall!" img={images.gyattPoster} />
      </div>
      <Action name="Go to Merch" />
    </div>
  );
}

export default Home;
