module.exports = ({ env }) =>
  {
    return {
      // enable a plugin that doesn't require any configuration
      i18n: true,
      'strapi-plugin-strapi-sso': {
        enabled: true,
        config: {
          GITHUB_OAUTH_CLIENT_ID: '1db69e2add46d5cf9ab8',
          GITHUB_OAUTH_CLIENT_SECRET: '3cf787b17014bba8fa8daf0dde467a8aea9c3dac',
          //GITHUB_OAUTH_REDIRECT_URI: 'http://localhost:1337/strapi-plugin-strapi-sso/github/callback',
          GITHUB_OAUTH_REDIRECT_URI: `http://${env('HOST', '0.0.0.0')}:${env.int('PORT', 1337)}/strapi-plugin-strapi-sso/github/callback`,
        }
      },
      'strapi-plugin-sso': {
        enabled: true,
        config: {
          // Google
          GOOGLE_OAUTH_CLIENT_ID: '[Client ID created in GCP]',
          GOOGLE_OAUTH_CLIENT_SECRET: '[Client Secret created in GCP]',
          GOOGLE_OAUTH_REDIRECT_URI: 'http://localhost:1337/strapi-plugin-sso/google/callback', // URI after successful login
          GOOGLE_ALIAS: '', // Gmail Aliases
          GOOGLE_GSUITE_HD: '', // G Suite Primary Domain

          // Cognito
          COGNITO_OAUTH_CLIENT_ID: '[Client ID created in AWS Cognito]',
          COGNITO_OAUTH_CLIENT_SECRET: '[Client Secret created in AWS Cognito]',
          COGNITO_OAUTH_DOMAIN: '[OAuth Domain created in AWS Cognito]',
          COGNITO_OAUTH_REDIRECT_URI: 'http://localhost:1337/strapi-plugin-sso/cognito/callback', //  // URI after successful login
          COGNITO_OAUTH_REGION: 'ap-northeast-1', // AWS Cognito Region

          // AzureAD
          AZUREAD_OAUTH_REDIRECT_URI: 'http://localhost:1337/strapi-plugin-sso/azuread/callback',
          AZUREAD_TENANT_ID: '[Tenant ID created in AzureAD]',
          AZUREAD_OAUTH_CLIENT_ID: '[Client ID created in AzureAD]', // [Application (client) ID]
          AZUREAD_OAUTH_CLIENT_SECRET: '[Client Secret created in AzureAD]',
          AZUREAD_SCOPE: 'user.read', // https://learn.microsoft.com/en-us/graph/permissions-reference
        }
      }
    }
  }
;
