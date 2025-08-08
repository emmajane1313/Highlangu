import { getDictionary } from "../[lang]/dictionaries";
import AboutEntry from "../components/About/AboutEntry";
import Wrapper from "../components/Common/Wrapper";

export default async function Home() {
  const dict = await (
    getDictionary as (locale: string) => Promise<Record<string, string>>
  )("en");
  return <Wrapper children={<AboutEntry />} dict={dict} lang={"en"} />;
}
