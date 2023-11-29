import image from "./img/Pic.png";

export default function HeroImg() {
  return (
    <img
      className="w-72 h-80 absolute top-[140px] max-md:top-[0px] max-md:static dark:border-x-8 dark:border-y-8 dark:border-black"
      src={image.src}
    />
  );
}
