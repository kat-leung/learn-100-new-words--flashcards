import Dropdown from 'react-bootstrap/Dropdown';
import { LinkContainer } from 'react-router-bootstrap'
import React from "react";

export default function LaunchScreen({ onSelectLanguage }){

   const [selectedLanguage, setSelectedLanguage] = React.useState('');

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    setSelectedLanguage(newLanguage);
    onSelectLanguage(newLanguage);
  }

        return (
        <nav>
            <h1>select a language</h1>
            <div className='nav-buttons'>
                <Dropdown>
                    <Dropdown.Toggle variant="nav" id="dropdown-basic">
                        language
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <LinkContainer onChange={handleLanguageChange} to="flashcard/spanish" value="spanish"><Dropdown.Item value="spanish">spanish</Dropdown.Item></LinkContainer>
                        <LinkContainer onChange={handleLanguageChange} to="flashcard/french" value="french"><Dropdown.Item value="french">french</Dropdown.Item></LinkContainer>
                        <LinkContainer onChange={handleLanguageChange} to="flashcard/german" value="german"><Dropdown.Item value="german">german</Dropdown.Item></LinkContainer>
                        <LinkContainer onChange={handleLanguageChange} to="flashcard/japanese" value="japanese"><Dropdown.Item value="japanese">japanese</Dropdown.Item></LinkContainer>
                        <LinkContainer onChange={handleLanguageChange} to="flashcard/italian" value="italian"><Dropdown.Item value="italian">italian</Dropdown.Item></LinkContainer>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </nav>
    )
}