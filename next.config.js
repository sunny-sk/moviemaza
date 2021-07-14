const path = require('path');
module.exports = {
  env: {
    key: 'AIzaSyBIDUsAnOkKxGKEVuX5TTKf4uX3YH4x1S0',
    themoviedbApiKey: 'a75243e56e6a747c6679b3f6888954cd',
    omdbApiKey: '55be7eba',
  },
  reactStrictMode: true,
  pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
  sassOptions: {
    includePaths: [path.join(__dirname, 'src')],
  },
  images: {
    domains: ['image.tmdb.org'],
  },
};
