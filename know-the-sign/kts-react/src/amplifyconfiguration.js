// Replace these with your real Amplify values after running `amplify init`
const awsConfig = {
  Auth: {
    Cognito: {
      userPoolId: 'YOUR_USER_POOL_ID',
      userPoolClientId: 'YOUR_USER_POOL_CLIENT_ID',
      region: 'us-east-1',
    }
  },
  API: {
    GraphQL: {
      endpoint: 'YOUR_APPSYNC_ENDPOINT',
      region: 'us-east-1',
      defaultAuthMode: 'userPool',
    }
  }
}

export default awsConfig
