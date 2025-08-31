"use client";
import Orb from "@/components/FaultyTerminal/FaultyTerminal";
import Welcome from "@/components/Welcome/welcome";


export default function Home() {

  return (
    <section className="w-screen h-screen relative bg-black/95">
      <Orb
        hoverIntensity={0.5}
        rotateOnHover={true}
        hue={0}
        forceHoverState={false}
      />
      <Welcome />
    </section>
  );
}
