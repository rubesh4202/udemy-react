
import C1 from "../image/C1.jpg";
import C2 from "../image/C2.jpg";
import C3 from "../image/C3.jpg";
import C4 from "../image/C4.jpg";



function Recommend(){
    return(
        <div className="recommend">
        <h1 className="recommend__title">Recommended for you</h1>
        <p>Select the one that piques your curiosity</p>

        <div className="course-container">
            <div className="course-card">
                <img src={C1} alt="course image"/>
                <h3>The Complete 2024 Web Development Bootcamp</h3>
                <p>Dr.Angela yu</p>
                <p>4.7 ⭐⭐⭐⭐</p>
                <p>₹499 <del>₹2500</del></p>
            </div>

            <div className="course-card">
                <img src={C2} alt="course image"/>
                <h3>MySQL: beginner to Advanced</h3>
                <p>Colt steele</p>
                <p>4.5 ⭐⭐⭐⭐</p>
                <p>₹499 <del>₹3000</del></p>
            </div>

            <div className="course-card">
                <img src={C3} alt="course image"/>
                <h3>Generative AI + LLM App Development</h3>
                <p>Julio Colomer</p>
                <p>5.0 ⭐⭐⭐⭐⭐</p>
                <p>₹499 <del>₹4000</del></p>
            </div>

            <div className="course-card">
                <img src={C4} alt="course image"/>
                <h3>Blockchain A-Z: Build a Blockchain, a Crypto + ChatGPT Prize</h3>
                <p>Hadelein De ponteves</p>
                <p>4.5 ⭐⭐⭐⭐</p>
                <p>₹499 <del>₹3700</del></p>
            </div>
        </div>
    </div>
    )
}

export default Recommend