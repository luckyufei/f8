'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _class = require('dom-helpers/class');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var EVENT_NAME_MAP = {
  transitionend: {
    'transition': 'transitionend',
    'WebkitTransition': 'webkitTransitionEnd',
    'MozTransition': 'mozTransitionEnd',
    'OTransition': 'oTransitionEnd',
    'msTransition': 'MSTransitionEnd'
  },

  animationend: {
    'animation': 'animationend',
    'WebkitAnimation': 'webkitAnimationEnd',
    'MozAnimation': 'mozAnimationEnd',
    'OAnimation': 'oAnimationEnd',
    'msAnimation': 'MSAnimationEnd'
  }
};

var endEvents = [];
var support = {};

function detectEvents() {
  var testEl = document.createElement('div');
  var style = testEl.style;

  if (!('AnimationEvent' in window)) {
    delete EVENT_NAME_MAP.animationend.animation;
  }

  if (!('TransitionEvent' in window)) {
    delete EVENT_NAME_MAP.transitionend.transition;
  }

  for (var baseEventName in EVENT_NAME_MAP) {
    var baseEvents = EVENT_NAME_MAP[baseEventName];
    support[baseEventName] = false;

    for (var styleName in baseEvents) {
      if (styleName in style) {
        support[baseEventName] = baseEvents[styleName];
        endEvents.push(baseEvents[styleName]);
        break;
      }
    }
  }
}

if (canUseDOM) {
  detectEvents();
}

if (support.animationend) {
  (0, _class.addClass)(document.documentElement, 'cssanimations');
}

function addEventListener(node, eventName, eventListener) {
  node.addEventListener(eventName, eventListener, false);
}

function removeEventListener(node, eventName, eventListener) {
  node.removeEventListener(eventName, eventListener, false);
}

var TransitionEvent = function TransitionEvent() {
  _classCallCheck(this, TransitionEvent);
};

TransitionEvent.on = function (node, eventListener) {
  if (endEvents.length === 0) {
    window.setTimeout(eventListener, 0);
    return;
  }
  endEvents.forEach(function (endEvent) {
    addEventListener(node, endEvent, eventListener);
  });
};

TransitionEvent.off = function (node, eventListener) {
  if (endEvents.length === 0) {
    return;
  }
  endEvents.forEach(function (endEvent) {
    removeEventListener(node, endEvent, eventListener);
  });
};

TransitionEvent.support = support;
exports.default = TransitionEvent;