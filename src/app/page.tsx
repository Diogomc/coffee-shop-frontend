'use client'
import { Banner } from "@/components/banner/Banner";
import { Menu } from "@/components/menu/Menu";

import { Nav } from "@/components/nav/Nav";

export default function Home() {
  return (
    <div>
      <Nav/>
      <Banner/>
      <Menu/>
    </div>
  );
}
