import React from 'react';
 function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-black">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><h2 className="text-warning">FASHION</h2></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active text-light bg-warning" aria-current="page" href="#">Home</a>
                            <a class="nav-link text-light" href="#">Features</a>
                            <a class="nav-link text-light" href="#">Pricing</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;