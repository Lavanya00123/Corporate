import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const servicesData = [
    {
        id: 1,
        icon: 'fas fa-clone',
        title:'Responsive Design',
        description: 'It could be a business website, portfolio, e-commerce site, or any web application where structured component-based development is needed.',
    },
    {
        id: 2,
        icon: 'fas fa-snowflake',
        title:'Responsive Design',
        description: 'It could be a business website, portfolio, e-commerce site, or any web application where structured component-based development is needed.',
    },
    {
        id: 3,
        icon: 'fas fa-plug',
        title:'Responsive Design',
        description: 'It could be a business website, portfolio, e-commerce site, or any web application where structured component-based development is needed.',
    },
    {
        id: 4,
        icon: 'fas fa-desktop',
        title:'Responsive Design',
        description: 'It could be a business website, portfolio, e-commerce site, or any web application where structured component-based development is needed.',
    },
    {
        id: 5,
        icon: 'fas fa-trophy',
        title:'Responsive Design',
        description: 'It could be a business website, portfolio, e-commerce site, or any web application where structured component-based development is needed.',
    },
    {
        id: 6,
        icon: 'fas fa-life-ring',
        title:'Responsive Design',
        description: 'It could be a business website, portfolio, e-commerce site, or any web application where structured component-based development is needed.',
    }
]
export default function AppServices() {
    return (
        <section id='services' className='block services-block'>
            <Container fluid>
            
                    <div className='title-holder'>
                        <h2>Our Services</h2>
                        <div className='subtitle'>services we provide</div>
                    </div>
                <Row>

                    {
                        servicesData.map(services =>{
                            return (
                                <Col sm={4} className='holder' key={services.id}>
                                <div className='icon'>
                           <i className={services.icon}></i>
                                </div>
                                <h3>{services.title}</h3>
                                <p>{services.description}</p>
                                </Col>
                            )
                        })
                    }
                   
                </Row>
            </Container>
        </section>
    )
}