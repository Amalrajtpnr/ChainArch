import React from "react";
import { Settingsicon } from "./Icons";
type props = { onClick: () => void };

function Settings({ onClick }: props) {
  return (
    <div
      onClick={onClick}
      className=" h-[36px] w-[36px] bg-[#111111] items-center justify-center flex-col flex rounded-md mr-32"
    >
      <div className="h-[20px] w-[20px] items-center justify-center  flex rounded-md">
        <Settingsicon />
      </div>
    </div>
  );
}

export default Settings;
