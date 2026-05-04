import { useState } from "react";
import Button from "../ui/Button";
import Educations from "../components/Educations";
import Works from "../components/Works";

export default function WorkAndEducation() {
  const [active, setActive] = useState<number>(1);

  return (
    <>
      <div className="px-4 mt-20 md:px-30" id="work-education">
        <div className="text-center">
          <h1
            className="text-2xl font-bold text-yellow-500"
            data-aos="fade-right"
          >
            Education and Work
          </h1>
          <p className="mt-2 text-gray-700 text-md">
            Berikut beberapa pendidikan formal dan pekerjaan yang telah saya
            jalani
          </p>
        </div>

        <div className="flex justify-center gap-5">
          <Button
            type="button"
            className={`text-gray-600 font-bold border border-gray-400 text-md rounded-lg px-4 py-1.5 mt-5 cursor-pointer ${active === 1 ? "bg-[#6052FF] text-white" : ""}`}
            onClick={() => setActive(1)}
          >
            Pendidikan
          </Button>
          <Button
            type="button"
            className={`text-gray-600 font-bold border border-gray-400 text-md rounded-lg px-4 py-1.5 mt-5 cursor-pointer ${active === 2 ? "bg-[#6052FF] text-white" : ""}`}
            onClick={() => setActive(2)}
          >
            Pekerjaan
          </Button>
        </div>

        {active === 1 && <Educations />}
        {active === 2 && <Works />}
      </div>
    </>
  );
}
