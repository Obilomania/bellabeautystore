import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Review = () => {
  const reviews = [
    {
      name: "Jennifer",
      description:
        "Sharp sharp sharp sharp Delivery, which is the sweetest part. its the discound and swift delivery for me",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQfV1Qk-X4r-zLq2aa0Q00unWRnjGkbujRAQ&usqp=CAU",
    },
    {
      name: "Aisha Dauda",
      description:
        "I had my doubt but she proved me wrong and delivered my goods to kano fast and they were authentic, for real i highly recommend",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQfV1Qk-X4r-zLq2aa0Q00unWRnjGkbujRAQ&usqp=CAU",
    },
    {
      name: "Sleek Looks",
      description:
        "I love free and cheap stuff, i always go for cheapest best to maximize profit and Bella Beauty concept is my sure plug for the best organic raw materials",
      img: "https://cdn.dribbble.com/users/3734064/screenshots/14348087/media/a99ab961c8f8c7d29b5f7136e0b19ca4.png?compress=1&resize=400x300&vertical=top",
    },
    {
      name: "Alice",
      description:
        "Delivery was on point, Got my order in Benin when i was told i would get it",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQfV1Qk-X4r-zLq2aa0Q00unWRnjGkbujRAQ&usqp=CAU",
    },
    {
      name: "Maxwell Kenechukwu",
      description:
        "The offer sounded to good to be true but i risked it since i had no better offer and it paid off. I will confortably recommend B.B Concept to anyone",
      img: "https://cdn.dribbble.com/users/3734064/screenshots/14348087/media/a99ab961c8f8c7d29b5f7136e0b19ca4.png?compress=1&resize=400x300&vertical=top",
    },
  ];

  //SLIDER SETTINGS
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <ReviewSection>
      <h2 className="heading">Clients Review</h2>
      <div className="sliderContent">
        <Slider {...settings}>
          {reviews.map((item, index) => (
            <div key={index}>
              <div className="Cleancard">
                <div className="namePics">
                  <img src={item.img} alt="reviewer" /> <br />
                  <p className="name">{item.name}</p>
                </div>
                <p className="card-bottom">{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </ReviewSection>
  );
};

const ReviewSection = styled.div`
  padding: 3rem 0;
  width: 100%;
  height: fit-content;
  overflow: hidden;
  .sliderContent {
    width: 40rem;
    margin: auto;
  }
  .heading {
    text-align: center;
    color: var(--primary);
  }
  .Cleancard {
    width: 35rem;
    height: 12rem;
    display: flex;
    align-items: center;
    gap: 1.3rem;
    justify-content: center;
    border: 1px solid var(--primary);
    border-radius: 5%;
    margin: 2rem auto;
  }
  .Cleancard img {
    width: 6rem;
    height: 6rem;
    border-radius: 100%;
  }
  .Cleancard .name {
    font-weight: 600;
    text-align: center;
  }
  .Cleancard .card-bottom {
    width: 20rem;
    text-align: center;
    line-height: 1rem;
  }
  //MEDIA QUERIES
  @media screen and (max-width: 940px) {
    padding: 3rem 0;
    width: 100%;
    height: fit-content;
    overflow: hidden;
    .sliderContent {
      width: 100%;
      margin: auto;
    }
    .heading {
      text-align: center;
      color: var(--primary);
    }
    .Cleancard {
      width: 80%;
      height: 14rem;
      display: flex;
      gap: 0;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      border: 1px solid var(--primary);
      border-radius: 5%;
      margin: 2rem auto;
      line-height: 0.5rem;
    }
    .namePics {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-bottom: -1rem;
    }
    .Cleancard img {
      width: 5rem;
      height: 5rem;
      border-radius: 100%;
    }
    .Cleancard .name {
      font-weight: 600;
      text-align: center;
      font-size: 0.7rem;
    }
    .Cleancard .card-bottom {
      width: 80%;
      text-align: center;
      line-height: 1rem;
      margin-top: 0.5rem;
      font-size: 0.7rem;
    }
  }
  @media screen and (max-width: 430px) {
    padding: 3rem 0;
    width: 100%;
    height: fit-content;
    overflow: hidden;
    .sliderContent {
      width: 100%;
      margin: auto;
    }
    .heading {
      text-align: center;
      color: var(--primary);
    }
    .Cleancard {
      width: 80%;
      height: 14rem;
      display: flex;
      gap: 0;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      border: 1px solid var(--primary);
      border-radius: 5%;
      margin: 2rem auto;
      line-height: 0.5rem;
    }
    .namePics {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-bottom: -1rem;
    }
    .Cleancard img {
      width: 5rem;
      height: 5rem;
      border-radius: 100%;
    }
    .Cleancard .name {
      font-weight: 600;
      text-align: center;
      font-size: 0.7rem;
    }
    .Cleancard .card-bottom {
      width: 80%;
      text-align: center;
      line-height: 1rem;
      font-size: 0.7rem;
    }
  }
`;
export default Review;
