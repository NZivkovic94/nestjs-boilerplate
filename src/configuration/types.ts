export type EnvVars = {
  main: MainVars;
  redis: RedisVars;
};

export type MainVars = {
  port: number;
  redisKeyExpirationSeconds: number;
};

export type RedisVars = {
  host: string;
  port: number;
  password: string;
};
