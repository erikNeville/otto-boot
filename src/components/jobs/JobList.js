import React from 'react'
import JobSummary from './JobSummary'

const JobList = (props) => {

    const { jobs, filterText } = props;

    return (
        <div className="job-list">
            { jobs && jobs
                .filter(job => {
                    return job.project.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
            })
            .map(job => {
                return (
                    <JobSummary job={job} key={job.id} />
                )
            })}
        </div>
    )
}

export default JobList