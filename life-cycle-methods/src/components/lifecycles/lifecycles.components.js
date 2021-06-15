import React from "react";

class Lifecycles extends React.Component {
  constructor() {
    super();
    console.log("constructor!");
  }

  componentDidMount() {
    console.log("componentDidMount!");
  }

  static getDerivedStateFrompops(props,state){

    return {
        example : props.stateExample
    }
  }

  componentDidUpdate() {
    console.log("componentDidUpdate!");
}

componentWillUnmount(){
  console.log("componentWillUnmount!");
}

shouldComponentUpdate(nextProps,nextState){
    console.log('shouldComponentUpdate!',nextProps);
    return true;
}

render(){
    console.log("render!!!");
}

}
