import React, { Component, createRef } from 'react'

 class Useref extends Component {
    constructor(){
        super();
        this.inputRef=createRef()
    }
    componentDidMount()
    {
        console.log(this.inputRef.current.value="")
        
    }
    getvalue(){
        console.log(this.inputRef.current.value="Nupur")
        this.inputRef.current.style.color="red";
        this.inputRef.current.style.backgroundColor="skyblue"
    }
  render() {
    return (
      <div>
        <div>className='App'</div>
      <h1>Ref in React</h1>
      <button onClick={()=>this.getvalue()}>checked ref</button><br/><br/>
      <input type='text' ref={this.inputRef}></input>
      </div>
    )
  }
}

export default Useref