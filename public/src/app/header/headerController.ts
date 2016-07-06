'use strict';
/**
 * HeaderController is used as controller of the header view
 */
class HeaderController {

    static $inject = ['$state'];

    constructor(private $state: ng.ui.IStateService) {
        this.$state.go('root.home');
    }
}

siteLBApp.controller('HeaderController', HeaderController);
