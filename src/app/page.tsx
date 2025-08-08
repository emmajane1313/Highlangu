import { getDictionary } from "./[lang]/dictionaries";
import Entry from "./components/Common/Entry";
import Wrapper from "./components/Common/Wrapper";

export default async function Home() {
  const dict = await (
    getDictionary as (locale: string) => Promise<Record<string, string>>
  )("en");
  return (
    <Wrapper
      children={<Entry dict={dict} lang="en" />}
      dict={dict}
      lang={"en"}
    />
  );
}
