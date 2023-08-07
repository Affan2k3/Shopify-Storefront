import { NavbarItems } from "@/components/typesandArrays/NavbarItems";
import NavbarView from "@/components/views/Navbar/navbarView";

export default function Navbar({ page }: { page: string }) {
  return (
    <section className="max-h-screen w-full">
      <nav>
        <NavbarView navItem={NavbarItems} page={page} />
      </nav>
    </section>
  );
}
