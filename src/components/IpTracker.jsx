import axios from "axios";
import { useEffect, useState } from "react";
import { apiKey, baseUrl, queryUrl } from "../const";
import IpTrackerVista from "./presentacionales/IpTrackerVista";
import ResultTrackerVista from "./presentacionales/ResultTrackerVista";

const Iptracker = () => {
    const [valorInput, setValorInput] = useState("");
    const [data, setData] = useState("");
    const [ip, setIp] = useState("");

    useEffect(() => {
        axios.get(`${baseUrl}${apiKey}`).then((response) => setIp(response.data.ip_address));
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        axios
            .get(`${baseUrl}${apiKey}${queryUrl}${valorInput}`)
            .then((response) => setData(response));
    };

    const handleChange = ({ target }) => setValorInput(target.value);

    return (
        <>
            <IpTrackerVista
                handleClick={handleClick}
                handleChange={handleChange}
                ip={ip}
                data={data}
            />
            <ResultTrackerVista data={data} />
        </>
    );
};

export default Iptracker;
