import React from 'react'

const Contact = () => {
  return (
    <div class="container mt-4" id="contact">
        <h1 class="text-center fw-bolder" style={{fontSize: "4rem", color: "#444"}}>Contact <span>Us</span></h1>
        <div class="col-8 mx-auto p-3">
            <form method="POST">
                <div class="row">
                    <div class="col-lg-6 col-md-6 mt-3">
                        <input type="text" name="nom" placeholder="Entrer votre name" class="form-control shadow"/>
                    </div>
                    <div class="mt-3 col">
                        <input type="email" name="email" placeholder="E-mail" class="form-control shadow"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6 col-md-6 mt-3">
                        <input type="text" placeholder="Entrer votre number" class="form-control shadow"/>
                    </div>
                    <div class="mt-3 col">
                        <input type="text" name="subject" placeholder="Subject" class="form-control shadow"/>
                    </div>
                </div>
                <div class="my-3">
                    <textarea name="message" rows="9" placeholder="your message" class="form-control shadow"></textarea>
                </div>
                <div class="text-center my-5">
                    <button type="submit" class="btn text-white shadow text-nowrap" name="submit" style={{backgroundColor: "#F79F1F"}}>send message</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact