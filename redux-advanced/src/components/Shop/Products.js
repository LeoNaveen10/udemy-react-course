import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          id="1"
          title="mouse"
          price={6}
          description="wireless mouse."
        />
        <ProductItem
          id="2"
          title="keyboard"
          price={10}
          description="new version keyboard"
        />
        <ProductItem
          id="3"
          title="Eye wear"
          price={8}
          description="Protect eyes from screen time."
        />
      </ul>
    </section>
  );
};

export default Products;
