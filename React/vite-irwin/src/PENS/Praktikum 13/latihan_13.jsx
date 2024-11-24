import './latihan_13.css'

function Latihan13() {
    return (
    <div className="bg-light min-vh-100 d-flex align-items-center justify-content-center">
        <div className="container py-5">
            <div className="row g-4">
                <div className="p-5 text-center shadow col-md-4 d-flex flex-column align-items-center justify-content-center bg-teal">
                    <img src="https://s7d9.scene7.com/is/image/streamcompanies/Torque-Black?$Original-Dimensions-RGB-PNG$" className="mb-4 img-fluid w-50 img-hover-animate" alt="CleanMyCar Logo"/>
                    <h1 className="h4 fw-bold fst-italic">CleanMyCar</h1>
                    <p className="h6">India's first waterless car cleaning company</p>
                </div>

                <div className="p-5 shadow col-md-8 bg-light d-flex flex-column align-items-center">
                    <div className="mb-4 align-self-end"><p>Need help?</p></div>
                    <h1 className="mb-4 h3 fw-bold">Log in</h1>
                    <form className="w-100" style={{ maxWidth: '400px' }}>
                        <div className="mb-4">
                            <label className="form-label h5 fw-bold">Email</label>
                            <input type="text" className="form-control form-control-lg input-hover-animate input-focus-shadow" placeholder="email"/>
                        </div>
                        <div className="mb-4">
                            <label className="form-label h5 fw-bold">Password</label>
                            <input type="password" className="form-control form-control-lg input-hover-animate input-focus-shadow" placeholder="password"/>
                        </div>
                        <div className="mt-4 d-grid">
                            <button className="px-5 btn btn-teal btn-lg fw-bold">Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Latihan13;
