class UserService {
    constructor($http) {
        this.$http = $http;
        this.loggedInUser = null;
    }

    authenticate(user) {
        return this.$http({
            url: 'http://localhost:3001/user/authenticate',
            data: user,
            method: 'POST'
        });
    }

    add(user) {
        return this.$http({
            url: 'http://localhost:3001/user/add',
            data: user,
            method: 'POST'
        });
    }

    getAllUsers() {
        return this.$http({
            url: 'http://localhost:3001/user/all',
            method: 'GET'
        });
    }

    update(user) {
        return this.$http({
            url: 'http://localhost:3001/user/update/' + user._id,
            method: 'PUT',
            data: user
        });
    }

    delete(id) {
        return this.$http({
            url: 'http://localhost:3001/user/delete/' + id,
            method: 'DELETE'
        });
    }
}

export default UserService;