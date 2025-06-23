import ContactContent from "@/app/_feature/pages/Contact/components/ContactContent/ContactContent";
import { Metadata } from "next";
import React from "react";


export const metadata:Metadata = {
  title: 'Contact', 
  description: 'Contact page',
}

export default function page() {
  return <ContactContent></ContactContent>;
}
