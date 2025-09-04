import { WhiteBookSection } from "./_components/sections/white-book";
import { RegulationsSection } from "./_components/sections/regulations";
import { useLocale } from "next-intl";
import { TLocale } from "@/types";
import { UzbekistanAiData } from "./constants";


export default function UzbekistanAIPage() {
    const locale = useLocale() as TLocale;
  return (
    <div className="space-y-12">
      <h1 className="text-4xl text-center">{UzbekistanAiData[locale].regulation_base.title}</h1>
      <WhiteBookSection/>
      <RegulationsSection/>
    </div>
  )
}