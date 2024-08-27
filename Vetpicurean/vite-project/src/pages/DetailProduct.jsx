import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from '../components/product';

import paw2 from '../assets/paw2.png'
import bone1 from '../assets/bone1.png'
import logo from '../assets/vetpic.png'
import tel from '../assets/telephone.png'
import loc from '../assets/loc.png'
import email from '../assets/email.png'

const DetailProduct = () => {
    const { id } = useParams()
    const [currentProduct, setCurrentProduct] = useState(null);

    useEffect(() => {
        const product = products.find(p => p.id == parseInt(id))
        setCurrentProduct(product)
    }, [id])

    if (!currentProduct) {
        return <div>Loading...</div>
    }

    return (
        <div className="overflow-hidden">
            <div className="container">
                <div className="row">
                    <div className="col-6 position-relative mt-4">
                        <img src={currentProduct.src} alt="" className='img-fluid' style={{width: '65%'}}/>
                        <div className="position-absolute mt-2" style={{ top: '-30px', left: '-35px', zIndex: 1 }}>
                            <img src={bone1} alt="" style={{ width: '90px', height: '90px' }} />
                        </div>
                    </div>
                    <div className="col-md-6 Raleway mb-5">
                        <h2 style={{fontSize: '40px', marginBottom: '30px'}}>{currentProduct.title}</h2>
                        <hr />

                        <h6 className='mb-3'>Description</h6>
                        <p style={{textAlign: "justify"}}>{currentProduct.description}</p>
                        <hr />

                        <h6 className='mb-3'>Fungsi</h6>
                        <ol>
                            {currentProduct.function.map((func, index) => (
                                <li key={index}>{func}</li>
                            ))}
                        </ol>
                        <hr />

                        <h6 className='mb-3'>Komposisi</h6>
                        <ul>
                            {currentProduct.komposisi.map((comp, index) => (
                                <li key={index}>{comp}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="footer">
                    <div className="d-flex">
                        <div className="col-4 pe-5">
                            <img src={logo} alt=""  style={{ width: "50%" }} />
                            <div className="more-info">
                                <div className="d-flex align-items-center mt-3">
                                    <img src={tel} alt="" className='info'/>
                                    <p className='Rimouski'>087785098424</p>
                                </div>
                                <div className="d-flex align-items-center mt-3">
                                    <img src={email} alt="" className='info'/>
                                    <p className='Rimouski'>hello@vetpicurean.com</p>
                                </div>
                                <div className="d-flex align-items-center mt-3">
                                    <img src={loc} alt="" className='info'/>
                                    <p className='Rimouski'>Diamond Regency E7, Kelurahan Keputih, Kecamatan Sukolilo, Surabaya</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 ps-5">
                            <h3 className='mb-0 Raleway mt-4'>Quick Links</h3>
                            <p className='Rimouski mt-4'>About</p>
                            <p className='Rimouski mt-4'>Tips</p>
                            <p className='Rimouski mt-4'>Product</p>
                            <p className='Rimouski mt-4'>Testimonial</p>
                        </div>
                        <div className="col-4 ps-5">
                            <h3 className='mb-0 Raleway mt-4'>Subscribe</h3>
                            <div className="d-flex mt-4">
                                <input type="text" className="form-control position-relative Hind" placeholder='E-mail'/>
                                <button className='btn-paw position-absolute' style={{borderRadius: '50%'}}>
                                <img src={paw2} alt="" className='sub-paw'/>
                                </button>
                            </div> 
                            <p className='mt-4 Rimouski'>Subscribe to more information</p>          
                        </div>
                    </div>

                    <hr />

                    <p className='mt-4 text-center Rimouski'>@2024 vetpicurean | All Right Reserved</p>
                </div>
            </div>
        </div>
    );
};

export default DetailProduct;
