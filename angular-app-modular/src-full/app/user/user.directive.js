let userDirective = () => {
    return {
        restrict: 'A',
        link: (scope, element, attrs) => {
            console.log('scope in directive', scope);
            let $ele = angular.element(element[0]);
            $ele.on('hover', (event) => {
                $ele.css({
                    border: '2px solid gray'
                });
            });
            $ele.on('click', (event) => {
                scope.$ctrl.count++;
                console.log('click count', scope.$ctrl.count);
            });
        }
    };
};

export default userDirective;