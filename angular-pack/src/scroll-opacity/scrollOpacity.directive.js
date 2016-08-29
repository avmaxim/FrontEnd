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

let opacityAreaHeight = 420;
let componentsSelector = 'article-card';

export default class ScrollOpacity{

    constructor($document, $timeout){
        this.$document = $document;
        this.$timeout = $timeout;

        this.restrict = 'A';
    }

    link(scope, elem, attrs){
        this.scope = scope;
        this.elem = elem;
        this.attrs = attrs;

        componentsSelector = attrs.scrollOpacity || componentsSelector;
        opacityAreaHeight = attrs.opacityAreaHeight || opacityAreaHeight;

        angular
            .element(  this.$document )
            .on('scroll', this.scroll.bind(this) )
            .ready( this.scroll.bind(this) );
    }

    scroll(event) {
        const self = this;
        this.$timeout( () => {

            const viewportHeight = self.$document[0].documentElement.clientHeight;
            const noOpacityAreaHeight = viewportHeight - opacityAreaHeight;
            let components = [].slice.call( self.elem[0].querySelectorAll( componentsSelector ) );

            if (!components)  return;

            components.forEach( (component) => angular.element(component).css('opacity', 1 ) );

            if ((viewportHeight + self.$document[0].body.scrollTop) >= self.$document[0].body.scrollHeight) {
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