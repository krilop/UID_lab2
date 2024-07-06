const Geolocation = ({ elem }) => {
    return (
        <div className="map">
            <iframe
                src={elem}
                width="600"
                height="450"
                style={{ border: '0' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Карта местоположения"
            ></iframe>
        </div>
    );
};

export default Geolocation;
