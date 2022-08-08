import React from "react";
import "./index.css";
const CollapseMenu = () => {
  return (
    <div>
      <div class="collapse">
        <div class="collapse__item">
          <input type="checkbox" id="collapse-1" class="collapse__checkbox" />
          <label for="collapse-1" class="collapse__header">
            <h6 class="collapse__h6">Title 1</h6>
            <img
              src="https://cdn-icons-png.flaticon.com/512/32/32195.png"
              class="collapse__svg"
              alt="asd"
            />
          </label>
          <div class="collapse__content">
            <span class="collapse__span">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              aliquid cumque doloremque nostrum incidunt, deserunt ea tempora!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollapseMenu;
