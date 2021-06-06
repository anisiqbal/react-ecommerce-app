import Card from '../shared/Card';

function Home() {
    return(
        <div className="container py-5">
            <div className="row">
                <div className="col-md-3">
                    <Card />
                </div>
                <div className="col-md-3">
                    <Card />
                </div>
                <div className="col-md-3">
                    <Card />
                </div>
                <div className="col-md-3">
                    <Card />
                </div>
            </div>
        </div>
    );
}

export default Home;