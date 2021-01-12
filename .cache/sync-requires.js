const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/home/w0xter/Desktop/projects/website/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/w0xter/Desktop/projects/website/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/home/w0xter/Desktop/projects/website/src/pages/page-2.js"))),
  "component---src-pages-using-typescript-tsx": hot(preferDefault(require("/home/w0xter/Desktop/projects/website/src/pages/using-typescript.tsx")))
}

