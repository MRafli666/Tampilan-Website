function Header() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-warning">
                <div class="container">
                    <nav class="navbar ">
                        <div class="container">
                            <a class="navbar-brand" href="#">
                                <img src="smpn.png" alt="Bootstrap" width="40" height="40" />
                            </a>
                        </div>
                    </nav>
                    <b><a class="navbar-brand" href="#">SMPN 12 Bandung</a></b>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <b><a class="nav-link active" aria-current="page" href="#">PROFIL</a></b>
                            </li>
                            <li class="nav-item">
                                <b><a class="nav-link" href="#">INFORMASI</a></b>
                            </li>
                            <li class="nav-item">
                                <b><a class="nav-link" href="#">EKSTRAKULIKULER</a></b>
                            </li>
                            <li class="nav-item">
                                <b><a class="nav-link" href="#">KONTAK KAMI</a></b>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Header