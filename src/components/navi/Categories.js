import React, { Component } from "react";

class Categories extends Component {
  render() {
    return (
      <div>
        <div align="center">
          {" "}
          <button class="btn btn-default filter-button" data-filter="all">
            Hepsini Göster
          </button>{" "}
          <button class="btn btn-default filter-button" data-filter="hdpe">
           Erkek Spor
          </button>{" "}
          <button class="btn btn-default filter-button" data-filter="sprinkle">
           Kadın Spor
          </button>{" "}
          <button class="btn btn-default filter-button" data-filter="spray">
            Çocuk Spor
          </button>{" "}
        </div>{" "}
        <br />
      </div>
    );
  }
}

export default Categories;
