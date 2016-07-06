'use strict';
/**
 * FooterController is used as controller of the footer view
 */
class FooterController {

    static $inject = ['$state'];

    constructor(private $state: ng.ui.IStateService) {
    }

    public getMention(): void {
        this.$state.go('condition');
    }
}

siteLBApp.controller('FooterController', FooterController);
