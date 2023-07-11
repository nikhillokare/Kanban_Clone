import React, { useState } from "react";
import Section from "./Section";
import TodoCard from "./TodoCard";
import { t1_members } from "../assets/images";
import { todos } from "../constants";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";

const Todos = () => {
  const [todoItems, setTodoItems] = useState(todos.slice(0, 4));
  const [progressTodos, setProgressTodos] = useState(todos.slice(4, 7));
  const [completed, setCompleted] = useState(todos.slice(7, 11));
  const sections = [
    {
      heading: "todo",
      isAdd: true,
      color: "bg-purple",
      todos: todoItems,
      count: todoItems.length,
    },
    {
      heading: "on progress",
      color: "bg-orange",
      todos: progressTodos,
      count: progressTodos.length,
    },
    {
      heading: "completed",
      color: "bg-green-500",
      todos: completed,
      count: completed.length,
    },
  ];

  const handleDragEnd = (result: DropResult) => {
    console.log(result);
    const { destination, draggableId, type, source } = result;
    if (!result.destination) return;

    if (source.droppableId == destination?.droppableId) {
      if (source.droppableId == "todo") {
        const elementToMove = todoItems[source.index];
        const array = todoItems.slice();
        array.splice(source.index, 1);
        array.splice(destination.index, 0, elementToMove);

        setTodoItems([...array]);
      }
      if (source.droppableId == "on progress") {
        const elementToMove = progressTodos[source.index];
        const array = progressTodos.slice();
        array.splice(source.index, 1);
        array.splice(destination.index, 0, elementToMove);

        setProgressTodos([...array]);
      }
      if (source.droppableId == "completed") {
        const elementToMove = completed[source.index];
        const array = completed.slice();
        array.splice(source.index, 1);
        array.splice(destination.index, 0, elementToMove);

        setCompleted([...array]);
      }
    }

    if (source.droppableId !== destination?.droppableId) {
      if (source.droppableId == "todo") {
        const elementToMove = todoItems[source.index];

        setTodoItems(todoItems.filter((item, i) => i !== source.index));

        if (destination?.droppableId == "on progress") {
          const array = progressTodos.slice();
          array.splice(destination.index, 0, elementToMove);

          setProgressTodos(array);
        }
        if (destination?.droppableId == "completed") {
          const array = completed.slice();
          array.splice(destination.index, 0, elementToMove);

          setCompleted(array);
        }
      }
      if (source.droppableId == "on progress") {
        const elementToMove = progressTodos[source.index];

        setProgressTodos(progressTodos.filter((item, i) => i !== source.index));

        if (destination?.droppableId == "todo") {
          const array = todoItems.slice();
          array.splice(destination.index, 0, elementToMove);

          setTodoItems(array);
        }
        if (destination?.droppableId == "completed") {
          const array = completed.slice();
          array.splice(destination.index, 0, elementToMove);

          setCompleted(array);
        }
      }
      if (source.droppableId == "completed") {
        const elementToMove = completed[source.index];

        setCompleted(completed.filter((item, i) => i !== source.index));

        if (destination?.droppableId == "todo") {
          const array = todoItems.slice();
          array.splice(destination.index, 0, elementToMove);

          setTodoItems(array);
        }
        if (destination?.droppableId == "on progress") {
          const array = progressTodos.slice();
          array.splice(destination.index, 0, elementToMove);

          setProgressTodos(array);
        }
      }
    }
  };

  return (
    <div className="grid lg:grid-cols-3 gap-4">
      <DragDropContext onDragEnd={handleDragEnd}>
        {sections.map(({ color, count, heading, todos, isAdd }) => (
          <Droppable droppableId={heading} direction="vertical" key={heading}>
            {(provided) => (
              <div
                className="bg-light-gray rounded-xl overflow-hidden"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <Section
                  title={heading}
                  count={count}
                  color={color}
                  isAdd={isAdd}
                >
                  {todos.map(
                    (
                      {
                        comments,
                        files,
                        heading,
                        id,
                        membersImage,
                        priority,
                        description,
                        images,
                      },
                      i
                    ) => (
                      <Draggable
                        key={heading}
                        draggableId={id.toString()}
                        index={i}
                      >
                        {(provided) => (
                          <div
                            key={id}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <TodoCard
                              comments={comments}
                              files={files}
                              title={heading}
                              priority={priority}
                              members={membersImage}
                              key={id}
                            >
                              {description && <p>{description}</p>}
                              <div className="flex gap-2 empty:hidden">
                                {images &&
                                  images.map((image, i) => (
                                    <img
                                      key={image}
                                      className="rounded-md shrink min-w-[5rem] w-full h-auto"
                                      src={image}
                                      alt=""
                                    />
                                  ))}
                              </div>
                            </TodoCard>
                          </div>
                        )}
                      </Draggable>
                    )
                  )}
                </Section>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </DragDropContext>
    </div>
  );
};

export default Todos;
