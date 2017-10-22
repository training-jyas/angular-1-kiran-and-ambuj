class UserController {
    constructor($state, userService) {
        this.$state = $state;
        this.userService = userService;
        this.user = {};
        this.genderClass = '';
        this.isEditable = false;
        this.editname = '';
        this.editusername = '';
    }

    $onInit() {
        if (this.user.gender == 'male') {
            this.genderClass = 'male';
        } else {
            this.genderClass = 'female';
        }
    }

    $postLink() {
        console.log('linking is done');
    }

    $onDestroy() {
        console.log('component is destroyed');
    }

    edit(user) {
        this.editname = user.name;
        this.editusername = user.username;
        this.isEditable = true;
    }

    cancel() {
        this.isEditable = false;
    }

    update(user) {
        user.name = this.editname;
        user.username = this.editusername;
        this.userService.update(user)
            .then(response => {
                if (!response.data.msg) {
                    this.isEditable = false;
                    this.listingCtrl.message = user.username + ' is updated';
                }
            })
            .catch(error => {

            });
    }

    delete(user) {
        this.userService.delete(user._id)
            .then(response => {
                if (!response.data.msg) {
                    this.$state.go('listing', {
                        message: user.username + ' is deleted'
                    }, {
                        reload: true
                    });
                    // this.listingCtrl.message = user.username + ' is deleted';
                }
            })
            .catch(error => {

            });
    }
}

export default UserController;