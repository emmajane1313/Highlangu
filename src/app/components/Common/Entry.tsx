"use client";


export default function Entry({
  dict,
  lang,
}: {
  dict: Record<string, string>;
  lang: string;
}) {
  return (
    <div className="relative w-full h-fit flex flex-col min-h-screen bg-white"></div>
  );
}
