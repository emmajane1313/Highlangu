"use client";

import { ENLACES } from "@/app/lib/constants";
import Image from "next/image";
import { useMemo } from "react";

type PositionedItem = {
  top: number;
  left: number;
};

export default function AboutEntry() {
  const positions = useMemo(() => {
    const cols = 4;
    const rows = Math.ceil((ENLACES.length * 2) / cols);
    const colWidth = 100 / cols;
    const rowHeight = 100 / rows;
    const results: PositionedItem[] = [];

    [...ENLACES, ...ENLACES].forEach((_, i) => {
      const col = i % cols;
      const row = Math.floor(i / cols);

      results.push({
        top: row * rowHeight + Math.random() * (rowHeight - 8),
        left: col * colWidth + Math.random() * (colWidth - 20),
      });
    });

    return results;
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden">
      {[...ENLACES, ...ENLACES].map((item, index) => (
        <div
          key={index}
          className="absolute max-w-lg text-sm leading-snug"
          style={{
            top: `${positions[index].top}%`,
            left: `${positions[index].left}%`,
          }}
        >
          <a
            href={item.enlace}
            target="_blank"
            rel="noopener noreferrer"
            className="block cursor-pointer text-[#1a0dab] hover:underline text-base"
          >
            {item.title}
          </a>
          <div className="text-[#006621] text-xs">{item.enlace}</div>
          <div className="text-[#545454] text-sm">{item.description}</div>
        </div>
      ))}

      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none px-2">
        <div className="relative w-96 h-96">
          <Image
            src="/images/emmajanemackinnonlee-dreamcore-portrait.png"
            alt="Emma-Jane MacKinnon-Lee Dreamcore Portrait"
            fill
            className="object-contain select-none"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}
