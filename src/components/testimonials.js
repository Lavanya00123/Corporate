import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

var testimonialsData = [
    {
        id: 1,
        name: 'john wills',
        description: 'It could be a business website, portfolio, e-commerce site, or any web application where structured component-based development is needed.',
        designation: 'Manager'
    },
    {
        id: 2,
        name: 'jhoseph',
        description: 'It could be a business website, portfolio, e-commerce site, or any web application where structured component-based development is needed.',
        designation: 'CEO'
    },
    {
        id: 3,
        name: 'Alexandar',
        description: 'It could be a business website, portfolio, e-commerce site, or any web application where structured component-based development is needed.',
        designation: 'Team Lead'
    },

]
export default function AppTestimonials() {
    return (
        <section id='testimonials' className='testimonials-block'>
            <Container fluid>
                <div className='title-holder'>
                    <h2>Client testimonials</h2>
                    <div className='subtitle'>what client says about us</div>
                </div>


                <Carousel controls={false}>
                    {
                        testimonialsData.map(testimonials => {
                            return (
                                <Carousel.Item key={testimonials.id}>
                                    <blockquote>
                                        <p>{testimonials.description}</p>
                                        <cite>
                                            <span className='name'>{testimonials.name}</span>
                                            <span className='designation'>{testimonials.designation}</span>
                                        </cite>
                                    </blockquote>
                                </Carousel.Item>
                            )
                        })
                    }
                </Carousel>
            </Container>

        </section>
    )
}