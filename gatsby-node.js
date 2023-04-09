
exports.onCreateWebpackConfig = ({
    stage,
    rules,
    loaders,
    plugins,
    actions,
  }) => {
    actions.setWebpackConfig({
    resolve:{
      fallback:{
        stream: require.resolve("stream-browserify")
      }
    },
    externals: {
      canvas: "commonjs canvas" // Important (2)
      }
    })
  }