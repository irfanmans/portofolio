import { useTypewriter } from "react-simple-typewriter";
import Button from "../ui/Button";

export default function Home() {
  const [typeEffect] = useTypewriter({
    words: ["Universitas Mikroskil", "Teknik Informatika"],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 80,
  });
  return (
    <>
      <div className="py-50 px-5 md:px-15" id="beranda">
        <div className="flex flex-col justify-center">
          <p className="text-gray-700 text-center">Hi, There 👋</p>
          <h1 className="text-4xl font-bold text-center mt-4 text-gray-700">
            I'am, Front End <br />{" "}
            <span className="bg-linear-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Developer
            </span>
          </h1>
          <p className="mt-3 text-xl font-bold text-center text-gray-500">
            Present {typeEffect}
          </p>
          <p className="text-gray-700 text-lg text-center font-medium mt-2">
            Menciptakan Website Yang Inovatif, Fungsional, dan User-Friendly
            Untuk Solusi Digital
          </p>

          <Button
            type="button"
            className="bg-[#6052FF] text-white text-md rounded-2xl px-4 py-2.5 mt-5 w-fit mx-auto cursor-pointer"
          >
            Hubungi Saya
          </Button>
        </div>
      </div>
    </>
  );
}
