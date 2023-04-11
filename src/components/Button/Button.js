import React from "react";

function Button({ title }) {
  return (
    <button type="button" class="mb-1 mt-1 me-1 btn btn-primary">
      {title}
    </button>
  );
}

export default Button;
