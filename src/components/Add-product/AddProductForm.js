import React, {Fragment} from "react";
import styles from "./AddProductForm.module.css";
import CartButton from "../Cart/CartButton";
const AddProductForm =()=>{
 return(
    <Fragment>
   <form  className={styles.form} >
            <label htmlFor="med-name">Medicine:</label>
            <input type="text" id="med-name" />
            <label htmlFor="med-des">Description:</label>
            <input type="text" id="med-des" />
            <label htmlFor="price">Price:</label>
            <input type="number" id="price" />
            <label htmlFor="quantity">Quantity:</label>
            <input type="number" id="quantity" />
        <button  type="submit">Add Product</button>
    </form>
  <CartButton/>
</Fragment>
 )
}
export default AddProductForm