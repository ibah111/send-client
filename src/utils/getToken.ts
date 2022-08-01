export const getToken = () => {
  const result = {
    token: (document?.querySelector('meta[name="token"]') as HTMLMetaElement)
      .content,
  };
  return result;
};
