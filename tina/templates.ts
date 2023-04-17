import type { TinaField } from "tinacms";
export function blog_templateFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title for your blog post",
      required: true,
    },
    {
      type: "image",
      name: "banner",
      label: "Banner Image",
    },
    {
      type: "string",
      name: "tags",
      label: "Tags",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "string",
      name: "categories",
      label: "Categories",
      list: true,
      ui: {
        component: "tags",
      },
    },
  ] as TinaField[];
}
