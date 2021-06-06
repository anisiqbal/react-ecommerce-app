import product from '../assets/img/product.jpg';

function Card(props) {
    return(
        <div class="card">
            <img src={product} class="card-img-top" alt="product" />
            <div class="card-body">
                <h5 class="card-title">Apple Watch</h5>
                <p class="card-text">44mm or 40mm case size Always-On Retina display</p>
                <a href="#" class="btn btn-primary">Add to Cart</a>
            </div>
        </div>
    );
}

export default Card;