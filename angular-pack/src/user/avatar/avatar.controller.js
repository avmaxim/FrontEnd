'use strict';

export default class AvatarController {

    /*@ngInject*/
    constructor(UserService) {
        this.src = this.src || UserService.getCurrentUserAvatar();
    }

};