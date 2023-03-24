import React from 'react'

const Contact = (props) => {
    return (
        <div className="container mt-4" id="contact" style={props.name}>
            <h1 className="text-center fw-bolder" style={{ fontSize: "4rem", color: "#444" }}>Contact <span>Us</span></h1>
            <div className="col-8 mx-auto p-3">
                <form>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 mt-3">
                            <input type="text" name="nom" placeholder="Entrer votre name" className="form-control shadow" />
                        </div>
                        <div className="mt-3 col">
                            <input type="email" name="email" placeholder="E-mail" className="form-control shadow" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 mt-3">
                            <input type="text" placeholder="Entrer votre number" className="form-control shadow" />
                        </div>
                        <div className="mt-3 col">
                            <input type="text" name="subject" placeholder="Subject" className="form-control shadow" />
                        </div>
                    </div>
                    <div className="my-3">
                        <textarea name="message" rows="9" placeholder="your message" className="form-control shadow"></textarea>
                    </div>
                    <div className="text-center my-5">
                        <button type="submit" className="btn text-white shadow text-nowrap" name="submit" style={{ backgroundColor: "#F79F1F" }}>send message</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact