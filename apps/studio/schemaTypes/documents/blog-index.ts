import { defineField, defineType } from "sanity";

import { pageBuilderField } from "@studio/schemaTypes/common";
import { GROUP, GROUPS } from "@studio/utils/constants";
import { ogFields } from "@studio/utils/og-fields";
import { seoFields } from "@studio/utils/seo-fields";
import { createSlug, isUnique } from "@studio/utils/slug";

export const blogIndex = defineType({
  name: "blogIndex",
  type: "document",
  title: "Blog Listing Page",
  description:
    "This is the main page that shows all your blog posts. You can customize how your blog listing page looks, what title it has, and which blog post you want to highlight at the top.",
  groups: GROUPS,
  fields: [
    defineField({
      name: "title",
      type: "string",
      description:
        "The main heading that will appear at the top of your blog listing page",
      group: GROUP.MAIN_CONTENT,
    }),
    defineField({
      name: "description",
      type: "text",
      description:
        "A short summary of what visitors can find on your blog. This helps people understand what your blog is about.",
      group: GROUP.MAIN_CONTENT,
    }),
    defineField({
      name: "slug",
      type: "slug",
      description:
        "The web address for your blog page (for example, '/blog' would create a page at yourdomain.com/blog)",
      group: GROUP.MAIN_CONTENT,
      options: {
        source: "title",
        slugify: createSlug,
        isUnique: isUnique,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "displayFeaturedBlogs",
      title: "Display Featured Blogs",
      description:
        "When enabled, this will take the top blogs from the ordered blog list and display them as featured at the top of the page",
      type: "string",
      options: {
        list: [
          { title: "Yes", value: "yes" },
          { title: "No", value: "no" },
        ],
        layout: "radio",
      },
      initialValue: "yes",
      group: GROUP.MAIN_CONTENT,
    }),
    defineField({
      name: "featuredBlogsCount",
      title: "Number of Featured Blogs",
      description: "Select the number of blogs to display as featured.",
      type: "string",
      options: {
        list: [
          { title: "1", value: "1" },
          { title: "2", value: "2" },
          { title: "3", value: "3" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
      initialValue: "1",
      hidden: ({ parent }) => parent?.displayFeaturedBlogs !== "yes",
      group: GROUP.MAIN_CONTENT,
    }),
    pageBuilderField,
    ...seoFields.filter(
      (field) => !["seoNoIndex", "seoHideFromLists"].includes(field.name)
    ),
    ...ogFields,
  ],
  preview: {
    select: {
      title: "title",
      description: "description",
      slug: "slug.current",
    },
    prepare: ({ title, description, slug }) => ({
      title: title || "Untitled Blog Index",
      subtitle: description || slug || "Blog Index",
    }),
  },
});
