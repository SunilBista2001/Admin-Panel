import React from "react";

function SuccessNotification({ message }) {
  return (
    <div
      className="ui-pnotify "
      style={{
        width: "300px",
        right: " 1018px",
        top: "15px",
        opacity: 1,
        cursor: "auto",
      }}
    >
      <div
        className="notification ui-pnotify-container notification-success"
        style={{ minHeight: "16px" }}
      >
        <div
          className="ui-pnotify-closer cursor-pointer "
          style={{ visibility: " hidden" }}
        >
          <span className="fas fa-times" title="Close"></span>
        </div>
        <div
          className="ui-pnotify-sticker cursor-pointer"
          style={{ visibility: "hidden" }}
        >
          <span className="fas fa-pause" title="Stick"></span>
        </div>
        <div className="ui-pnotify-icon">
          <span className="fas fa-check"></span>
        </div>
        {/* <h4 className="ui-pnotify-title">{title}</h4> */}
        <div className="ui-pnotify-text">{message}</div>
        <div
          style={{
            marginTop: " 5px",
            clear: " both",
            textAlign: " right",
            display: "none",
          }}
        ></div>
      </div>
    </div>
  );
}

export default SuccessNotification;
