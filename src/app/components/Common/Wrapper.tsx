"use client";

import Footer from "./Footer";

export default function Wrapper({
  dict,
  lang,
  children,
}: {
  dict: Record<string, string>;
  lang: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative w-full h-fit flex flex-col min-h-screen bg-white">
      {children}
      <Footer dict={dict} lang={lang} />
    </div>
  );
}
