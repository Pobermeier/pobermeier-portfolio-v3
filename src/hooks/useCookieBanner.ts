import { useCallback, useEffect } from "react";
import { useRouter } from "next/dist/client/router";

import { checkCookie, setCookie } from "utils/cookies";

const useCookieBanner = (): void => {
  const router = useRouter();

  const showCookieAlert = useCallback((): void => {
    const template = `
      <section class="w-10/12 max-w-7xl p-4 backdrop-blur-md bg-white/30 mb-4 mx-auto rounded-lg shadow-lg">
        <div class="md:flex items-center -mx-3">
          <div class="md:flex-1 px-5 mb-5 md:mb-0">
            <p class="text-center md:text-left text-gray-800 text-sm leading-tight md:pr-12">This website uses cookies. If you continue to use the website, we assume your consent. <a href="privacy-notice" class="text-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-800">You can check out our privacy policy by clicking here</a>.</p>
          </div>
          <div class="px-3 items-center">
            <button
              class="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-primary hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-800 hover:scale-105 transition-all" id="accept-cookies"
            >
              Accept Cookies
            </button>
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
        router.push("/privacy-notice", undefined, { shallow: true });
      }
    });
  }, [router]);

  useEffect(() => {
    window.addEventListener("load", () => checkCookie("cookies-accepted", showCookieAlert));
  }, [showCookieAlert]);
};

export default useCookieBanner;
