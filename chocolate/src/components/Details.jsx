 
import { useParams } from 'react-router-dom';
import './styles.css'
 
 

const Details = () => {
  const { id, name,image,price } = useParams();

  return (
    <div className='details-container'>
      <h1>Details for Product</h1>
      <img src={`/images/${image}`}/>
      <p>Product Price: {price}</p>
      <p>Product Name: {name}</p>
       
    </div>
  );
};

export default Details;