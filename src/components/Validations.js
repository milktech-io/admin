export const validateName = (name) => {
  const re =/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g;
  return re.test(name);
};
export const validatePhone = (phone) => {
  const re = /^(\+\d{1,2}\s?)?1?-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  return re.test(phone);
};
export const validateEmail = (email) => {
  const re = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  return re.test(email);
};
export const validatePassword = (password) => {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*.])(?=.{8,})/;
  return re.test(password);
};

export const validatePasswordConfirm = (password, passwordConfirm) => {
  return password === passwordConfirm;
}

export const validateUser = (user) => {
  const re = /^[A-Za-z0-9\s]+$/;
  return re.test(user);
};