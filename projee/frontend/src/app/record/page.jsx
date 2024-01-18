"use client";
import AddCategoryInput from "@/components/AddCategory";
import AddCard from "@/components/AddRecord";
import CategoryNameData from "@/components/CategoryNameData";
import Navbar from "@/components/Navbar";
import RecordSection from "@/components/RecordSection";
import Leading from "@/icon/Leading";
import Left from "@/icon/LeftIcon";
import Right from "@/icon/RightIcon";
import { useState } from "react";
const transactionApi = "http://localhost:8000/transactions";
export default function Record() {
  const typesData = [
    {
      text: "All",
    },
    {
      text: "Income",
    },
    {
      text: "Expess",
    },
  ];
  const [add, setAdd] = useState(false);
  const [AddCategory, setAddCategory] = useState(false);
  const [amount, setAmount] = useState(0);
  const Handler = () => {
    setAdd(true);
  };
  const handlerCategory = () => {
    setAddCategory(!AddCategory);
  };
  return (
    <div className="bg-white w-screen h-screen flex flex-col gap-6 relative ">
      <div className="">
        <Navbar />
      </div>
      <div className=" bg-slate-200">
        <div className="px-32  py-6 flex gap-6 w-[1440px] h-screen m-auto">
          <div className="w-[282px] flex flex-col gap-6 bg-white rounded-xl py-6 px-4 ">
            <div className=" flex flex-col gap-6">
              <h2 className="text-3xl">Records</h2>
              <AddCard />
            </div>
            <input
              type="text"
              placeholder="search"
              className="border py-1 pl-2 rounded"
            />
            <div className="flex flex-col gap-6">
              <h3 className=" text-2xl">Types</h3>
              <div className="flex flex-col gap-2">
                {typesData.map((el) => {
                  return (
                    <div className="flex gap-2">
                      <input type="radio" />
                      <p>{el.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex justify-between">
                <h3 className=" text-2xl">Category</h3>
                <p>clear</p>
              </div>
              <div className="flex flex-col gap-2">
                <CategoryNameData />
              </div>
            </div>
            <AddCategoryInput />
            <div>
              <h3>Amount Range</h3>
              <p>{amount}</p>
              <input
                type="range"
                value={amount}
                min={0}
                max={100}
                onChange={(el) => setAmount(el.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex justify-between gap-[560px]">
              <div className="flex gap-3 items-center">
                <Left />
                <p>Last 30 Days</p>
                <Right />
              </div>
              <div>
                <div className="">
                  <button className="flex items-center">
                    <span className="text-lg">Newest first </span>
                    <Leading />
                  </button>
                </div>
              </div>
            </div>
            <div className="border bg-white rounded-xl flex justify-between p-3">
              <div className="flex gap-4">
                <input type="checkbox" />
                <p className="font-bold">Select All</p>
              </div>
              <p>-35,500</p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-bold">Today</p>
              <RecordSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
