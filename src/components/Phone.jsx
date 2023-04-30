

function Phone({ link, id }) {

    return (
        <div className="phone-item">
            <a href={link} target="_blank" rel="noreferrer">
                <div className="marvel-device iphone-x">
                    <div className="notch">
                        <div className="camera"></div>
                        <div className="speaker"></div>
                    </div>
                    <div className="top-bar"></div>
                    <div className="sleep"></div>
                    <div className="bottom-bar"></div>
                    <div className="volume"></div>
                    <div className="overflow">
                        <div className="shadow shadow--tr"></div>
                        <div className="shadow shadow--tl"></div>
                        <div className="shadow shadow--br"></div>
                        <div className="shadow shadow--bl"></div>
                    </div>
                    <div className="inner-shadow"></div>
                    <div className={`phone-screen screen__${id+1}`}>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Phone;