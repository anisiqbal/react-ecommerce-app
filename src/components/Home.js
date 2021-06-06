import React, { useState } from 'react';
import Card from '../shared/Card';

function Home() {
    const [products, setProduct] = useState([
        { Id: 1, name: 'Apple Watch', price: 55000, description: '44mm or 40mm case size Always-On Retina display' },
        { Id: 2, name: 'Running Shoe', price: 3000, description: 'This is a genuine product of ASICS India Pvt. Ltd.' },
        { Id: 3, name: 'Striped Men Round Neck', price: 2500, description: 'This is a genuine product of ASICS India Pvt. Ltd.' },
        { Id: 4, name: 'SAF Digital Reprint 9.5', price: 55000, description: 'This is a genuine product of ASICS India Pvt. Ltd.' },
    ]);
    
    return(
        <div className="container">
            <div className="row">
                {
                    products.map((item, i) => {
                        return(
                            <div className="col-md-3 mt-3">
                                <Card data={item} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Home;