export const errorCallback = (success, fn) => {
  fn(!success);
};
