import React from 'react'

const Client = () => {
    return (
        <div className="container-fluid">
            <div className="row mt-4">
                <div className="col-md d-flex justify-content-between">
                    <div className="">
                        <h3>Client List</h3>
                    </div>
                    <div className="">
                        <i className="bi bi-eject text-info me-2 fs-5"></i>
                    </div>
                </div>
            </div>
            <hr />
            <div style={{ width: "99%", margin: "auto" }} className="row overflow-auto">
                <table className="table" id="myTable">
                    <thead>
                        <tr style={{ color: "#acacac" }}>
                            <th scope='col'>image</th>
                            <th scope="col">name</th>
                            <th scope="col">description</th>
                            <th scope='col'>price</th>
                            <th scope='col'>categorie</th>
                            <th className="text-center">operation</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        <tr className="align-middle">
                            <td><img width={100} src={"#"} alt='...' /></td>
                            <td className='text-nowrap'>name</td>
                            <td >Lorem ipsum, dolor sit amet consectetur adipisicing elit</td>
                            <td>200</td>
                            <td>nadi</td>
                            <td className="d-flex flex-row justify-content-end">
                                <div className='text-nowrap'>
                                    <button className="btn btn-outline-danger">désactive</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Client