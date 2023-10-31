import Dropdown from 'react-bootstrap/Dropdown';
import { LinkContainer } from 'react-router-bootstrap'
import React from "react";

export default function LaunchScreen( ){

  
        return (
        <nav>
            <h1>select a language</h1>
            <div className='nav-buttons'>
                <Dropdown>
                    <Dropdown.Toggle variant="nav" id="dropdown-basic">
                        language
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <LinkContainer to="flashcard/spanish" lang="spanish"><Dropdown.Item value="spanish">spanish</Dropdown.Item></LinkContainer>
                        <LinkContainer to="flashcard/french" lang="french"><Dropdown.Item value="french">french</Dropdown.Item></LinkContainer>
                        <LinkContainer to="flashcard/german" lang="german"><Dropdown.Item value="german">german</Dropdown.Item></LinkContainer>
                        <LinkContainer to="flashcard/japanese" lang="japanese"><Dropdown.Item value="japanese">japanese</Dropdown.Item></LinkContainer>
                        <LinkContainer to="flashcard/italian" lang="italian"><Dropdown.Item value="italian">italian</Dropdown.Item></LinkContainer>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </nav>
    )
}