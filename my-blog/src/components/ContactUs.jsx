import { useState, useRef } from "react";
export default function Contact() {
  const [data, setData] = useState({
    published: true,
  });
  const valueRef = useRef("");
  const handlerInputValue = (e, key) => {
    let mock = {};
    mock[key] = e.target.value;
    setData({ ...data, ...mock });
  };
  return (
    <div className="w-[769px] px-20 box-border flex flex-col gap-10">
      {/* <div className="flex flex-col gap-5">
        <div>
          <h2 className="text-4xl">Contact Us</h2>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam
          </p>
        </div>
        <div className="flex gap-14">
          <div className="border border-solid flex flex-col gap-3 p-4 rounded-xl">
            <h3 className="text-xl">Address</h3>
            <p>1328 Oak Ridge Drive, Saint Louis, Missouri</p>
          </div>
          <div className="border border-solid flex flex-col gap-3 p-4 rounded-xl">
            <h3 className="text-xl">Contact</h3>
            <p>313-332-8662 info@email.com</p>
          </div>
        </div>
      </div> */}
      <div className="flex flex-col py-7 pl-8 pr-32 gap-5 bg-gray-100 rounded-xl">
        {/* <h4 className="text-xl">Leave a Message</h4> */}
        <div className="flex justify-between">
          <input
            type="text"
            placeholder="title"
            className="border-solid border p-3 rounded"
            onChange={(e) => handlerInputValue(e, "title")}
          />
          <input
            type="text"
            placeholder="published"
            className="border-solid border p-3 rounded"
            onChange={(e) => handlerInputValue(e, "body_markdown")}
          />
        </div>
        <input
          type="text"
          placeholder="tags"
          className="border-solid border p-3 rounded"
          onChange={(e) => handlerInputValue(e, "tags")}
        />
        <textarea
          name=""
          id=""
          placeholder="description"
          cols="30"
          rows="10"
          className="border-solid border p-3 rounded"
          onChange={(e) => handlerInputValue(e, "series")}
        ></textarea>
      </div>
      <div className=" bg-indigo-100 p-4 text-center">
        <button className="">Submit</button>
      </div>
    </div>
  );
}
