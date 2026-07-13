// Central SEO / site configuration.
// Update SITE_URL if the production domain changes.
export const SITE_URL = "https://urgentdentalcare.co.uk";
export const SITE_NAME = "Emergency Dentistry Manchester & Bolton";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/image41.jpg`;
export const TWITTER_HANDLE = "";

export const BUSINESS = {
  name: SITE_NAME,
  legalName: "Bolton Road Dental Practice",
  telephone: "+447375064619",
  officePhone: "+441617247344",
  email: "emergency@dental.manchesterbolton.co.uk",
  priceRange: "££",
  address: {
    streetAddress: "265 Bolton Road Dental Practice",
    addressLocality: "Radcliffe",
    addressRegion: "Manchester",
    postalCode: "M26 3QP",
    addressCountry: "GB",
  },
  areaServed: ["Manchester", "Bolton", "Bury", "Radcliffe"],
  openingHours: "Mo-Sa 08:00-17:00",
  geo: { latitude: 53.5619, longitude: -2.3269 },
};

// Absolute URL helper — turns a path or relative image ref into a full URL.
export const absUrl = (pathOrUrl) => {
  if (!pathOrUrl) return SITE_URL;
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  const clean = pathOrUrl.replace(/^\.?\//, "");
  return `${SITE_URL}/${clean}`;
};

// Organization / LocalBusiness schema reused across pages.
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": `${SITE_URL}/#organization`,
  name: BUSINESS.name,
  legalName: BUSINESS.legalName,
  url: SITE_URL,
  image: DEFAULT_OG_IMAGE,
  logo: DEFAULT_OG_IMAGE,
  telephone: BUSINESS.telephone,
  email: BUSINESS.email,
  priceRange: BUSINESS.priceRange,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.address.streetAddress,
    addressLocality: BUSINESS.address.addressLocality,
    addressRegion: BUSINESS.address.addressRegion,
    postalCode: BUSINESS.address.postalCode,
    addressCountry: BUSINESS.address.addressCountry,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: BUSINESS.geo.latitude,
    longitude: BUSINESS.geo.longitude,
  },
  areaServed: BUSINESS.areaServed.map((name) => ({ "@type": "City", name })),
  openingHours: BUSINESS.openingHours,
  availableService: {
    "@type": "MedicalProcedure",
    name: "Emergency Dental Treatment",
  },
};
