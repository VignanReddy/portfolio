"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        With a Bachelor’s degree in Computer Science and hands-on internship
        focusing on <strong>React.js</strong> and <strong>Spring Boot</strong>,
        my passion for web development deepened, leading me to pursue a Master’s
        degree at <strong>USC</strong>. Here, I developed my skills in
        algorithms and advanced web technologies. I thrive on transforming ideas
        into reality through my core stack of <strong>React</strong>,{" "}
        <strong>Spring Boot</strong>, and <strong>MySQL</strong>, and I also
        have familiarity with <strong>Node.js</strong> and the{" "}
        <strong>Express</strong> framework. Always eager to expand my tech
        horizons, I am actively seeking a full-time position as a software
        developer.
      </p>

      <p>
        Outside of coding, I'm a keen gamer and movie enthusiast. I'm also
        focused on personal development, currently exploring history and
        philosophy.
      </p>
    </motion.section>
  );
}
