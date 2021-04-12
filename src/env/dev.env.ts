  class AppConfig{
NODE_ENV="DEV";
MONGO_DB_CONN_STR="mongodb://localhost:27017/test";
API_PORT=3000
jwtSecret= 'my-api-secret'
  jwtDuration= '2 hours'
}

export const config=new AppConfig();

