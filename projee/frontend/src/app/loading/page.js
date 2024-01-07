import Geld from "@/components/Geld";

export default function Loading() {
  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center gap-12">
      <Geld />
      <div className="flex flex-col gap-4 justify-center items-center">
        <span class="loading loading-spinner text-info"></span>
        <p> Tүр хүлээнэ үү</p>
      </div>
    </div>
  );
}
