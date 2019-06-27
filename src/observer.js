let EventList = {}

const $on = (eventName, callback) => {

  if (!EventList[eventName]) {
    EventList[eventName] = [];
  }

  EventList[eventName].push(callback);
}

const $emit = (eventName, params) => {
  if (EventList[eventName]) {
    EventList[eventName].forEach((cb) => {
      cb(params);
    })
  }
}


const $off = (eventName, callback) => {
  if (EventList[eventName]) {
    if (callback) {
      var index = EventList[eventName].indexOf(callback);
      EventList[eventName].splice(index, 1);
    } else {
      EventList[eventName].length = 0;
    }
  }
}

export default {
  $on,
  $emit,
  $off
}
