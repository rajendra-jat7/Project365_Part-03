import Slider from 'react-slick';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    name: 'John Doe',
    text: 'This service is amazing! I highly recommend it.',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 2,
    name: 'Jane Smith',
    text: 'Fantastic experience, I will definitely use it again!',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    id: 3,
    name: 'Michael Brown',
    text: 'Loved it! Team was super helpful and the service exceeded my expectations.',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className='testimonials-container'>
      <h2>🌟 What Our Clients Say</h2>
      <Slider {...settings}>
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className='testimonial-card'>
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className='testimonial-img'
            />
            <p>&quot;{testimonial.text}&quot;</p>
            <h3>- {testimonial.name}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
