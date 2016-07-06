'use strict';
/**
 * HomeController is used as controller of the homeView
 */
class HomeController {

    public video = "https://vimeo.com/channels/staffpicks/172273624";
    
    static $inject = ['$state'];

    constructor(private $state: ng.ui.IStateService) {
    }

    public addToBasket(): void {
        this.$state.go('root.product');
    }
   
}

siteLBApp.controller('HomeController', HomeController);
