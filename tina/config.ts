import { defineConfig } from "tinacms";
import { blog_templateFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "master";

export default defineConfig({
  branch,
  clientId: "2d3877a7-7730-44c3-8e8f-6f7a61d31c43", // Get this from tina.io
  token: "17cf9c56f2c0308fa26ef4dc0e64936e4f944e43", // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "./",
    },
  },
  schema: {
    collections: [
      {
        format: "toml",
        label: "Site Config",
        name: "site_config",
        path: "data/config",
        frontmatterFormat: "toml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "*",
        },
        fields: [
          {
            name: "defaultdescription",
            label: "Site Name",
            type: "string",
          },
          {
            name: "author",
            label: "Author",
            type: "string",
          },
          {
            name: "address1",
            label: "Address Line 1",
            type: "string",
          },
          {
            name: "address2",
            label: "Address Line 2",
            type: "string",
          },
          {
            name: "address3",
            label: "Address Line 3",
            type: "string",
          },
          {
            name: "address4",
            label: "Address Line 4",
            type: "string",
          },
          {
            name: "copyright",
            label: "Copyright",
            type: "string",
          },
          {
            name: "logo",
            label: "Path to logo",
            type: "string",
          },
          {
            name: "latitude",
            label: "Latitude",
            type: "string",
          },
          {
            name: "longitude",
            label: "Longitude",
            type: "string",
          },
          {
            name: "googlemapsapikey",
            label: "Google Maps API Key",
            type: "string",
          },
        ],
      },
      {
        format: "yaml",
        label: "Homepage Content",
        name: "homepage_content",
        path: "data",
        frontmatterFormat: "yaml",
        frontmatterDelimiters: "---",
        match: {
          include: "*",
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isBody: false,
          },
          {
            type: "rich-text",
            name: "text",
            label: "Text",
            isBody: false,
          },
          {
            type: "string",
            name: "image",
            label: "Image Path",
            isBody: false,
            required: false
          },
        ],
        ui: {
          allowedActions: {
            create: false,
          },
        },
      },
      {
        format: "yaml",
        label: "Fees",
        name: "fees",
        path: "data/fees",
        frontmatterFormat: "yaml",
        frontmatterDelimiters: "---",
        match: {
          include: "*",
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isBody: false,
          },
          {
            type: "rich-text",
            name: "text",
            label: "Text",
            isBody: false,
          },
          {
            type: "number",
            name: "term",
            label: "Cost per term",
            isBody: false,
          },
          {
            type: "number",
            name: "membership",
            label: "Membership Cost",
            isBody: false,
          },
          {
            type: "number",
            name: "working_bee",
            label: "Working Bee Levy",
            isBody: false,
          },
          {
            type: "string",
            name: "working_bee_policy",
            label: "Working Bee Policy",
            isBody: false,
          },
          {
            type: "number",
            name: "maintenance",
            label: "Maintenance Levy",
            isBody: false,
          },
          {
            type: "string",
            name: "maintenance_policy",
            label: "Maintenance Policy",
            isBody: false,
          },
          {
            type: "string",
            name: "button_text",
            label: "Button Text",
            isBody: false,
          },
        ],
        ui: {
          allowedActions: {
            create: false,
          },
        },
      },
      {
        format: "yaml",
        label: "Sponsors",
        name: "sponsors",
        path: "data/supporters/companies/",
        frontmatterFormat: "yaml",
        frontmatterDelimiters: "---",
        match: {
          include: "*",
        },
        fields: [
          {
            type: "string",
            name: "name",
            label: "Company Name",
            isBody: false,
          },
          {
            type: "string",
            name: "image",
            label: "Image Path",
            isBody: false,
          },
          {
            type: "string",
            name: "url",
            label: "Website Address",
            isBody: false,
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft",
            isBody: false,
          },
        ],
        ui: {
          allowedActions: {
            create: true,
          },
        },
      },
      {
        format: "md",
        label: "Additional Pages",
        name: "additional_pages",
        path: "content",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "+++",
        match: {
          include: "*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...blog_templateFields(),
        ],
      },
      {
        format: "md",
        label: "Blog",
        name: "blog",
        path: "content/blog",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "+++",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...blog_templateFields(),
        ],
      },
    ],
  },
});
