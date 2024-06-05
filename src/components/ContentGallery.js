import Container from "react-bootstrap/Container";
import cardImage1 from "../assets/866-536x354.jpg";
import bannerisra from "../assets/bannerisra.jpg"
import bannercairo from "../assets/bannercairo.jpg"
import bannernepal from "../assets/bannernepal.jpg"
import banneretio from "../assets/banneretio.jpg"
import { Link } from "react-router-dom";

function Card({image,cardTitle,cardText,gallery,orientation}) {
    return (
        <>
            <div data-aos="fade-up" data-aos-offset="300" className={`row py-4 ${orientation ? "flex-row" : "flex-row-reverse"}`}>
                <div className="col-12 col-md-6">
                    <img alt="" src={image} className="rounded-2 img-fluid w-100 object-fit-cover"></img>
                </div>
                <div className={`col-12 col-md-6 d-flex flex-column justify-content-center ${orientation ? "align-items-md-start" : "align-items-md-end"}`}>
                    <h1 className="text-light">{cardTitle}</h1>
                    <p className={`text-light ${orientation ? "text-md-start" : "text-md-end"}`}>{cardText}</p>
                    <Link to={`/Gallery/${gallery}`} className={`${window.innerWidth < 992 ? "bg-accent-mobile" : "bg-accent"} text-light px-3 py-2 rounded-2 w-max text-decoration-none`}>
                        Scopri di più
                    </Link>
                </div>
            </div>
        </>
    )
}

export default function ContentGallery() {
    return (
        <Container className="py-5">
            <Card orientation={true} image={bannerisra} cardTitle={"Israele e Palestina"} cardText={"testo di prova testo di prova testo di prova testo di prova testo di prova testo di prova testo di prova testo di prova testo di prova testo di prova testo di prova testo di prova testo di prova testo di prova testo di prova testo di prova testo di prova testo di prova"} gallery="Israele & Palestina"/>
            <Card orientation={false} image={bannercairo} cardTitle={"Il Cairo"} cardText={"testo di prova testo di prova testo di prova testo di prova testo di prova testo di prova testo di prova testo di prova testo di prova testo di prova testo di prova testo di prova testo di prova testo di prova testo di prova testo di prova testo di prova testo di prova"}/>
            <Card orientation={true} image={bannernepal} cardTitle={"Nepal"} cardText={"testo di prova testo di prova testo di prova testo di prova testo di prova testo di prova testo di prova testo di prova testo di prova testo di prova testo di prova testo di prova testo di prova testo di prova testo di prova testo di prova testo di prova testo di prova"}/>
            <Card orientation={false} image={banneretio} cardTitle={"Etiopia"} cardText={"testo di prova testo di prova testo di prova testo di prova testo di prova testo di prova testo di prova testo di prova testo di prova testo di prova testo di prova testo di prova testo di prova testo di prova testo di prova testo di prova testo di prova testo di prova"}/>
        </Container>
    );
}