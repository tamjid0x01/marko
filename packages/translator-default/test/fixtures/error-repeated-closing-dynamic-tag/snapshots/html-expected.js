import { t as _t } from "marko/src/runtime/html";

const _marko_componentType = "packages/translator-default/test/fixtures/error-repeated-closing-dynamic-tag/template.marko",
      _marko_template = _t(_marko_componentType);

export default _marko_template;
import _marko_dynamic_tag from "marko/src/runtime/helpers/dynamic-tag";
import _marko_renderer from "marko/src/runtime/components/renderer";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  _marko_dynamic_tag(out, input.x, null, out => {
    out.w("Hello");
  }, null, null, _component, "0");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);