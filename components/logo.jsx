import React from "react";
import { LuAudioLines } from "react-icons/lu";

const Logo = ({ withIcon = false }) => {
  return (
    <div className="flex items-center gap-2">
      {withIcon && <LuAudioLines size={30} className="text-cyan-500" />}
      <h1 className="text-2xl">
        recr<strong className="text-cyan-500">ai</strong>ter
      </h1>
    </div>
  );
};

export default Logo;
