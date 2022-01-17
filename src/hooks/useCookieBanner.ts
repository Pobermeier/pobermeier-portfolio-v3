import { useCallback, useEffect } from "react";
// utils
import { checkCookie, setCookie } from "utils/cookies";

const useCookieBanner = (): void => {
  const showCookieAlert = useCallback((): void => {
    const template = `
      <div class="w-10/12 max-w-7xl p-4 backdrop-blur-sm bg-gray-900/80 dark:bg-white/70 mb-4 mx-auto rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="600" data-aos-offset="0">
        <div class="md:flex items-center -mx-3">
          <div class="md:flex-1 px-5 mb-5 md:mb-0">
            <p class="text-center md:text-left text-gray-300 dark:text-gray-900 text-sm leading-tight md:pr-12">This website uses cookies. If you continue to use the website, we assume your consent. <a href="privacy-notice" class="text-gray-300 dark:text-gray-900 underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-800">You can learn more about our privacy policy here</a>.</p>
          </div>
          <div class="px-3 items-center">
            <button
              class="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-primary md:hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-800 md:hover:scale-105 transition-all" id="accept-cookies"
            >
              Accept Cookies
            </button>
          </div>
        </div>
      </div>
    `;

    if (document.getElementById("#cookie-info")) return;

    const wrapper = document.createElement("aside");
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
  }, []);

  useEffect(() => {
    window.addEventListener("load", () => checkCookie("cookies-accepted", showCookieAlert));
  }, [showCookieAlert]);
};

export default useCookieBanner;
