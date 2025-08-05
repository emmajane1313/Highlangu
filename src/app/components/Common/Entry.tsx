"use client";

import Footer from "./Footer";

export default function Entry({ dict }: { dict: any }) {
  return (
    <div className="relative w-full h-fit flex flex-col h-screen bg-white">
      <Footer dict={dict} />
    </div>
  );
}
