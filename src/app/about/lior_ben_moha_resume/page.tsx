"use client";

import dynamic from "next/dynamic";
import React from "react";

const PDFview = dynamic(() => import("@/app/components/resume/PDFview"), {
  ssr: false,
});

const page = () => {
  return <PDFview />;
};

export default page;
