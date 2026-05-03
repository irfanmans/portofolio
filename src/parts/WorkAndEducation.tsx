import { IoSchool } from "react-icons/io5";
import Card from "../components/Card";
import Button from "../ui/Button";
import ContactInfo from "../ui/ContactInfo";
import { FaLocationDot } from "react-icons/fa6";
import Dot from "../ui/Dot";

export default function WorkAndEducation() {
  return (
    <>
      <div className="px-4 mt-10">
        <div className="text-center">
          <h1
            className="text-2xl font-bold text-yellow-500"
            data-aos="fade-right"
          >
            Education and Work
          </h1>
          <p className="mt-2 text-gray-700 text-md">
            Ada beberapa teknologi dan tools yang udah pernah saya pelajari dan
            pakai
          </p>
        </div>

        <div className="flex justify-center gap-5">
          <Button
            type="button"
            className="text-gray-600 font-bold border text-md rounded-lg px-4 py-1 mt-5 cursor-pointer"
          >
            Pendidikan
          </Button>
          <Button
            type="button"
            className="text-gray-600 font-bold border text-md rounded-lg px-4 py-1 mt-5 cursor-pointer"
          >
            Pekerjaan
          </Button>
        </div>

        <div className="border-l-[6px] border-red-500 relative py-7 px-5 mt-10">
          <div className="relative">
            <div className="absolute -left-8.75">
              <Dot />
            </div>
            <Card>
              <ContactInfo className="flex items-center text-white/80 text-sm gap-3">
                <IoSchool className="text-blue-500" size={18} />{" "}
                <span className="text-gray-800 font-bold text-lg">
                  SD Negeri 064037
                </span>
              </ContactInfo>
              <ContactInfo className="flex items-center text-white/80 text-sm gap-3">
                <FaLocationDot className="text-blue-500" size={18} />{" "}
                <span className="text-gray-500 font-light">
                  Medan, Sumatera Utara
                </span>
              </ContactInfo>
              <p className="mt-3 text-gray-500">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
                totam hic, enim impedit id expedita minus quaerat consequatur
                odio voluptas?
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
                  SMP Negeri 17
                </span>
              </ContactInfo>
              <ContactInfo className="flex items-center text-white/80 text-sm gap-3">
                <FaLocationDot className="text-blue-500" size={18} />{" "}
                <span className="text-gray-500 font-light">
                  Medan, Sumatera Utara
                </span>
              </ContactInfo>
              <p className="mt-3 text-gray-500">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
                totam hic, enim impedit id expedita minus quaerat consequatur
                odio voluptas?
              </p>
            </Card>
          </div>

          <div className="relative mt-2">
            <div className="absolute -left-8.75">
              <Dot />
            </div>
            <Card>
              <ContactInfo className="flex items-center text-white/80 text-sm gap-3">
                <IoSchool className="text-blue-500" size={18} />{" "}
                <span className="text-gray-800 font-bold text-lg">
                  SMK Tritech Informatika
                </span>
              </ContactInfo>
              <ContactInfo className="flex items-center text-white/80 text-sm gap-3">
                <FaLocationDot className="text-blue-500" size={18} />{" "}
                <span className="text-gray-500 font-light">
                  Medan, Sumatera Utara
                </span>
              </ContactInfo>
              <p className="mt-3 text-gray-500">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
                totam hic, enim impedit id expedita minus quaerat consequatur
                odio voluptas?
              </p>
            </Card>
          </div>

          <div className="relative mt-2">
            <div className="absolute -left-8.75">
              <Dot />
            </div>
            <Card>
              <ContactInfo className="flex items-center text-white/80 text-sm gap-3">
                <IoSchool className="text-blue-500" size={18} />{" "}
                <span className="text-gray-800 font-bold text-lg">
                  Universitas Mikroskil
                </span>
              </ContactInfo>
              <ContactInfo className="flex items-center text-white/80 text-sm gap-3">
                <FaLocationDot className="text-blue-500" size={18} />{" "}
                <span className="text-gray-500 font-light">
                  Medan, Sumatera Utara
                </span>
              </ContactInfo>
              <p className="mt-3 text-gray-500">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
                totam hic, enim impedit id expedita minus quaerat consequatur
                odio voluptas?
              </p>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
