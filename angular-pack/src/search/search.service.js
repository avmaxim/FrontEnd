'use strict';

export default class SearchService {

    constructor(){
        this.query = '';
        this.observers = [];
    }

    getQuery(){
        return this.query;
    }

    setQuery( query ){
        this.query = query;
        this.notifyObservers();
    }

    attachObserver( observer ){
        this.observers.push( observer );
    }

    notifyObservers(){
        angular.forEach(this.observers, ( observer ) => {
            observer.update();
        });
    }

}