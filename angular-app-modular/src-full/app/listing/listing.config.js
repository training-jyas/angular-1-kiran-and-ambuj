let listingConfig = ($stateProvider) => {
    $stateProvider
        .state({
            name: 'listing',
            url: '/listing/:message',
            template: '<listing-component></listing-component>',
            controller: ($stateParams) => {
                console.log('$stateParams', $stateParams)
            }
        });
}

export default listingConfig;