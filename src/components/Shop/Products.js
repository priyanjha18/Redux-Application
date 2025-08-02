import ProductItem from './ProductItem';
import classes from './Products.module.css';
const DUMMY_PRODUCT=[
  {
    id:'p1',
    price:19,
    title:"MY FIRST BOOK",
    description:'This is my first Book'
  },{
    id:'p2',
    price:18,
    title:"MY SECOND BOOK",
    description:"This is my second Book"
  }
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
       {DUMMY_PRODUCT.map((item)=><ProductItem key={item.id} title={item.title} price={item.price} description={item.description} id={item.id}></ProductItem> )}
      </ul>
    </section>
  );
};

export default Products;
