let registrationConfig = ($stateProvider) => {
    $stateProvider
        .state({
            name: 'register',
            url: '/register',
            template: '<register></register>'
        });
}

export default registrationConfig;