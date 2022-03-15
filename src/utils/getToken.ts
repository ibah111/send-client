export const getToken = () => {
  const result = {
    //@ts-ignore
    token: document?.querySelector('meta[name="token"]')?.content,
  };
  return result;
};
