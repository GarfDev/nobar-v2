import { getMessages } from "@/intl";
import { createTranslator } from "next-intl";
import { useRouter } from "next/router";

const useMessage = (locale: string) => {
  const messages = getMessages(locale || "vi");

  return createTranslator({ locale: locale || "vi", messages });
};

export default useMessage;