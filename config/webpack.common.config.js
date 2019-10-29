const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const fs = require('fs')

const pug = {
   test: /\.pug$/,
   use: ['html-loader?attrs=false', 'pug-html-loader']
}

const scss = {
   test: [/.css$|.scss$/],
   use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
}

filenames = fs.readdirSync('src/posts/').filter(f => f != '.DS_Store')

const htmlPluginPages = filenames.map(file => {
   if (!file.endsWith('.pug')) {
      throw new Error('posts folder only allows .pug files')
   }

   return new HtmlWebpackPlugin({
      filename: file.replace('.pug', '.html'),
      template: 'src/posts/' + file,
      inject: true,
      minify: {
         removeComments: true,
         collapseWhitespace: false
      }
   })
})

// const assets = {
//    test: /\.(png | jpg | gif | svg)$ /,
//    use: [
//       {
//          loader: 'file-loader',
//          options: {
//             name: '[name].[ext]',
//             outputPath: 'public/assets'
//          }
//       }
//    ]
// }

// the webpack config
const config = {
   entry: './src/index.js',
   output: {
      path: path.resolve(__dirname, '../public'),
      filename: 'main.js'
   },
   //    resolve: {
   //       extensions: ['.js', '.ts']
   //    }
   // }
   module: {
      rules: [pug, scss]
   },
   plugins: [
      ...htmlPluginPages,
      new MiniCssExtractPlugin({
         filename: 'style.css'
      }),
      new CopyWebpackPlugin([
         {
            from: './src/assets',
            to: './assets'
         }
      ])
   ]
}

module.exports = config
