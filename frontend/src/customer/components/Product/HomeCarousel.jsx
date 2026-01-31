import Carousel from 'react-bootstrap/Carousel';
import { slides } from '../../pages/HomePage/HomeCarouselData';

export default function homePageCarousel() {
  return (
    <Carousel
      controls={true}
      indicators={false}
      interval={5000}
      pause={false}
      wrap={true}
    >
      {slides.map((item) => (
        <Carousel.Item key={item.image}
        style={{ height: '400px' }}
        >
          <img
            className="d-block w-100"
            src={item.image}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
