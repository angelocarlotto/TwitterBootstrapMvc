/// <reference path="../../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../../scripts/typings/bootstrap/bootstrap.d.ts" />
/// <reference path="../../scripts/typings/jquery.pnotify/jquery.pnotify.d.ts" />
/// <reference path="../../scripts/typings/jquery.datatables/jquery.datatables.d.ts" />
class Index {
    private divTeste1: JQuery = $("#divTeste1");
    private divTeste2: JQuery = $("#divTeste2");
    private divTeste3: JQuery = $("#divTeste3");
    private divTeste4: JQuery = $("#divTeste4");

    constructor() {
        
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
        this.divTeste4.alert().addClass("alert alert-error");
        this.divTeste4.text("assadsad");
    }
    InfoAlert() {
        $.pnotify({ type: "info", text: this.divTeste1.text(), title: "info" });
    }
    WarningAlert() {
        $.pnotify({ type: "error", text: "error", title: "error" });
    }
    SuccessAlert() {
        $.pnotify({ type: "success", text: "success", title: "success" });
    }
   ErrorAlert() {
        $.pnotify({ type: "success", text: "success", title: "success" });
    }
}

var obj = new Index();
obj.InfoAlert();
obj.WarningAlert();
obj.SuccessAlert();
obj.ErrorAlert()
obj.InfoAlert2();
obj.WarningAlert2();
obj.SuccessAlert2();
obj.ErrorAlert2();