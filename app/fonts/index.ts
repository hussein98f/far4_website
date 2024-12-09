import localFont from "next/font/local";

// إضافة خط Dubai مع السماكات المختلفة
const dubaiFont = localFont({
  src: [
    { path: "./Dubai/Dubai-Light.woff2", weight: "300", style: "normal" },
    { path: "./Dubai/Dubai-Regular.woff2", weight: "400", style: "normal" },
    { path: "./Dubai/Dubai-Medium.woff2", weight: "500", style: "normal" },
    { path: "./Dubai/Dubai-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-dubai",
  fallback: ["sans-serif", "Arial"],
});

// إضافة خط Readex Pro مع السماكات المختلفة
const readexProFont = localFont({
  src: [
    {
      path: "./Readex_Pro/ReadexPro-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./Readex_Pro/ReadexPro-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Readex_Pro/ReadexPro-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Readex_Pro/ReadexPro-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Readex_Pro/ReadexPro-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    { path: "./Readex_Pro/ReadexPro-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-readex-pro",
  fallback: ["sans-serif", "Arial"],
});

export { dubaiFont, readexProFont };
