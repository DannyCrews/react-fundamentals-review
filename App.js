import React from 'react';

// class component
class App extends React.Component {
  constructor(){
    super();  // gives us our context for 'this' wihtin our component
    this.state = {
      txt: 'this is the state txt',
      cat: 0
    }
  }

  update(e){
    this.setState({txt: e.target.value});
  }


  render(){
    return (
    <div>
      <input type='text'
        onChange={this.update.bind(this)} />
      <h1>{this.state.txt}</h1>
    </div>
    );
  }
}

// stateless function component
//const App = () => <h1>Hello Eggheads</h1>

export default App;
