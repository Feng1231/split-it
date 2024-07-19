export const emailValidator = (email: string) => {
    const re = /\S+@\S+\.\S+/;
  
    if (!email || email.length <= 0) return 'Email cannot be empty.';
    if (!re.test(email)) return 'Ooops! We need a valid email address.';
  
    return '';
};
  
export const passwordValidator = (password: string) => {
    if (!password || password.length <= 2) return 'Password cannot be empty.';

    return '';
};

export const nameValidator = (name: string) => {
    if (!name || name.length <= 0) return 'Name cannot be empty.';

    return '';
};

export const newPasswordValidator = (password: string, confirmPassword: string) => {
    if (password !== confirmPassword) return 'Passwords do not match.';
    return '';
}
  