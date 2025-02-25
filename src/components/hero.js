import Carousel from 'react-bootstrap/Carousel';

var heroData = [
    {
        id: 1,
        image: require('../assets/images/img-hero1.jpg'),
        title:'The perfect design for your website',
        description: 'It could be a business website, portfolio, e-commerce site, or any web application where structured component-based development is needed.',
        link:'https://www.google.com'
    },
    {
        id: 2,
        image: require('../assets/images/img-hero2.jpg'),
        title:'The perfect design for your website',
        description: 'It could be a business website, portfolio, e-commerce site, or any web application where structured component-based development is needed.',
        link:'https://www.google.com'
    },
    {
        id: 3,
        image: require('../assets/images/img-hero3.jpg'),
        title:'The perfect design for your website',
        description: 'It could be a business website, portfolio, e-commerce site, or any web application where structured component-based development is needed.',
        link:'https://www.google.com'
    }
]



export default function AppHero() {
    return (
    <section id='home' className='hero-block'>
            <Carousel>
                {
                    heroData.map(hero => {
                        return(
                            <Carousel.Item key={hero.id}>
                            <img
                              className="d-block w-100"
                              src={hero.image}
                              alt={"slide" +hero.id}
                            />
                            <Carousel.Caption>
                              <h5>{hero.title}</h5>
                              <p>{hero.description}</p>
                              <a className='btn btn-primary' href={hero.link}>Learn More <i className="fas fa-chevron-right"></i></a>
                            </Carousel.Caption>
                          </Carousel.Item>
                        )
                    })
                }
  
   
    </Carousel>
    </section>
    )
}

