import "./headerStyle.scss"


export default function HeaderComponent() {
    return (
        <header>
            <div className="header">
                <div className="header__title">
                    <h1>Table UI <span>/ Design system </span></h1>
                    <div className="header__icon">
                        <p>version 3.0</p>
                    </div>
                </div>
                <div className="header__logo">
                    <p>made by</p>
                    <div className="signature">
                        <div className="signature__img">
                            <img src="/img/icon.png" alt="logo_author"/>
                        </div>
                        <p className="signature__text">dribbble.com/Sergey_Arkhipov</p>
                    </div>
                </div>
            </div>
        </header>
    );
}
