import "multiselect";
import emitters from "../components/emitters";

// CSS
import "../../css/widgets/multiselect.scss";


function initWidget(element) {
    if (!element.closest('.empty-form')) {
        $(element).multiSelect();
    }
}


/**
 * Инициализация MultiSelect виджетов
 * @param {Element} [root]
 */
function initWidgets(root = document.body) {
    let selector = '.vMultiSelect';
    root.matches(selector) && initWidget(root);
    root.querySelectorAll(selector).forEach(initWidget);
}


initWidgets();
emitters.dom.on('mutate', initWidgets);
