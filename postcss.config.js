/* eslint-disable import/no-extraneous-dependencies */

const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const reporter = require('postcss-reporter');
const comments = require('postcss-discard-comments');

module.exports = {
  plugins: [
    tailwindcss('./tailwind.js'),
    autoprefixer,
    comments({ removeAll: true }),
    cssnano,
    reporter({ clearReportedMessages: true }),
  ],
};
