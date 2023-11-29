import image from "./img/Pic2.png";

export default function IntroductionImg() {
  return (
    <img
      className="w-96 h-96 absolute top-[900px] max-md:top-[0px] max-md:static dark:border-x-8 dark:border-y-8 dark:border-black"
      src={image.src}
    />
  );
}
