import Dropdown from 'react-bootstrap/Dropdown';
import { LinkContainer } from 'react-router-bootstrap'

export default function LaunchScreen(){
    return (
        <nav>
            <h1>select a language</h1>
            <div className='nav-buttons'>
                <Dropdown>
                    <Dropdown.Toggle variant="nav" id="dropdown-basic">
                        language
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <LinkContainer to="flashcard"><Dropdown.Item>spanish</Dropdown.Item></LinkContainer>
                        <LinkContainer to="flashcard"><Dropdown.Item>french</Dropdown.Item></LinkContainer>
                        <LinkContainer to="flashcard"><Dropdown.Item>german</Dropdown.Item></LinkContainer>
                        <LinkContainer to="flashcard"><Dropdown.Item>japanese</Dropdown.Item></LinkContainer>
                        <LinkContainer to="flashcard"><Dropdown.Item>italian</Dropdown.Item></LinkContainer>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </nav>
    )
}