
'use strict';


let NavItemComponent = {
    transclude: true,
    bindings: {
        link: '@'
    },
    template: `
        <li class="nav-item">
            <a ui-sref="{{ ::$ctrl.link }}" ng-transclude></a>
        </li>
    `
};

export default NavItemComponent;