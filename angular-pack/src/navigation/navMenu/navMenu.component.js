'use strict';


let NavMenuComponent = {
    transclude: true,
    template: ` 
            <div class="nav-menu">
                <ul class="nav-menu-list" ng-transclude></ul>
            </div>
        `
};

export default NavMenuComponent;