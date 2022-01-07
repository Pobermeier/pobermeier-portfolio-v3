import { useCallback, useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import { checkCookie, setCookie } from "utils/cookies";

const useCookieBanner = (): void => {
  const router = useRouter();

  const showCookieAlert = useCallback((): void => {
    const template = `
      <section class="w-full p-5 lg:px-24 bg-gray-600">
        <div class="md:flex items-center -mx-3">
          <div class="md:flex-1 px-3 mb-5 md:mb-0">
            <p class="text-center md:text-left text-white text-sm leading-tight md:pr-12">This website uses cookies. If you continue to use the website, we assume your consent.</p>
          </div>
          <div class="px-3 flex-1 items-center">
            <button class="py-2 px-8 bg-gray-800 hover:bg-gray-900 text-white rounded font-bold text-xs shadow-xl sm:mr-3 mb-2 sm:mb-0" id="open-privacy-notice">Privacy policy</button>
            <button class="py-2 px-8 bg-green-400 hover:bg-green-500 text-white rounded font-bold text-xs shadow-xl mb-2 sm:mb-0" id="accept-cookies">Accept cookies</button>
          </div>
        </div>
      </section>
    `;

    if (document.getElementById("#cookie-info")) return;

    const wrapper = document.createElement("div");
    wrapper.id = "cookie-info";
    wrapper.style.position = "fixed";
    wrapper.style.bottom = "0";
    wrapper.style.left = "0";
    wrapper.style.width = "100%";
    wrapper.style.zIndex = "20";
    wrapper.style.textAlign = "center";
    wrapper.innerHTML = template;
    document.body.appendChild(wrapper);

    document.addEventListener("click", (event) => {
      if ((event.target as HTMLButtonElement).id === "accept-cookies") {
        setCookie("cookies-accepted", "1", 365 * 5);
        (document.querySelector("#cookie-info") as HTMLElement).style.display = "none";
      }
    });

    document.addEventListener("click", (event) => {
      if ((event.target as HTMLButtonElement).id === "open-privacy-notice") {
        router.push("/privacy", undefined, { shallow: true });
      }
    });
  }, [router]);

  useEffect(() => {
    window.addEventListener("load", () => checkCookie("cookies-accepted", showCookieAlert));
  }, [showCookieAlert]);
};

export default useCookieBanner;
