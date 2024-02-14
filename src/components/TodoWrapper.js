import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";
import { EditTodoForm } from "./EditTodoForm";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]); //array형태
  const [nextId, setNextId] = useState(1); // 다음 아이템의 id를 관리하는 상태값

  // TodoForm에서 온 value(todo)가 매개변수
  const addTodo = (todo) => {
    const newTodo = {
      id: nextId,
      task: todo,
      completed: false,
      isEditing: false,
    };
    if (todo.trim() === "") {
      alert("할 일을 입력하세요");
      return;
    }
    setTodos([...todos, newTodo]); // 새로운 todo를 todos 배열에 추가
    setNextId(nextId + 1); // 다음 아이템의 id를 1 증가시킴
    console.log(todos);
  };

  //completed 값을 토글(반전)하는 역할
  const toggleComplete = (id) => {
    //setTodos라는 함수를 호출하여 todos라는 배열을 업데이트
    setTodos(
      todos.map((todo) =>
        //todo.id가 id와 일치할 경우, 해당 요소의 completed 속성을 현재 값의 반대로 변경한 객체를 반환
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    //todos 배열에서 id와 일치하지 않는 요소들로 새로운 배열 생성
    //Array.filter() 메서드는 필터링 조건을 만족하는 요소들로 이루어진 새로운 배열을 반환
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(
      //id가 매개변수로 받은 id와 일치하는지 확인하고, 일치하면 해당 요소의 isEditing 속성을 반전시킵니다
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  //id를 매개변수로 받아와서 todos 배열을 업데이트
  const editTask = (task, id) => {
    setTodos(
      //todos 배열을 순회하면서 각 요소를 확인
      //매개변수로 받은 id와 일치하는지 확인하고, 일치하면 task값을 바꾸고, 해당 요소의 isEditing 속성을 반전
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <h1>To do List</h1>
      {/* addTodo라는 prop을 전달 */}
      <TodoForm addTodo={addTodo}></TodoForm>

      {/* todos 배열을 순회하면서 각각의 todo를 <Todo> 컴포넌트로 렌더링 (todos 배역의 각 요소를 todo로)*/}
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo}></EditTodoForm>
        ) : (
          <Todo
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          ></Todo>
        )
      )}
    </div>
  );
};
