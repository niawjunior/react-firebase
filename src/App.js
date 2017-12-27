import React, { Component } from 'react';
import Note from './Note/Note';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [
        { id: 1, noteContent: "Note 1 here"},
        { id: 2, noteContent: "Note 2 here"},
      ],
    }
  }

  render() {
    return (
      <div className="notesWrapper">
        <div className="notesHeader">
            <h1>TODO-LIST</h1>
         </div>
        <div className="notesBody">
          {
            this.state.notes.map((note) => {
              return (
                <Note noteContent={note.noteContent} noteId={note.id} key={note.id}/>
              )
            })
          }
        </div>
        <div className="notesFooter">
          Footer
        </div>
      </div>
    );
  }
}


export default App;
