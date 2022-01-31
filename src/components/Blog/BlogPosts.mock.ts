// types
import { BlogPost } from "models/datoCMS";

const mockData: BlogPost[] = [
  {
    seo: [
      {
        attributes: null,
        content: "Next.js NoSSR-component & obfuscating email-addresses",
        tag: "title",
      },
      {
        attributes: {
          property: "og:title",
          content: "Next.js NoSSR-component & obfuscating email-addresses",
        },
        content: null,
        tag: "meta",
      },
      {
        attributes: {
          name: "twitter:title",
          content: "Next.js NoSSR-component & obfuscating email-addresses",
        },
        content: null,
        tag: "meta",
      },
      {
        attributes: {
          name: "description",
          content:
            "A short guide on how to create a simple NoSSR-component in Next.js and how to use it to obfuscate email-addresses from server-rendered markup.",
        },
        content: null,
        tag: "meta",
      },
      {
        attributes: {
          property: "og:description",
          content:
            "A short guide on how to create a simple NoSSR-component in Next.js and how to use it to obfuscate email-addresses from server-rendered markup.",
        },
        content: null,
        tag: "meta",
      },
      {
        attributes: {
          name: "twitter:description",
          content:
            "A short guide on how to create a simple NoSSR-component in Next.js and how to use it to obfuscate email-addresses from server-rendered markup.",
        },
        content: null,
        tag: "meta",
      },
      {
        attributes: {
          property: "og:image",
          content:
            "https://www.datocms-assets.com/60761/1643121671-blog-post-1-social.png?fit=max&fm=jpg&w=1000",
        },
        content: null,
        tag: "meta",
      },
      {
        attributes: {
          property: "og:image:width",
          content: "1152",
        },
        content: null,
        tag: "meta",
      },
      {
        attributes: {
          property: "og:image:height",
          content: "773",
        },
        content: null,
        tag: "meta",
      },
      {
        attributes: {
          name: "twitter:image",
          content:
            "https://www.datocms-assets.com/60761/1643121671-blog-post-1-social.png?fit=max&fm=jpg&w=1000",
        },
        content: null,
        tag: "meta",
      },
      {
        attributes: {
          property: "og:locale",
          content: "en",
        },
        content: null,
        tag: "meta",
      },
      {
        attributes: {
          property: "og:type",
          content: "article",
        },
        content: null,
        tag: "meta",
      },
      {
        attributes: {
          property: "og:site_name",
          content: "Patrick Obermeier | Senior Frontend Developer",
        },
        content: null,
        tag: "meta",
      },
      {
        attributes: {
          property: "article:modified_time",
          content: "2022-01-26T21:17:39Z",
        },
        content: null,
        tag: "meta",
      },
      {
        attributes: {
          name: "twitter:card",
          content: "summary_large_image",
        },
        content: null,
        tag: "meta",
      },
      {
        attributes: {
          name: "twitter:site",
          content: "@pobermeier87",
        },
        content: null,
        tag: "meta",
      },
    ],
    slug: "next-js-nossr-component-and-email-obfuscation",
    author: {
      name: "Patrick Obermeier",
      photo: {
        responsiveImage: {
          alt: "Patrick Obermeier",
          aspectRatio: 1,
          base64:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoQEAgVDg0JDhUODQ0NFREODQ0YFx8lGCIVFhUmHysjGh0oHRUiJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHBAQHC8lIig7Oy8vLy8vLy8vLy8vOzsvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIABgAGAMBIgACEQEDEQH/xAAYAAADAQEAAAAAAAAAAAAAAAAABQYEAf/EAB4QAAICAgMBAQAAAAAAAAAAAAABAgMEBSExQXER/8QAFwEBAQEBAAAAAAAAAAAAAAAABAUDAv/EABwRAAICAgMAAAAAAAAAAAAAAAECAAMREgQTIf/aAAwDAQACEQMRAD8Ard1anSyf18k8h/TTt879qfIp1WSpXd+hC+BGUU7ITK9TSgjgvsy1GHYGi+iEdcNiS24ymqnyZNHe5S79ADggayhxSesxxmZTjX2AAKqUayRyWIsn/9k=",
          bgColor: "#c98966",
          height: 460,
          sizes: "(max-width: 460px) 100vw, 460px",
          src: "https://www.datocms-assets.com/60761/1641478172-profile.png",
          srcSet:
            "https://www.datocms-assets.com/60761/1641478172-profile.png?dpr=0.25 115w,https://www.datocms-assets.com/60761/1641478172-profile.png?dpr=0.5 230w,https://www.datocms-assets.com/60761/1641478172-profile.png?dpr=0.75 345w,https://www.datocms-assets.com/60761/1641478172-profile.png 460w",
          title: "Patrick Obermeier",
          webpSrcSet:
            "https://www.datocms-assets.com/60761/1641478172-profile.png?dpr=0.25&fm=webp 115w,https://www.datocms-assets.com/60761/1641478172-profile.png?dpr=0.5&fm=webp 230w,https://www.datocms-assets.com/60761/1641478172-profile.png?dpr=0.75&fm=webp 345w,https://www.datocms-assets.com/60761/1641478172-profile.png?fm=webp 460w",
          width: 460,
        },
      },
    },
    category: {
      title: "Hasty But Tasty",
    },
    content:
      'During the last few weeks I rebuild my personal website (in fact THIS very website) with Next.js. One of the many questions I had to ask myself was how to embed my email as safely as possible and giving those nasty web scraping bots a hard time getting it. As often in development, there are a multiple ways to go about this as there is more than one way how to fetch email-addresses from any website.\n\n  \n\nOn the least recent version of my portfolio website, which was a simple HTML & CSS site without any CMS in the background, I used a method where I would only include empty spans with an id in the initial markup and add the email-links into these spans with Vanilla JS only after the page has been fully loaded.\n\n  \n\nFor this new version of my website however, I\'m not only using Next.js but also the Headless CMS DatoCMS to manage all of my pages\' content + my blog posts. Everything you see on the site can basically be managed from inside of the CMS including the header- & footer content.\n\n  \n\nAs I didn\'t want to put any HTML-markup into my CMS content and to avoid the usage of dangerouslySetHtml in my React code I decided to tackle this problem in two steps.\n\n  \n\n### Step 1: Exclude email-address from server-side rendering\n\n  \n\nAs you might be aware of, Next.js allows you to server render your pages such that the browser does not just receive an empty HTML-file like it does with any SPA-framework, but the first render actually happens on either request time (for server-rendered pages) or at build time (for static pages). But this makes the job of a bot who tries to scrape an email-address from this plain initial markup very easy.\n\n  \n\nTo tackle this issue, I decided that I want to do this by opting out from SSR for the JSX that renders any email-addresses to the page. [Many UI frameworks like Material UI come with their own version of a NoSSR-component for React](https://mui.com/api/no-ssr/). However, as I don\'t want to include a whole UI framework just for this one usecase, I decided to implement it myself and [Next.js makes this very easy thanks to their build-in function for dynamic imports](https://mui.com/api/no-ssr/). Actually, all that is needed to make this happen is this short code snippet.\n\n  \n\n```\nimport dynamic from "next/dynamic";\n\nconst NoSsr: React.FC = ({ children }) => <>{children}</>;\n\nexport default dynamic(() => Promise.resolve(NoSsr), {\n  ssr: false,\n});\n```\n\n  \n\nJust include this in your project as a separate component file. This can then be used to exclude a specific part of a subtree or a whole component from SSR by wrapping the JSX you want to exclude with this component:\n\n  \n\n```\n<ul>\n  {socialMediaIcons.map(({ id, name, url, reactIconIdentifier }) => {\n    const icon = <SocialMediaIconLink /* props left out */ />\n\n    if (reactIconIdentifier === "email") return <NoSSR key={id}>{icon}</NoSSR>;\n\n    return icon;\n  })}\n</ul>\n```\n\n  \n\n### Step 2: Save fake email in CMS, replace it at runtime\n\n  \n\nHere I was thinking that step 1 would already suffice. However, I quickly became aware of the fact that Next.js still includes the email-address as part of the JSON-data that gets send out to to the client for initial rehydration. So while the markup itself is clean, the JSON still gives it away.\n\n  \n\nTo tackle this second problem, I came up with the following solution: I would actually save a fake email-address that still looks like a valid one together with my other CMS content and only on the client side after the initial page load I would replace the fake one with my real address.\n\n  \n\nFinally, I packaged the logic into a resusable custom hook with the end result looking like this.\n\n  \n\n```\nimport { useEffect } from "react";\nimport Router from "next/router";\n\nconst useReplaceHrefInAllMatchedLinks = (urlToMatch: string, replaceUrl: string) => {\n  useEffect(() => {\n    const updateLinks = () => {\n      setTimeout(() => {\n        const allLinks = document.querySelectorAll("a");\n\n        allLinks.forEach((link) => {\n          if (link.href === urlToMatch) {\n            link.href = replaceUrl;\n          }\n        });\n      }, 1000);\n    };\n\n    updateLinks();\n\n    Router.events.on("routeChangeComplete", updateLinks);\n\n    return () => {\n      Router.events.off("routeChangeComplete", updateLinks);\n    };\n  }, [replaceUrl, urlToMatch]);\n};\n\nexport default useReplaceHrefInAllMatchedLinks;\n```\n\n  \n\nThis hook runs everytime a route change happens, but only after one second to ensure that all of the other code has already been run.\n\n  \n\nBoth steps together are at least some kind of safety roadblock, however if you don\'t want to worry about this at all you might also just want to use a contact form with a honeypot field or a recaptcha to avoid spam and to keep your email safe.\n\n  \n\nBut, If you want to include an email to set the barrier low for any potential client or any other people who want to get in touch with you, I think this two-step approach poses one possible solution on how to tackle this issue in Next.js.',
    id: "100637545",
    createdAt: "2022-01-25T14:47:31Z",
    isfeatured: false,
    shortDescription:
      "A short guide on how to create a simple NoSSR-component in Next.js and how to use it to obfuscate email-addresses from server-rendered markup.",
    title: "Next.js NoSSR-component & obfuscating email-addresses",
    headerImage: {
      responsiveImage: {
        alt: undefined,
        aspectRatio: 3,
        base64:
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAgLCgoLDhgWDg0NDh0VHRYYHR8lGhofJSUmKysjJh0oHSYWMDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHBAQHDsoIig7OzsvOzs7Ozs7Oy81Ozs7Lzs7Ly87Ly8vLzUvOy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIAAgAGAMBIgACEQEDEQH/xAAWAAEBAQAAAAAAAAAAAAAAAAAABAb/xAAdEAABBAIDAAAAAAAAAAAAAAAAAQIDBCGRBTKB/8QAFgEBAQEAAAAAAAAAAAAAAAAAAgMB/8QAHBEAAAYDAAAAAAAAAAAAAAAAAAECBBExAxNh/9oADAMBAAIRAxEAPwDCvl49q4kTZRFZpI3EjdgGHj6CyRK7EHI2Kbm90X0AFkogrDc4i2WP/9k=",
        bgColor: "#239a3b",
        height: 500,
        sizes: "(max-width: 1500px) 100vw, 1500px",
        src: "https://www.datocms-assets.com/60761/1643121668-blog-post-1-header.png",
        srcSet:
          "https://www.datocms-assets.com/60761/1643121668-blog-post-1-header.png?dpr=0.25 375w,https://www.datocms-assets.com/60761/1643121668-blog-post-1-header.png?dpr=0.5 750w,https://www.datocms-assets.com/60761/1643121668-blog-post-1-header.png?dpr=0.75 1125w,https://www.datocms-assets.com/60761/1643121668-blog-post-1-header.png 1500w",
        title: undefined,
        webpSrcSet:
          "https://www.datocms-assets.com/60761/1643121668-blog-post-1-header.png?dpr=0.25&fm=webp 375w,https://www.datocms-assets.com/60761/1643121668-blog-post-1-header.png?dpr=0.5&fm=webp 750w,https://www.datocms-assets.com/60761/1643121668-blog-post-1-header.png?dpr=0.75&fm=webp 1125w,https://www.datocms-assets.com/60761/1643121668-blog-post-1-header.png?fm=webp 1500w",
        width: 1500,
      },
    },
    image: {
      responsiveImage: {
        alt: "Next.js No Server-side Rendering",
        aspectRatio: 1.9047619047619047,
        base64:
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAgLChYLDhYQFRgNDh0VFREWJRYlHRYVFh4aKzclHR0oHRYiJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHBAQHDsoIig7NTs7Ozs7OzsvOy87Ly8vLzsvOzs7OzsvLy8vNS81Ly87LzsvLy81Ly8vLy8vLy8vL//AABEIAA0AGAMBIgACEQEDEQH/xAAXAAADAQAAAAAAAAAAAAAAAAAABAUG/8QAHRAAAQQDAQEAAAAAAAAAAAAAAQACAwQFESGRMf/EABcBAAMBAAAAAAAAAAAAAAAAAAIDBAH/xAAbEQACAwADAAAAAAAAAAAAAAABAwACEQUhQf/aAAwDAQACEQMRAD8AxJxUe9lMQUmMHFAkzdgOAAHqYgy05HQEu1GezOPW3MMpXKrSPqFKtZKZw5oIRgWyVsXYHuf/2Q==",
        bgColor: "#239a3b",
        height: 630,
        sizes: "(max-width: 1200px) 100vw, 1200px",
        src: "https://www.datocms-assets.com/60761/1643121661-blog-post-1-card-img.png",
        srcSet:
          "https://www.datocms-assets.com/60761/1643121661-blog-post-1-card-img.png?dpr=0.25 300w,https://www.datocms-assets.com/60761/1643121661-blog-post-1-card-img.png?dpr=0.5 600w,https://www.datocms-assets.com/60761/1643121661-blog-post-1-card-img.png?dpr=0.75 900w,https://www.datocms-assets.com/60761/1643121661-blog-post-1-card-img.png 1200w",
        title: undefined,
        webpSrcSet:
          "https://www.datocms-assets.com/60761/1643121661-blog-post-1-card-img.png?dpr=0.25&fm=webp 300w,https://www.datocms-assets.com/60761/1643121661-blog-post-1-card-img.png?dpr=0.5&fm=webp 600w,https://www.datocms-assets.com/60761/1643121661-blog-post-1-card-img.png?dpr=0.75&fm=webp 900w,https://www.datocms-assets.com/60761/1643121661-blog-post-1-card-img.png?fm=webp 1200w",
        width: 1200,
      },
    },
  },
];

export default mockData;
