import React from 'react'
import './CareerSect.css'
import BtnLink from '../BtnLink'

const CareerSect = () => {
    return (
        <section className='sect-space bg-gry'>
            <div className="container">
                <div className="job-box bg-white mt-4">
                    <div className="p-4">
                        <div className="row align-items-center">
                            <div className="col-md-4">
                                <div className="d-flex ">
                                    <i class="fa-solid fa-user-tie"></i>
                                    <div>
                                        <p className='h4-tx'> Position opening for</p>
                                        <p className="text-muted mb-0">Web Technology pvt.Ltd</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div>
                                    <p className="text-muted mb-0"><i class="fa-solid fa-location-dot mr-2"></i> Oakridge Lane Richardson</p>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div>
                                    <p className="text-muted mb-0 mo-mb-2"><span className="text-custom"><i class="fa-solid fa-sack-dollar"></i></span>1000-1200/m</p>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div>
                                    <p className="text-muted mb-0"><i class="fa-solid fa-briefcase"></i> Full Time</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 bg-light2">
                        <div className="row">
                            <div className="col-md-4">
                                <div>
                                    <p className="text-muted mb-2 mo-mb-2"><span className="text-dark"><b>Openings :</b></span> 10</p>
                                    <p className="text-muted mb-2 mo-mb-2"><span className="text-dark"><b>Experience :</b></span> 1 - 2 years</p>
                                    <p className="text-muted mb-0 mo-mb-2"><span className="text-dark"><b>Education :</b></span> Graduation</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div>
                                    <p className="text-muted mb-0 mo-mb-2"><span className="text-dark">Notes :</span> languages only differ in their grammar. </p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='bg-light2 p-3 pt-0'>
                        <p className="h4-tx mb-0">Requiremts / Skills :</p>
                        <div className="mt-3">
                            <ul>
                                <li>Excellent communication, negotiation and sales skills</li>
                                <li>Excellent communication, negotiation and sales skills</li>
                                <li>Excellent communication, negotiation and sales skills</li>
                                <li>Excellent communication, negotiation and sales skills</li>
                                <li>Excellent communication, negotiation and sales skills</li>
                            </ul>
                        </div>
                        <div className='my-3'>
                          <BtnLink Href='/contact' btnName="Apply Now" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CareerSect
