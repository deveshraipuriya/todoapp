import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup'
export default function SportsComp() {

    const [inputVal, setInputval] = React.useState("");
    const sports = [
        { id: 1, name: "cricket" },
        { id: 2, name: "football" },
        { id: 3, name: "golf" },
        { id: 4, name: "table- tennis" },
        { id: 5, name: "badminton" },
        { id: 6, name: "pool" },
        { id: 7, name: "baseball" },
        { id: 8, name: "basketball" }
    ];

    const [itemsToShow, setItemsToShow] = React.useState(sports);

    const handleInputChange = (e) => {
        setInputval(e.target.value);
        let originalList = sports.map(sport => {
            return {
                name: sport.name.toLowerCase()
            }
        })
        console.log(originalList);
        if (e.target.value !== "") {
            let filteredList = originalList.filter(sport => sport.name.includes(inputVal.toLowerCase()))
            setItemsToShow(filteredList);
        }
        else
            setItemsToShow(sports);
    }
    return (
        <div className="mt-5">
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <h3>Search your desired sport.</h3>
                        <Form>
                            <Form.Group>
                                <Form.Control
                                    size="lg"
                                    type="text"
                                    value={inputVal}
                                    placeholder="Search your query"
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                        </Form>
                        <ListGroup>
                            {
                                itemsToShow.map((item, i) => (
                                    <ListGroup.Item
                                        variant="dark"
                                        key={i}
                                    >
                                        {item.name}
                                    </ListGroup.Item>
                                ))
                            }
                        </ListGroup>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
