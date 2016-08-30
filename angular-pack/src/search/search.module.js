/**
 * Created by andrei.maksimchanka on 8/12/2016.
 */

'use strict';

import './search.less';
import SearchController from './search.controller';
import SearchComponent from './search.component';
import SearchService from './search.service';

let search = 'hoyeeApp.search';

angular.module( search, [])
    .controller('searchController', SearchController)
    .component('search', SearchComponent)
    .service('SearchService', SearchService);

export default search;