import { useEffect, useState } from 'react';
import '../App.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import paw2 from '../assets/paw2.png';
import logo from '../assets/vetpic.png';
import tel from '../assets/telephone.png';
import loc from '../assets/loc.png';
import email from '../assets/email.png';

const DetailTips = () => {
    const { id } = useParams();
    const [currentBlog, setCurrentBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchBlogDetail();
    }, [id]);

    const fetchBlogDetail = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/articles/${id}`);
            setCurrentBlog(response.data);
            setLoading(false);
        } catch (err) {
            console.error('Error fetching blog detail:', err);
            setError('Failed to load blog details');
            setLoading(false);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!currentBlog) {
        return <div>Blog not found</div>;
    }

    return (
        <div className="overflow-hidden">
            <div className="container">
                <div className="detail-tips">                
                    <div className="card border-0">
                        <div className="d-flex align-items-center justify-content-center">
                            <img src={paw2} alt="" style={{width: '10%', height: '10%', marginRight: '100px', transform: 'rotate(-20deg)'}}/>
                            <img 
                                src={currentBlog.imageUrl ? `http://localhost:5000/${currentBlog.imageUrl}` : currentBlog.src} 
                                className="card-img" 
                                style={{width: '30%', height: '30%', objectFit: 'cover', borderRadius: '20px'}}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = currentBlog.src; // Fallback to default image
                                }}
                            />
                            <img src={paw2} alt="" style={{width: '10%', height: '10%', marginLeft: '100px', transform: 'rotate(20deg)'}}/>
                        </div>
                        <h5 className="titleTips">{currentBlog.title}</h5>
                    </div>
                    <div className="contentTips Raleway">
                        <span className="first-letter">{currentBlog.description.charAt(0)}</span>
                        {currentBlog.description.slice(1)}
                    </div>                   
                </div>
                {/* FOOTER */}
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

export default DetailTips;