import { useState } from "react";
import Card from "../components/Card";
import Modal from "../components/Modal";
import { projects } from "../data/Projects";
import Logo from "../ui/Logo";

export default function Project() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="px-4 mt-20 mb-30 md:px-30" id="project">
        <div className="text-center">
          <h1
            className="text-2xl font-bold text-yellow-500"
            data-aos="fade-right"
          >
            Project
          </h1>
          <p className="mt-2 text-gray-700 text-md">
            Saya telah membuat beberapa proyek saat belajar tentang pengembangan
            situs web frontend
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-4 justify-center flex-wrap mt-10 cursor-pointer">
          {projects.map((element, index) => {
            return (
              <Card key={index} onClick={() => setSelectedImage(element.logo)}>
                <Logo
                  src={element.logo}
                  className="w-full flex flex-col justify-center items-center rounded-2xl"
                />
              </Card>
            );
          })}
        </div>
      </div>

      {selectedImage && (
        <Modal src={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </>
  );
}
