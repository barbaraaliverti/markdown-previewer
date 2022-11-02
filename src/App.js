import React from 'react';
import { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Editor from './components/Editor';
import Preview from './components/Preview';
import Footer from './components/Footer';

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://www.svgrepo.com/show/327388/logo-react.svg)
`;

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      input: placeholder
    }
    
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange (event) {
    this.setState({
      input: event.target.value
    });
  }
  
  render() {
    return (
    <div>  
      <Header />
      <div className="row">
        <Editor input={this.state.input} handleChange={this.handleChange}/>
        <Preview input={this.state.input}/>
      </div>
      <Footer />
    </div>
    )
  }
}

export default App;
