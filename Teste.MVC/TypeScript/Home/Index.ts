/// <reference path="../../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../../scripts/typings/bootstrap/bootstrap.d.ts" />
/// <reference path="../../scripts/typings/jquery.pnotify/jquery.pnotify.d.ts" />
/// <reference path="../../scripts/typings/jquery.datatables/jquery.datatables.d.ts" />
/// <reference path="../../scripts/typings/select2/select2.d.ts" />

interface JQuery {

    editable(params: optionsEditable): JQuery;
}
interface optionsEditable {
    title?: any;
    text?: any;
    icon?: any;
    type?: any;
    success?: any;
    error?: any;
    ajaxOptions?: any;
    mode: any;
    send?: any;
    pk?: any;
    url?: any;

}
class PNotify {
    constructor(params: optionsPNotify) { }
}

interface optionsPNotify {

    title?: any;
    // Whether to escape the content of the title. (Not allow HTML.)
    title_escape?: any;
    // The notice's text.
    text?: any;
    // Whether to escape the content of the text. (Not allow HTML.)
    text_escape?: any;
    // What styling classes to use. (Can be either jqueryui or bootstrap.)
    styling?: any;// "bootstrap3",
    // Additional classes to be added to the notice. (For custom styling.)
    addclass?: any;// "",
    // Class to be added to the notice for corner styling.
    cornerclass?: any;// "",
    // Display the notice when it is created.
    auto_display?: any;// true,
    // Width of the notice.
    width?: any;//"300px",
    // Minimum height of the notice. It will expand to fit content.
    min_height?: any;// "16px",
    // Type of the notice. "notice", "info", "success", or "error".
    type?: any;// "notice",
    // Set icon to true to use the default icon for the selected
    // style/type, false for no icon, or a string for your own icon class.
    icon?: any;// true,
    // Opacity of the notice.
    opacity?: any;// 1,
    // The animation to use when displaying and hiding the notice. "none",
    // "show", "fade", and "slide" are built in to jQuery. Others require jQuery
    // UI. Use an object with effect_in and effect_out to use different effects.
    animation?: any;//"fade",
    // Speed at which the notice animates in and out. "slow", "def" or "normal",
    // "fast" or number of milliseconds.
    animate_speed?: any;//"slow",
    // Specify a specific duration of position animation
    position_animate_speed?: any;// 500,
    // Display a drop shadow.
    shadow?: any;//true,
    // After a delay, remove the notice.
    hide?: any;// true,
    // Delay in milliseconds before the notice is removed.
    delay?: any;// 8000,
    // Reset the hide timer if the mouse moves over the notice.
    mouse_reset?: any;//true,
    // Remove the notice's elements from the DOM after it is removed.
    remove?: any;//true,
    // Change new lines to br tags.
    insert_brs?: any;//true,
    // Whether to remove notices from the global array.
    destroy?: any;//true,
    // The stack on which the notices will be placed. Also controls the
    // direction the notices stack.
    stack?: any;// default_stack
}
class Index {
    public divTeste1: JQuery = $("#divTeste1");
    public divTeste2: JQuery = $("#divTeste2");
    public divTeste3: JQuery = $("#divTeste3");
    public divTeste4: JQuery = $("#divTeste4");
    public lnkTeste1: JQuery = $("#lnkTeste1");
    public lnkTeste2: JQuery = $("#lnkTeste2");
    public lnkTeste3: JQuery = $("#lnkTeste3");
    public divTeste5: JQuery = $("#divTeste5");
    public drpTeste2: JQuery = $("#drpTeste2");
    
