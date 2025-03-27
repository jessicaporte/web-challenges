import Image from "./Image";
import avatarImg from "../Img/avatar.jpg";

export default function Avatar() {
  return (
    <button
      type="button"
      onClick={() => console.log("I could toggle a profile!")}
      aria-label="toggle profile"
    >
      <Image src={avatarImg} alt="avatar" />
    </button>
  );
}
