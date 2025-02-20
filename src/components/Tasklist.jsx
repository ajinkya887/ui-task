import React, { useState } from "react";
import { AiOutlineControl } from "react-icons/ai";
import "../styles/Tasklist.css";
import { taskGroups, taskOptions } from "../data/TaskData";

const TaskList = () => {
  const [activeTab, setActiveTab] = useState("Table");
  const [hoveredTask, setHoveredTask] = useState(null);

  return (
    <div className="task-container">
      <div className="task-header">
        <h1>Your Task List</h1>
        <button className="filter-button">
          <AiOutlineControl className="filter-icon" />
          Filter
        </button>
      </div>

      <div className="view-tabs">
        {["Table", "Board", "Calendar"].map((tab) => (
          <button
            key={tab}
            className={`tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="task-groups">
        {taskGroups.map((group) => (
          <div key={group.name} className="task-group">
            <div
              className="group-header"
              style={{
                backgroundColor: group.bgColor,
                border: `1px solid ${group.color}`,
              }}
            >
              <div className="group-title">
                <span
                  className="dot"
                  style={{ backgroundColor: group.color }}
                ></span>
                <span className="group-name" style={{ color: group.color }}>
                  {group.name}
                </span>
              </div>
              <button className="add-task-button">
                <span className="add-task-icon">+</span>
              </button>
            </div>

            <div className="task-table">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Start Date</th>
                    <th>Due Date</th>
                    <th>Priority</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {group.tasks.map((task, index) => (
                    <tr
                      key={index}
                      onMouseEnter={() => setHoveredTask(task)}
                      onMouseLeave={() => setHoveredTask(null)}
                      className={hoveredTask === task ? "hovered" : ""}
                    >
                      <td className="task-name">{task.name}</td>
                      <td className="start-date">{task.startDate}</td>
                      <td className="due-date">{task.dueDate}</td>
                      <td>
                        <span
                          className={`priority ${task.priority.toLowerCase()}`}
                        >
                          {task.priority}
                        </span>
                      </td>
                      <td>
                        <span className={`status ${task.status.toLowerCase()}`}>
                          {task.status}
                        </span>
                      </td>

                      {/* Task Options - Show only when hovered */}
                      {hoveredTask === task && (
                        <td className="task-options">
                          {taskOptions.map((option, index) => (
                            <button
                              key={index}
                              className="option-button"
                              style={{
                                color:
                                  option.label === "Delete Folder"
                                    ? "red"
                                    : "black",
                              }}
                            >
                              <span>{option.icon}</span>
                              <span>{option.label}</span>
                            </button>
                          ))}
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
