"use client";

import Footer from "./Footer";

export default function Entry({ dict }: { dict: Record<string, string> }) {
  return (
    <div className="relative w-full h-fit flex flex-col min-h-screen bg-white">
      <Footer dict={dict} />
    </div>
  );
}
