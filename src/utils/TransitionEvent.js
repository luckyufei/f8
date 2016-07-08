import { addClass } from 'dom-helpers/class'

const canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement)

const EVENT_NAME_MAP = {
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
}

let endEvents = []
let support = {}

function detectEvents () {
  var testEl = document.createElement('div')
  var style = testEl.style

  if (!('AnimationEvent' in window)) {
    delete EVENT_NAME_MAP.animationend.animation
  }

  if (!('TransitionEvent' in window)) {
    delete EVENT_NAME_MAP.transitionend.transition
  }

  for (var baseEventName in EVENT_NAME_MAP) {
    var baseEvents = EVENT_NAME_MAP[baseEventName]
    support[baseEventName] = false

    for (var styleName in baseEvents) {
      if (styleName in style) {
        support[baseEventName] = baseEvents[styleName]
        endEvents.push(baseEvents[styleName])
        break
      }
    }
  }
}

if (canUseDOM) {
  detectEvents()
}

if (support.animationend) {
  addClass(document.documentElement, 'cssanimations')
}

function addEventListener (node, eventName, eventListener) {
  node.addEventListener(eventName, eventListener, false)
}

function removeEventListener (node, eventName, eventListener) {
  node.removeEventListener(eventName, eventListener, false)
}

export default class TransitionEvent {
  static on = (node, eventListener) => {
    if (endEvents.length === 0) {
      window.setTimeout(eventListener, 0)
      return
    }
    endEvents.forEach((endEvent) => {
      addEventListener(node, endEvent, eventListener)
    })
  };

  static off = (node, eventListener) => {
    if (endEvents.length === 0) {
      return
    }
    endEvents.forEach((endEvent) => {
      removeEventListener(node, endEvent, eventListener)
    })
  };

  static support = support;
}
