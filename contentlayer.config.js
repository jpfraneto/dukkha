import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const ManifestoEntry = defineDocumentType(() => ({
  name: 'ManifestoEntry',
  filePathPattern: `manifesto/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
    },
    slug: {
      type: 'string',
    },
    author: {
      type: 'string',
    },
    date: {
      type: 'string',
    },
    words: {
      type: 'number',
    },
    index: {
      type: 'number',
    },
  },
}));

export default makeSource({
  contentDirPath: 'data',
  documentTypes: [ManifestoEntry],
});
