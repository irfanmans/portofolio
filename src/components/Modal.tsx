interface ModalProps {
  src: string;
  onClose: () => void;
}

export default function Modal({ src, onClose }: ModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      onClick={onClose} // klik backdrop = tutup modal
    >
      <div
        className="relative max-w-[90%] max-h-[90%]"
        onClick={(e) => e.stopPropagation()} // cegah bubble ke backdrop
      >
        <img
          src={src}
          alt="sertifikat"
          className="rounded-xl object-contain max-h-[85vh] w-full shadow-xl"
        />
      </div>
    </div>
  );
}
