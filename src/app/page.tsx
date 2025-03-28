'use client'
import { Banner } from "@/components/banner/Banner";
import { Main } from "@/components/main/Main";
import { Nav } from "@/components/nav/Nav";

export default function Home() {
  return (
    <div>
      <Nav/>
      <Banner/>
      <Main/>
    </div>
  );
}
