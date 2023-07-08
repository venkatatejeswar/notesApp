import styled from 'styled-components'

export const NoteListItem = styled.li`
  border: 1px solid #bfbfbf;
  width: 95%;
  padding: 20px;
  margin-bottom: 16px;
  margin-right: 16px;
  margin-left: 0px;
  border-radius: 16px;
  min-height: 200px;
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`
export const TitleContainer = styled.h1`
  color: #334155;
  font-size: 26px;
  font-weight: 600;
`

export const NoteText = styled.p`
  color: #475569;
  font-weight: 400;
`
