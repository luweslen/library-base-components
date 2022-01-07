import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, renderSlot } from "vue";
var BaseButton_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = defineComponent({
  props: {
    isLoading: { type: Boolean },
    disabled: { type: Boolean },
    primary: { type: Boolean },
    secondary: { type: Boolean },
    block: { type: Boolean },
    danger: { type: Boolean },
    success: { type: Boolean },
    dark: { type: Boolean },
    light: { type: Boolean },
    circle: { type: Boolean },
    transparent: { type: Boolean }
  },
  setup(props) {
    const classes = computed(() => ({
      btn: true,
      primary: props.primary,
      secondary: props.secondary,
      block: props.block,
      danger: props.danger,
      success: props.success,
      dark: props.dark,
      light: props.light,
      circle: props.circle,
      transparent: props.transparent
    }));
    return {
      classes
    };
  }
});
const _hoisted_1 = ["disabled"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    disabled: _ctx.disabled,
    class: normalizeClass(_ctx.classes)
  }, [
    renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ], 10, _hoisted_1);
}
var BaseButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7d029322"]]);
export { BaseButton };
