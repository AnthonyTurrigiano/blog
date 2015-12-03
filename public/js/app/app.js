"use strict";

angular
    .module('BlogApp', [] )
    .controller( 'BlogCtrl', ['BlogService', function (BlogService){
        var vm = this;
            vm.posts = BlogService.posts;
    }])
    .service( 'BlogService', [function (){
        this.posts = [
                {
                    "name":"commandline",
                    "title":"linux command line",
                }
            ]
    }]);