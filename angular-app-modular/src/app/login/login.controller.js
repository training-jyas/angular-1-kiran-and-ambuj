class LoginController {
    constructor($state) {
        this.$state = $state;
        this.username = '';
        this.password = '';
    }

    submit() {
        let user = {
            username: this.username,
            password: this.password
        };
    }
}

export default LoginController;