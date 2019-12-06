export default {
  MAX_ATTACHMENT_SIZE: 5000000,

  s3: {
    REGION: "ap-southeast-1",
    BUCKET: "notes-app.uploads"
  },
  apiGateway: {
    REGION: "ap-southeast-1",
    URL: "https://lrnwgakmo7.execute-api.ap-southeast-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "ap-southeast-1",
    USER_POOL_ID: "ap-southeast-1_IdCXJ3hAs",
    APP_CLIENT_ID: "3hstn669qb6ljcte5lkehch835",
    IDENTITY_POOL_ID: "ap-southeast-1:d72f7908-2ae0-4f1c-ad10-e5f1cdde8bb7"
  }
};
