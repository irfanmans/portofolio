import { useState } from "react";
import Button from "../ui/Button";
import TechStack from "../components/TechStack";
import Tools from "../components/Tools";

export default function TechStackAndTools() {
  const [active, setActive] = useState<number>(1);
  return (
    <>
      <div className="px-4 mt-20 md:px-30" id="tech-stack">
        <div className="text-center">
          <h1
            className="text-2xl font-bold text-yellow-500"
            data-aos="fade-right"
          >
            Tech Stack and Tools
          </h1>
          <p className="mt-2 text-gray-700 text-md">
            Ada beberapa teknologi dan tools yang udah pernah saya pelajari dan
            pakai
          </p>
        </div>

        <div className="flex justify-center gap-5">
          <Button
            type="button"
            className={`text-gray-600 font-bold border border-gray-400 text-md rounded-lg px-4 py-1.5 mt-5 cursor-pointer ${active === 1 ? "bg-[#6052FF] text-white" : ""}`}
            onClick={() => setActive(1)}
          >
            Tech Stack
          </Button>
          <Button
            type="button"
            className={`text-gray-600 font-bold border border-gray-400 text-md rounded-lg px-4 py-1.5 mt-5 cursor-pointer ${active === 2 ? "bg-[#6052FF] text-white" : ""}`}
            onClick={() => setActive(2)}
          >
            Tool
          </Button>
        </div>

        {active === 1 && <TechStack />}
        {active === 2 && <Tools />}
      </div>
    </>
  );
}
