import { openBlock, createElementBlock, normalizeProps, guardReactiveProps, renderSlot } from "vue";
var BaseButton_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("button", normalizeProps(guardReactiveProps(_ctx.$attrs)), [
    renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ], 16);
}
var BaseButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0125a446"]]);
export { BaseButton };
