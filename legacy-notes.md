Legacy jQuery pattern Native JavaScript equivalent Explanation
$(document).ready(fn) DOMContentLoaded or an ES module Native ES modules defer exe-cution automatically until complete DOM parsing oc-curs.
$("#name").val() document.querySelector("#name").value jQuery wraps DOM nodes in utility objects; native APIs query and access element properties directly.
.after(html) Element.after() Native method inserts DOM nodes or text strings directly after the host element.
$(".error").remove() querySelectorAll() and .remove() Iterates over a static NodeList and invokes native .remove() on each element.
.text(...).hide().fadeIn(400) textContent with CSS transitions if needed Replaces vendor JS anima-tions with immediate text node assignment, delegating visual transitions to CSS.
$form[0].reset() form.reset() $form[0] accesses the underly-ing raw HTMLFormElement in-stance to execute its native re-set method.
.addClass(c) / .toggleClass(c) classList.add() / classList.toggle() Modern DOMTokenList API manages CSS element classes natively without library over-head.
.data("day") element.dataset.day Direct access to standard HTML5 data-* attributes via the native dataset property.
$.ajax() / $.get() fetch() Standardized asynchronous network API built natively into all modern web browsers.
