/* eslint-disable @typescript-eslint/no-var-requires */
import { GetStaticPropsContext } from "next";
import dynamic from "next/dynamic";
import { useQuerySubscription, renderMetaTags } from "react-datocms";
// types
import { CmsData, PageData } from "models/datoCMS";
import { NavbarProps } from "components/Navigation/Navbar";
import { FooterProps } from "components/Footer/Footer";
// constants
import { isDev, PREVIEW_STORAGE_ITEM_NAME } from "Constants";
// components
const Navbar = dynamic(() => import("components/Navigation/Navbar"));
const CmsComponentMapper = dynamic(() => import("components/CMS/CmsComponentMapper"));
const Footer = dynamic(() => import("components/Footer/Footer"));
const PreviewBanner = dynamic(() => import("components/Banner/PreviewBanner"));
import SEO from "components/SEO/SEO";
// graphql
import { request } from "clients/datocms";
import { GET_PAGE_DATA_QUERY } from "graphql/queries/getPageData";
import { GET_ALL_PAGE_SLUGS_QUERY } from "graphql/queries/getAllPageSlugs";
// config
import globalConfig from "config";

type InternalProps = {
  data: CmsData;
};

type ExternalProps = {
  isPreview: boolean;
  deactivatePreviewMode: () => void;
};

type Props = InternalProps & ExternalProps;

const Page = ({ data, isPreview, deactivatePreviewMode }: Props) => {
  const { data: cmsData } = useQuerySubscription({
    enabled:
      typeof window !== "undefined" && Boolean(localStorage.getItem(PREVIEW_STORAGE_ITEM_NAME)),
    query: GET_PAGE_DATA_QUERY,
    variables: { slug: data.page.slug },
    initialData: data,
    preview: true,
    token: process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN as string,
  });

  const {
    site: { favicon },
    page: { seo, navbar, footer, sections },
  } = cmsData as CmsData;

  const renderNavbar = () => {
    const { socialMediaIcons, navigationLinks, callToActions } = navbar as NavbarProps;

    return (
      <Navbar
        socialMediaIcons={socialMediaIcons}
        navigationLinks={navigationLinks}
        callToActions={callToActions}
      />
    );
  };

  const renderFooter = () => {
    const { copyrightText, navigationLinks, socialMediaIcons } = footer as FooterProps;

    return (
      <Footer
        copyrightText={copyrightText}
        navigationLinks={navigationLinks}
        socialMediaIcons={socialMediaIcons}
      />
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO>{renderMetaTags([...seo, ...favicon])}</SEO>
      {isPreview && <PreviewBanner onLeavePreviewBtnClick={deactivatePreviewMode} />}
      {navbar && renderNavbar()}
      <main id="main" className="flex flex-col flex-grow justify-center h-full w-full mx-auto">
        {sections?.map((section) => (
          <CmsComponentMapper
            key={section.id}
            typeName={section.__typename}
            componentProps={section}
          />
        ))}
      </main>
      {footer && renderFooter()}
    </div>
  );
};

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const currentSlug = ctx.params?.slug;

  if (globalConfig.flags.useMockData) {
    const fs = require("fs");
    const path = require("path");

    const mockData = fs.readFileSync(
      path.resolve(process.cwd(), "src", "mocks", "pages", `${currentSlug}.json`),
      "utf8",
    );

    return {
      props: {
        data: JSON.parse(mockData),
      },
    };
  }

  try {
    const data = await request(GET_PAGE_DATA_QUERY, { slug: currentSlug }, isDev);

    return {
      props: { data },
    };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticPaths() {
  try {
    const cmsData = await request(GET_ALL_PAGE_SLUGS_QUERY, null, isDev);

    const paths = cmsData.allPages.map((page: PageData) => ({ params: { slug: page.slug } }));

    return {
      fallback: false,
      paths,
    };
  } catch (error) {
    console.log(error);
  }
}

export default Page;