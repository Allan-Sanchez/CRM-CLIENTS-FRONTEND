import React,{useContext} from 'react';
import OrderContext from '../../context/orders/OrderContext';
import ListProduct from './ListProduct';
const ListOrder = () => {

  const orderContext = useContext(OrderContext);
  const {products} = orderContext;
  return (
    <>
    {products.length > 0 ? (
      <table className="w-full text-sm lg:text-base" cellSpacing="0">
        <thead>
          <tr className="h-12 uppercase">
            <th className="text-left">Product</th>
            <th className="lg:text-right text-left pl-5 lg:pl-0">
              <span className="lg:hidden" title="Quantity">
                Qtd
              </span>
              <span className="hidden lg:inline">Quantity</span>
            </th>
            <th className="hidden text-right md:table-cell">Unit price</th>
            <th className="text-right">Total price</th>
          </tr>
        </thead>
        <tbody>
          {products.map( product =>(
            <ListProduct key={product.id} product={product}></ListProduct>
          ))}
        </tbody>
      </table>
    ):(
        <p className="text-center text-gray-700">There are not products</p>
    )}
    </>
  );
};

export default ListOrder;
