import { gql } from "graphql-request";
import SEO from "@/components/SEO/SEO";
import { request } from "clients/datocms";
import config from "config";

interface ResumeData {
  resume: {
    cvPdf: {
      url: string;
      title: string;
    };
  };
}

interface Props {
  data: ResumeData;
}

const ResumePage: React.FC<Props> = ({ data }) => {
  return (
    <>
      <SEO title={`Curriculum Vitae | ${config.meta.siteOwnerName}`} />
      <iframe src={data.resume.cvPdf.url} id="pdf" title={data.resume.cvPdf.title} />
      <style jsx>
        {`
          * {
            margin: 0;
            padding: 0;
            border: 0;
            border-style: none;
            overflow: hidden;
          }

          #pdf {
            width: 100vw;
            height: 100vh;
          }
        `}
      </style>
    </>
  );
};

const RESUME_QUERY = gql`
  query ResumePage {
    resume {
      cvPdf {
        url
        title
      }
    }
  }
`;

export async function getStaticProps() {
  const data = await request(RESUME_QUERY);

  return {
    props: { data },
  };
}

export default ResumePage;
