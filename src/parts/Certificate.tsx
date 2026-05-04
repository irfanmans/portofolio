import { useState } from "react";
import Card from "../components/Card";
import { certificate } from "../data/Certificate";
import Logo from "../ui/Logo";
import Modal from "../components/Modal";

export default function Certificate() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="px-4 mt-20 md:px-30" id="sertifikat">
        <div className="text-center">
          <h1
            className="text-2xl font-bold text-yellow-500"
            data-aos="fade-right"
          >
            Sertifikat
          </h1>
          <p className="mt-2 text-gray-700 text-md">
            Berikut beberapa sertifikat yang berhasil saya dapatkan
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-4 justify-center flex-wrap mt-10 cursor-pointer">
          {certificate.map((element, index) => {
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
