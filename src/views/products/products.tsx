import axios from "axios";
import clsx from 'clsx';
import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from '../../context/themeProvider';
import { increment, SelectCount } from '../../redux-slice/count-slice';
import { useStyles } from './products.style';

type ProductPageType = {
    title: '', price: '', style: '', description: '', id: 0
}
export const ProductsPage: React.FC = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [products, setProducts] = useState<ProductPageType[]>()
    const classes = useStyles()
    const count = useSelector(SelectCount)
    const dispatch = useDispatch()
    const baseUrl = 'https://cybernet.az/demo.php';

    useEffect(() => {
        axios.get(baseUrl).then((response) => {
            setProducts(response.data);
        });
    }, []);


    return (
        <div className={clsx(classes.root, theme === 'light' ? classes.light : classes.dark)}>
            <p>Total Price  : {count}</p>
            <button onClick={toggleTheme}>Change Theme</button>

            <h1>Products</h1>
            {products?.map((pr: ProductPageType) => (
                <div key={pr.id}>
                    <ul >
                        <li>Title:{pr.title}</li>
                        <li>Style:{pr.style}</li>
                        <li>Price:{pr.price}</li>
                        <li>Description :{pr.description ? pr.description : "no desc"}</li>
                        <h6>Free Shipping</h6>
                    </ul>
                    <div className={classes.addButton}>
                        <button onClick={() => dispatch(increment())}>Add</button>
                    </div>


                    <hr></hr>
                </div>

            ))}
        </div>

    )
}
