const Tasks= (props) => {
    return (
      <div className="taskapp stack-large">
        <h1>Tasks</h1>
        <form>
          <h2 className="label-wrapper">
            <label htmlFor="new-task-input" className="label__lg">
              What needs to be done?
            </label>
          </h2>
          <input
            type="text"
            id="new-task-input"
            className="input input__lg"
            name="text"
            autoComplete="off"
          />
          <button type="submit" className="btn btn__primary btn__lg">
            Add
          </button>
        </form>
        <div className="filters btn-group stack-exception">
          <button type="button" className="btn toggle-btn" aria-pressed="true">
            <span className="visually-hidden">Show </span>
            <span>all</span>
            <span className="visually-hidden"> tasks</span>
          </button>
          <button type="button" className="btn toggle-btn" aria-pressed="false">
            <span className="visually-hidden">Show </span>
            <span>Active</span>
            <span className="visually-hidden"> tasks</span>
          </button>
          <button type="button" className="btn toggle-btn" aria-pressed="false">
            <span className="visually-hidden">Show </span>
            <span>Completed</span>
            <span className="visually-hidden"> tasks</span>
          </button>
        </div>
        <h2 id="list-heading">
          3 tasks remaining
        </h2>
          <li className="task">
            <div className="c-cb">
              <input id="task-0" type="checkbox" defaultChecked={true} />
              <label className="task-label" htmlFor="task-0">
                Request police report
              </label>
            </div>
            <div className="btn-group">
              <button type="button" className="btn">
                Edit <span className="visually-hidden">Task 1</span>
              </button>
              <button type="button" className="btn btn__danger">
                Delete <span className="visually-hidden">Taks 1</span>
              </button>
            </div>
          </li>
          <li className="task">
            <div className="c-cb">
              <input id="task-1" type="checkbox" />
              <label className="task-label" htmlFor="task-1">
                Inspect vehicle
              </label>
            </div>
            <div className="btn-group">
              <button type="button" className="btn">
                Edit <span className="visually-hidden">Task 2</span>
              </button>
              <button type="button" className="btn btn__danger">
                Delete <span className="visually-hidden">Task 2</span>
              </button>
            </div>
          </li>
          <li className="task">
            <div className="c-cb">
              <input id="task-2" type="checkbox" />
              <label className="task-label" htmlFor="task-2">
                File claim
              </label>
            </div>
            <div className="btn-group">
              <button type="button" className="btn">
                Edit <span className="visually-hidden">Task 3</span>
              </button>
              <button type="button" className="btn btn__danger">
                Delete <span className="visually-hidden">Task 3</span>
              </button>
            </div>
          </li>
      </div>
    );
  }
  export default Tasks;