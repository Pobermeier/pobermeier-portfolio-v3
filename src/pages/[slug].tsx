import { GetStaticPropsContext } from "next";
import { useQuerySubscription } from "react-datocms";

import Navbar, { NavbarProps } from "components/Navigation/Navbar";
import Footer, { FooterProps } from "components/Footer/Footer";
import CmsComponentMapper from "components/CMS/CmsComponentMapper";
import PreviewBanner from "components/Banner/PreviewBanner";
import SEO from "components/SEO/SEO";
import { request } from "clients/datocms";
import { CmsData } from "models/datoCMS";
import { GET_PAGE_DATA_QUERY } from "graphql/queries/getPageData";
import { GET_ALL_PAGE_SLUGS_QUERY } from "graphql/queries/getAllPageSlugs";
import { isDev, PREVIEW_STORAGE_ITEM_NAME } from "Constants";
import config from "config";

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
    page: { navbar, footer, sections, title, slug },
  } = cmsData as CmsData;

  const computedTitle = `${title} | ${config.meta.siteOwnerName}`;
  const homeRouteTitle = `Senior Frontend Developer | ${config.meta.siteOwnerName}`;

  const isHomeRoute = slug === "home";

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
    <>
      <SEO title={isHomeRoute ? homeRouteTitle : computedTitle} />
      {isPreview && <PreviewBanner onLeavePreviewBtnClick={deactivatePreviewMode} />}
      {navbar && renderNavbar()}
      <main>
        {sections?.map(({ __typename, id, ...other }) => (
          <CmsComponentMapper key={id} typeName={__typename} componentProps={other} />
        ))}
      </main>
      {footer && renderFooter()}
    </>
  );
};

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const currentSlug = ctx.params?.slug;

  const data = await request(GET_PAGE_DATA_QUERY, { slug: currentSlug }, isDev);

  return {
    props: { data },
  };
}

export async function getStaticPaths() {
  const cmsData = await request(GET_ALL_PAGE_SLUGS_QUERY, null, isDev);

  const paths = cmsData.allPages.map((page: any) => ({ params: { slug: page.slug } }));

  return {
    fallback: false,
    paths,
  };
}

export default Page;
