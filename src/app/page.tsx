"use client";
import { RevealWrapper, RevealList } from "next-reveal";

export default function page() {
  return (
    <>
      {/* RevealWrapper is for single item */}

      {/* <RevealWrapper
        origin="left"
        delay={200}
        duration={1000}
        distance="500px"
        reset={true}
      >
        <div>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </div>
      </RevealWrapper> */}

      {/* Reveallist is for mutiple item */}

      {/* <RevealList
        interval={60}
        origin="left"
        delay={500}
        duration={1000}
        distance="500px"
        reset={true}
      >
        <div>HELLO</div>
        <div>Hi</div>
        <div>BYE</div>
        <div>TATA</div>
      </RevealList> */}
    </>
  );
}
