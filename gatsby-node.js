





exports.onCreateWebpackConfig = ({
    stage,
    rules,
    loaders,
    plugins,
    actions,
  }) => {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test:  /.node$/,
            use: 'node-loader',
          },
        ],
      },

      
      resolve: {
        extensions: ['.node'],
        fallback: {
          fs: false
          ,stream: false
          ,tty:false
          ,path: false
          ,vm:false
          ,http:false
          ,https:false
          ,zlib:false
          ,os:false
          ,crypto:false
          ,tls: false
          ,child_process:false
          ,perf_hooks:false
          ,util: false
          ,buffer: false
          ,url: false
          ,assert: false
        }
      }

    })
  }