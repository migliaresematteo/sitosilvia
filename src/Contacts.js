import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import { Container } from "react-bootstrap"

function Contacts() {
    useEffect(() => {
        Aos.init();

        const script = document.createElement('script');
        script.src = "//embed.typeform.com/next/embed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <Container>
            <div data-tf-live="01HYXDB74JN96997M2WDPWZECA"></div>
        </Container>
    );
}

export default Contacts;