    constructor() {

        var preload_data = new Array<any>();
        preload_data.push({ id: 1, text: "um",locked:true,disabled:true });
        preload_data.push({ id: 2, text: "dois" });
        preload_data.push({ id: 3, text: "tres" });
        preload_data.push({ id: 4, text: "quatro" });
        preload_data.push({ id: 5, text: "cinco" });
        preload_data.push({ id: 6, text: "seis" });
        preload_data.push({ id: 7, text: "sete" });


        this.divTeste5.select2({
            multiple: false,
            closeOnSelect:true,
            data: preload_data//,
        });

        $([this.lnkTeste1]).editable({
            mode: "inline",
            send: "always",
            type: "text",
            url: "http://localhost:42692/Home/Sucesso",
            ajaxOptions: {
                type: 'GET',
                dataType: 'json'
            },
            success: function (response, newValue) {
                newValue = response.newValue;
                if (!response.success) return response.newValue;
            },
            error: function (response, newValue) {
                if (response.status === 500) {
                    return 'Service unavailable. Please try later.';
                } else {
                    return response.responseText;
                }
            }
        });

        $([this.lnkTeste2]).editable({
            mode: "inline",
            send: "always",
            type: "text",
            url: "http://localhost:42692/Home/Erro",
            ajaxOptions: {
                type: 'GET',
                dataType: 'json'
            },
            success: function (response, newValue) {
                newValue = response.newValue;
                if (!response.success) return response.newValue;
            },
            error: function (response, newValue) {
                if (response.status === 500) {
                    return 'Service unavailable. Please try later.';
                } else {
                    return response.responseText;
                }
            }
        });

        $([this.lnkTeste3]).editable({
            mode: "inline",
            send: "always",
            showbuttons: true,
            type: "text",
            url: "http://localhost:42692/Home/Sucesso2",
            ajaxOptions: {
                type: 'GET',
                dataType: 'json'
            },
            success: function (response, newValue) {

                if (response.success) {
                    newValue = response.newValue;
                     return response.newValue
                };
            },
            error: function (response, newValue) {
                if (response.status === 500) {
                    return 'Service unavailable. Please try later.';
                } else {
                    return response.responseText;
                }
            }
        });

    }

    InfoAlert2() {
        this.divTeste1.alert().addClass("alert alert-info");
        this.divTeste1.text("assadsad");
    }
    WarningAlert2() {
        this.divTeste2.alert().addClass("alert alert-warning");
        this.divTeste2.text("assadsad");
    }
    SuccessAlert2() {
        this.divTeste3.alert().addClass("alert alert-success");
        this.divTeste3.text("assadsad");
    }
    ErrorAlert2() {
        this.divTeste4.alert().addClass("alert alert-danger");
        this.divTeste4.text("assadsad");
    }
    InfoAlert() {
        new PNotify({
            title: 'PIcon',
            text: 'I have an icon that uses the PIcon (Oxygen) styles.',
            type: 'info',
            history: {
                menu: true
            }
        });
        //$.pnotify({ type: "info", text: this.divTeste1.text(), title: "info" });
    }
    WarningAlert() {
        new PNotify({
            title: 'PIcon',
            text: 'I have an icon that uses the PIcon (Oxygen) styles.',
            type: 'notice',
            history: {
                menu: true
            }
        });
        //$.pnotify({ type: "warning", text: "warning", title: "warning" });
    }
    SuccessAlert() {
        new PNotify({
            title: 'PIcon',
            text: 'I have an icon that uses the PIcon (Oxygen) styles.',
            type: 'success',
            history: {
                menu: true
            }
        });
        //$.pnotify({ type: "success", text: "success", title: "success" });
    }
    ErrorAlert() {
        new PNotify({
            title: 'PIcon',
            text: 'I have an icon that uses the PIcon (Oxygen) styles.',
            type: 'error',
            history: {
                menu: true
            }
        });
        //$.pnotify({ type: "danger", text: "danger", title: "danger" });
    }
}

var model = new Index();
model.InfoAlert();
model.WarningAlert();
model.SuccessAlert();
model.ErrorAlert();
model.InfoAlert2();
model.WarningAlert2();
model.SuccessAlert2();
model.ErrorAlert2();