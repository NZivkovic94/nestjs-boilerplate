import { EnvironmentVariables } from './env-vars';

export default (): EnvironmentVariables => ({
  main: {
    port: parseInt(process.env.HOST_PORT) || 3000
  }
});
