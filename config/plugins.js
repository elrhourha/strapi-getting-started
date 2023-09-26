module.exports = ({ env }) => ({
  // enable a plugin that doesn't require any configuration
  i18n: true,
  'strapi-sso': {
    enabled: true,
    resolve: './src/plugins/strapi-sso'
  }
});
