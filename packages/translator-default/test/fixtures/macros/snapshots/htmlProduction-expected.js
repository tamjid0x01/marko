import { t as _t } from "marko/dist/runtime/html";

const _marko_componentType = "pLQ9rpQM",
      _marko_template = _t(_marko_componentType);

export default _marko_template;
import { x as _marko_escapeXml } from "marko/dist/runtime/html/helpers/escape-xml";
import _marko_dynamic_tag from "marko/dist/runtime/helpers/dynamic-tag";
import _marko_renderer from "marko/dist/runtime/components/renderer";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  function _renderTree(out, node) {
    out.w(`Name: ${_marko_escapeXml(node.name)} Children: `);

    if (node.children) {
      out.w("<ul>");
      {
        let _keyValue = 0;

        for (const child of node.children) {
          const _keyScope = `[${_keyValue++}]`;
          out.w("<li>");

          _marko_dynamic_tag(out, _renderTree, () => child, null, null, null, _component, "3" + _keyScope);

          out.w("</li>");
        }
      }
      out.w("</ul>");
    }
  }

  _marko_dynamic_tag(out, _renderTree, () => input.node, null, null, null, _component, "4");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);