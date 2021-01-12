import React,{ useState,useEffect, useContext} from 'react'
import OrderContext from '../../context/orders/OrderContext';

const ListProduct = ({product}) => {
    const orderContext = useContext(OrderContext)
    const {updateProductState, updateTotal} = orderContext;
    const [quantity,setQuantity] = useState(1);
    const {name, price, id}=product;

    useEffect(() => {
        updateQuantity();
        updateTotal();
    }, [quantity])

    const updateQuantity = () =>{
        const newProduct = {...product,quantity: Number(quantity)}
        updateProductState(newProduct);
    }
    return ( 
        <tr>
        <td>
          <a href="#">
            <p className="mb-2 md:ml-4">{name}</p>
          </a>
        </td>
        <td className="justify-center md:justify-end md:flex mt-6">
          <div className="w-20 h-10">
            <div className="relative flex flex-row w-full h-8">
              <input
                type="number"
                value={quantity}
                onChange={ e => setQuantity(e.target.value)}
                className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black"
              />
            </div>
          </div>
        </td>
        <td className="hidden text-right md:table-cell">
          <span className="text-sm lg:text-base font-medium">Q {price}</span>
        </td>
        <td className="text-right">
          <span className="text-sm lg:text-base font-medium">{price * quantity}</span>
        </td>
      </tr>
     );
}
 
export default ListProduct;