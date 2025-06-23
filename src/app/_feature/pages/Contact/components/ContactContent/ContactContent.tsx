"use client";
import React from "react";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { useState } from "react";
import DotsLoader from "../../../../../_core/components/DotsLoader/DotsLoader";


import { TfiLocationPin } from "react-icons/tfi";
import { FiMail } from "react-icons/fi";

import { LuPhone } from "react-icons/lu";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";


export default function ContactContent() {
  const [isLoading, setIsLoading] = useState(false);
  const sendInfo = (values: {
    name: string;
    email: string;
    phone: string;
    message: string;
  }) => {
    setIsLoading(true);
    emailjs
      .send(
        "service_safeanu", // EmailJS Service ID
        "template_ialf9sc", // EmailJS Template ID
        values,
        "cG2v3tJaBfD6wJJio" // EmailJS Public Key
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          formik.resetForm();
        },
        (error) => {
          console.error("Failed to send message:", error);
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };
  const validation = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required").email("Invalid email"),
    phone: Yup.string().required("Phone is required"),
    message: Yup.string().required("Message is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },

    validationSchema: validation,
    onSubmit: sendInfo,
  });
  const notifyFilled = (msg: string) => toast.error(msg);

  const sendEmail = () => {
    const recipient = "omarsabry425@gmail.com";
    const subject = "Subject of your email";
    const body = "Hello, I would like to get in touch!";
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };
  const sendWhatsAppMessage = () => {
    const phoneNumber = "+201286183936";
    const message = "Hello, I would like to get in touch!";
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappLink, "_blank");
  };

  const handleShowErrors = async () => {
    const errors = await formik.validateForm();
    if (errors.name) {
      notifyFilled(errors.name);
    } else if (errors.email) {
      notifyFilled(errors.email);
    } else if (errors.phone) {
      notifyFilled(errors.phone);
    } else if (errors.message) {
      notifyFilled(errors.message);
    }
  };
  return (
    <>
      <section className="">
        <div className="mt-10">
          <h2 className="text-5xl text-center font-bold text-white mb-10">
            Contact <span className="text-[#FFC400]">US</span>
          </h2>

          <div className="flex justify-between gap-8 max-lg:flex-col">
            <motion.div
              initial={{ x: -250, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="flex-1 border p-5 border-[#30363D] rounded-lg"
            >
              <h2 className="text-white text-2xl mb-5">Send Me a Message</h2>
              <form className="" onSubmit={formik.handleSubmit}>
                <div className="flex flex-col gap-7">
                  <div className="flex gap-3">
                    <div className=" flex-1">
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.name}
                          className="block px-2.5 pb-2.5 pt-4 w-full text-md text-white bg-[#8c5ef608] rounded-lg border-[3px] border-[#8C5EF5] appearance-none focus:outline-none focus:ring-0 focus:border-[#FFC400] peer"
                          placeholder=" "
                        />
                        <label
                          htmlFor="name"
                          className="absolute text-xs font-semibold text-[#662EEA] bg-[#070B18] duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0]  peer-focus:bg-[#070B18] rounded-md peer-focus:text-[#FFC400] dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                        >
                          Name
                        </label>
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="relative">
                        <input
                          type="text"
                          id="email"
                          name="email"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.email}
                          className="block px-2.5 pb-2.5 pt-4 w-full text-md text-white bg-[#8c5ef608] rounded-lg border-[3px] border-[#8C5EF5] appearance-none focus:outline-none focus:ring-0 focus:border-[#FFC400] peer"
                          placeholder=""
                        />
                        <label
                          htmlFor="email"
                          className="absolute text-xs font-semibold text-[#662EEA] bg-[#070B18] duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0]  peer-focus:bg-[#070B18] rounded-md peer-focus:text-[#FFC400] dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                        >
                          Email
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="relative">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}
                        className="block px-2.5 pb-2.5 pt-4 w-full text-md text-white bg-[#8c5ef608] rounded-lg border-[3px] border-[#8C5EF5] appearance-none focus:outline-none focus:ring-0 focus:border-[#FFC400] peer"
                        placeholder=""
                      />
                      <label
                        htmlFor="phone"
                        className="absolute text-xs font-semibold text-[#662EEA] bg-[#070B18] duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0]  peer-focus:bg-[#070B18] rounded-md peer-focus:text-[#FFC400]  px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                      >
                        Phone
                      </label>
                    </div>
                  </div>

                  <div>
                    <div className=" w-full">
                      <div className="relative">
                        <input
                          type="text"
                          id="message"
                          name="message"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.message}
                          className="block px-2.5 pb-36 pt-4 w-full text-md text-white bg-[#8c5ef608] rounded-lg border-[3px] border-[#8C5EF5] appearance-none focus:outline-none focus:ring-0 focus:border-[#FFC400] peer"
                          placeholder=""
                        />
                        <label
                          htmlFor="message"
                          className="absolute text-xs font-semibold text-[#662EEA] bg-[#070B18]  duration-300 bg-transparent transform -translate-y-3 scale-75 top-1 z-10 origin-[0]  peer-focus:bg-[#070B18] rounded-md peer-focus:text-[#FFC400] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-8 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                        >
                          Enter your message...
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <motion.button
                      onClick={handleShowErrors}
                      type="submit"
                      className="bg-[#662eea] text-white font-semibold text-md rounded-md w-full duration-300 hover:bg-[#FFC400] h-[2.5rem] flex justify-center items-center"
                      whileTap={{ scale: 0.85 }}
                    >
                     
                      {isLoading ? <DotsLoader></DotsLoader> :<p className="flex items-center gap-1"> <IoIosSend size={20}></IoIosSend> Send</p> }
                    </motion.button>

                    <ToastContainer
                      position="top-right"
                      autoClose={2000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                      theme="light"
                    ></ToastContainer>
                  </div>
                </div>
              </form>
            </motion.div>

            <motion.div
              className="text-white flex-1 pt-5"
              initial={{ x: 250, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-2xl font-semibold">Contact Information</h2>
              <p className="text-sm  mt-4 text-gray-300">
                I am always open to new opportunities, freelance projects, or
                simply chatting about web development and design.
              </p>

              <ul className="flex flex-col gap-5 my-10 ">
                <li className="flex items-center gap-3">
                  <div className="bg-[#662EEA] w-10 h-10 flex justify-center items-center rounded-full">
                    <TfiLocationPin size={23}></TfiLocationPin>
                  </div>
                  <div>
                    <h3>Location</h3>
                    <p className="text-gray-300 text-sm">Alex,Egypt</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <button
                    onClick={sendEmail}
                    className="flex items-center gap-3"
                  >
                    <div className="bg-[#662EEA] w-10 h-10 flex justify-center items-center rounded-full">
                      <FiMail size={23}></FiMail>
                    </div>

                    <div className="">
                      <h3 className="text-start">Email</h3>
                      <p className="text-gray-300 text-sm">
                        omarsabry425@gmail.com
                      </p>
                    </div>
                  </button>
                </li>
                <li className="">
                  <button
                    onClick={sendWhatsAppMessage}
                    className="flex items-center gap-3"
                  >
                    <div className="bg-[#662EEA] w-10 h-10 flex justify-center items-center rounded-full">
                      <LuPhone size={23}></LuPhone> 
                    </div>
                    <div className="">
                      <h3 className="text-start">Phone</h3>
                      <p className="text-gray-300 text-sm">01286183936</p>
                    </div>
                  </button>
                </li>
              </ul>
              <div>
                <h2 className="text-xl font-semibold mb-5">
                  Follow <span className="text-hover">Me</span>{" "}
                </h2>
                <div className="flex gap-4">
                  <a
                    rel="noopener noreferrer"
                    title="facebook"
                    target="_blank"
                    href="https://www.facebook.com/omar.sabry.9634/"
                    className="hover:scale-125 border-[2px] w-9 h-9 flex items-center justify-center dark:text-[#8C5EF6] text-[#6032CC] dark:border-[#493487] border-[#6032CC]  rounded-full duration-300 dark:hover:text-[#FFC400]  dark:hover:border-[#FFC400]"
                  >
                    <FaFacebookF size={18}></FaFacebookF>{" "}
                  </a>
                  <a
                    rel="noopener noreferrer"
                    title="facebook"
                    target="_blank"
                    href="https://github.com/omarsabry11"
                    className="hover:scale-125 border-[2px] w-9 h-9 flex items-center justify-center dark:text-[#8C5EF6] text-[#6032CC] dark:border-[#493487] border-[#6032CC]  rounded-full duration-300 dark:hover:text-[#FFC400]  dark:hover:border-[#FFC400]"
                  >
                    <FaGithub size={18}></FaGithub>
                  </a>
                  <a
                    rel="noopener noreferrer"
                    title="facebook"
                    target="_blank"
                    href="https://www.linkedin.com/in/omar-sabry-5205a130a/"
                    className="hover:scale-125 border-[2px] w-9 h-9 flex items-center justify-center dark:text-[#8C5EF6] text-[#6032CC] dark:border-[#493487] border-[#6032CC]  rounded-full duration-300 dark:hover:text-[#FFC400]  dark:hover:border-[#FFC400]"
                  >
                    <FaLinkedin size={18}></FaLinkedin>
                  </a>
                  <a
                    rel="noopener noreferrer"
                    title="facebook"
                    target="_blank"
                    href="https://www.instagram.com/omar_sabry11/"
                    className="hover:scale-125 border-[2px] w-9 h-9 flex items-center justify-center dark:text-[#8C5EF6] text-[#6032CC] dark:border-[#493487] border-[#6032CC]   rounded-full duration-300 dark:hover:text-[#FFC400]  dark:hover:border-[#FFC400]"
                  >
                    <FaInstagram size={18}></FaInstagram>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
