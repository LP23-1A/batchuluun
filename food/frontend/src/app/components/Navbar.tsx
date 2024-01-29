import { Stack } from "@mui/material";
import React from "react";
import Logo from "../icon/Logo";

import SearchAppBar from "./Search";
import { PermIdentitySharp, ShoppingBasketSharp } from "@mui/icons-material";

const Navbar = () => {
  return (
    <Stack className="flex ">
      <div className="flex justify-between items-center py-[20px] px-[300px]">
        <div className="flex gap-6 ">
          <Logo />
          <ul className="flex gap-5">
            <li>НҮҮР</li>
            <li>ХООЛНЫ ЦЭС</li>
            <li>ХҮРГЭЛТИЙН БҮС</li>
          </ul>
        </div>
        <div className="flex gap-6">
          <SearchAppBar />
          <div className="flex gap-3 items-center">
            <ShoppingBasketSharp />
            <p>Сагс</p>
          </div>
          <div className="flex gap-3 items-center">
            <PermIdentitySharp />
            <p>Нэвтрэх</p>
          </div>
        </div>
      </div>
    </Stack>
  );
};

export default Navbar;
