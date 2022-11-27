import { EnvVars } from './types';

export default (): EnvVars => ({
  main: {
    port: parseInt(process.env.MAIN_PORT) || 3000,
    redisKeyExpirationSeconds: parseInt(process.env.MAIN_REDIS_KEY_EXPIRATION_SECONDS) || 5000
  },
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT) || 6379,
    password: process.env.REDIS_PASS
  }
});
