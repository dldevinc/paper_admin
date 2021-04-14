/* global gettext */

import * as bootstrap from "bootstrap";
import emitters from "js/utilities/emitters";
import formUtils from "js/utilities/form_utils";
import modals from "js/components/modals";
import Sortable from "sortablejs";
import ScrollTopButton from "js/components/ScrollTopButton";
import Widget from "js/utilities/widget";
import "js/components/cancel";
import "js/components/filedrag";
import "js/components/paper-sidebar";
import "js/widgets/bootstrap";
import "js/widgets/select2";

// CSS
import "css/fonts.scss";
import "css/common.scss";
import "css/app_index.scss";
import "css/history.scss";
import "css/delete.scss";
import "css/changelist.scss";
import "css/changeform.scss";

// Images
import "img/favicon.png";
import "img/menu_bg.jpg";


// кнопка скролла к вверху страницы
// TODO: widget
new ScrollTopButton();


// login page
if (document.body.classList.contains("login")) {
    import(/* webpackChunkName: "login" */ "js/login");
}

// dashboard page
if (document.body.classList.contains("dashboard")) {
    import(/* webpackChunkName: "dashboard" */ "js/dashboard");
}

// changelist page
if (document.body.classList.contains("changelist-page")) {
    import(/* webpackChunkName: "changelist" */ "js/changelist");
}

// changeform page
if (document.body.classList.contains("change-form")) {
    import(/* webpackChunkName: "changeform" */ "js/changeform");
}

// passwordform page
if (document.body.classList.contains("passwordform-page")) {
    import(/* webpackChunkName: "passwordform" */ "js/passwordform");
}


export const django = {
    jQuery
}

export {
    bootstrap,
    emitters,
    formUtils,
    modals,
    Sortable,
    Widget
};
