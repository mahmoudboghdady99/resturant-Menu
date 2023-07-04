import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Navbarr from './components/Navbarr';
import Header from './components/Header';
import Category from './components/Category';
import ItemsList from './components/ItemsList';
import { items } from './data';
import { useState } from 'react';

function App() {
  const [ itemsData , setItemsData ] = useState(items)
  const allCategories = ['الكل', ...new Set(items.map((i) => i.category))]
 

  // filter by category
  const filterByCategory = (category) => {
    if(category === 'الكل'){
      setItemsData(items)
    }else{
    const newArr = items.filter((item) => item.category === category)
    setItemsData(newArr)
  }}

   // filter search by word
   const filterSearch = (word) => {
    if(word !== ''){
      const newArr = items.filter((item) => item.title === word)
      setItemsData(newArr)
    }
   
  }
 
  return (
    <div className='color-body font'>
      <Navbarr filterSearch={filterSearch} />
      <Container>
        <Header />
        <Category filterByCategory={filterByCategory} allCategories={allCategories} />
        <ItemsList itemsData={itemsData}/>
      </Container>
    </div>
  );
}

export default App;

