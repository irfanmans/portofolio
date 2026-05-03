import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
} from "react-icons/fa6";
import Logo from "../ui/Logo";
import { FaPhoneAlt } from "react-icons/fa";
import ContactInfo from "../ui/ContactInfo";
import MediaSocialInfo from "../ui/MediaSocialInfo";

export default function Footer() {
  return (
    <>
      <footer className="px-5 py-5 bg-[#152C5B]">
        <Logo width={120} />
        <p className="text-white text-sm mt-3 mb-5">
          Personal Website cara untuk memperkenalkan diri, khususnya pengetahuan
          dan achievement yang telah didapatkan
        </p>

        <ContactInfo className="flex items-center text-white/80 text-sm gap-3 mt-3">
          <FaLocationDot size={20} /> Medan, Sumatera Utara
        </ContactInfo>
        <ContactInfo className="flex items-center text-white/80 text-sm gap-3 mt-3">
          <FaPhoneAlt size={18} />
          +62 823 7400 3203
        </ContactInfo>

        <hr className="border-t-2 border-gray-300 my-5" />

        <div className="flex gap-4 text-white mb-5">
          <MediaSocialInfo to="https://www.instagram.com/irfaannnmly/">
            <FaInstagram size={25} />
          </MediaSocialInfo>
          <MediaSocialInfo to="https://www.linkedin.com/in/irfan-mulya-19508b257/">
            <FaLinkedin size={25} />
          </MediaSocialInfo>
          <MediaSocialInfo to="https://github.com/irfanmans">
            <FaGithub size={25} />
          </MediaSocialInfo>
        </div>

        <p className="text-white/80 font-light text-sm text-start">
          &copy; 2026 Personal Website | All Rights Reserved
        </p>
      </footer>
    </>
  );
}
