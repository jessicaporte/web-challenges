import Image from "./Image";
import logoImg from "/src/img/logo.jpg";

export default function Logo() {
  return (
    <a href="#">
      <Image src={logoImg} alt="logo" />
    </a>
  );
}
