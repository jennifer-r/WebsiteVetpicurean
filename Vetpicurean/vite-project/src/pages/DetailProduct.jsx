import '../App.css'

import paw2 from '../assets/paw2.png'
import bone1 from '../assets/bone1.png'
import image1 from '../assets/product1.1.png'
import image2 from '../assets/product1.2.png'
import image3 from '../assets/product1.3.png'
import product1 from '../assets/product1.png'

const DetailProduct = () => {

    return(
        <div className="overflow-hidden">
            <img src={bone1} className="bone1 position-absolute" style={{ top: "-120px", right: "0" }} alt="" />
            <img src={product1} style={{ marginLeft:"100px", marginTop:"50px", width:"300px" }} alt="" />
            <div style={{ marginTop:"20px", marginLeft:"102px" }}>
                <img src={image1} style={{ marginRight:"20px", width:"85px" }} alt="" />
                <img src={image2} style={{ marginRight:"20px", width:"85px" }} alt="" />
                <img src={image3} style={{ width:"85px" }} alt="" />
            </div>
            <div style={{ }}>
                <h2 style={{ color:"grey" }}>CHUBBY GUMMY</h2>
            </div>
        </div>
        
        
    )
}

export default DetailProduct