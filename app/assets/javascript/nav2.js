function(t, e, n) {}, function(t, e, n) {
    "use strict";
    (function(t, e) {
        n(38), t(document).ready((function() {
            t(".navigation").setup_navigation()
        })), t.fn.setup_navigation = function(n) {
            n = e.extend({
                menuHoverClass: "navigation__list--show-menu"
            }, n);
            var o = t(this).find(".navigation__link");
            t(o).next("ul").attr("data-test", "true").attr({
                "aria-hidden": "true"
            }).find("a").attr("tabIndex", -1), t(o).each((function() {
                t(this).next("ul").length > 0 && t(this).parent("li").attr("aria-haspopup", "true")
            })), t(o).hover((function() {
                t(this).closest("ul").attr("aria-hidden", "false").find("." + n.menuHoverClass).attr("aria-hidden", "true").removeClass(n.menuHoverClass).find("a").attr("tabIndex", -1), t(this).next("ul").attr("aria-hidden", "false").addClass(n.menuHoverClass).find("a").attr("tabIndex", 0)
            }), (function() {
                t("." + n.menuHoverClass).attr("aria-hidden", "true").removeClass(n.menuHoverClass).find("a").attr("tabIndex", -1)
            })), t(o).focus((function() {
                t(this).closest("ul").find("." + n.menuHoverClass).attr("aria-hidden", "true").removeClass(n.menuHoverClass).find("a").attr("tabIndex", -1), t(this).next("ul").attr("aria-hidden", "false").addClass(n.menuHoverClass).find("a").attr("tabIndex", 0)
            })), t(o).hover((function() {
                t(this).closest("ul").attr("aria-hidden", "false").find("." + n.menuHoverClass).attr("aria-hidden", "true").removeClass(n.menuHoverClass).find("a").attr("tabIndex", -1), t(this).next("ul").attr("aria-hidden", "false").addClass(n.menuHoverClass).find("a").attr("tabIndex", 0)
            }), (function() {
                t("." + n.menuHoverClass).attr("aria-hidden", "true").removeClass(n.menuHoverClass).find("a").attr("tabIndex", -1)
            })), t(this).find("a").last().keydown((function(e) {
                9 == e.keyCode && t("." + n.menuHoverClass).attr("aria-hidden", "true").removeClass(n.menuHoverClass).find("a").attr("tabIndex", -1)
            })), t(document).keyup((function(e) {
                27 == e.keyCode && t("." + n.menuHoverClass).attr("aria-hidden", "true").removeClass(n.menuHoverClass).find("a").attr("tabIndex", -1)
            })), t(document).click((function() {
                t("." + n.menuHoverClass).attr("aria-hidden", "true").removeClass(n.menuHoverClass).find("a").attr("tabIndex", -1)
            })), t(this).click((function(t) {
                t.stopPropagation()
            }))
        }
    }).call(this, n(23), n(23))
