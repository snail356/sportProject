module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "import",
      {
        libraryName: "@arco-design/web-vue",
        libraryDirectory: "es",
        camel2DashComponentName: false,
      },
      "@arco-design/web-vue",
    ],
  ],
};
