"use client";

import Blogs from "@/components/Blogs";
import Featured from "@/components/Featured";
import Heading from "@/components/Heading";
import Navbar from "@/components/Navabar";
import { Suspense, useState } from "react";

export default function Home() {
  const [category, setCategory] = useState("all");
  return (
    <>
      <Navbar />
      <Heading />
      <Suspense fallback={<h1>Loading ...</h1>}>
        <Featured />
      </Suspense>
      <Suspense fallback={<h1>Loading ...</h1>}>
        <Blogs />
      </Suspense>
    </>
  );
}
