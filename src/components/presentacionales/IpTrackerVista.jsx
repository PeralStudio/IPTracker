const IpTrackerVista = ({ handleClick, handleChange, ip, data }) => {
    return (
        <div className="container">
            <h1>IP Adress Tracker</h1>

            {ip && !data && (
                <p style={{ textAlign: "center" }}>
                    Tu IP es: {ip}
                    <br /> Pulsa Enviar para buscar tu IP o coloca otra.
                </p>
            )}
            <div className="container__item">
                <form className="form">
                    <input
                        style={{ borderRadius: "10px" }}
                        onChange={handleChange}
                        type="text"
                        className="form__field"
                        placeholder="Buscar IP... "
                    />
                    <button
                        style={{ borderRadius: "10px" }}
                        onClick={handleClick}
                        type="button"
                        className="btn btn--primary btn--inside uppercase"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default IpTrackerVista;
