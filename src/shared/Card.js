import product from '../assets/img/product.jpg';

function Card(props) {
    return(
        <div class="card">
            <img src={product} class="card-img-top" alt="product" />
            <div class="card-body">
                <h5 class="card-title text-truncate">{props.data.name}</h5>
                <p>PKR. <strong>{props.data.price}</strong></p>
                <p class="card-text">{props.data.description}</p>
                <a href="#" class="btn btn-primary">Add to Cart</a>
            </div>
        </div>
    );
}

export default Card;