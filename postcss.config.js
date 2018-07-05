/* eslint-disable import/no-extraneous-dependencies */

const tailwindcss = require('tailwindcss');
const stylelint = require('stylelint');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const reporter = require('postcss-reporter');

module.exports = {
  plugins: [
    tailwindcss('./tailwind.js'),
    stylelint,
    autoprefixer,
    cssnano,
    reporter({ clearReportedMessages: true }),
  ],
};
