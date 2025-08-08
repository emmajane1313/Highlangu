import Entry from "../components/Common/Entry";
import Wrapper from "../components/Common/Wrapper";
import { getDictionary } from "./dictionaries";
import { tParams } from "./layout";

export default async function IndexPage({ params }: { params: tParams }) {
  const { lang } = await params;
  const dict = await (
    getDictionary as (locale: string) => Promise<Record<string, string>>
  )(lang);
  return (
    <Wrapper
      children={<Entry dict={dict} lang={lang} />}
      dict={dict}
      lang={lang}
    />
  );
}
