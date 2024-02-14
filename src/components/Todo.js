import React from "react";

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="Todo">
      <input
        class="custom-checkBox"
        type="checkbox"
        onClick={() => toggleComplete(task.id)}
      ></input>
      {/* task로 받은 todos배열의 todo요소의 task에 접근 */}
      <p
        onClick={() => toggleComplete(task.id)} //클릭 이벤트가 발생했을 때 toggleComplete 함수 호출
        className={`${task.completed ? "completed" : ""}`}
      >
        {task.task}
      </p>
      <div id="control-button">
        {/* 수정 버튼 */}
        <img
          src="/draw.png"
          class="edit"
          onClick={() => editTodo(task.id)}
        ></img>
        {/* 삭제 버튼 */}
        <img
          src="/delete.png"
          class="delete"
          onClick={() => deleteTodo(task.id)}
        ></img>
      </div>
    </div>
  );
};
