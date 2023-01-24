import Tabs from "./Tabs/Tabs";
import Socials from "./Socials/Socials";

export default function SmallNav({ tabs }) {
  return (
    <div className="hidden md:block nav-small w-fit text-text_secondary text-light text-lg backdrop-blur-3xl bg-main_black opacity-90 shadow-xl ">
      <div className="flex h-full justify-end items-center gap-24 border-b border-gray-700 pl-8">
        <div className="flex gap-1">
          {tabs.map((tab) => (
            <Tabs tab={tab} key={tab} />
          ))}
        </div>
        <Socials />
      </div>
    </div>
  );
}
