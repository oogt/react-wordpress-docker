export const withMinDuration = (promise, callback) => {
  const minPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 500);
  });

  return Promise.all([minPromise, promise]).then(callback);
};
