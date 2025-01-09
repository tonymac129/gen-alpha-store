import React from "react";
import Hero from "./components/Hero";
import Card from "./components/Card";
import images from "./img/images";

function Merch() {
  return (
    <div>
      <Hero title="Sigma Sigma Merch!" description="Peep our fire picks and dope gen alpha merch, vibes, and more!" />
      <div className="cards">
        <Card title="Ohio Shirt!" description="Wait it's all ohio? Always has been, my ohioan." img={images.ohioShirt} />
        <Card
          title="Gyatt Backpack!"
          description="Level 4 gyatt is mid, be the level 5 gyatt rizzler."
          img={images.gyattBackpack}
        />
        <Card title="Skibidi Plush!" description="Wanna slide this to da rizzler?" img={images.skibidiPlush} />
        <Card title="Sigma Hoodie!" description="Tryna fanum tax da aura?" img={images.sigmaHoodie} />
        <Card title="Gyatt Poster!" description="No cap, sigma gyatt on the wall!" img={images.gyattPoster} />
        <Card title="Rizzy Pins!" description="Tap these w rizzy pins to insta boost ur aura!" img={images.brainrotPin} />
      </div>
    </div>
  );
}

export default Merch;
