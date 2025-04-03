import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const Section = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 ${
        props.right ? "items-end" : "items-start"
      }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="bg-white rounded-lg px-8 py-12">{props.children}</div>
        </div>
      </div>
    </section>
  );
};

export const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSecton] = useState(1);
  const [opacitySecondSection, setOpacitySecondSecton] = useState(1);
  const [opacityThirdSection, setOpacityThirdSecton] = useState(1);

  useFrame(() => {
    setOpacityFirstSecton(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSecton(1 - scroll.curve(1 / 3, 1 / 3));
    setOpacityThirdSecton(1 - scroll.range(1 / 3, 3 / 3));
  });

  return (
    <Scroll html>
      <div className="w-screen">
        <Section opacity={opacityFirstSection}>
          <h1 className="font-semibold font-serif text-2xl">
            Hello This is Atharv
          </h1>
          <p className="text-gray-500">Project 1 - 3D website for Showing</p>
          <p className="mt-3"> Links</p>
          <ul className="leading-9">
            <li>URl</li>
            <li>Source Code</li>
            <li>Reel Link</li>
          </ul>
          <p className="animate-bounce mt-6">|</p>
        </Section>
        <Section right opacity={opacitySecondSection}>
          <h1 className="font-semibold font-serif text-2xl">
            Hello This is Kovidh
          </h1>
          <p className="text-gray-500">Project 2 - 3D EDA</p>
          <p className="mt-3"> Links</p>
          <ul className="leading-9">
            <li>URl</li>
            <li>Source Code</li>
            <li>Reel Link</li>
          </ul>
          <p className="animate-bounce mt-6">|</p>
        </Section>
        <Section opacity={opacityThirdSection}>
          <h1 className="font-semibold font-serif text-2xl">
            Hello This is Anshuman
          </h1>
          <p className="text-gray-500">Project 3 - AR/VR</p>
          <p className="mt-3"> Links</p>
          <ul className="leading-9">
            <li>URl</li>
            <li>Source Code</li>
            <li>Reel Link</li>
          </ul>
          <p className="animate-bounce mt-6">|</p>
        </Section>
      </div>
    </Scroll>
  );
};
