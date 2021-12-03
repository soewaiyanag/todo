// FUNCTIONS

function idGenerator() {
  let id = 0;
  return function () {
    if (id > 999999) {
      id = 0;
    }
    id++;
    return id;
  };
}

export { idGenerator };
