import config from '../config/server.json';

//@ts-ignore
export const env: 'prod' | 'dev' = process.env.NODE_ENV;

export default function server(name?: string) {
  const server = env === 'prod' ? config.server : config.server_dev;
  switch (name) {
    case 'bitrix':
    case 'oauth':
      return config[name];
    default:
      return server;
  }
}
