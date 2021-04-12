import "js/helpers/select2";
import Widget from "js/utilities/widget";

// CSS
import "select2/dist/css/select2.min.css";
import "css/widgets/select2.scss";


class Select2Widget extends Widget {
    constructor(options) {
        super();
        this.opts = Object.assign({}, options);
    }

    _init(element) {
        if (!element.closest(".empty-form")) {
            let options = Object.assign({}, this.opts);
            if (options.allowClear && (typeof options.placeholder == "undefined")) {
                // Использование allowClear требует указать placeholder.
                const emptyOption = element.querySelector("option[value=\"\"]");
                if (emptyOption) {
                    options.placeholder = emptyOption.textContent;
                }
            }

            $(element).select2(options).data("select2");

            // вызов события change для поддержки hookUnload
            $(element).on("select2:select", function() {
                const event = new CustomEvent("change", {
                    bubbles: true,
                    cancelable: true
                });
                element.dispatchEvent(event)
            });
        }
    }

    _destroy(element) {
        $(element).select2("destroy")
    }
}


const select2 = new Select2Widget({
    minimumResultsForSearch: Infinity
});
select2.observe(".vSelect");
select2.initAll(".vSelect");


const select2_filters = new Select2Widget({
    theme: "sm",
    allowClear: true
});
select2_filters.observe(".paper-filter select");
select2_filters.initAll(".paper-filter select");


const select2_action = new Select2Widget({
    theme: "sm",
    minimumResultsForSearch: Infinity
});
select2_action.observe(".action-action select");
select2_action.initAll(".action-action select");
