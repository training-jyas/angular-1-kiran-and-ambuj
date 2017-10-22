let userNameFilter = () => {
    return (input, uppercase) => {
        input = input || '';
        let out = '';
        // for (let i = 0; i < input.length; i++) {
        //     out = input.charAt(i) + out;
        // }
        // conditional based on optional argument
        if (uppercase) {
            out = input.toUpperCase();
        }
        return out;
    };
};

export default userNameFilter;