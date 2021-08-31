import React, { Component } from "react";

class ShoppingCartList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card mb-3" style={{ width: "50%" }}>
        <div className="row g-0">
          <div
            className="col-md-4"
            style={{
              backgroundColor: "lavender",
              width: "auto",
              height: "auto",
              marginLeft: "10px",
              marginTop: "20px",
            }}
          >
            <br></br>
            <img
              class="w-2 h-10"
              style={{
                height: "150px",
                marginLeft: "10px",
                display: "flex",
                flexDirectio: "column",
              }}
              src="/images/shritblue.png"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Blue denim shirt</h5>
              <p className="card-text">SHRIT : BLUE</p>
              <p className="card-text">COLOR : BLUE</p>
              <p className="card-text">SIZE : M</p>
              <p className="fa fa-trash">REMOVE ITEM</p>
              <p className="fa fa-heart" style={{ marginLeft: "10px" }}>
                MOVE TO WITH LIST
              </p>
              <p style={{ marginLeft: "10px" }}>$17.99</p>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="row g-0">
          <div
            className="col-md-4"
            style={{
              backgroundColor: "lavender",
              width: "160px",
              marginLeft: "10px",
              marginBottom: "20px",
            }}
          >
            <br></br>
            <img
              class="w-2 h-10"
              style={{
                height: "150px",
                marginLeft: "10px",
                alignContent:"center",
                display: "flex",
                flexDirectio: "column",
              }}
              src="/images/redhoddie.png"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Red hoodie</h5>
              <p className="card-text">HOODIE : RED</p>
              <p className="card-text">COLOR : RED</p>
              <p className="card-text">SIZE : M</p>
              <p className="fa fa-trash">REMOVE ITEM</p>
              <p className="fa fa-heart" style={{ marginLeft: "10px" }}>
                MOVE TO WITH LIST
              </p>
              <p style={{ marginLeft: "10px" }}>$35.99</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShoppingCartList;
