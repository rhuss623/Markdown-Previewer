import React, { Component } from 'react';

const marked = require("marked"); //this will be used to convert to HTML
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
}); //these are options for marked

class App extends Component {
  state = {
    text: ""
  } 
  handleChange = (event) => {
    this.setState({
        text: event.target.value
    }) //when change occurs (i.e. typing into the textarea), this.state.text will change
}
  render() {
    return (
      <div className="App">
      <div className="container z-depth-5">
      <h1 className="blue-text">Markdown Previewer</h1>
      <p>Coded by Ryan Hussey</p>
      <hr />
      <textarea className="z-depth-1" placeholder="Type Here" id="editor" onChange={ this.handleChange } /> {/* onChange is set to the handleChange function, z-depth-1 is a materialize class for shadowing */}
      <span className="center" id="preview" dangerouslySetInnerHTML= {{__html: marked(this.state.text)}} /> {/*dangerouslySetInnerHTML will convert HTML to markdown, the text in the state is converted to html w/ marked() */}
      </div>
      </div>
    );
  }
}

export default App;
