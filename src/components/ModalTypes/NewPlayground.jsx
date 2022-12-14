import React, {useContext, useState} from 'react'
import {CloseButton, Header} from '../Modal'
import {IoCloseSharp} from 'react-icons/io5'
import styled from 'styled-components'
import Select from 'react-select'
import { ModalContext } from '../../context/ModalContext'
import { PlaygroundContext } from '../../context/PlaygroundContext'

// const SelectTag = styled.select`
//         width: 90px;
//     height: 32px;
//     margin: 10px;
// `

const InputWithSelect = styled.div `
        display: grid;
        grid-template-columns: 1fr 0.5fr;
        row-gap: 1rem;
        column-gap: 1rem;
        margin-top:1.2rem;
        align-items: center;

        input{
        flex-grow: 1;
        height: 2rem;
        }

        button{
          background: #241f21;
          height: 2rem;
          color: white;
          padding: 0 2rem;
        }
`

function NewPlayground() {
  const languageOptions = [
    {value:"cpp", label:"cpp"},
    {value:"java", label:"java"},
    {value:"python", label:"python"},
    {value:"javascript", label:"javascript"}
  ];

  const[language, setLanguage] = useState(languageOptions[0]);

  const handleLanguageChange = (selectedOption)=>{
    setLanguage(selectedOption);
  }
  const {closeModal,isOpenModal} = useContext(ModalContext);
  const {folderId} = isOpenModal.identifiers;
  const {addCard} = useContext(PlaygroundContext);

  const[cardTitle,setCardTitle] = useState("");
  return (
    <>
     <Header>
      <h2>Create New Playground</h2>
      <CloseButton onClick={()=>closeModal()}>
      <IoCloseSharp />
      </CloseButton>
    </Header>

    <InputWithSelect>
           <input type="text" onChange={(e)=>setCardTitle(e.target.value)}/>
           <Select
           options={languageOptions}
           value = {language}
           onChange = {handleLanguageChange}
           />
           <button
           onClick={()=>{         
            addCard(folderId,cardTitle,language.label)
            closeModal()
           }}
           >Create Folder</button>
    </InputWithSelect>

           {/* <InputTag>
        <InputTagStyling type="text"/>
        <ButtonStyling>Create Folder</ButtonStyling>
    </InputTag> */}
   </>
  )
}

export default NewPlayground