import './App.css';
import { Header } from './Header';
import Footer from './Footer';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';


function App() {

  return (
    <div className="main">

      <Header />

      <Container fluid>

        <Container>
          <Row>
            <Col className='col-12 text-center py-4'>
              <h1>Courses</h1>
            </Col>

          </Row>

          <Row>
            <Col lg="3" md="6">

              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Course1</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>

            </Col>

            <Col lg="3" md="6">

              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Course1</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>

            </Col>

            <Col lg="3" md="6">

              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Course1</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>

            </Col>

            <Col lg="3" md="6">

              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Course1</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>

            </Col>


            <Col lg="3" md="6">

              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Course1</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>

            </Col>

          </Row>

        </Container>
      </Container>

      <Footer />


    </div>
  );
}

export default App;
