export const GA_MEASUREMENT_ID = 'G-SPHXHGV8W7';

export const pageview = (url: string) => {
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};
