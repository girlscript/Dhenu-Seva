const validEmailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
const validNameRegex = RegExp(
  /^[a-zA-Z]+$/
);
const validPasswordRegex = RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
)

export const validateForm = (errors) => {
  let isValid = true;
  Object.values(errors).forEach((val) => {
    if (val.length > 0) {
      isValid = false;
    }
  });
  return isValid;
};

export const validateEmptyFields = (state, errors) => {
  Object.keys(errors).forEach((name) => {
    if (state[name].length <= 0) {
      errors[name] = `${
        name.charAt(0).toUpperCase() + name.slice(1)
      } cannot be empty`;
    }
  });
  return errors;
};

export const validateInput = (name, value, errors) => {
  switch (name) {
    case 'email':
      errors.email = validEmailRegex.test(value) ? '' : 'Email is not valid!';
      break;
    case 'password':
      errors.password =
        value.length < 8 ? 'Password must be at least 8 characters long!' : '';
      break;
      case 'first_name':
        errors.first_name = validNameRegex.test(value) ? '' : 'Name  is not valid!';
        break;
      case 'last_name':
        errors.last_name = validNameRegex.test(value) ? '' : 'Name  is not valid!';
        break;
      case 'password_repeat':
        errors.password_repeat = validPasswordRegex.test(value) ? '' : 'please enter a password containing minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character';
        break;
      case 'category':
        errors.category = value.length < 0 ? 'Enter Category' : '';
        break;
    default:
      break;
  }
  return errors;
};
