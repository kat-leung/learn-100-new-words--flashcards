import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap'
import { FlashcardContext } from '../App'
import React from "react"

export default function NavBar( ){

    const { cardDeckComplete, flipDeck, setFlipDeck, language, setRight, setWrong } = React.useContext(FlashcardContext)

    const handleDropdownSelect = (eventKey) => {
        if (eventKey === 'correct') {
          setRight(true);
          setWrong(false);
        } else if (eventKey === 'incorrect') {
          setRight(false);
          setWrong(true);
        }
      };

    return (
        <nav>
            <h1>{language}</h1>
            <div className='nav-buttons'>
                <Dropdown>
                    <Dropdown.Toggle variant="nav" id="dropdown-basic">
                        language
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <LinkContainer to="spanish" lang="spanish"><Dropdown.Item>spanish</Dropdown.Item></LinkContainer>
                        <LinkContainer to="french" lang="french"><Dropdown.Item>french</Dropdown.Item></LinkContainer>
                        <LinkContainer to="german" lang="german"><Dropdown.Item>german</Dropdown.Item></LinkContainer>
                        <LinkContainer to="japanese" lang="japanese"><Dropdown.Item>japanese</Dropdown.Item></LinkContainer>
                        <LinkContainer to="italian" lang="italian"><Dropdown.Item>italian</Dropdown.Item></LinkContainer>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown onSelect={handleDropdownSelect} >
                    <Dropdown.Toggle variant="nav" id="dropdown-basic" disabled={cardDeckComplete ? false : true}>
                        filter
                    </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item eventKey="correct">correct</Dropdown.Item>
                    <Dropdown.Item eventKey="incorrect">incorrect</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                
                <Button variant="nav" onClick={() => {setFlipDeck(!flipDeck)}}>flip deck</Button>
            </div>
        </nav>
    )
}