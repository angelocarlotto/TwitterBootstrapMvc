requirejs.config({
    baseUrl: '/',
    shim: {
        "jquery": { "deps": ['r', 'modernizr'] },
        "bootstrap": { "deps": ['jquery'] },
        "pnotify": { "deps": ['bootstrap'] },
        "pnotify2": { "deps": ['bootstrap'] },
        "select2": { "deps": ['jquery', 'bootstrap'] },
        "editable": { "deps": ['jquery', 'bootstrap'] },
        "validate_unobtrusive": { "deps": ['validate'] },
        "unobtrusive_ajax": { "deps": ['validate_unobtrusive'] },
        "Index": { "deps": ['bootstrap','unobtrusive_ajax', 'select2', 'editable'] },
    },
    paths: {

        modernizr: 'Scripts/modernizr-2.8.3',
        jquery: 'Scripts/jquery-2.1.1',
        bootstrap: 'Scripts/bootstrap',
        r: 'Scripts/r',
        select2: 'Scripts/select2',
        pnotify: 'Scripts/pnotify.custom',
        pnotify2: 'Scripts/jquery.pnotify',
        editable: 'Scripts/bootstrap-editable',
        validate: 'Scripts/jquery.validate',
        validate_unobtrusive: 'Scripts/jquery.validate.unobtrusive',
        unobtrusive_ajax: 'Scripts/jquery.unobtrusive-ajax',
        Index: 'TypeScript/Home/Index'
    }
});

define(["jquery", "select2", "unobtrusive_ajax", "editable",'Index'], function ($) {
    $(function () {


    });
});