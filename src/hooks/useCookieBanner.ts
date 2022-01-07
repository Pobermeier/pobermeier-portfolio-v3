import { useCallback, useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import { checkCookie, setCookie } from "utils/cookies";

const useCookieBanner = (): void => {
  const router = useRouter();

  const showCookieAlert = useCallback((): void => {
    const template = `
      <div id="cookie-info" class="cookie-banner">
        <div class="cookie-banner__content">
          <div class="cookie-banner__text">This website uses cookies. If you continue to use the website, we assume your consent.</div>
          <div class="cookie-banner__buttons">
            <button id="accept-cookies" class="cookie-banner__accept-button gtm-tracked-link">Continue</button>
            <button id="open-privacy-notice" class="cookie-banner__info-button gtm-tracked-link">Policy</button>
          </div>
        </div>
      </div>`;

    const wrapper = document.createElement("div");
    wrapper.style.position = "fixed";
    wrapper.style.padding = "0 1.5rem";
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
        router.push("/privacy");
      }
    });
  }, [router]);

  useEffect(() => {
    window.addEventListener("load", () => checkCookie("cookies-accepted", showCookieAlert));
  }, [showCookieAlert]);
};

export default useCookieBanner;
