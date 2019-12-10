/**
 * TODO: Import the LitElement base class and html helper function.
 */
import { LitElement, html } from "../web_modules/lit-element.js";

import bootstrapStyle from "../web_modules/@granite-elements/granite-lit-bootstrap.js";

/**
 * TODO: Create a class for your element that extends the LitElement
 * base class.
 */
class BeerListItem extends LitElement {
  render() {
    return html`
      <style>
        .beer {
          margin: 10px;
          padding: 10px;
          border: solid 1px black;
          border-radius: 10px;
          min-height: 50px;
        }
        .el-img {
          max-height: 100px;
        }
        .el-alcohol {
          clear: both;
        }
      </style>
      <div id="${this.id}" class="beer clearfix">
        <img class="float-right el-img" src="./data/beers/${this.img}" />
        <a href="#/beer/${this.id}">
          <h2 class="el-name">${this.name}</h2>
        </a>   
        <p class="el-description">${this.description}</p>
        <p class="float-right el-alcohol">Alcohol content: ${this.alcohol}%</p>
      </div>
    `;
  }

  static get properties() {
    return {
      id: {
        type: String
      },
      name: {
        type: String
      },
      description: {
        type: String
      },
      img: {
        type: String
      },
      alcohol: {
        type: String
      }
    };
  }

  static get styles() {
    return bootstrapStyle;
  }

  constructor() {
    super();
    this.name = "A beer";
    this.description = "Description of the beer";
  }
}

/**
 * TODO: Register the new element with the browser.
 */
customElements.define("beer-list-item", BeerListItem);
