export const validatePasswordStrength = (password: string): string => {
  if (!/[A-Z]/.test(password)) {
    return "Password must include at least one uppercase letter.";
  }
  if (!/[a-z]/.test(password)) {
    return "Password must include at least one lowercase letter.";
  }
  if (!/[0-9]/.test(password)) {
    return "Password must include at least one number.";
  }
  if (!/[\W_]/.test(password)) {
    return "Password must include at least one special character.";
  }
  if (password.length < 8) {
    return "Password must be at least 8 characters long.";
  }
  return "Password is strong.";
};
