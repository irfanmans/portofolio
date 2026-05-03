import { IoSchool } from "react-icons/io5";
import ContactInfo from "../ui/ContactInfo";
import Dot from "../ui/Dot";
import Card from "./Card";
import { FaLocationDot } from "react-icons/fa6";

export default function Works() {
  return (
    <>
      <div className="border-l-[6px] border-red-500 relative py-7 px-5 mt-10">
        <div className="relative">
          <div className="absolute -left-8.75">
            <Dot />
          </div>
          <Card>
            <ContactInfo className="flex items-center text-white/80 text-sm gap-3">
              <IoSchool className="text-blue-500" size={18} />{" "}
              <span className="text-gray-800 font-bold text-lg">
                Web Maxindo
              </span>
            </ContactInfo>
            <ContactInfo className="flex items-center text-white/80 text-sm gap-3">
              <FaLocationDot className="text-blue-500" size={18} />{" "}
              <span className="text-gray-500 font-light">
                Medan, Sumatera Utara
              </span>
            </ContactInfo>
            <p className="mt-3 text-gray-500 text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
              totam hic, enim impedit id expedita minus quaerat consequatur odio
              voluptas?
            </p>
          </Card>
        </div>

        <div className="relative mt-5">
          <div className="absolute -left-8.75">
            <Dot />
          </div>
          <Card>
            <ContactInfo className="flex items-center text-white/80 text-sm gap-3">
              <IoSchool className="text-blue-500" size={18} />{" "}
              <span className="text-gray-800 font-bold text-lg">
                Union Web Agency
              </span>
            </ContactInfo>
            <ContactInfo className="flex items-center text-white/80 text-sm gap-3">
              <FaLocationDot className="text-blue-500" size={18} />{" "}
              <span className="text-gray-500 font-light">
                Medan, Sumatera Utara
              </span>
            </ContactInfo>
            <p className="mt-3 text-gray-500 text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
              totam hic, enim impedit id expedita minus quaerat consequatur odio
              voluptas?
            </p>
          </Card>
        </div>
      </div>
    </>
  );
}
