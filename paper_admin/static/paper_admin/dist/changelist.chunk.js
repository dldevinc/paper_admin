(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{144:function(e,t,n){"use strict";var o=n(11),i=n(8),s=n.n(i);function r(e){this._buildTree(e)}r.prototype._createNode=function(e){const t=e.dataset;return{pk:parseInt(t.id),parent:parseInt(t.parent),element:e,childs:[]}},r.prototype._addNode=function(e){return!(!e||"number"!=typeof e.pk)&&(this._nodes[e.pk]=e,isNaN(e.parent)&&this._roots.push(e),!0)},r.prototype.getNode=function(e){if(null===this._nodes)throw new Error("tree is empty");if(!(e in this._nodes))throw new Error(`node ${e} not found`);return this._nodes[e]},r.prototype._buildTree=function(e){const t=[];this._nodes={},this._roots=[],e.forEach(function(e){let n=this._createNode(e);for(this._addNode(n);t.length;){let e=t[0];if(n.parent===e.pk)return e.childs.push(n.pk),void t.unshift(n);t.shift()}t.unshift(n)}.bind(this))},r.prototype.getRoots=function(){if(null===this._roots)throw new Error("tree is empty");return this._roots.map(function(e){return e.element}.bind(this))},r.prototype.getDescendants=function(e){return this.getNode(e).childs.reduce(function(e,t){let n=this.getNode(t);return n&&(e.push(n.element),e=e.concat(this.getDescendants(t))),e}.bind(this),[])};var a=r;function c(e,t){this.opts=Object.assign({className:"highlight",staggerMin:12,staggerMax:50},t),this._elements=e,this._isReleased=!1,this._timer=this._createTimer()}c.prototype._createTimer=function(){let e=0;const t=this._elements.length,n=Math.max(this.opts.staggerMin,2*this.staggerMax/t);return setInterval(function(){e<t?(this._elements[e].classList.add(this.opts.className),e++):(this._destroyTimer(),this._isReleased&&this._removeClass())}.bind(this),n)},c.prototype._destroyTimer=function(){null!==this._timer&&(clearInterval(this._timer),this._timer=null)},c.prototype._removeClass=function(){this._elements.forEach(function(e){e.classList.remove(this.opts.className)}.bind(this))},c.prototype.release=function(){this._isReleased=!0,null===this._timer&&this._removeClass()};var d=c;function l(e,t){if(this.opts=Object.assign({url:null,tree:!1,handler:".handler",disabledClass:"disabled"},t),this.table=e,this.tbody=e.querySelector("tbody"),!this.tbody)throw new Error("table body not found");this.tree=null,this._createSortable()}l.prototype._createSortable=function(){return o.a.create(this.tbody,{animation:0,draggable:"tr",handle:this.opts.handler,filter:"."+this.opts.disabledClass,ghostClass:"sortable-ghost",onStart:this._onStart.bind(this),onMove:this._onMove.bind(this),onEnd:this._onEnd.bind(this)})},l.prototype._onStart=function(e){const t=this.tbody.querySelectorAll("tr");this.opts.tree&&(this.tree=new a(t));const n=parseInt(e.item.dataset.parent);t.forEach(function(e){const t=parseInt(e.dataset.parent);isNaN(t)&&isNaN(n)||t===n||e.classList.add(this.opts.disabledClass)}.bind(this))},l.prototype._onMove=function(e){return!e.related.classList.contains(this.opts.disabledClass)},l.prototype._onEnd=function(e){this.tbody.querySelectorAll("tr").forEach(function(e){e.classList.remove(this.opts.disabledClass)}.bind(this));let t=this._getMovedRows(e);if(!t.length)return;this._normalizeTable(e,t);const n=this._createOrderMap(e,t),o=new d(t);this._sendRequest(n).then(function(){o.release()})},l.prototype._getMovedRows=function(e){const t=Math.min(e.oldIndex,e.newIndex),n=Math.max(e.oldIndex,e.newIndex),o=this.tbody.querySelectorAll("tr");let i=Array.prototype.slice.call(o,t,n+1);if(this.tree){const t=parseInt(e.item.dataset.id),n=this.tree.getNode(t);i=i.filter(function(e){return parseInt(e.dataset.parent)===n.parent})}return i},l.prototype._createOrderMap=function(e,t){const n=[],o=[];return t.forEach(function(e){const t=e.querySelector(this.opts.handler);t&&(n.push(parseInt(e.dataset.id)),o.push(parseInt(t.dataset.order)))}.bind(this)),e.oldIndex<e.newIndex?o.unshift(o.pop()):o.push(o.shift()),n.reduce(function(e,t,n){return e[t]=o[n],this.tbody.querySelector('tr[data-id="'+t+'"]').querySelector(this.opts.handler).setAttribute("data-order",o[n]),e}.bind(this),{})},l.prototype._normalizeTable=function(e,t){if(this.tree){const n=parseInt(e.item.dataset.id),o=this.tree.getNode(n),i=e.item.previousElementSibling,s=e.item.nextElementSibling,r=t.slice();if(i&&s){const e=parseInt(i.dataset.parent)===o.parent,t=parseInt(s.dataset.parent)===parseInt(i.dataset.id);e&&t&&r.indexOf(i)<0&&r.unshift(i)}r.forEach(function(e){const t=parseInt(e.dataset.id),n=this.tree.getDescendants(t);Element.prototype.after.apply(e,n)}.bind(this))}},l.prototype._sendRequest=function(e){return fetch(this.opts.url,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){if(!e.ok){const t=new Error(`${e.status} ${e.statusText}`);throw t.response=e,t}}).catch(function(e){e.response.text().then(function(e){s.a.alert({message:e,size:"small"})})})};t.a=l},36:function(e,t,n){"use strict";n.r(t),function(e){var t=n(3),o=n(144);n(71),n(50);window.addEventListener("keydown",function(e){if(!e.defaultPrevented&&e.ctrlKey){const t=document.getElementById("paper-main").querySelector(".pagination");if(!t)return;switch(e.key){case"Left":case"ArrowLeft":t.querySelector('.page-link[aria-label="Previous"]').click();break;case"Right":case"ArrowRight":t.querySelector('.page-link[aria-label="Next"]').click();break;default:return}e.preventDefault()}}),Object(t.a)(function(){const t=document.getElementById("result_list");t&&t.classList.contains("table-sortable")&&(t.classList.contains("table-sortable-allowed")?new o.a(t,{url:t.dataset.orderUrl,tree:t.classList.contains("table-mptt"),handler:".sort-handler"}):e(t).find(".sort-handler").tooltip({title:gettext("Sort list by this column to enable ordering"),placement:"bottom",trigger:"hover",html:!0,delay:{show:300,hide:100}}))})}.call(this,n(1))},50:function(e,t,n){(function(e){!function(e){"use strict";function t(e){return e=(e=e.replace(/\./g,"__dot__")).replace(/-/g,"__dash__")}function n(e){return e=(e=e.replace(/__dot__/g,".")).replace(/__dash__/g,"-")}function o(e,n,o){let i=e.id.replace(n,"");i=t(i);let s=e.href;o&&(-1===s.indexOf("?")?s+="?_popup=1":s+="&_popup=1");const r=void 0!==window.screenX?window.screenX:window.screenLeft,a=void 0!==window.screenY?window.screenY:window.screenTop,c=void 0!==window.outerWidth?window.outerWidth:document.body.clientWidth,d=void 0!==window.outerHeight?window.outerHeight:document.body.clientHeight,l=a+Math.round((d-600)/2),u=r+Math.round((c-940)/2);return window.open(s,i,"width=940,height=600,top="+l+",left="+u+",resizable=yes,scrollbars=yes").focus(),!1}function i(e){return o(e,/^lookup_/,!0)}function s(e){return o(e,/^(change|add|delete)_/,!1)}function r(t){const n=e(t),o=n.closest(".related-widget-wrapper").find(".view-related, .change-related, .delete-related");if(!o.length)return;const i=n.val();i?o.each(function(){const t=e(this);t.attr("href",t.attr("data-href-template").replace("__fk__",i))}):o.removeAttr("href")}function a(t,o,i){const s=n(t.name),r=document.getElementById(s);if(r){const t=r.nodeName.toUpperCase();"SELECT"===t?r.options[r.options.length]=new Option(i,o,!0,!0):"INPUT"===t&&(-1!==r.className.indexOf("vManyToManyRawIdAdminField")&&r.value?r.value+=","+o:r.value=o),e(r).trigger("change")}t.close()}window.id_to_windowname=t,window.windowname_to_id=n,window.showRelatedObjectLookupPopup=i,window.dismissRelatedLookupPopup=function(e,t){const o=n(e.name),i=document.getElementById(o);-1!==i.className.indexOf("vManyToManyRawIdAdminField")&&i.value?i.value+=","+t:document.getElementById(o).value=t,e.close()},window.showRelatedObjectPopup=s,window.updateRelatedObjectLinks=r,window.dismissAddRelatedObjectPopup=a,window.dismissChangeRelatedObjectPopup=function(t,o,i,s){const r=n(t.name).replace(/^edit_/,"");e("#"+r).find("option").each(function(){this.value===o&&(this.textContent=i,this.value=s)}),t.close()},window.dismissDeleteRelatedObjectPopup=function(t,o){const i=n(t.name).replace(/^delete_/,"");e("#"+i).find("option").each(function(){this.value===o&&e(this).remove()}).trigger("change"),t.close()},window.showAddAnotherPopup=s,window.dismissAddAnotherPopup=a,e(document).ready(function(){e("a[data-popup-opener]").on("click",function(t){t.preventDefault(),opener.dismissRelatedLookupPopup(window,e(this).data("popup-opener"))}),e("body").on("click",".related-widget-wrapper-link",function(t){if(t.preventDefault(),this.href){const t=e.Event("django:show-related",{href:this.href});e(this).trigger(t),t.isDefaultPrevented()||s(this)}}).on("change",".related-widget-wrapper select",function(){const t=e.Event("django:update-related");e(this).trigger(t),t.isDefaultPrevented()||r(this)}).on("change",".related-widget-wrapper input",function(){this.checked&&r(this)}).on("click",".related-lookup",function(t){t.preventDefault();const n=e.Event("django:lookup-related");e(this).trigger(n),n.isDefaultPrevented()||i(this)}),e(".related-widget-wrapper select").trigger("change"),e(".related-widget-wrapper input:checked").trigger("change")})}(e)}).call(this,n(1))},71:function(e,t,n){"use strict";var o=n(3);const i="action-toggle",s="action-select",r="action-counter",a="action-question",c="action-all",d="select-across",l="action-clear";function u(e,t){e.forEach(function(e){e.checked=Boolean(t),e.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!0}))})}function h(e){const t=e.reduce((e,t)=>e+(t.checked?1:0),0);document.querySelectorAll(`.${r}`).forEach(function(e){e.innerHTML=interpolate(ngettext("%(sel)s of %(cnt)s selected","%(sel)s of %(cnt)s selected",t),{sel:t,cnt:e.dataset.actionsIcnt},!0)}),t===e.length?function(){const e=document.querySelector(`.${a}`);e&&(e.hidden=!1)}():f(e)}function p(e){document.querySelectorAll(`.${d}`).forEach(function(t){t.value=Number(e)})}function f(e){p(!1);const t=document.querySelector(`.${r}`);t&&(t.hidden=!1);const n=document.querySelector(`.${c}`);n&&(n.hidden=!0);const o=e.reduce((e,t)=>e+(t.checked?1:0),0),i=document.querySelector(`.${a}`);i&&(i.hidden=o!==e.length);const s=document.querySelector(`.${l}`);s&&(s.hidden=!0)}Object(o.a)(function(){const e=document.querySelectorAll(`.${s}`);e.length&&function(e){let t=null;const n=document.getElementById("result_list"),o=document.getElementById(i);o.addEventListener("click",function(){u(e,this.checked),h(e)}),n.addEventListener("change",function(t){const n=t.target;if(n.classList.contains(s)){const e=n.closest("tr");e&&e.classList.toggle("selected",n.checked)}o.checked=null==e.find(e=>!e.checked)}),n.addEventListener("click",function(n){let o,i=n.target.closest(`.${s}`);if(i)o=i.checked;else{if(!n.ctrlKey&&!n.shiftKey)return;if(!(i=n.target.closest("tr").querySelector(`.${s}`)))return;o=!i.checked}if(t&&n.shiftKey&&t!==i){const n=e.indexOf(t),s=e.indexOf(i),r=Math.min(n,s),a=Math.max(n,s);u(e.slice(r,a+1),o)}else n.target!==i&&u([i],o);t=i,h(e)}),n.addEventListener("mousedown",function(e){const t=e.target;!e.shiftKey||"TD"!==t.tagName&&"TH"!==t.tagName||e.preventDefault()}),document.addEventListener("click",function(e){const t=e.target;"A"===t.tagName&&t.closest(`.${a}`)&&(e.preventDefault(),function(){p(!0);const e=document.querySelector(`.${r}`);e&&(e.hidden=!0);const t=document.querySelector(`.${c}`);t&&(t.hidden=!1);const n=document.querySelector(`.${a}`);n&&(n.hidden=!0);const o=document.querySelector(`.${l}`);o&&(o.hidden=!1)}())}),document.addEventListener("click",function(t){const n=t.target;"A"===n.tagName&&n.closest(`.${l}`)&&(t.preventDefault(),o.checked=!1,u(e,!1),f(e),h(e))}),function(){let e=!1;const t=document.getElementById("changelist_form");t.addEventListener("change",function(t){const n=t.target;"INPUT"!==n.tagName||n.closest(`.${s}`)||(e=!0)}),t.addEventListener("click",function(t){if(t.target.closest('[name="index"]')&&e){confirm(gettext("You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost."))||t.preventDefault()}}),t.addEventListener("click",function(t){const n=t.target.closest('[name="_save"]'),o=document.querySelectorAll('.actions select[name="action"]'),i=!Array.prototype.every.call(o,function(e){return!e.value});if(n&&i){let n;(n=e?confirm(gettext("You have selected an action, but you haven't saved your changes to individual fields yet. Please click OK to save. You'll need to re-run the action.")):confirm(gettext("You have selected an action, and you haven't made any changes on individual fields. You're probably looking for the Go button rather than the Save button.")))||t.preventDefault()}})}()}(Array.from(e))})}}]);