import React from 'react'

const RightButtom = () => {
    return (
        <div className="col-md-6">
            <div className="card mb-4 mb-md-0">
                <div className="card-body">
                    <p className="mb-4">
                        <span className="text-primary font-italic me-1">assigment</span>
                        Project Status
                    </p>
                    <p className="mb-1" style={{ fontSize: ".77rem" }}>Web Design</p>
                    <div className="progress rounded" style={{ height: 5 }}>
                        <div className="progress-bar" style={{ width: "80%" }}></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>Website Markup</p>
                    <div className="progress rounded" style={{ height: 5 }}>
                        <div className="progress-bar" style={{ width: "72%" }}></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>One Page</p>
                    <div className="progress rounded" style={{ height: 5 }}>
                        <div className="progress-bar" style={{ width: "89%" }}></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>Mobile Template</p>
                    <div className="progress rounded" style={{ height: 5 }}>
                        <div className="progress-bar" style={{ width: "55%" }}></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>Backend API</p>
                    <div className="progress rounded mb-2" style={{ height: 5 }}>
                        <div className="progress-bar" style={{ width: "66%" }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightButtom