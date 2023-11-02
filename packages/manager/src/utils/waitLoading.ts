import loading from 'loading-cli';

export const waitLoading = async <T>(
  loadingText: string,
  cb: () => Promise<T>,
): Promise<T> => {
  const load = loading(loadingText).start();
  try {
    const result = await cb();
    load.succeed();
    return result;
  } catch (e) {
    load.fail();
    throw e;
  }
};
