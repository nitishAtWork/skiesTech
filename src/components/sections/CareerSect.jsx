import React, { useState, useEffect } from 'react'
import './CareerSect.css'
import BtnLink from '../BtnLink'
import { Parser } from 'html-to-react'

const CareerSect = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        getJobs();
    }, []);

    const getJobs = async () => {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}jobs`);
        result = await result.json();
        if (result.status) {
            setJobs(result.jobs);
        }
    }
    return (
        <section className='sect-space bg-gry'>
            <div className="container">
                {
                    jobs
                        ?
                        jobs.map((value, index) =>
                            <div key={index} className="job-box bg-white mt-4">
                                <div className="p-4">
                                    <div className="row align-items-center">
                                        <div className="col-md-4">
                                            <div className="d-flex ">
                                                <i class="fa-solid fa-user-tie"></i>
                                                <div>
                                                    <p className='h4-tx'> {value.postName}</p>
                                                    <p className="text-muted mb-0">{value.companyName}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div>
                                                <p className="text-muted mb-0"><i class="fa-solid fa-location-dot mr-2"></i> {value.jobLocation}</p>
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <div>
                                                <p className="text-muted mb-0 mo-mb-2"><span className="text-custom"><i class="fa-solid fa-sack-dollar"></i></span>{value.salary}</p>
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <div>
                                                <p className="text-muted mb-0"><i class="fa-solid fa-briefcase"></i> {value.jobType}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3 bg-light2">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div>
                                                <p className="text-muted mb-2 mo-mb-2"><span className="text-dark"><b>Openings :</b></span> {value.openings}</p>
                                                <p className="text-muted mb-2 mo-mb-2"><span className="text-dark"><b>Experience :</b></span> {value.experience}</p>
                                                <p className="text-muted mb-0 mo-mb-2"><span className="text-dark"><b>Education :</b></span> {value.education}</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div>
                                                <p className="text-muted mb-0 mo-mb-2"><span className="text-dark">Notes :</span> {value.notes}</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className='bg-light2 p-3 pt-0'>
                                    <p className="h4-tx mb-0">Requiremts / Skills :</p>
                                    <div className="mt-3">
                                      {Parser().parse(value.jobDescription)}
                                    </div>
                                    <div className='my-3'>
                                        <BtnLink Href='/apply' btnName="Apply Now" />
                                    </div>
                                </div>
                            </div>
                        )
                        :
                        null
                }
              
            </div>
        </section>
    )
}

export default CareerSect
