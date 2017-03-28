// import auto run
// observe something
import { autorun, observable } from 'mobx';

// it is a class, why needs a class
// create instance
class TodoStore {
  // todos is array, reactive
  @observable todos = ["buy milk", "buy eggs"];
  @observable filter = '';
}

// assign the instance to window.store
// can use dev console
var store = window.store = new TodoStore;

export default store;

// auto run, auto run on dev tool
/*
autorun(() => {
  console.log('--- print ----');
  console.log(store.filter);
  console.log(store.todos[0]);
});
*/
