import styled from 'styled-components'

export const NotesContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 25px;
`

export const Title = styled.h1`
  color: #4c63b6;
  font-size: 32px;
  font-weight: 600;
  font-family: 'Bree Serif';
  @media screen and (min-width: 768px;) {
    font-size: 36px;
  }
`
export const FormContainer = styled.form`
  box-shadow: 0px 4px 16px 0px #bfbfbf;
  border-radius: 8px;
  width: 90%;
  padding: 20px;
  max-width: 760px;
`
export const FormTitleInput = styled.input`
  height: 25px;
  width: 95%;
  border: none;
  outline: none;
  margin-bottom: 20px;
`

export const FormTextarea = styled.textarea`
  width: 95%;
  border: none;
  outline: none;
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const AddBtn = styled.button`
  background-color: #4c63b6;
  color: #ffffff;
  border-radius: 3px;
  padding: 8px;
  border: none;
  cursor: pointer;
  outline: none;
  font-size: 14px;
  margin-left: 95%;
`

export const NoNotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const NoNotesImage = styled.img`
  width: 80px;
  height: 80px;
  margin-top: 40px;
`
export const NoNotesTitle = styled.h1`
  color: #475569;
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0px;
`
export const NoNotesText = styled.p`
  color: #aab8c8;
  font-size: 16px;
  font-weight: 500;
`
export const NotesList = styled.ul`
  margin-top: 50px;
  width: 95%;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }
`
