export const Task = props => {
  return (
    <div className="task-box">
      <h2
        style={{
          color: props.complete === true ? 'green' : '',
          textDecoration: props.complete === true ? 'line-through' : '',
        }}
      >
        {props.taskName}
      </h2>
      <div className="task-btns">
        <button
          onClick={() => {
            props.completeTask(props.id);
          }}
        >
          <i class="fa-solid fa-check"></i>
        </button>
        <button
          onClick={() => {
            props.deleteTask(props.id);
          }}
        >
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
  );
};
