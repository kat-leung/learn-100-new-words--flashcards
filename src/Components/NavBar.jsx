import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap'

export default function NavBar(){

    return (
        <nav>
            <h1>deck name</h1>
            <div className='nav-buttons'>
                <Dropdown>
                    <Dropdown.Toggle variant="nav" id="dropdown-basic">
                        language
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <LinkContainer to="."><Dropdown.Item>spanish</Dropdown.Item></LinkContainer>
                        <LinkContainer to="."><Dropdown.Item>french</Dropdown.Item></LinkContainer>
                        <LinkContainer to="."><Dropdown.Item>german</Dropdown.Item></LinkContainer>
                        <LinkContainer to="."><Dropdown.Item>japanese</Dropdown.Item></LinkContainer>
                        <LinkContainer to="."><Dropdown.Item>italian</Dropdown.Item></LinkContainer>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                    <Dropdown.Toggle variant="nav" id="dropdown-basic">
                        filter
                    </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item>correct</Dropdown.Item>
                    <Dropdown.Item>incorrect</Dropdown.Item>
                    <Dropdown.Item>starred</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                
                <Button variant="nav">flip deck</Button>
            </div>
        </nav>
    )
}