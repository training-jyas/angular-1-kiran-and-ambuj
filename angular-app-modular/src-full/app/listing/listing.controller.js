class ListingController {
    constructor(userService, helper) {
        this.userService = userService;
        this.helper = helper;
        this.users = [];
        this.message = '';
        this.numOfTimesUserIsClicked = 0;
    }

    $onInit() {
        if (this.userService.loggedInUser) {
            this.userService.getAllUsers()
                .then(response => {
                    if (!response.msg && response.data.data.length !== 0) {
                        this.users = response.data.data;
                    }
                })
                .catch(error => {

                });
        }else {
            this.message = 'Please login to continue';
        }
    }

    closeAlert() {
        this.message = '';
    }

    sort(order) {
        this.users = this.helper.sortArray(this.users, order);
    }
}

export default ListingController;