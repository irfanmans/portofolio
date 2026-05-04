import heroImage from "../assets/svg/heroImage.svg";

export default function About() {
  return (
    <>
      <div className="px-4 md:px-30" id="tentang-saya">
        <h1
          className="text-2xl font-bold text-yellow-500"
          data-aos="fade-right"
        >
          Tentang Saya
        </h1>

        <div className="flex flex-col items-center gap-10 md:grid md:grid-cols-2 ">
          <p className="mt-5 text-gray-700 text-md" data-aos="fade-up">
            Saya adalah mahasiswa Teknik Informatika yang cepat belajar dan
            mudah beradaptasi. Saya memiliki motivasi tinggi untuk menguasai
            teknologi baru serta terus mengembangkan keterampilan. Saya siap
            menghadapi tantangan dengan pendekatan proaktif dan kemampuan
            problem solving yang baik, serta memiliki passion dalam pemrograman
            dan solusi kreatif untuk masalah kompleks.
          </p>

          <img
            src={heroImage}
            // width={250}
            className="w-full max-w-62.5 mx-auto md:max-w-full"
            alt="hero-image"
            data-aos="fade-up"
          />
        </div>
      </div>
    </>
  );
}
