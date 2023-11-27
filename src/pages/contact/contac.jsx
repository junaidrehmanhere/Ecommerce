import Footer from "../Footer/Footer";

function Contact() {
    return ( 
        <>
        <div className="container mt-5 mb-5 font-weight-bold w-50% justify-content-center  ">
        <div className="row border border-radius border-light rounded-sm shadow-lg p-5">

        <div className="mt-5 ">
      <h2>Contact Us</h2>
      <form>
        <div className="mb-3 ">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter your name" />
        </div>

        <div className="mb-3 ">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" placeholder="Enter your email" />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" rows={4} placeholder="Enter your message"></textarea>
        </div>

        <button type="submit" className="btn btn-primary ">Submit</button>
      </form>
    </div>
        </div>
        </div>
       
        <Footer/>
        </>
     );
}

export default Contact;