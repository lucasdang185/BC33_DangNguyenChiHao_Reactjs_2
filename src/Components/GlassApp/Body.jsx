import React, { Component } from "react";
import data from "./dataGlasses.json";
import '../StyleGlasses/style.css'



export default class extends Component {
  state = {
    isHide: false,
    isShow: true,
    kinh: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./img/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };
  render() {
    return (
      <div className="body">
        <div className="background-dark">
          <div className="container">
            <div className="row justify-content-around">
              <div className="col-md-6 col-lg-4 left">
                <div className="vglasses__card">
                  <div className="vglasses__model" id="avatar">
                    <div className="test_glasses">
                      <img src="./img/v7.png" alt="..." />
                    </div>
                  </div>
                  <div id="glassesInfo" className="vglasses__info">
                    <h1>FENDI F8750</h1>
                    <p>
                      Light pink square lenses define these sunglasses, ending
                      with amother of pearl effect tip.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 right">
                <div className="vglasses__card">
                  <div className="vglasses__model" id="avatar">
                    {this.state.isHide && (
                      <div className="test_glasses">
                        <img src={this.state.kinh.url} alt="..." />
                      </div>
                    )}
                  </div>
                  {this.state.isHide && (
                    <div id="glassesInfo" className="vglasses__info">
                      <h1>{this.state.kinh.name}</h1>
                      <p>{this.state.kinh.desc}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="glasses_list">
              {this.state.isShow && (
                <div className="row">
                  {data.map((glass, index) => {
                    return (
                      <div
                        className="col-4 glasses-item"
                        key={glass.id}
                      >
                        <a
                          onClick={() => {
                            this.setState({
                              kinh: glass,
                              isHide: true,
                            });
                          }}
                        >
                          <img src={`./img/g${glass.id}.jpg`} alt="..." />
                        </a>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
