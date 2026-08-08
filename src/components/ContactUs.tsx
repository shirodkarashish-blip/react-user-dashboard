import { useState } from 'react';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [skills, setSkills] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow-sm border-0 rounded-4">
              <div className="card-body p-5">
                <h2 className="card-title mb-3">Contact Us</h2>
                <p className="text-muted mb-4">
                  Fill out your details and we will contact you later.
                </p>

                {submitted && (
                  <div className="alert alert-success" role="alert">
                    Thank you, {name}! We will contact you at {email} soon.
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="name">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="form-control"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="form-control"
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label" htmlFor="skills">
                      Skills
                    </label>
                    <input
                      id="skills"
                      type="text"
                      className="form-control"
                      value={skills}
                      onChange={(event) => setSkills(event.target.value)}
                      placeholder="List your skills separated by commas"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="form-control"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="Enter your email address"
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg w-100">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;