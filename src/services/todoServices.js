import axios from "axios";

export class todoServices {
  static SERVER_URL = "http://localhost:4000";

  static getAllTodos() {
    const dataURL = `${this.SERVER_URL}/todos`;
    return axios.get(dataURL);
  }

  static getDeletedTodos() {
    const dataURL = `${this.SERVER_URL}/deleted`;
    return axios.get(dataURL);
  }
  static postTodo(todo) {
    const dataURL = `${this.SERVER_URL}/todos`;
    return axios.post(dataURL, todo);
  }

  static postDeletedTodo(todo) {
    const dataURL = `${this.SERVER_URL}/deleted`;
    return axios.post(dataURL, todo);
  }

  static updateTodo(id, updatedData) {
    const dataURL = `${this.SERVER_URL}/todos/${id}`;
    return axios.patch(dataURL, updatedData);
  }

  static deleteTodo(id) {
    return axios.delete(`${this.SERVER_URL}/todos/${id}`);
  }
}
