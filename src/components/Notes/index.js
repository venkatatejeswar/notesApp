import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'
import {
  NotesContainer,
  Title,
  FormContainer,
  FormTitleInput,
  FormTextarea,
  AddBtn,
  ButtonContainer,
  NoNotesContainer,
  NoNotesImage,
  NoNotesTitle,
  NoNotesText,
  NotesList,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [notesList, setNotesList] = useState([])
  const onTitle = event => {
    setTitle(event.target.value)
  }
  const onText = event => {
    setText(event.target.value)
  }
  const onAddNote = event => {
    event.preventDefault()
    if (title !== '' && text !== '') {
      const newNote = {
        id: uuidv4(),
        title,
        text,
      }
      setTitle('')
      setText('')
      setNotesList(prevList => [...prevList, newNote])
    }
  }

  const renderNoNotes = () => (
    <NoNotesContainer>
      <NoNotesImage
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <NoNotesTitle>No Notes Yet</NoNotesTitle>
      <NoNotesText>Notes you add will appear here</NoNotesText>
    </NoNotesContainer>
  )

  const renderNotesList = () => (
    <NotesList>
      {notesList.map(each => (
        <NoteItem note={each} key={each.id} />
      ))}
    </NotesList>
  )

  return (
    <NotesContainer>
      <Title>Notes</Title>
      <FormContainer onSubmit={onAddNote}>
        <FormTitleInput
          placeholder="Title"
          type="text"
          value={title}
          onChange={onTitle}
        />
        <FormTextarea
          rows="6"
          cols="80"
          placeholder="Take a note..."
          onChange={onText}
          value={text}
        />
        <ButtonContainer>
          <AddBtn type="submit">Add</AddBtn>
        </ButtonContainer>
      </FormContainer>

      {notesList.length === 0 ? renderNoNotes() : renderNotesList()}
    </NotesContainer>
  )
}

export default Notes
