"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutContent() {
  const items = [
    { icon: "fa-cake-candles", label: "Birth:", value: "January 11, 2004" },
    {
      icon: "fa-graduation-cap",
      label: "College:",
      value: "Faculty of engineering",
    },
    {
      icon: "fa-building-columns",
      label: "University:",
      value: "Alexandria university",
    },
    { icon: "fa-gear", label: "Department:", value: "Production engineering" },
    { icon: "fa-envelope", label: "Email:", value: "omarsabry425@gmail.com" },
    { icon: "fa-phone", label: "Phone:", value: "01286183936" },
  ];

  const containerVariants = {
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.7 },
    },
    hidden: {
      opacity: 0,
    },
  };

  const itemVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  };
  return (
    <section id="about" className="mt-10 text-white">
      <h2 className="text-center text-5xl font-bold mb-10">
        About<span className="text-[#FFC400] font-extrabold"> ME</span>{" "}
      </h2>

      <div className="flex justify-between gap-14 max-xl:flex-col">
        <motion.div
          initial={{ x: -250, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="w-[45%] max-xl:w-full flex flex-col gap-8 bg-[#8c5ef607] py-10 px-1 rounded-lg tracking-wider"
        >
          <div className="flex flex-col items-center gap-2">
            <Image
              src={"/images/Group 1.webp"}
              width={150}
              height={150}
              alt=""
            />

            <h3 className="text-lg font-semibold text-[#FFC400]">
              Omar Sabry Khalil
            </h3>
          </div>

          <motion.ul
            className="flex flex-col items-center gap-3"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {items.map((item, index) => (
              <motion.li
                key={index}
                className="flex flex-wrap justify-center items-center gap-2"
                variants={itemVariants}
              >
                <span className="font-semibold text-lg text-[#e8d8a2]">
                  <i className={`fa-solid ${item.icon}`}></i> {item.label}
                </span>
                <span className="text-[1.1rem] font-semibold">
                  {item.value}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ x: 250, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="flex-1 flex flex-col gap-8 items-center relative py-12"
        >
          <div className="neon-bg w-2 h-full absolute start-1/2 -translate-x-[50%] bottom-0 rounded-full -ms-[0.5rem]"></div>

          <div className="flex items-start -translate-x-[50%] -mt-2">
            <div className="flex flex-col items-end -mt-1 me-3 gap-2  max-sm:max-w-[150px] max-w-[260px] text-center">
              <h3 className="font-bold text-[1.1rem]">2023</h3>
              <div className="border-[3px] border-[#FFC400] p-3 rounded-xl hover:scale-105 duration-300">
                <p className="font-semibold">
                  Completed The programming fundamentals diploma at Route IT
                  Training Center
                </p>
              </div>
            </div>

            <div>
              <div className="w-4 h-4 neon-bg rounded-full"></div>
            </div>
          </div>

          <div className="flex translate-x-[50%] -ms-[2rem] gap-3">
            <div>
              <div className="w-4 h-4 neon-bg rounded-full"></div>
            </div>
            <div className="-mt-1">
              <h3 className="font-bold text-[1.1rem]">2024</h3>
              <div className="border-[3px] border-[#FFC400] p-3 rounded-xl mt-2 hover:scale-105 duration-300 max-sm:max-w-[150px] max-w-[260px] text-center">
                <p className="font-semibold">Joined the Acm Academy</p>
              </div>
            </div>
          </div>

          <div className="flex -translate-x-[50%] ">
            <div className="flex flex-col items-end -mt-1 me-3 gap-2">
              <h3 className="font-bold text-[1.1rem]">2025</h3>
              <div className="border-[3px] border-[#FFC400] p-3 rounded-xl hover:scale-105 duration-300  max-sm:max-w-[150px] max-w-[260px] text-center">
                <p className="font-semibold">
                  {" "}
                  Completed The Frontend Development diploma at Route IT
                  Training Center
                </p>
              </div>
            </div>
            <div>
              <div className="w-4 h-4 neon-bg rounded-full"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
