import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const blogData = [
    {
        id: 1,
        image: require('../assets/images/blog1.jpg'),
        time: '15 Nov 2016',
        title: 'Coffee lovers',
        description: 'It could be a business website, portfolio, e-commerce site, or any web application where structured component-based development is needed',
        link: "https://www.google.com"
    },
    {
        id: 2,
        image: require('../assets/images/blog2.jpg'),
        time: '22 Aug 2024',
        title: 'Tea lovers',
        description: 'It could be a business website, portfolio, e-commerce site, or any web application where structured component-based development is needed',
        link: "https://www.facebook.com"
    },
    {
        id: 3,
        image: require('../assets/images/blog3.jpg'),
        time: '17 Mar 2025',
        title: 'Nature lovers',
        description: 'It could be a business website, portfolio, e-commerce site, or any web application where structured component-based development is needed',
        link: "https://www.twitter.com"
    },
]
export default function AppBlog() {
    return (
        <section id='blog' className='block blog-block'>
            <Container fluid>
                <div className='title-holder'>
                    <h2>Latest from blog</h2>
                    <div className='subtitle'>get our latest news from blog</div>
                </div>
                <Row>
                    {
                        blogData.map(blogData => {
                            return (
                                <Col sm={4} key={blogData.id}>
                                <div className='holder'>
                                    <Card >
                                        <Card.Img variant="top" src={blogData.image} />
                                        <Card.Body>
                                            <time>{blogData.time}</time>
                                            <Card.Title>{blogData.title}</Card.Title>
                                            <Card.Text>{blogData.description}</Card.Text>
                                            <a href={blogData.link} className='btn btn-primary'>Read more <i className='fas fa-chevron-right'></i></a>
                                        </Card.Body>
                                    </Card> </div></Col>
                            )
                        })
                    }
                   
                </Row>
            </Container>
        </section>
    )
}   