
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import img1 from '../assets/images/img1.jpg';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function AppAbout() {
  const html = 80;
  const responsive = 95;
  const photoshop = 60;

    return (
        <section id="about" className='block about-block'>
              <Container fluid>
                <div className='title-holder'> 
                    <h2>About Us</h2>
                    <div className='subtitle'>Learn more about us</div>
                </div>
      <Row>
        <Col sm={6}><Image src={img1}/></Col>
        <Col sm={6}><p>Welcome to [Your Company Name], a leader in [industry] committed to innovation, excellence, and customer satisfaction. With a strong foundation built on integrity and expertise, we have been delivering high-quality [products/services] to our clients worldwide.</p>
        <p>At [Your Company Name], we believe in driving progress through cutting-edge solutions, strategic partnerships, and a customer-centric approach.employees, and stakeholders.</p>
      
      <div className='progress-block'>
        <h4>HTML / CSS / JAVASCRIPT</h4>
        <ProgressBar now={html} label={`${html}%`} />
      </div>
      <div className='progress-block'>
        <h4>RESPONSIVE</h4>
        <ProgressBar now={responsive} label={`${responsive}%`} />
      </div>
      <div className='progress-block'>
        <h4>PHOTOSHOP</h4>
        <ProgressBar now={photoshop} label={`${photoshop}%`} />
      </div>
      </Col>
      </Row>
    </Container>

        </section>


    )
}