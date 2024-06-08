import React from "react";
import Card from "./Card";

const Carousel = () => {
  const cards = [
    {
      title: "Strawberry Pancakes",
      description: "They are made from thinner batter than actual cakes, and a little hot grease sets the outer surface quickly; this allows the inside to remain fluffy and light.",
      img: "https://www.foodandwine.com/thmb/m492cWdAjYFP6k5tHq6yk34MaMw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sourdough-pancakes-with-maple-molasses-pancakes-FT-RECIPE0221-3e33475a1a0c450e94866a0653971f8d.jpg",
      buttonLabel: "Press to check the menu"
    },
    {
      title: "Healthy Food",
      description: "Eggs, bacon, potatos, spinach and cherry tomatoes came in this presentation to show you how fun its eat healthy with incredible flavors all over the dish.",
      img: "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/crispy_potato_big_07765_16x9.jpg",
      buttonLabel: "Press to check the menu"
    },
    {
      title: "Salmon Bread",
      description: "In the case of salmon toast, the balance between proteins, sugar, minerals, and vitamins is excellent, and you can rest assured it's going to keep you energized.",
      img: "https://pinale.es/wp-content/uploads/2019/12/IMG_20211029_165300-e1700568130136.jpg",
      buttonLabel: "Press to check the menu"
    },
    {
      title: "Fruit Poke",
      description: "Created using the best quality of fruit with so many flavor. Made with love, putting a base of yoghurt with all the rest of ingredients cultivated in Spain",
      img: "https://lamalabrunch.com/wp-content/uploads/2021/11/sevilla-brunch.jpg",
      buttonLabel: "Press to check the menu"
    },
    {
      title: "The Ceviche Late",
      description: "With the most fresh fish you ever try, fished from the incredibles erupean coast. Tis is one of the best ceviches from all over the world. Home made recipe. ",
      img: "https://static.designmynight.com/uploads/2019/06/Se%C3%B1or-Ceviche-Fitzrovia-4-optimised.jpg",
      buttonLabel: "Press to check the menu"
    },
    {
      title: "The encebollado Soup",
      description: "This soup can make a dead man rise from his grave. This dish of Ecuadorian gastronomy is prepared with great love. taste the flavor of this gastronomy . ",
      img: "https://bagre.life/wp-content/uploads/2022/11/FB_IMG_1667571956116-Mejorado.jpg",
      buttonLabel: "Press to check the menu"
    }
  ];

  const chunkSize = 3;
  const cardChunks = [];

  for (let i = 0; i < cards.length; i += chunkSize) {
    cardChunks.push(cards.slice(i, i + chunkSize));
  }

  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {cardChunks.map((chunk, index) => (
          <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
            <div className="d-flex justify-content-center">
              {chunk.map((card, idx) => (
                <div className="col-md-4" key={idx}>
                  <Card
                    title={card.title}
                    description={card.description}
                    img={card.img}
                    buttonLabel={card.buttonLabel}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon custom" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon custom-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
