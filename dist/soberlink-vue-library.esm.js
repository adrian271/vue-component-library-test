import { defineComponent, pushScopeId, popScopeId, openBlock, createBlock, createVNode, createTextVNode, toDisplayString, withScopeId } from 'vue';

var script$1 = /*#__PURE__*/defineComponent({
  name: 'SoberlinkVueLibrarySample',

  // vue component name
  data() {
    return {
      counter: 5,
      initCounter: 5,
      message: {
        action: null,
        amount: null
      }
    };
  },

  computed: {
    changedBy() {
      const {
        message
      } = this;
      if (!message.action) return 'initialized';
      return `${message.action} ${message.amount || ''}`.trim();
    }

  },
  methods: {
    increment(arg) {
      const amount = typeof arg !== 'number' ? 1 : arg;
      this.counter += amount;
      this.message.action = 'incremented by';
      this.message.amount = amount;
    },

    decrement(arg) {
      const amount = typeof arg !== 'number' ? 1 : arg;
      this.counter -= amount;
      this.message.action = 'decremented by';
      this.message.amount = amount;
    },

    reset() {
      this.counter = this.initCounter;
      this.message.action = 'reset';
      this.message.amount = null;
    }

  }
});

const _withId = /*#__PURE__*/withScopeId("data-v-74dca8f8");

pushScopeId("data-v-74dca8f8");

const _hoisted_1$1 = {
  class: "soberlink-vue-library-sample"
};

const _hoisted_2 = /*#__PURE__*/createTextVNode(". ");

popScopeId();

const render$1 = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", _hoisted_1$1, [createVNode("p", null, [createTextVNode(" The counter was " + toDisplayString(_ctx.changedBy) + " to ", 1), createVNode("b", null, toDisplayString(_ctx.counter), 1), _hoisted_2]), createVNode("button", {
    onClick: _cache[1] || (_cache[1] = (...args) => _ctx.increment && _ctx.increment(...args))
  }, " Click +1 "), createVNode("button", {
    onClick: _cache[2] || (_cache[2] = (...args) => _ctx.decrement && _ctx.decrement(...args))
  }, " Click -1 "), createVNode("button", {
    onClick: _cache[3] || (_cache[3] = $event => _ctx.increment(5))
  }, " Click +5 "), createVNode("button", {
    onClick: _cache[4] || (_cache[4] = $event => _ctx.decrement(5))
  }, " Click -5 "), createVNode("button", {
    onClick: _cache[5] || (_cache[5] = (...args) => _ctx.reset && _ctx.reset(...args))
  }, " Reset ")]);
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = "\n.soberlink-vue-library-sample[data-v-74dca8f8] {\n  display: block;\n  width: 400px;\n  margin: 25px auto;\n  border: 1px solid #ccc;\n  background: #eaeaea;\n  text-align: center;\n  padding: 25px;\n}\n.soberlink-vue-library-sample p[data-v-74dca8f8] {\n  margin: 0 0 1em;\n}\n";
styleInject(css_248z$1);

script$1.render = render$1;
script$1.__scopeId = "data-v-74dca8f8";

var script = /*#__PURE__*/defineComponent({
  name: 'FccButton',
  // vue component name
  props: {
    text: {
      type: String,
      default: 'Enter Button Text Here'
    }
  },

  data() {}

});

const _hoisted_1 = {
  class: "btn-cta"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("button", _hoisted_1, toDisplayString(_ctx.text), 1);
}

var css_248z = "\n.btn-cta {\n  background-color: #d0d0d5;\n  border-width: 3px;\n  border-color: #1b1b32;\n  border-radius: 0;\n  border-style: solid;\n  color: #1b1b32;\n  display: block;\n  margin-bottom: 0;\n  font-weight: normal;\n  text-align: center;\n  -ms-touch-action: manipulation;\n  touch-action: manipulation;\n  cursor: pointer;\n  white-space: nowrap;\n  padding: 6px 12px;\n  font-size: 18px;\n  line-height: 1.42857143;\n}\n.btn-cta:active:hover,\n.btn-cta:focus,\n.btn-cta:hover {\n  background-color: #1b1b32;\n  border-width: 3px;\n  border-color: #000;\n  background-image: none;\n  color: #f5f6f7;\n}\n";
styleInject(css_248z);

script.render = render;

/* eslint-disable import/prefer-default-export */

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  SoberlinkVueLibrarySample: script$1,
  FccButton: script
});

// Import vue components

const install = function installSoberlinkVueLibrary(app) {
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()

export default install;
export { script as FccButton, script$1 as SoberlinkVueLibrarySample };
