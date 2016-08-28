'use strict';

/*
 *
 c|-->   ********************    -|
 l|      * Hoyee       user *     | }-> header
 i|      *------------------*    -|
 e|      *   [__________]   *     |
 n|      *                  *     |
 t|      *   [__________]   *     | }-> noOpacityAreaHeight
 |      *                  *     |
 H|      *   [__________]   *     |
 e|      * ---------------- *    -|
 i|      *   [__________]   *     |
 g|      *                  *     | }-> OPACITY_AREA_HEIGHT
 h|      *   [__________]   *     |
 t|-->   ********************    -|

 ************************************************************
 [__________] <==> components

 ************************************************************
 */

const OPACITY_AREA_HEIGHT = 420;
let componentsSelector = 'article-card';

class ScrollOpacity{

    constructor($window, $timeout){
        this.$window = $window;
        this.$timeout = $timeout;

        this.restrict = 'A';
    }

    link(scope, elem, attrs){
        this.scope = scope;
        this.elem = elem;
        this.attrs = attrs;

        componentsSelector = attrs.scrollOpacity || componentsSelector;
        
        angular.element(this.$window ).on('scroll', this.scroll.bind(this));
        angular.element(this.$window.document).ready( this.scroll.bind(this));

    }

    scroll(event) {
        let scrollEvent = () => {
            const viewportHeight = this.$window.innerHeight;
            const noOpacityAreaHeight = viewportHeight - OPACITY_AREA_HEIGHT;

            let components = this.elem[0].querySelectorAll(componentsSelector);
            if (!components) {
                return;
            }

            components
                .filter((component) => {
                    const componentOffset = component.getBoundingClientRect().top;
                    return componentOffset < noOpacityAreaHeight || componentOffset > viewportHeight;
                }).css('opacity', 1);

            let opacityAreaComponents = components.filter((component) => {
                const componentOffset = component.getBoundingClientRect().top;
                return componentOffset > noOpacityAreaHeight && componentOffset < viewportHeight;
            });

            const coefficientRate = 1 / (opacityAreaComponents.length + 1);      // do +1 for a better opacity effect.
            let previousElementOpacity = 1 - coefficientRate;

            opacityAreaComponents.forEach((component) => {
                angular.element(component).css('opacity', previousElementOpacity);
                previousElementOpacity -= coefficientRate;
            });
        };
        this.$timeout(scrollEvent.bind(this));
    }

    static entryPoint($window, $timeout){
        return new ScrollOpacity($window, $timeout);
    }
}

ScrollOpacity.entryPoint.$inject = ['$window', '$timeout'];

export default ScrollOpacity.entryPoint;