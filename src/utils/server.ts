import config from '../config/server.json';

export default function server(name?: string) {
  const server = config.server;
  switch (name) {
    case 'bitrix':
    case 'oauth':
      return config[name];
    default:
      return server;
  }
}
