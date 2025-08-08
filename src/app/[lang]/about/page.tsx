import Wrapper from "@/app/components/Common/Wrapper";
import { getDictionary } from "../dictionaries";
import { tParams } from "../layout";
import AboutEntry from "@/app/components/About/AboutEntry";

export default async function IndexPage({ params }: { params: tParams }) {
  const { lang } = await params;
  const dict = await (
    getDictionary as (locale: string) => Promise<Record<string, string>>
  )(lang);
  return <Wrapper children={<AboutEntry />} dict={dict} lang={lang} />;
}
