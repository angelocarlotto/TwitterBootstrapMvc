/// <reference path="../../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../../scripts/typings/bootstrap/bootstrap.d.ts" />
/// <reference path="../../scripts/typings/jquery.pnotify/jquery.pnotify.d.ts" />
/// <reference path="../../scripts/typings/jquery.datatables/jquery.datatables.d.ts" />
/// <reference path="../../scripts/typings/select2/select2.d.ts" />

var PNotify = (function () {
    function PNotify(params) {
    }
    return PNotify;
})();

var Index = (function () {
    function Index() {
        this.divTeste1 = $("#divTeste1");
        this.divTeste2 = $("#divTeste2");
        this.divTeste3 = $("#divTeste3");
        this.divTeste4 = $("#divTeste4");
        this.lnkTeste1 = $("#lnkTeste1");
        this.lnkTeste2 = $("#lnkTeste2");
        this.lnkTeste3 = $("#lnkTeste3");
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
                if (!response.success)
                    return response.newValue;
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
                if (!response.success)
                    return response.newValue;
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
                    return response.newValue;
                }
                ;
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
    Index.prototype.InfoAlert2 = function () {
        this.divTeste1.alert().addClass("alert alert-info");
        this.divTeste1.text("assadsad");
    };
    Index.prototype.WarningAlert2 = function () {
        this.divTeste2.alert().addClass("alert alert-warning");
        this.divTeste2.text("assadsad");
    };
    Index.prototype.SuccessAlert2 = function () {
        this.divTeste3.alert().addClass("alert alert-success");
        this.divTeste3.text("assadsad");
    };
    Index.prototype.ErrorAlert2 = function () {
        this.divTeste4.alert().addClass("alert alert-danger");
        this.divTeste4.text("assadsad");
    };
    Index.prototype.InfoAlert = function () {
        new PNotify({
            title: 'PIcon',
            text: 'I have an icon that uses the PIcon (Oxygen) styles.',
            type: 'info',
            history: {
                menu: true
            }
        });
        //$.pnotify({ type: "info", text: this.divTeste1.text(), title: "info" });
    };
    Index.prototype.WarningAlert = function () {
        new PNotify({
            title: 'PIcon',
            text: 'I have an icon that uses the PIcon (Oxygen) styles.',
            type: 'notice',
            history: {
                menu: true
            }
        });
        //$.pnotify({ type: "warning", text: "warning", title: "warning" });
    };
    Index.prototype.SuccessAlert = function () {
        new PNotify({
            title: 'PIcon',
            text: 'I have an icon that uses the PIcon (Oxygen) styles.',
            type: 'success',
            history: {
                menu: true
            }
        });
        //$.pnotify({ type: "success", text: "success", title: "success" });
    };
    Index.prototype.ErrorAlert = function () {
        new PNotify({
            title: 'PIcon',
            text: 'I have an icon that uses the PIcon (Oxygen) styles.',
            type: 'error',
            history: {
                menu: true
            }
        });
        //$.pnotify({ type: "danger", text: "danger", title: "danger" });
    };
    return Index;
})();

var obj = new Index();
obj.InfoAlert();
obj.WarningAlert();
obj.SuccessAlert();
obj.ErrorAlert();
obj.InfoAlert2();
obj.WarningAlert2();
obj.SuccessAlert2();
obj.ErrorAlert2();
//# sourceMappingURL=Index.js.map
