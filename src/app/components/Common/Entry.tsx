"use client";

import Footer from "./Footer";

export default function Entry({ dict }: { dict: Record<string, string> }) {
  return (
    <div className="relative w-full h-fit flex flex-col h-screen bg-white">
      <Footer dict={dict} />
    </div>
  );
}
