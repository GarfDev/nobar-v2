import useMessage from "@/app/hooks/useMessage";
import { animated } from "@react-spring/web";
import { BsSlashLg } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";

interface Props {
  params: { locale: string };
}

const Navbar = ({ params }: Props) => {
  const router = useRouter();
  const t = useMessage(params.locale);

  const [cookies, setCookie] = useCookies(["NEXT_LOCALE"]);

  const isVI = cookies.NEXT_LOCALE === "vi";

  const updateLanguage = (lang: string) => () => {
    setCookie("NEXT_LOCALE", lang);
  };

  return (
    <animated.div className="w-full px-8 flex justify-end items-center h-full max-h-[80px]">
      <ul className="flex font-bold space-x-6">
        <li className="uppercase">
          <Link href="/">{t("homepage")}</Link>
        </li>
        <li className="uppercase">{t("about_us")}</li>
        <li className="uppercase">{t("idea")}</li>
        <li className="uppercase">{t("menu")}</li>
        <li className="uppercase">{t("contact")}</li>
        <ul className="border-l-2 pl-3 border-white text-gray-400 flex items-center">
          <li
            onClick={updateLanguage("vi")}
            className={`uppercas ${isVI && "text-white"}`}
          >
            <Link href="/vi/" locale={false}>
              VI
            </Link>
          </li>

          <li className="mx-1 text-xl">
            <BsSlashLg />
          </li>
          <li
            onClick={updateLanguage("en")}
            className={`uppercas ${!isVI && "text-white"}`}
          >
            <Link href="/en/" locale={false}>
              EN
            </Link>
          </li>
        </ul>
      </ul>
    </animated.div>
  );
};

export default Navbar;
