// Util-function to generate a Unique ID
export const generateUUID = (): string =>
  Date.now().toString(36) + Math.random().toString(36).substring(2);
