module.exports = ({ env }) => ({
  // enable a plugin that doesn't require any configuration
  i18n: true,
  'decathlon-fedid': {
    enabled: true,
    resolve: './src/plugins/decathlon-fedid'
  }
});
