marked.setOptions({
  breaks: true });


const Header = () => {
  return /*#__PURE__*/(
    React.createElement("header", null, /*#__PURE__*/
    React.createElement("nav", { className: "navbar navbar-dark bg-dark" }, /*#__PURE__*/
    React.createElement("h1", { className: "navbar-brand" }, "## Markdown previewer"))));



};

class Editor extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "col-sm-6" }, /*#__PURE__*/
      React.createElement("div", { className: "card bg-light mb-3" }, /*#__PURE__*/
      React.createElement("div", { className: "card-header" }, "Editor"), /*#__PURE__*/

      React.createElement("div", { className: "card-body" }, /*#__PURE__*/
      React.createElement("textarea", { id: "editor", value: this.props.input, onChange: this.props.handleChange, className: "bg-transparent", placeholder: "Write your text here..." })))));




  }}



class Preview extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "col-sm-6" }, /*#__PURE__*/
      React.createElement("div", { class: "card bg-light mb-3" }, /*#__PURE__*/
      React.createElement("div", { className: "card-header" }, "Text preview"), /*#__PURE__*/

      React.createElement("div", { className: "card-body" }, /*#__PURE__*/
      React.createElement("div", { id: "preview", className: "card-text", dangerouslySetInnerHTML: {
          __html: marked(this.props.input) } })))));




  }}


const Footer = () => {
  return /*#__PURE__*/(
    React.createElement("footer", { className: "footer" }, /*#__PURE__*/
    React.createElement("div", { className: "container text-center" }, /*#__PURE__*/
    React.createElement("span", { className: "text-muted" }, "by ", /*#__PURE__*/React.createElement("a", { id: "footer-link", href: "https://codepen.io/baloobali/full/LYpjjJW", target: "blank", className: "text-muted" }, "baloobali")))));



};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: placeholder };


    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value });

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement(Header, null), /*#__PURE__*/
      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement(Editor, { input: this.state.input, handleChange: this.handleChange }), /*#__PURE__*/
      React.createElement(Preview, { input: this.state.input })), /*#__PURE__*/

      React.createElement(Footer, null)));


  }}


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

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('page'));