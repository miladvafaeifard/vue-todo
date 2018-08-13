import { DirectiveOptions } from 'vue';

const focus: DirectiveOptions = {
  inserted(el, node) {
    el.focus();
  }
};

export default focus;
