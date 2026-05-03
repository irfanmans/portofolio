import iconbrand from "../assets/images/iconbrand.png";

interface LogoProps {
  width: string | number;
}

export default function Logo({ width }: LogoProps) {
  return (
    <>
      <img src={iconbrand} alt="logo" width={width} />
    </>
  );
}
