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
 i|      *   [__________]   *     |                            opacity is 0.(6)
 g|      *                  *     | }-> opacityAreaHeight
 h|      *   [__________]   *     |                            opacity is 0.(3)
 t|-->   ********************    -|

 ************************************************************
 [__________] <==> components

 ************************************************************
 */


export default function ScrollOpacity($document, $timeout) {

    let opacityAreaHeight = 420;
    let componentsSelector = 'article-card';
    let directiveElement = null;

    return {
        restrict: 'A',
        link: link
    };

    function link(scope, elem, attrs){
        directiveElement = elem;
        componentsSelector = attrs.scrollOpacity || componentsSelector;
        opacityAreaHeight = attrs.opacityAreaHeight || opacityAreaHeight;

        angular.element( $document ).on('scroll', scroll ).ready( scroll );
    }

    function scroll() {
        $timeout( () => {

            const viewportHeight = $document[0].documentElement.clientHeight;
            const noOpacityAreaHeight = viewportHeight - opacityAreaHeight;
            let components = [].slice.call( directiveElement[0].querySelectorAll( componentsSelector ) );

            if (!components)  return;

            components.forEach( (component) => angular.element(component).css('opacity', 1 ) );

            if ((viewportHeight + $document[0].body.scrollTop) >= $document[0].body.scrollHeight) {
                return;
            }

            let opacityComponents = components.filter((component) => {
                const componentOffset = component.getBoundingClientRect().top;
                return componentOffset > noOpacityAreaHeight && componentOffset < viewportHeight;
            });

            const coefficientRate = 1 / (opacityComponents.length + 1);                                                 // do +1 for a better opacity effect.

            opacityComponents.reduce( (prevOpacity, component) => {
                angular.element( component ).css('opacity', prevOpacity);
                return prevOpacity - coefficientRate;
            }, 1 - coefficientRate);

        });
    }
}

ScrollOpacity.$inject = ['$document', '$timeout'];