import React, { useState } from "react";
// 사용자 입력을 추적하기 위해 useState

//props로 받은 editTodo 함수, task를 이용
export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task); //수정버튼 누르면, 기존의 내용 보여주기

  const handleSubmit = (e) => {
    e.preventDefault(); //form이 제출되면서 페이지가 괜히 새로고침되지 않도록 설정
    editTodo(value, task.id); //useState를 통해 받은 value값
    setValue(""); //enter 치면 내용이 지워지도록
  };

  return (
    //<form> 요소에 onSubmit 핸들러에 의해 제출되면 넘어감
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="Update Task"
        onChange={(e) => setValue(e.target.value)} //연하게 아래에 적히도록 하는 속성
      ></input>
      <button type="submit" className="todo-btn">
        Update
      </button>
    </form>
  );
};
