const path = require( "path" );
const HTMLWebpackPlugin = require( "html-webpack-plugin" );
const { CleanWebpackPlugin } = require( "clean-webpack-plugin" );
const MinicssExtractPlugin = require( "mini-css-extract-plugin" );
const VueLoaderPlugin = require( "vue-loader/lib/plugin" );
const CopyWebpackPlugin = require( "copy-webpack-plugin" );

module.exports = ( env, args ) => {
  return {
    entry: {
      // index: "./src/vue/index.js",
      index: "./src/react/index.js",
    },
    output: {
      path: path.join( __dirname, "/dest" ),
      filename: "js/[name].bundle.js",
    },
    devServer:  {
      inline: true,
      port: 8001,
  
      /* React history config */
      historyApiFallback: true,
      // historyApiFallback: false,
  
      /* Reload as the HTML file is changed */
      contentBase: [path.resolve( __dirname, "src/index.html" )],
      watchContentBase: true,
    },
    resolve: {
      alias: {
        "@assets": path.resolve( __dirname, "src/assets" ),
        "@react": path.resolve( __dirname, "src/react" ),
        "@vue": path.resolve( __dirname, "src/vue" ),
        "vue": 'vue/dist/vue.esm.js',
      },
      extensions: [
        ".js",
        ".jsx",
        ".ts",
        ".tsx",
        ".vue",
        ".json",
        ".mjs",
        ".wasm",
      ],
      modules: ["node_modules"],
    },
    module: {
      rules: [
        { // Vue
          test: /\.vue$/,
          exclude: /(node_modules|bower_component)/,
          loader: "vue-loader",
          options: {
            hotReload: true,
          },
        },
        { // React
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_component)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
              plugins: [
                "@babel/plugin-proposal-class-properties",
              ],
            },
          },
        },
        { // CSS - SCSS - SASS
          test: /\.s?(c|a)ss$/,
          use: [
            // { // Not separating into a single CSS file
            //   loader: "style-loader",
            // },
            { // To separate into a single CSS file
              loader: MinicssExtractPlugin.loader,
              options: {
                // hmr: process.env.NODE_ENV === "development",
                hmr: true,
                reloadAll: true,
                publicPath: "../",
              },
            },
            {
              loader: "css-loader",
              options: {
                modules: true ? {
                  mode: "global",
                  // exportGlobals: true,
                  localIdentName: args.mode === "development" 
                    ? "[local]": "[sha1:hash:base64:3]",
                }: false,
              },
            },
            { // Combine media queries
              loader: "group-css-media-queries-loader",
            },
            {
              loader: "sass-loader",
            }
          ],
        },
        {
          test: /\.(svg)$/,
          use: [
            {
              loader: "@svgr/webpack",
            },
          ],
        },
        { // PNG - JPG - JPEG - GIF
          test: /\.(png|jpe?g|gif)$/,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 10000,

                /* [Important] Allow VueJS, ReactJS to import an image using ALIASES */
                // esModule: false,
                
                // Autouse file-loader whenever an image overcomes limited size
                name: "img/[name].[ext]",
              },
            },
          ],
        },
        { // TTF - OTF - EOT - SVG - WOFF - WOFF2
          test: /\.(ttf|otf|eot|woff2?)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "font/[name].[ext]",
              },
            },
          ],
        },
        { // CSV - TSV - JSON
          test: /\.(csv|tsv)$/,
          use: [
            {
              loader: "csv-loader",
            },
          ],
        },
        { // XML
          test: /\.xml$/,
          use: [
            {
              loader: "xml-loader",
            },
          ],
        },
        { // TXT
          test: /\.txt$/,
          use: [
            {
              loader: "raw-loader",
              options: {
                esModule: false,
              },
            },
          ],
        },
        { // MP4 - FLV - AVI - 3GPP - MOV - WMV
          test: /\.(mp4|flv|avi|wmv|3gp|mov|wmv)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "video/[name].[ext]",
              },
            },
          ],
        },
        { // MP3 - WAV - OGG
          test: /\.(mp3|wav|ogg)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "audio/[name].[ext]",
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new MinicssExtractPlugin( {
        filename: "css/[name].min.css",
      } ),
      new CleanWebpackPlugin(),
      new HTMLWebpackPlugin( {
        template: "./src/index.html",
      } ),
      new VueLoaderPlugin(),
      new CopyWebpackPlugin( {
        patterns: [
          { from: path.resolve( __dirname, "src/favicon.ico" ), to: path.resolve( __dirname, "dest/favicon.ico" ) },
        ],
      } ),
    ],
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
  };
};