// src/amplifyconfiguration.ts
const amplifyconfig = {
  Auth: {
    Cognito: {
      userPoolId: import.meta.env.VITE_COGNITO_USER_POOL_ID,
      userPoolClientId: import.meta.env.VITE_COGNITO_CLIENT_ID,
      signUpVerificationMethod: 'code' as 'code', // Type assertion to fix the error
      loginWith: {
        email: true,
        username: false,
        phone: false
      }
    }
  }
};

export default amplifyconfig;
