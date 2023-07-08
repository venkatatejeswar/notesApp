import {NoteListItem, TitleContainer, NoteText} from './styledComponents'

const NoteItem = props => {
  const {note} = props
  const {title, text} = note
  return (
    <NoteListItem>
      <TitleContainer>{title}</TitleContainer>
      <NoteText>{text}</NoteText>
    </NoteListItem>
  )
}

export default NoteItem
