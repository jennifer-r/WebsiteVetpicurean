import React from 'react';
import '../App.css'

import bannerTips from '../assets/bannerTips.png'
import paw2 from '../assets/paw2.png'
import bone1 from '../assets/bone1.png'
import logo from '../assets/vetpic.png'
import tel from '../assets/telephone.png'
import loc from '../assets/loc.png'
import email from '../assets/email.png'

const DetailTips = () => {
    return (
        <div className="overflow-hidden">

            <div className="detail-tips">
                
                <div className="card text-bg-white border border-0 rounded-0">
                    <img src={bannerTips} className="card-img" alt="..."/>
                    <div className="card-img-overlay">
                        <h5 className="card-title titleTips">TOP TIPS FOR CHOOSING THE RIGHT SUPPLEMENTS FOR YOUR PET</h5>
                    </div>
                </div>

                {/* <div className="parentTips" style={{ position:"relative", top:"0", left:"0" }}> */}
                    {/* <img src={bone1} alt="" className='boneTips' style={{ position:"relative", top:"200px", right:"0", zIndex:"1" }}/> */}
                    {/* <img src={paw2} alt="" className='pawTips' style={{ position:"relative", top:"0", left:"0", zIndex:"1" }}/> */}
                    {/* <div className="contentTips" style={{ position:"absolute", top:"30px", left:"30px", zIndex:"2" }}> */}
                    <div className="contentTips">
                        <p>
                            <span className="first-letter">E</span>nsuring your pet receives the right nutrients is crucial for their overall health and happiness. With so many options available, it can be overwhelming to decide which supplements are best for your furry friend. Here are some tips to help you choose the right supplements, and we'll highlight some great options from <strong>Vetpicurean's Chubby Gummy</strong> range that you might find helpful.
                        </p>
                        <ol>
                            <li>
                                <strong>Understand Your Pet's Needs</strong>
                                <p>Just like humans, pets have unique dietary requirements. Factors such as age, breed, health conditions, and lifestyle can influence what nutrients they need. For example, growing puppies, senior pets, and pregnant or nursing mothers may require additional support in specific areas. If your pet needs balanced growth support, look for supplements with Spirulina and Biotin. These ingredients are great for promoting overall health and a shiny coat. A product like <strong>Chubby Gummy Basic</strong> can be an excellent choice for this purpose.</p>
                            </li>
                            <li>
                                <strong>Focus on Specific Health Concerns</strong>
                                <p>Some pets may have particular health issues that require targeted support. Whether it's skin and coat health, joint support, or digestive health, choosing the right supplement can make a big difference. For pets with dull coats or those needing a boost in natural radiance, consider a supplement rich in antioxidants and collagen. <strong>Chubby Gummy Collaberry</strong>, with Goji Berry, Marine Collagen, Chicken Liver, and Virgin Coconut Oil, is formulated to enhance your pet's beauty and vitality.</p>
                            </li>
                            <li>
                                <strong>Support Digestive Health</strong>
                                <p>A healthy digestive system is essential for your pet's overall well-being. If your pet has digestive issues, it's important to choose a supplement that can help soothe and support their digestion. Fennel is a great natural ingredient that aids digestion. <strong>Chubby Gummy Tummy</strong> is specially designed to support digestive health, making it a good choice for pets with occasional tummy troubles.</p>
                            </li>
                            <li>
                                <strong>Consider the Needs of Pregnant and Nursing Pets</strong>
                                <p>Pregnant and nursing pets have unique nutritional needs. They require extra energy, antioxidants, and digestible proteins to support their health and the growth of their babies. For pregnant and nursing pets, look for a supplement high in protein and antioxidants. <strong>Chubby Gummy Mom</strong> offers a comprehensive blend of nutrients to strengthen the fetus and provide energy to the mother.</p> 
                            </li>
                            <li>
                                <strong>Boost the Immune System</strong>
                                <p>A strong immune system is vital for preventing illnesses and keeping your pet healthy. Supplements that support immune function can be especially beneficial during times of stress or seasonal changes. Lysine is an essential amino acid that supports immune health and aids in calcium absorption. <strong>Chubby Gummy Essentials</strong> contains Lysine and is perfect for boosting your pet's immune system and promoting healthy skin and bones.</p> 
                            </li>
                            <li>
                                <strong>Address Urinary Health</strong>
                                <p>Urinary problems can be common in pets, from difficulty urinating to kidney stones. Choosing a supplement that supports urinary tract health can help prevent these issues. For pets with urinary concerns, a supplement like <strong>Chubby Gummy Urigoel</strong> can provide support. It's formulated to help maintain a healthy urinary tract and can be used as a preventive measure or supportive therapy.</p> 
                            </li>
                        </ol>
                        <p>
                            Choosing the right supplement for your pet doesn't have to be challenging. By understanding their specific needs and focusing on quality ingredients, you can find the perfect product to support their health and well-being. <strong>Vetpicurean's Chubby Gummy</strong> range offers a variety of specialized supplements designed to address different health concerns, ensuring your pet gets the best care possible.
                        </p>
                    </div>

                {/* </div> */}

                {/* FOOTER */}
                <div className="footer">
                <div className="d-flex">
                    <div className="col-4 pe-5">
                        <img src={logo} alt=""  style={{ width: "50%" }} />
                        <div className="more-info">
                            <div className="d-flex align-items-center mt-3">
                                <img src={tel} alt="" className='info'/>
                                <p className='Hind'>081330077377 (dr.Yenni)</p>
                            </div>
                            <div className="d-flex align-items-center mt-3">
                                <img src={email} alt="" className='info'/>
                                <p className='Hind'>hello@vetpicurean.com</p>
                            </div>
                            <div className="d-flex align-items-center mt-3">
                                <img src={loc} alt="" className='info'/>
                                <p className='Hind'>Diamond Regency E7, Kelurahan Keputih, Kecamatan Sukolilo, Surabaya</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 ps-5">
                        <h3 className='mb-0 Raleway mt-4'>Quick Links</h3>
                        <p className='Hind mt-4'>About</p>
                        <p className='Hind mt-4'>Tips</p>
                        <p className='Hind mt-4'>Product</p>
                        <p className='Hind mt-4'>Testimonial</p>
                    </div>
                    <div className="col-4 ps-5">
                        <h3 className='mb-0 Raleway mt-4'>Subscribe</h3>
                        <div className="d-flex mt-4">
                            <input type="text" className="form-control position-relative Hind" placeholder='E-mail'/>
                            <button className='btn-paw position-absolute' style={{borderRadius: '50%'}}>
                                <img src={paw2} alt="" className='sub-paw'/>
                            </button>
                        </div> 
                        <p className='mt-4'>Subscribe to more information</p>          
                    </div>
                </div>

                <hr />

                <p className='mt-4 text-center'>@2024 vetpicurean | All Right Reserved</p>
                </div>
            </div>
        </div>

        

    );
};

export default DetailTips;
