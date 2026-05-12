"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    src: "/images/Projects/StackVerse.webp",
    link: "https://stack-verse-4wjp.vercel.app/en",
    type: "react",
  },
  {
    src: "/images/Projects/Shopetto.webp",
    link: "https://shopetto.vercel.app/",
    type: "react",
  },
  {
    src: "/images/Projects/acm.webp",
    link: "https://taskstream.alex.hosting.acm.org/",
    type: "react",
  },
  {
    src: "/images/Projects/XO.webp",
    link: "https://omarsabry11.github.io/XO-Game/",
    type: "js",
  },
  {
    src: "/images/Projects/CarWash.webp",
    link: "https://car-wash-gamma.vercel.app/",
    type: "react",
  },
  {
    src: "/images/Projects/Elshrouk.webp",
    link: "https://al-shorouk-company.vercel.app/",
    type: "react",
  },
  {
    src: "/images/Projects/Todo.webp",
    link: "https://todo-list-app-git-master-omarsabry11s-projects.vercel.app/",
    type: "react",
  },
  {
    src: "/images/Projects/food-recipes.webp",
    link: "https://food-recipes-qbui22rlp-omarsabry11s-projects.vercel.app/",
    type: "angular",
  },
  {
    src: "/images/Projects/fresh-cart-angular.webp",
    link: "https://fresh-cart-angular-three.vercel.app/",
    type: "angular",
  },

  {
    src: "/images/Projects/GameReviews.webp",
    link: " https://omarsabry11.github.io/Game-Reviews/",
    type: "js",
  },
  {
    src: "/images/Projects/Weather.webp",
    link: "https://omarsabry11.github.io/Weather/",
    type: "js",
  },
  {
    src: "/images/Projects/BookMarker.webp",
    link: "https://omarsabry11.github.io/Bookmarker/",
    type: "js",
  },
  {
    src: "/images/Projects/SolarCompany.webp",
    link: "https://omarsabry11.github.io/Solar-company/",
    type: "html",
  },
  {
    src: "/images/Projects/VivaDecor.webp",
    link: "https://omarsabry11.github.io/Viva-Decor/",
    type: "html",
  },
  {
    src: "/images/Projects/Kasper.webp",
    link: "https://omarsabry11.github.io/Kasber-web-site/",
    type: "html",
  },
  {
    src: "/images/Projects/Fokir.webp",
    link: "https://omarsabry11.github.io/Fokir/",
    type: "html",
  },
];
const tabsName = ["All", "Html | Css", "Js", "React | Next Js", "Angular"];
function ProjectsContent() {
  const isFirstRendered = useRef(true);
  const [selected, setSelected] = useState("all");

  const getProjects = useMemo(() => {
    if (selected == "all") {
      return projects;
    } else {
      const filteredProjects = projects.filter(
        (project) => project.type == selected
      );
      return filteredProjects;
    }
  }, [selected]);

  useEffect(() => {
    if (isFirstRendered.current) {
      isFirstRendered.current = false;
    }
  }, []);

  return (
    <>
      <section className="">
        <div className="mt-10 text-white">
          <ul className="flex justify-center items-center flex-wrap max-md:gap-4 ">
            {["all", "html", "js", "react", "angular"].map((type, index) => (
              <li
                key={index}
                className={`text-md font-semibold bg-[#8c5ef607]`}
              >
                <button

                  onClick={() => {
                    setSelected(`${type}`);
                  }}
                  className={`${selected == `${type}` ? "projectActive" : ""
                    } block border w-[9rem] h-[2.7rem] border-[#8C5EF6] duration-300 `}
                >
                  {tabsName[index]}
                </button>
              </li>
            ))}
          </ul>

          <div className="py-10">
            <motion.div
              initial={
                isFirstRendered.current ? { opacity: 0, scale: 0.9 } : {}
              }
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-center"
            >
              {getProjects.map((project, index) => (
                <div key={index}>
                  <div className="rounded-lg hover:scale-105 duration-200 h-[200px]">
                    <a title="project" target="_blank" href={project.link}>
                      <Image
                        priority
                        className="w-full h-full"
                        style={{ objectFit: "cover", borderRadius: "10px" }}
                        src={project.src}
                        alt="project"
                        width={500}
                        height={500}
                      />
                    </a>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default React.memo(ProjectsContent);
