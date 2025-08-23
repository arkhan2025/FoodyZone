import { useEffect, useState } from "react";
import styled from "styled-components";
import Searchresults from "./Components/Searchresults/Searchresults";
export const BASE_URL = "http://localhost:9000"; 

const App = () => {
  
  const [data, setdata] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filterredData, setFilteredData] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("all");  

  useEffect(() => {
    const fetchFoodData = async () => {
    setLoading(true);
    try{
      const response = await fetch(BASE_URL)
      const json = await response.json();
      console.log(json);
      setdata(json);
      setLoading(false);
      setFilteredData(json);
    }
    catch(error){
      setError("Unable to fetch data");
    }
      
  }
    fetchFoodData();
  }, []);

  const searchfood = (e) => {
    const searchvalue = e.target.value;
    console.log(searchvalue);

    if(searchvalue === ""){
      setFilteredData(null);
    } 

    const filter = data?.filter((food) => food.name.toLowerCase().includes(searchvalue.toLowerCase()));
    setFilteredData(filter);

  };

  const filterfood = (type) => {
    setSelectedBtn(type);
    if(type === "all"){
      setFilteredData(data);
      setSelectedBtn("all");
      return;
    }
    const filter = data?.filter(
      (food) => food.type.toLowerCase() === type.toLowerCase());
    setFilteredData(filter);
    setSelectedBtn(type);
  };

const filterBtns = [
  { name: "All", type: "all" },
  { name: "Breakfast", type: "breakfast" },
  { name: "Lunch", type: "lunch" },
  { name: "Dinner", type: "dinner" },
];
  
  if (error) return <div>Error: {error}</div>;
  if (loading) return <div>Loading...</div>;
  if (!data) return <div>No data available</div>;

  return (
  <>
  <Container>
    <TopContainer>
      <div className="logo">
        <img src="/Foody Zone.svg" alt="Logo" />
      </div>

      <div className="search">
        <input onChange={searchfood} type="text" placeholder="Search for food..." />
      </div>
        
    </TopContainer>

    <FilterContainer>
      {filterBtns.map((btn) => ( 
          <Button 
           isSelected={selectedBtn === btn.type}
          key={btn.type} 
          onClick={() => {
            setSelectedBtn(btn.type);      
            filterfood(btn.type);         
          }} >
            {btn.name}
            </Button>
      ) )}        
      </FilterContainer>
       </Container>
  <Searchresults data = {filterredData}/>
    </>  );
};
export default App;

const Container = styled.div`
max-width: 1920px;
margin: 0 auto;
padding: auto;
`;

const TopContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  margin-left: 90px;
  margin-right: 90px;
  max-height: 140px;
  .search {
    input {
      background-color: transparent;
      color: white;
      border-radius: 8px;
      width: 300px;
      padding: 8px 16px;
      border: 1px solid red;
      outline: none;
      font-size: 16px;

      &::placeholder {
        color: white;
      }
    }
  }
  @media (max-width : 600px) {
    top: 0;
    left: 0;
    right: 0;
    flex-direction: column;
    justify-content: start;

    height: 110px;
    .logo{
      margin-bottom: 5px;
    }
    .search{
      input{
    }
        width: 160px;
        margin-bottom: 5px;
      }
    }
  } 


`;

const FilterContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 20px 0;
gap: 16px;
`;

export const Button = styled.button`
background-color: ${({isSelected}) => (isSelected? "#921a1aff" :"#ff4343") };
outline:1px solid ${({isSelected}) => (isSelected? "white" :"#ff4343") };
  color: white;
  border: 1px solid red;
  border-radius: 8px;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #921a1aff !important;
    color: white;
  }
`;