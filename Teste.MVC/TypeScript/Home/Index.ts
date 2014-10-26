/// <reference path="../../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../../scripts/typings/bootstrap/bootstrap.d.ts" />
/// <reference path="../../scripts/typings/jquery.pnotify/jquery.pnotify.d.ts" />
/// <reference path="../../scripts/typings/jquery.datatables/jquery.datatables.d.ts" />


class Index {
    private divTeste1: JQuery = $("#divTeste1");
    private divTeste2: JQuery = $("#divTeste2");
    private divTeste3: JQuery = $("#divTeste3");
    private divTeste4: JQuery = $("#divTeste4");
    private lnkTeste1: JQuery = $("#lnkTeste1");
    private lnkTeste2: JQuery = $("#lnkTeste2");
    private lnkTeste3: JQuery = $("#lnkTeste3");

    constructor() {

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

var obj = new Index();
obj.InfoAlert();
obj.WarningAlert();
obj.SuccessAlert();
obj.ErrorAlert();
obj.InfoAlert2();
obj.WarningAlert2();
obj.SuccessAlert2();
obj.ErrorAlert2();