import { featuresData } from "../../data/featuresData.js";
import { Feature } from "./Feature.jsx";
export function Features() {
  return (
    <div className="bg-black text-white py-[72px]">
      <div className="container">
        <h2 className="text-center font-bold text-3xl sm:text-5xl">
          Everything you need
        </h2>
        <p className="text-center mt-5 text-xl tracking-tight px-0 md:px-64 text-white/70">
          Enjoy customizable lists, team work tools, and smart tracking all in
          one place. Set tasks, get reminders, and see your progress simply and
          quickly. 
        </p>
        <div className="flex flex-col gap-4 mt-16 sm:flex-row justify-center w-full items-center sm:px-20">
          {featuresData.map(({ title, description }) => (
            <Feature title={title} description={description} key={title} />
          ))}
        </div>
      </div>
    </div>
  );
}
