import LargeNav from "./SmallNav";
import SmallNav from "./LargeNav";

export default function NavContainer() {
  const tabs = ["Home", "About", "Projects", "Contact"];

  return (
    <nav className="">
      <SmallNav tabs={tabs} />

      <LargeNav tabs={tabs} />
    </nav>
  );
}
