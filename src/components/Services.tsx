import { useTranslation } from "react-i18next";
import Ja from '../contents/services.ja.mdx';
import En from '../contents/services.en.mdx';
import ZhCn from '../contents/services.zh-cn.mdx';


export default function Services() {
    const { i18n: { language } } = useTranslation();

    return (
        <div
            className="prose dark:prose-invert prose-li:mt-0 prose-li:mb-0 prose-h2:mt-4 prose-h2:mb-0 prose-code:before:content-[''] prose-code:after:content-[''] prose-ul:mt-0 prose-ul:mb-0 prose-code:break-all max-w-lg"
            style={{
                marginBottom: `-5px`
            }}
        >
            {language === "ja" && <Ja />}
            {language === "en" && <En />}
            {language === "zhCN" && <ZhCn />}

        </div >
    )
}
