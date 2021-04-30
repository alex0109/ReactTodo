import React from 'react';

const Task = ({task, ...props}) => {
    const ActionBtn = () => <div className="action-btn">{!task.done ? <p onClick={props.doneTask}>✔️</p> : <p onClick={props.deleteTask}>❌</p>}</div>
    
    const className = task.done ? 'task-done task' : 'task';

    return (
        <div className={className}>
            <p className="title">{task.title}</p>
            <ActionBtn/>
        </div>
    );
};

export default Task;