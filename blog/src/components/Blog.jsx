const data = [
  {
    url: "https://s3-alpha-sig.figma.com/img/3abf/26dd/585632b9d05dcfd0daffacedd55842f5?Expires=1702857600&Signature=GtIcIcyrku03di6uhi0mfVSqHwIdIsUNoUQebv4ln3q84G9ZINAh~g63In7v1hCCoAUoAP2aTUyCsm0UHjL-VzZqeJwqljXEBvlG38XfWgPV0jOZS41GSMMySeIgQ-5a6beEdkq3-nVqA8DtYQ5tFNSBjsKIZZlJohL6yXlNmptCXdFuApfCK6nWzmbfiNgeW-g3FK0QgNJNPlJaJFhYBW7ic31MDvl416i18XVjJb3BD8ahSb1F7OqOffjqQOGVpbAL4r4vPSLE8tV4YbaMpt1sknJsMh0hxR4lDqQ0txf88uFFFPq7xf9FpZyaEIntEtG8EVMtjjmahArIWExyCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    button: "Technology",
    description:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
];
export default function blogData() {
  return (
    <div>
      {data.map((e) => {
        return (
          <div className="border-solid border-2 border-gray-300 w-[392px] rounded-xl">
            <div className="p-4 flex flex-col gap-4 ">
              <div className="w-[360px] h-60 ">
                <img src={e.url} alt="" className="rounded-xl" />
              </div>
              <div className="flex flex-col gap-4">
                <button className=" bg-slate-300 text-purple-500 py-1 px-3 rounded-xl w-fit">
                  {e.button}
                </button>
                <h2 className=" text-2xl">{e.description}</h2>
              </div>
              <div>
                <p>{e.date}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
