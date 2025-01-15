import pugPlugin from "@11ty/eleventy-plugin-pug"

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default async function (eleventyConfig) {
  // Configure Eleventy
  eleventyConfig.addPlugin(pugPlugin)
  eleventyConfig.setInputDirectory("src/pages")
  eleventyConfig.setIncludesDirectory("../includes")
  eleventyConfig.setDataDirectory("../data")
  eleventyConfig.addPassthroughCopy({ "src/assets": "/" })
  eleventyConfig.setOutputDirectory("dist")
}