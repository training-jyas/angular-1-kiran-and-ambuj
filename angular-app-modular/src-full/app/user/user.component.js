import UserController from './user.controller';

let userComponent = {
    controller: UserController,
    templateUrl: './template/app/user/user.tpl.html',
    bindings: {
        count: "=",
        user: "<",
        index: "@"
    },
    require: {
        listingCtrl: '^listingComponent'
    }
}

export default userComponent;