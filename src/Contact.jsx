import React from "react";
import Hero from "./components/Hero";

function Merch() {
  let contacts = [
    "Send: genalphasigma@therizzler.com",
    "Snap, TT, YT, IG, DM: genalphasigma",
    "Call: 420-666-6969",
    "Dox: Fanum Tax St, Skibidi Empire, Ohio",
  ];

  return (
    <div>
      <Hero
        title="Level 10 Rizz Contact!"
        description="Check out the Gen Alpha shop's DMs to link up and get the merch (but lowkey it’s all cap)!"
      />
      <ul className="contact-list">
        {contacts.map((contact) => (
          <li>{contact}</li>
        ))}
      </ul>
    </div>
  );
}

export default Merch;
