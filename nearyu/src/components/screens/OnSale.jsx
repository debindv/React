import React from 'react';
import OnSaleTop from '../includes/OnSaleTop';
import OnSaleBottom from '../includes/OnSaleBottom';
import '../../App.css';

const OnSale = () => {
    return (
        <section className="wrapper">
            <OnSaleTop />
            <OnSaleBottom />
        </section>
    )
}
export default OnSale;