// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var ManifestoEntry = defineDocumentType(() => ({
  name: "ManifestoEntry",
  filePathPattern: `manifesto/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string"
    },
    slug: {
      type: "string"
    },
    author: {
      type: "string"
    },
    date: {
      type: "string"
    },
    words: {
      type: "number"
    },
    index: {
      type: "number"
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "data",
  documentTypes: [ManifestoEntry]
});
export {
  ManifestoEntry,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-SEO6GFZG.mjs.map
