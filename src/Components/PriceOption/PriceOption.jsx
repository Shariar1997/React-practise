import PropTypes from 'prop-types';
import { BiCheckCircle } from 'react-icons/bi';

const PriceOption = ({option}) => {
    const {name, price, features}=option;
    return (
        <div className='bg-green-500 text-white p-4 flex flex-col rounded-lg'>
            <h2 className='text-center '>
                <span className='text-7xl font-extrabold'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='text-3xl text-center my-7 font-semibold'>{name}</h4>
            <div className='pl-6 flex-grow'>
            {
                features.map((feature, idx) => (
                    <p key={idx} className='flex items-center gap-2 text-lg '><BiCheckCircle className='text-white'></BiCheckCircle>{feature}</p>
                  ))
            }
            </div>
            <button className='text-2xl font-bold rounded-lg hover:bg-orange-600 py-2 w-full bg-violet-700 mt-12 '>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
   option: PropTypes.object 
};

export default PriceOption;