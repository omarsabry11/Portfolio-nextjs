"use client";
import React, { useEffect, useRef } from "react";

import { motion } from "framer-motion";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Typewriter from "typewriter-effect/dist/core";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Home() {
  const typewriterRef = useRef(null);

  useEffect(() => {
    if (typewriterRef.current) {
      new Typewriter(typewriterRef.current, {
        strings: [
          '<span class=""><span>Hello, I\'m <span>Omar</span>  </span>',
          ,
          "<span class='dark:text-[#FFC400] text-[#6032CC]'>Frontend Engineer</span>",
        ],
        autoStart: true,
        loop: true,
        delay: 100,
      });
    }
  }, []);

  return (
    <>
      <section className=" p-10 min-h-[calc(100vh-70px)] flex justify-center items-center">
        <div className="text-white flex justify-between items-center max-lg:gap-4 max-lg:flex-col max-lg:justify-center z-30 max-lg:text-center ">
          <motion.div
            initial={{ x: -250, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="max-lg:order-2"
          >
            <div className="text-5xl max-lg:justify-center font-[800] tracking-wider py-6 flex items-center gap-2">
              <h1
                className=" dark:text-[#8C5EF6] text-[#6032cc]"
                ref={typewriterRef}
              ></h1>
            </div>

            <p className="pb-4 text-lg leading-9 max-lg:w-full w-3/4 dark:text-white text-black font-normal">
              As a skilled web developer, I specialize in creating dynamic and
              responsive websites tailored to meet your unique needs. With
              expertise in front-end technology, I deliver solutions that
              enhance user experience and drive business results.
            </p>

            <div className="flex gap-4 text-nowrap max-lg:justify-center flex-wrap mt-2">
              <motion.button whileTap={{ scale: 0.85 }}>
                <Link
                  className="text-[1.1rem] duration-[0.4s] dark:hover:bg-[#FFC400] hover:bg-[#8C5EF5] dark:bg-[#8C5EF6] bg-[#6032cc] w-[12rem] py-3 rounded-md  font-semibold flex items-center justify-center "
                  href="/contact"
                >
                  Keep In Touch
                </Link>
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.85 }}
                className="text-[1.1rem] duration-[0.4s] dark:hover:bg-[#FFC400] dark:hover:border-[#FFC400] hover:bg-[#040814] hover:text-white dark:hover:text-white border-[3px] border-[#060A16] text-[#060A16] dark:border-[#FFC400] dark:text-[#FFC400]  w-[12rem] py-2 rounded-md font-semibold"
              >
                <a
                  href="Omar Sabry Khalil_Frontend Engineer.pdf"
                  className="w-full h-full block"
                  download="Omar Sabry Khalil_Frontend Engineer.pdf"
                >
                  Download cv
                </a>
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 250, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="max-lg:order-1 relative"
          >
            <Image
              src={"/images/Group 2.webp"}
              alt=""
              width={1000}
              height={1000}
            ></Image>

            <div className="flex items-center gap-10 mt-10 justify-center">
              <a
                rel="noopener noreferrer"
                title="facebook"
                target="_blank"
                href="https://www.facebook.com/omar.sabry.9634/"
                className="hover:scale-125 text-xl border-[3px] w-12 h-12 flex items-center justify-center dark:text-[#8C5EF6] text-[#6032CC] dark:border-[#493487] border-[#6032CC]  rounded-full duration-300 dark:hover:text-[#FFC400]  dark:hover:border-[#FFC400]"
              >
                <FaFacebookF></FaFacebookF>{" "}
              </a>
              <a
                rel="noopener noreferrer"
                title="facebook"
                target="_blank"
                href="https://github.com/omarsabry11"
                className="hover:scale-125 text-xl border-[3px] w-12 h-12 flex items-center justify-center dark:text-[#8C5EF6] text-[#6032CC] dark:border-[#493487] border-[#6032CC]  rounded-full duration-300 dark:hover:text-[#FFC400]  dark:hover:border-[#FFC400]"
              >
                <FaGithub></FaGithub>
              </a>
              <a
                rel="noopener noreferrer"
                title="facebook"
                target="_blank"
                href="https://www.linkedin.com/in/omar-sabry-5205a130a/"
                className="hover:scale-125 text-xl border-[3px] w-12 h-12 flex items-center justify-center dark:text-[#8C5EF6] text-[#6032CC] dark:border-[#493487] border-[#6032CC]  rounded-full duration-300 dark:hover:text-[#FFC400]  dark:hover:border-[#FFC400]"
              >
                <FaLinkedin></FaLinkedin>
              </a>
              <a
                rel="noopener noreferrer"
                title="facebook"
                target="_blank"
                href="https://www.instagram.com/omar_sabry11/"
                className="hover:scale-125 text-xl border-[3px] w-12 h-12 flex items-center justify-center dark:text-[#8C5EF6] text-[#6032CC] dark:border-[#493487] border-[#6032CC]  rounded-full duration-300 dark:hover:text-[#FFC400]  dark:hover:border-[#FFC400]"
              >
                <FaInstagram></FaInstagram>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
