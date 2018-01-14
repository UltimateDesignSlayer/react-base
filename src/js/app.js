import React, {Component} from 'react'; // used to create and manage components
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   items: []
    // };
  }

  render() {
    return (
      <div>
        <Textblock />
      </div>
    ); //JSX
  }
}


// Output component to physical DOM.
ReactDOM.render(<App />, document.querySelector('.js-app-container'));

require('../sass/style.scss'); //Style entry point
