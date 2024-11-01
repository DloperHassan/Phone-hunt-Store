//  import Laptop from '../Laptop/Laptop';
import { Button, ButtonGroup } from 'react-bootstrap';
import './Phone.css'

const Phone = ({phone}) => {
    const {brand,model,releaseYear,storageOptions,battery,camera,description,os, price,img,lik} = phone
    return (
        <div className='ProductPhone'>
            < img className='imgP' src={img} alt="" />
            <h2>Phone Name: {brand}</h2>
            <p>Model: {model}</p>
            <p>Release Year: {releaseYear} </p>
            <p>Storage Options: {storageOptions} </p>
            <p>battery: {battery} </p>
            <p>Camera {camera.front}/{camera.rear} </p>
            <p>description: {description} </p>
            <h2>Price: ${price}</h2>
            <Button href={lik} target='_blank'   className='imgB'> Buy now</Button>
           
            
        </div>
    );
};

export default Phone;