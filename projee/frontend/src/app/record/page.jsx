"use client";
import AddCategoryInput from "@/components/AddCategory";
import AddCard from "@/components/AddRecord";
import FoodDinks from "@/components/Foos";
import Navbar from "@/components/Navbar";
import Eye from "@/icon/Eye";
import Leading from "@/icon/Leading";
import Left from "@/icon/LeftIcon";
import Right from "@/icon/RightIcon";
import { todayData } from "@/components/Today";
import { useEffect, useState } from "react";
import axios from "axios";
import { CategoryData } from "@/components/AddCategoryData";
const api = "http://localhost:8000/users/user/category";
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
  const [show, setShow] = useState(false);
  const [categoryData, setCategoryData] = useState([]);
  const [amount, setAmount] = useState(0);
  const Handler = () => {
    setAdd(true);
  };
  const HandlerCategory = async () => {
    setAddCategory(true);
    const CategoryData = await axios.get(api);
    setCategoryData(CategoryData.data);
  };
  return (
    <div className="bg-white w-[1440px] m-auto flex flex-col gap-6 relative ">
      <div className="">
        <Navbar />
      </div>
      <div className="px-32 bg-slate-200 py-6 flex gap-6">
        <div className="w-[282px] flex flex-col gap-6 bg-white rounded-xl py-6 px-4 ">
          <div className=" flex flex-col gap-6">
            <h2 className="text-3xl">Records</h2>
            <button
              className="bg-blue-800  text-lg px-6 rounded-3xl text-white "
              onClick={Handler}
            >
              + Add
            </button>
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
              {categoryData.map((el) => {
                return (
                  <div className="flex gap-2 justify-between">
                    <div className="flex gap-2">
                      <Eye />
                      <p>{el.name}</p>
                    </div>
                    <Leading />
                  </div>
                );
              })}
            </div>

            <button onClick={HandlerCategory}>
              <span className="text-2xl text-blue-500 dropdown">+</span> Add
              Category
            </button>
            {AddCategory && (
              <AddCategoryInput closeCategoryModal={setAddCategory} />
            )}
          </div>
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
            {todayData.map((el) => {
              return (
                <div className="  border bg-white rounded-xl items-center p-3">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-4 items-center">
                      <div>
                        <input type="checkbox" />
                      </div>
                      <FoodDinks />
                      <div>
                        <p className="font-bold">{el.title}</p>
                        <p>{el.time}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-red-600">{el.amount}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-bold">Yesterday</p>
            {todayData.map((el) => {
              return (
                <div className="  border bg-white rounded-xl items-center p-3">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-4 items-center">
                      <div>
                        <input type="checkbox" />
                      </div>
                      <FoodDinks />
                      <div>
                        <p className="font-bold">{el.title}</p>
                        <p>{el.time}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-red-600">{el.amount}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {add && <AddCard closeModal={setAdd} />}
    </div>
  );
}
