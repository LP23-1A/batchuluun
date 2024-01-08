import image from "@/img/profile.png";
export default function Profile() {
  return (
    <div className=" w-1">
      <img src={image.src} className="w-[40px] h-10" alt="" />
    </div>
  );
}
