/* global gettext */

import "js/widgets/clearable_file";
import "js/widgets/datetime";
import "js/widgets/multiselect";
import "js/components/RelatedObjectLookups";
import "js/components/prepopulate/prepopulate";
import {InlineFormset} from "bem/paper-formset/paper-formset";

// инициализация inline-форм
document.querySelectorAll(".paper-formset").forEach(function(formset) {
    new InlineFormset(formset);
});
