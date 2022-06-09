const mix = require('laravel-mix');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

if (mix.inProduction()) {
    mix.setPublicPath('public/production');
} else {
    mix.setPublicPath('public/local');
}

let config = {
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            '@': path.resolve() + '/resources/js',
            'Components': path.resolve(__dirname, 'resources/js/components/'),
            'Helpers': path.resolve(__dirname, 'resources/js/helpers/'),
            'Views': path.resolve(__dirname, 'resources/js/views/'),
            'Mixins': path.resolve(__dirname, 'resources/js/mixins/'),
        }
    },
    plugins: [new VuetifyLoaderPlugin()],
    output: {
        //chunkFilename: 'js/chunks/[name].js',// development
        //path: path.join(__dirname, 'public/'),
        publicPath: mix.inProduction() ? '/production/' : '/local/',
        chunkFilename: 'js/chunks/[id].' + (mix.inProduction() ? '[contenthash].' : '') + 'chunk.js'
    },
};
mix.webpackConfig(config);

mix.js('resources/js/app.js', 'js/')
    .sass('resources/sass/app.scss', 'css/').version();
