// react
import React from "react";
import { observer } from "mobx-react";

// export default
// class
// todo list
@observer
export default class TodoList extends React.Component {
  render() {
    return (
      <div>
      <h1>{this.props.store.todos[0]}</h1>
      <p>something</p>
      </div>
    );
  }
}
