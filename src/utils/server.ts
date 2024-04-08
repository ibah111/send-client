import config from '../config/server.json';
export default function server(name?: string) {
  switch (name) {
    case 'bitrix':
    case 'oauth':
      return config[name];
    default:
      return process.env.NODE_ENV === 'prod'
        ? config.server
        : config.server_dev;
  }
}
