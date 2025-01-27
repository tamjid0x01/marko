import { t as _t } from "marko/dist/runtime/html";

const _marko_componentType = "GuHig6zQ",
      _marko_template = _t(_marko_componentType);

export default _marko_template;
import { x as _marko_escapeXml } from "marko/dist/runtime/html/helpers/escape-xml";
import _hello from "./components/hello/index.marko";
import _marko_tag from "marko/dist/runtime/helpers/render-tag";
import _marko_renderer from "marko/dist/runtime/components/renderer";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  const _cols = [];
  const _items = [];
  let _keyValue = 0;

  for (const color of input.colors) {
    const _keyScope = `[${_keyValue++}]`;

    if (x) {
      _items.push({
        "style": {
          color
        },
        "renderBody": out => {
          out.w("foo");
        }
      });
    } else if (y) {
      _items.push({
        "style": {
          color
        },
        "renderBody": out => {
          out.w("bar");
        }
      });
    } else {
      _items.push({
        "style": {
          color
        },
        "renderBody": out => {
          out.w("baz");
        }
      });
    }
  }

  let i = 10;
  let _keyValue2 = 0;

  while (i--) {
    const _keyScope2 = `[${_keyValue2++}]`;

    _items.push({
      "renderBody": out => {
        out.w(_marko_escapeXml(i));
      }
    });
  }

  let _keyValue3 = 0;

  for (const col of input.table) {
    const _keyScope3 = `[${_keyValue3++}]`;
    const _rows = [];
    let _keyValue4 = 0;

    for (const row of col) {
      const _keyScope4 = `[${_keyValue4++ + _keyScope3}]`;

      _rows.push({
        "row": row,
        "renderBody": out => {
          out.w(_marko_escapeXml(row));
        }
      });
    }

    _cols.push({
      "x": y,
      "rows": _rows
    });
  }

  const _rows2 = [];

  _rows2.push({
    "row": -1,
    "renderBody": out => {
      out.w("Outside");
    }
  });

  _cols.push({
    "outside": true,
    "rows": _rows2
  });

  _marko_tag(_hello, {
    "list": {
      "items": _items
    },
    "cols": _cols
  }, out, _component, "0");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);