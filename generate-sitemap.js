const fs = require("fs");
const path = require("path");
const { SitemapStream, streamToPromise } = require("sitemap");

const WEBSITE_URL = "https://yourwebsite.com"; // Replace with your website URL

const pages = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about", changefreq: "weekly", priority: 0.8 },
  { url: "/contact", changefreq: "monthly", priority: 0.7 },
];

const sitemap = new SitemapStream({ hostname: WEBSITE_URL });

pages.forEach((page) => {
  sitemap.write(page);
});

sitemap.end();

streamToPromise(sitemap).then((data) => {
  fs.writeFileSync(path.join(__dirname, "public", "sitemap.xml"), data);
  console.log("✅ Sitemap generated successfully!");
});
