export const handleChange = (e) => {
    const { target: { name, value, type, checked } } = e;
    return { [name]: type === 'checkbox' ? checked : value };
};

export const submitHandler = (e, appStateHandler, user, path) => {
    //debugger;
    e.preventDefault();
    appStateHandler(user);
 };
