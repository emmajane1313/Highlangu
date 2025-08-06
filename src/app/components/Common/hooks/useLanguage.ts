import { LANGUAGE } from "@/app/lib/constants";
import { usePathname, useRouter } from "next/navigation";

const useLanguage = () => {
  const router = useRouter();
  const path = usePathname();

  const changeLanguage = (lang: string) => {
    const segments = path.split("/");
    segments[1] = LANGUAGE[lang] ?? "en";
    const newPath = segments.join("/");

    document.cookie = `NEXT_LOCALE=${LANGUAGE[lang]}; path=/; SameSite=Lax`;

    router.push(newPath);
  };

  return {
    changeLanguage,
  };
};

export default useLanguage;
