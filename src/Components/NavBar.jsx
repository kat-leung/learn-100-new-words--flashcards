import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

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
                        <Dropdown.Item>french</Dropdown.Item>
                        <Dropdown.Item>spanish</Dropdown.Item>
                        <Dropdown.Item>german</Dropdown.Item>
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