import Container from "react-bootstrap/Container";
export default function Header({titolo,sottotitolo,pulsante,link}) {

    return (
        <header className="d-flex flex-column justify-content-center position-relative">
            <Container>
                    <div className='p-lg-5 d-flex flex-column justify-content-center'>
                        <h1 data-aos="fade-up" className='display-1 mb-2 text-light'>{titolo}</h1>
                        <h4 data-aos="fade-up" data-aos-delay="200" className='display-6 mb-5 text-light'>{sottotitolo}</h4>
                        {pulsante && link && (
                        <a
                            data-aos="fade-up"
                            data-aos-delay="400"
                            className={`px-3 py-2 text-light rounded-2 text-decoration-none w-max ${window.innerWidth < 992 ? "bg-accent-mobile" : "bg-accent"}`}
                            href={link}
                            role='button'
                        >
                            {pulsante}
                        </a>
                    )}
                    </div>
            </Container>
            <div className="position-absolute bottom-0 w-100 h-25 headerBreak"></div>
        </header>
    );
}