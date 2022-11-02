import { React, Component } from 'react';

class Editor extends Component {
  
  render () {
    return (
    <div className="col-sm-6">
      <div  className="card bg-light mb-3">
        <div  className="card-header">
          Editor</div>
        <div className="card-body">
          <textarea id="editor" value={this.props.input} onChange={this.props.handleChange}  className="bg-transparent" placeholder="Write your text here..."></textarea>
        </div>
      </div>
    </div>
  )
 }  
}

export default Editor;