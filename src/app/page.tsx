'use client'
import { Heros } from "@/components/hero/Heros";
import { Main } from "@/components/main/Main";
import { Nav } from "@/components/nav/Nav";

export default function Home() {
  return (
    <div>
      <nav>
        <Nav />
      </nav>
      <main>
        <Heros />
        <Main/>
      </main>
      
      <footer>
        ...
      </footer>
    </div>
  );
}
