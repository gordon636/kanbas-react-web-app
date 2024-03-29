import Classes from "./Classes";
import { Styles } from "./Styles";
import JavaScript from "./JavaScript";
import PathParameters from "./routing/PathParameters";
import ConditionalOutput from "./ConditionalOutput";
import Highlight from "./Highlight";
import Add from "./Add";
import TodoList from "./todos/TodoList";
import TodoItem from "./todos/TodoItem";


function Assignment3() {
    return (
        <div className="container">
            <h1>Assignment 3</h1>
            <TodoList />
            <TodoItem />
            <Add a={3} b={4} />
            <Highlight>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
                vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
            </Highlight>
            <ConditionalOutput />
            <Styles />
            <Classes />
            <PathParameters />
            <JavaScript />
        </div>
    );
}
export default Assignment3;