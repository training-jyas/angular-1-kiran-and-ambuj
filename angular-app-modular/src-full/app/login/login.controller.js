class LoginController {
    constructor($state, userService, constants) {
        this.$state = $state;
        this.userService = userService;
        this.constants = constants;
        this.username = '';
        this.password = '';
    }

    submit() {
        let user = {
            username: this.username,
            password: this.password
        };
        this.userService.authenticate(user)
            .then(response => {
                if (!response.msg && response.data.data.length !== 0) {
                    this.userService.loggedInUser = response.data.data[0];
                    this.$state.go("listing", {message: ''});
                } else {
                    alert('please enter the valid credentials');
                }
            })
            .catch(error => {
                alert('server error');
            });
    }
}

export default LoginController;