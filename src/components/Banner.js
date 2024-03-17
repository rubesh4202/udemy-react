import banner from "../image/banner image.avif";

function Banner(){
    return(
        <div className="banner">
        <img src={banner} alt="Banner Image"/>
        <div className="sales-container">
            <div className="sale-offer">
                <h2>Udemy Flash Sale! 24 hours to save.</h2>
                <p>Get the top course for just ₹499.
                    Just one day left to save but a lifetime to learn.</p>
            </div>

            <div className="sale-offer">
                <h2>Slow and steady</h2>
                <p>Try learning just 5–10 minutes a day. Continue your course and reach your peak potential.</p>
            </div>
        </div>
    </div>
    )
}

export default Banner