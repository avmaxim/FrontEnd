/**
 * Created by andrei on 8/19/2016.
 */


export default function ArticleOptionsDirective(){
    return {
        restrict: 'E',
        templateUrl: '/article/articleOptions/article-options.html',
        controller: 'articleOptionsController',
        controllerAs: 'ctrl',
        scope: true,
        bindToController: {
            article: '=forArticle'
        },
        link: function (scope, elem, attrs) {
            elem.parent().css('position', 'relative');
        }
    };
}
