import React, { useEffect, useState } from 'react';
import './ContactSect.css';
import SectionTitle from '../SectionTitle';
import Socials from '../nav/Socials';
import Button from '../Button';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ReCAPTCHA from "react-google-recaptcha";
import toast, { Toaster } from 'react-hot-toast';

const recaptchaRef = React.createRef();

const ContactSect = () => {

    const [siteInfo, setSiteInfo] = useState([]);
    const [products, setProduct] = useState([]);
    const [error, setError] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [gstNumber, setGstNumber] = useState('');
    const [address, setAddress] = useState('');
    const [product, setEnquiryProduct] = useState('');
    const [companyName, setCompanyName] = useState('');

    const boxVariant = {
        visible: { opacity: 1, scale: 1, transition: { duration: 0.325 } },
        hidden: { opacity: 0.25, scale: 0.65 },
    }

    const control = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        getSiteInfo();
        getProducts();
        if (inView) {
            control.start("visible");
        }
        else {
            control.start("hidden");
        }
    }, [control, inView]);

    const getSiteInfo = async () => {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}siteInfo`);
        result = await result.json();
        if (result.status) {
            setSiteInfo(result.siteInfo);
        }
    }

    const getProducts = async () => {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}products`)
        result = await result.json();
        if (result.status) {
            setProduct(result.products);
        }
    }

    const handleEnquiryForm = async (event) => {
        event.preventDefault();

        const formData = event.target;
        const form = new FormData(formData);
        const data = Object.fromEntries(form.entries());
        Object.keys(data).forEach(k => data[k] = data[k].trim());
        if (
            data.name === '' ||
            data.phone === '' ||
            data.email === '' ||
            // data.companyName === '' ||
            data.product === ''
        ) {
            setError(true);
            return false;
        }
        if (data['g-recaptcha-response'] === '') {
            toast.error('Click on I\'m not a robot box to verify yourself.', {
                style: {
                    borderRadius: '10px',
                    background: '#2c2b7b',
                    color: '#fff',
                }
            });
            return false;
        }

        let result = await fetch(`${process.env.REACT_APP_BASE_URL}enquiry`,
            {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' },
            }
        )

        result = await result.json();

        if (result.status) {
            event.target.reset();
            toast.success('Thank you for Contacting.', {
                style: {
                    borderRadius: '10px',
                    background: '#2c2b7b',
                    color: '#fff',
                }
            });
        } else {
            toast.error(result.message, {
                style: {
                    borderRadius: '10px',
                    background: '#2c2b7b',
                    color: '#fff',
                }
            });
        }
    }

    return (
        <>
            <Toaster position="top-left" />
            <section className='sect-space bg-gry contact-container contact-container1'>
                <div className='container'>

                    <div className='row'>
                        <div className='col-lg-7 col-md-6 conta-scls'>
                            <SectionTitle smTitle="Contact Us" mainTitle="We Look Forward To Serving You And Meeting Your Healthcare Needs." />
                            <div className='Contact_box '>
                                <form onSubmit={handleEnquiryForm}>
                                 <input type="hidden" name='currenturl' value={window.location.href} />
                                    <div className='row'>
                                        <div className='col-lg-6'>
                                            <TextField
                                                error={
                                                    (error && name == '')
                                                        ?
                                                        true
                                                        :
                                                        false
                                                }
                                                onChange={e => setName(e.target.value)}
                                                label="Your Name"
                                                name='name'
                                                type='text' />
                                        </div>
                                        <div className='col-lg-6'>
                                            <TextField
                                                error={
                                                    (error && phone == '')
                                                        ?
                                                        true
                                                        :
                                                        false
                                                }
                                                onChange={e => setPhone(e.target.value)}
                                                label="Your Phone"
                                                name='phone'
                                                type='number' />
                                        </div>
                                        <div className='col-lg-6'>
                                            <TextField
                                                error={
                                                    (error && email == '')
                                                        ?
                                                        true
                                                        :
                                                        false
                                                }
                                                onChange={e => setEmail(e.target.value)}
                                                label="Your Email"
                                                name='email'
                                                type='email' />
                                        </div>
                                        <div className='col-lg-6'>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Select Product</InputLabel>
                                                <Select
                                                    error={
                                                        (error && product == '')
                                                            ?
                                                            true
                                                            :
                                                            false
                                                    }
                                                    onChange={e => setEnquiryProduct(e.target.value)}
                                                    label="Select product"
                                                    name='product'
                                                // onChange={handleChange}
                                                >
                                                    {
                                                        products
                                                            ?
                                                            products.map((value, index) =>
                                                                <MenuItem key={index} value={value.name}>{value.name}</MenuItem>
                                                            )
                                                            :
                                                            null
                                                    }
                                                </Select>
                                            </FormControl>

                                        </div>
                                        <div className='col-12'>
                                            <TextField
                                                // error={
                                                //     (error && gstNumber == '')
                                                //         ?
                                                //         true
                                                //         :
                                                //         false
                                                // }
                                                onChange={e => setGstNumber(e.target.value)}
                                                label="Gst Number"
                                                name='gstNumber'
                                                type='text' />
                                        </div>
                                        <div className='col-12'>
                                            <TextField
                                                // error={
                                                //     (error && companyName == '')
                                                //         ?
                                                //         true
                                                //         :
                                                //         false
                                                // }
                                                onChange={e => setCompanyName(e.target.value)}
                                                label="Company Name"
                                                name='companyName'
                                                type='text' />
                                        </div>
                                        <div className='col-12'>
                                            <TextField 
                                                // error={
                                                //     (error && address == '')
                                                //         ?
                                                //         true
                                                //         :
                                                //         false
                                                // }
                                                onChange={e => setAddress(e.target.value)}
                                              label="Address"
                                              name='address'
                                              type='text' />
                                        </div>
                                        <div className='col-12'>
                                            <TextField multiline rows={3} label="Write any message..." name='message' type='text' />
                                        </div>
                                        <div className='col-12 mb-2'>
                                            <ReCAPTCHA
                                                ref={recaptchaRef}
                                                sitekey="6LfCLH0pAAAAAEMBIU7x08eUAsRUXDlQt4oNHsYL"
                                            // onChange={onChange}
                                            />
                                        </div>
                                        <div className='col-12'>
                                            <Button btnType="submit" btnName="Submit Query" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {/* <Socials data={siteInfo} /> */}
                        </div>
                        <div className='col-lg-5 col-md-6 px-4 m-t50'>
                           
                        </div>
                    </div>
                </div>
            </section>
            <section className='sect-space pt-3'>
                <div className='container'>
                    <div className='row m-t30'>
                        <div className='col-lg-4 col-md-6'>
                            <div className='conta-info-bx'>
                                <div className='conta-info-bx-in'>
                                    <p className="head-add">Phone</p>
                                    <a href={"tel:" + siteInfo.primaryPhone}><PhoneInTalkOutlinedIcon />{siteInfo.primaryPhone}</a>
                                    <a href={"tel:" + siteInfo.secondaryPhone}><PhoneInTalkOutlinedIcon />{siteInfo.secondaryPhone}</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6'>
                            <div className='conta-info-bx'>
                                <div className='conta-info-bx-in'>
                                <p className="head-add">Email</p>
                                    <a href={"mailto:" + siteInfo.primaryMail}><MarkEmailUnreadOutlinedIcon /> {siteInfo.primaryMail}</a>
                                    <a href={"mailto:" + siteInfo.secondaryMail}><MarkEmailUnreadOutlinedIcon /> {siteInfo.secondaryMail} </a>
                                    <a href={"mailto:" + siteInfo.thirdMail}><MarkEmailUnreadOutlinedIcon /> {siteInfo.thirdMail} </a>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-12'>
                            <div className='conta-info-bx'>
                                <div className='conta-info-bx-in'>
                                <p className="head-add">Address</p>
                                    <span><LocationOnOutlinedIcon /> {siteInfo.primaryAddress}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactSect
