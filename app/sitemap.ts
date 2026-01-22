export default function sitemap() {
  const baseUrl = "https://quickcalx.com";

  const routes = [
    "",
    "/converters",
    "/about",
    "/contact",
    "/privacy-policy",

    "/converters/age-calculator",
    "/converters/bmi-calculator",
    "/converters/length-converter",
    "/converters/weight-converter",
    "/converters/speed-converter",
    "/converters/temperature-converter",
    "/converters/percentage-calculator",

    "/converters/area-converter",
    "/converters/time-converter",
    "/converters/volume-converter",
  ];

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));
}
