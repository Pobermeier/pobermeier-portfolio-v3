// Utility-function that pushes a pageview event to the GTM-datalayer object when called with a page URI
export const pushGtmPageViewToDataLayer = (url: string): PageEventProps => {
  const pageEvent: PageEventProps = {
    event: "pageview",
    page: url,
  };

  window?.dataLayer?.push(pageEvent);

  return pageEvent;
};
