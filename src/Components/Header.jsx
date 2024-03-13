export default function Header () {
    return (
        <header>
            <div className="main-cabecalho">
                <div className="submain-cabecalho">
                    <img src="./img/logo-starplus.png" className="logo-cabecalho"/>
                    <div className="main-logos-cabecalho">
                        <img src="./img/logo-inicio.png" className="minilogos-cabecalho"></img>
                        <h1 className="texto-minilogos-cabecalho">INICIO</h1>
                    </div>
                    <div className="main-logos-cabecalho">
                        <img src="./img/logo-lupa.png" className="minilogos-cabecalho"></img>
                        <h1 className="texto-minilogos-cabecalho">PESQUISA</h1>
                    </div>
                    <div className="main-logos-cabecalho">
                        <img src="./img/logo-mais.png" className="minilogos-cabecalho"></img>
                        <h1 className="texto-minilogos-cabecalho">MINHA LISTA</h1>
                    </div>
                    <div className="main-logos-cabecalho">
                        <img src="./img/logo-espn.png" className="minilogos-cabecalho"></img>
                        <h1 className="texto-minilogos-cabecalho">ESPN</h1>
                    </div>
                    <div className="main-logos-cabecalho">
                        <img src="./img/logo-filme.png" className="minilogos-cabecalho"></img>
                        <h1 className="texto-minilogos-cabecalho">FILMES</h1>
                    </div>
                    <div className="main-logos-cabecalho">
                        <img src="./img/logo-series.png" className="minilogos-cabecalho"></img>
                        <h1 className="texto-minilogos-cabecalho">SERIES</h1>
                    </div>
                 </div>
                <div className="submain-cabecalho">
                    <p className="user-cabecalho">Pedro</p>
                    <img className="foto-perfil-cabecalho" src="./img/foto-perfil.jpeg"></img>
                </div>
            </div>
        </header>
    )
}