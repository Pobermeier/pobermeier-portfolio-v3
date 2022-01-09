import { GetStaticPropsContext } from "next";

import Navbar, { NavbarProps } from "components/Navigation/Navbar";
import Footer, { FooterProps } from "components/Navigation/Footer";
import { request } from "clients/datocms";
import { CmsData } from "models/datoCMS";
import { GET_PAGE_DATA_QUERY } from "graphql/queries/getPageData";
import { GET_ALL_PAGE_SLUGS_QUERY } from "graphql/queries/getAllPageSlugs";

interface Props {
  data: CmsData;
}

const Page = ({
  data: {
    page: { navbar, footer },
  },
}: Props) => {
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
    <div className="relative bg-gray-50">
      {navbar && renderNavbar()}
      {footer && renderFooter()}
    </div>
  );
};

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const currentSlug = ctx.params?.slug;

  const data = await request(GET_PAGE_DATA_QUERY, { slug: currentSlug });

  return {
    props: { data },
  };
}

export async function getStaticPaths() {
  let paths: string[] = [];

  const data = await request(GET_ALL_PAGE_SLUGS_QUERY);

  paths = [...paths, ...data.allPages.map((page: any) => ({ params: { slug: page.slug } }))];

  return {
    fallback: false,
    paths,
  };
}

export default Page;
