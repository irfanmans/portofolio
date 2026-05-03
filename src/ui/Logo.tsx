interface LogoProps {
  src: string;
  width?: string | number;
  className?: string;
}

export default function Logo({ src, width, className }: LogoProps) {
  return (
    <>
      <img src={src} alt="logo" width={width} className={className} />
    </>
  );
}
