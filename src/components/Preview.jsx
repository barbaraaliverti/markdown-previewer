import { React, Component } from 'react';
import ReactMarkdown from 'react-markdown';

class Preview extends Component {
  

  render () {
    return (
      <div className="col-sm-6">
        <div className="card bg-light mb-3">
          <div className="card-header">
            Text preview
          </div>
          <div className="card-body preview">
            <div id="preview" className="card-text">           
              <ReactMarkdown children={this.props.input}/>           
            </div>
          </div>
      </div>
    </div>
    )
  }  
}

export default Preview;