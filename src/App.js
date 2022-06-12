import PropTypes from 'prop-types';

const foodILike = [
  {
    id : 1 ,
    name : "kimchi",    
    image : "https://s1.zerochan.net/Da.Capo.600.1259774.jpg",    
    rating : 5,    
  },
  {
    id : 2 ,
    name : "Samgyeopsal",    
    image : "https://s1.zerochan.net/Da.Capo.600.1160109.jpg",    
    rating : 4.9,    
  },
  {
    id : 3 ,
    name : "bibimbap",    
    image : "https://s1.zerochan.net/Da.Capo.600.894384.jpg",    
    rating : 3.5,    
  },
  {
    id : 4 ,
    name : "Doncasu",    
    image : "https://s1.zerochan.net/Da.Capo.600.894348.jpg",    
    rating : 4.5,    
  },
  {
    id : 5 ,
    name : "Kimbap",    
    image : "https://s1.zerochan.net/Da.Capo.600.894338.jpg",    
    rating : 3.9,    
  },
];

function Food({ name, picture, rating }){
  return(
      <div>
        <h2>I like {name}</h2>
        <h4>{rating} / 5.0</h4>
        <img src={picture} alt={name} />
      </div>
  );
}

Food.propTypes = {
  name : PropTypes.string.isRequired ,
  picture : PropTypes.string.isRequired ,
  rating : PropTypes.number
}

/*
const reanderFood = (dish) => {
  return <Food name={dish.name} picture={dish.image} />
}
*/

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

export default App;
