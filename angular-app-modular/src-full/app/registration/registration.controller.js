class RegistrationController {
    constructor($state, userService) {
        'ngInject';

        this.$state = $state;
        this.userService = userService;
        this.name = '';
        this.username = '';
        this.password = '';
        this.retypepassword = '';
        this.gender = '';
    }

    validate() {
        if (this.name !== '' && this.username !== '' && this.password !== '' && this.retypepassword !== '' && this.gender !== '') {
            if (this.password === this.retypepassword) {
                return true;
            }
            return false;
        }
        return false;
    }

    save() {
        let isValid = this.validate();
        if (isValid) {
            // call the service
            console.log('data ready to save', this);
            let user = {
                name: this.name,
                username: this.username,
                password: this.password,
                gender: this.gender
            };
            this.userService.add(user)
                .then(response => {
                    if (!response.err) {
                        console.log(response.data);
                    } else {
                        console.log(response.err);
                    }
                    this.$state.go("login");
                })
                .catch((error) => {
                    alert('server error', error);
                });
        } else {
            // show some message
            alert('please enter valid data');
        }
    }
}

export default RegistrationController;