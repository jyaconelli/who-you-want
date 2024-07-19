"use client";

import Image from "next/image";
import React from "react";
import Sparkle from "react-sparkle";
type TContentRowProps = {
  text: string;
  reverse?: boolean;
  horizontal?: boolean;
};
export const ContentRow = ({
  text,
  reverse,
  horizontal = true,
}: TContentRowProps) => {
  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    // add class to element, wait 1 second, remove class
    const target = e.target as HTMLElement;
    target.classList.add("animate-cursor");
    setTimeout(() => {
      target.classList.remove("animate-cursor");
    }, 2000);
  };
  const flexDirection = horizontal ? "flex-row" : "flex-col";
  const finalFlex:
    | "flex-row"
    | "flex-col"
    | "flex-col-reverse"
    | "flex-row-reverse" = reverse ? `${flexDirection}-reverse` : flexDirection;
  return (
    <div
      className={`flex  max-w-screen-sm border-pink-500/30 border-[2px] border-dotted`}
    >
      <div className={`flex  max-w-screen-sm bg-purple-950/50 p-[2px]`}>
        <div className={`flex  max-w-screen-sm bg-pink-500/50 p-[2x]`}>
          <div className={`flex  max-w-screen-sm bg-white/90 p-[2px]`}>
            <div className={`flex  max-w-screen-sm bg-pink-500/50 p-[2px]`}>
              <div className={`flex  max-w-screen-sm bg-purple-950/50 p-[2px]`}>
                <div
                  className={`flex ${finalFlex} max-md:flex-col gap-4 bg-black border-pink-500 border-[2px] border-dotted`}
                >
                  <div
                    className={`flex aspect-square flex-${
                      !horizontal ? "row" : "col"
                    } flex-1 max-md:flex-row bg-cover`}
                    style={{
                      backgroundImage: "url(/kyle-stretch.png)",
                    }}
                  >
                    <div className="relative w-full h-full">
                      <Sparkle />
                    </div>
                  </div>
                  <div className="flex-[2] p-3" onClick={onClick}>
                    <p className="font-Gruppo font-black text-white text-lg">{text}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
