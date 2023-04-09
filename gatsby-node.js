


const util = require('util')
const TextEncodingPolyfill = require('text-encoding');
Object.assign(util, {
  TextEncoder: TextEncodingPolyfill.TextEncoder,
  TextDecoder: TextEncodingPolyfill.TextDecoder,
});





exports.onCreateWebpackConfig = ({
    stage,
    rules,
    loaders,
    plugins,
    actions,
  }) => {
    actions.setWebpackConfig({
      resolve: {
        
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
          ,util: util
        }
      }
      ,
    externals: {
      canvas: "commonjs canvas" // Important (2)
      }
    })
  }