import styled from "styled-components";
import { BASE_URL, Button } from "../../App";

const Searchresults = ({data:foods}) => {
  return (
    <FoodCardContainer>
        <FoodCards>
          {
            foods?.map(({name, image, text, price}) =>
              <FoodCard key={name}>
                <div className="foodimage"> 
                    <img src={BASE_URL + image} alt={name} />
                    </div>
                <div className="foodinfo">
                    <div className="info">
                        <h3>{name}</h3>
                        <p>{text}</p>
                    </div>
                    <Button>
                        ${price.toFixed(2)}
                        </Button>
                </div>                    
              </FoodCard>)
          }
        </FoodCards>
    </FoodCardContainer>
  );
};

export default Searchresults


const FoodCardContainer = styled.section`
min-height: calc(100vh - 141px);
Width: 100%;
background-image: url("/bg.png");
background-size: cover;
background-position: center;

 `;

 const FoodCards = styled.div`
    display: flex;
    padding-top: 80px;
    flex-wrap: wrap;
    row-gap: 20px;
    justify-content: center;
    align-items: center;

 `;


const FoodCard = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 25px;
width: 450px;
height: 220px;
margin: 20px;
background-color: rgba(124, 124, 124, 0.40);
border-radius: 10px;
padding: 16px;
color: white;
border: 2px solid rgba(124, 124, 124, 0.50);
transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
  .foodimage{
    img{
    padding-top: 10px;
      hight: 100%;
        width: 200px;
    }
  }
  .foodinfo{
    display: flex;
    flex-direction: column;
    width: 100%;
    .info{
   
      h3{
        margin: 0;
        font-size: 16px;
      }
      p{
        margin: 4px 0 0 0;
        font-size: 12px;
        color: #ccc;
      }
    }
    button{
    margin-top: 55px;
    margin-left: 120px;    
      background-color: #ff4343;
      color: white;
      border: none;
      border-radius: 8px;
      padding: 8px 16px;
      cursor: pointer;
      font-size: 16px;
      transition: background-color 0.2s;
      &:hover {
        background-color: #982929ff;
      }
    }
  }`
 
  
  ;
