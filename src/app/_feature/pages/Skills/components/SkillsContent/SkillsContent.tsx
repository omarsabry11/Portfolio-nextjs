"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const SKILLS = [
  {
    id: 1,
    name: "C++",
    icon: "/images/skills/CPlus.webp",
    width: 70,
  },
  {
    id: 2,
    name: "Html 5",
    icon: "/images/skills/Html5.webp",
    width: 60,
  },
  {
    id: 3,
    name: "CSS 3",
    icon: "/images/skills/Css3.webp",
    width: 85,
  },
  {
    id: 4,
    name: "Bootstrap",
    icon: "/images/skills/BootStrap.webp",
    width: 90,
  },
  {
    id: 5,
    name: "Tailwind Css",
    icon: "/images/skills/tailwind.png",
    width: 70,
  },
  {
    id: 6,
    name: "Java script",
    icon: "/images/skills/JS.webp",
    width: 70,
  },
  {
    id: 7,
    name: "JQuery",
    icon: "/images/skills/jQuery.png",
    width: 70,
  },
  {
    id: 8,
    name: "Type script",
    icon: "/images/skills/Typescript.webp",
    width: 60,
  },
  {
    id: 9,
    name: "SASS",
    icon: "/images/skills/Sass.webp",
    width: 80,
  },
  {
    id: 10,
    name: "React js",
    icon: "/images/skills/ReactJs.webp",
    width: 70,
  },
  {
    id: 11,
    name: "Angular",
    icon: "/images/skills/Angular.png",
    width: 65,
  },
];

export default function SkillsContent() {
  return (
    <>
      <section className=" ">
        <div className="text-white mt-10">
          <h2 className="text-center text-5xl font-bold tracking-wider moving-border mb-10">
            Skills
          </h2>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="pb-10"
          >
            <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10">
              {SKILLS.map((skill) => (
                <div key={skill.id}>
                  <div className="flex justify-center items-center border  bg-[#8c5ef608] rounded-2xl duration-300 hover:scale-110 h-[150px]">
                    <Image
                      src={skill.icon}
                      width={skill.width}
                      height={skill.width}
                      alt={skill.name}
                    ></Image>
                  </div>
                  <h3 className="pt-3 text-lg font-semibold tracking-wider text-center">
                    {skill.name}
                  </h3>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
