export const REGISTER = "register";
export const REGISTER_CLEANUP = "register_cleanup";

export const register = (payload) => ({
  type: REGISTER,
  payload,
});

export const registerCleanup = () => ({
  type: REGISTER_CLEANUP,
});
