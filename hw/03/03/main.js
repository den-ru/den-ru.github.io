const DEFAULT_COLOR = 'yellow';
const COLORS = ['brown', 'green', 'blue', 'magenta', 'red', 'orange', 'white'];
const Note = React.createClass({
    handleDelete() {
        this.props.onDelete(this.props.id);
    },

    render() {
        const {
            color,
            children,
            onDelete
        } = this.props;

        return (
            <div className="note" style={{ backgroundColor: color }}>
                <span className="note__delete-icon" onClick={this.handleDelete}> × </span>
                {children}
            </div>
        );
    }
});

const NoteEditor = React.createClass({
    getInitialState() {
        return {
            text: '',
            color: DEFAULT_COLOR
        };
    },

    handleTextChange(event) {
        this.setState({
            text: event.target.value
        });
    },
    handleColorChange(color) {
        this.setState({
            color: color
        });
    },
    handleNoteAdd() {
        const newNote = {
            text: this.state.text,
            color: this.state.color,
            id: Date.now()
        };

        this.props.onNoteAdd(newNote);

        this.resetState();
    },

    resetState() {
        this.setState({
            text: '',
            color: DEFAULT_COLOR
        });
    },

    render() {
        return (
            <div className="editor">
                <textarea
                    rows={5}
                    placeholder="Enter your note here..."
                    className="editor__textarea"
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />
                <div className="colorSwitcher">
                    {
                    COLORS.map(color =>
                            <ColorButton
                                key={color}
                                color={color}
                                selected={this.state.color == color}
                                onColorChange={this.handleColorChange}
                            />
                        )
                    }
                </div>
                <button className="editor__button" onClick={this.handleNoteAdd}>Add</button>
            </div>
        );
    }
});

const ColorButton = React.createClass({
    handleColorClick(){
        this.props.onColorChange(this.props.color);
    },
    render() {
        return (
            <div className="colorChoice">
                <button className="color__button" onClick={this.handleColorClick} style={{background:this.props.color}}>
                    {
                        this.props.selected &&
                        <i className="fa fa-check" aria-hidden="true"></i>
                    }
                </button>
            </div>
        );
    }
});

const NotesGrid = React.createClass({
    componentDidMount() {
        const grid = this.grid;

        this.msnry = new Masonry(grid, {
            columnWidth: 240,
            gutter: 10,
            isFitWidth: true
        });
    },

    componentDidUpdate(prevProps) {
        if (this.props.notes.length !== prevProps.notes.length) {
            this.msnry.reloadItems();
            this.msnry.layout();
        }
    },

    render() {
        const {
            notes,
            onNoteDelete
        } = this.props;

        return (
            <div className="grid" ref={c => this.grid = c}>
                {
                    notes.map(note =>
                        <Note
                            key={note.id}
                            id={note.id}
                            color={note.color}
                            onDelete={onNoteDelete}
                        >
                            {note.text}
                        </Note>
                    )
                }
            </div>
        );
    }
});

const NotesApp = React.createClass({
    getInitialState() {
        return {
            notes: []
        };
    },

    componentDidMount() {
        const savedNotes = JSON.parse(localStorage.getItem('notes'));

        if (savedNotes) {
            this.setState({ notes: savedNotes });
        }
    },

    componentDidUpdate() {
        const notes = JSON.stringify(this.state.notes);

        localStorage.setItem('notes', notes);
    },

    handleNoteDelete(noteId) {
        this.setState({
            notes: this.state.notes.filter(note => note.id !== noteId)
        });
    },

    handleNoteAdd(newNote) {
        this.setState({
            notes: [newNote, ...this.state.notes]
        });
    },

    render() {
        return (
            <div className="app">
                <h2 className="app__header">NotesApp</h2>

                <NoteEditor onNoteAdd={this.handleNoteAdd} />

                <NotesGrid
                    notes={this.state.notes}
                    onNoteDelete={this.handleNoteDelete}
                />
            </div>
        );
    }
});

ReactDOM.render(
    <NotesApp />,
    document.getElementById('root')
);
