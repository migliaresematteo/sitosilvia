import { useState, useEffect } from "react";
import Header from "./components/Header";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import Isepa1 from "./assets/1.jpg";
import Isepa2 from "./assets/2.jpg";
import Isepa3 from "./assets/3.jpg";
import Isepa4 from "./assets/4.jpg";
import Isepa5 from "./assets/5.jpg";
import Isepa6 from "./assets/6.jpg";
import Isepa7 from "./assets/7.jpg";
import Isepa8 from "./assets/8.jpg";
import Isepa9 from "./assets/9.jpg";
import Isepa10 from "./assets/10.jpg";
import Isepa11 from "./assets/11.jpeg";
import Isepa12 from "./assets/12.jpeg";
import Isepa13 from "./assets/13.jpeg";
import Isepa14 from "./assets/14.jpeg";
import Isepa15 from "./assets/15.jpeg";
import Isepa16 from "./assets/16.jpeg";
import Isepa17 from "./assets/17.jpeg";
import Isepa18 from "./assets/18.jpeg";
import Isepa19 from "./assets/19.jpeg";
import Isepa20 from "./assets/20.jpeg";
import Isepa21 from "./assets/21.jpeg";
import Isepa22 from "./assets/22.jpeg";
import Isepa23 from "./assets/23.jpeg";
import Isepa24 from "./assets/24.jpeg";
import Isepa25 from "./assets/25.jpeg";
import Isepa26 from "./assets/26.jpeg";
import Isepa27 from "./assets/27.jpeg";
import Isepa28 from "./assets/28.jpeg";
import Isepa29 from "./assets/29.jpeg";
import Isepa30 from "./assets/30.jpeg";

function Gallery() {
const { gallery } = useParams();
const [items] = useState([
  { fotografie: Isepa1, gallery: 'Israele & Palestina' },
  { fotografie: Isepa2, gallery: 'Israele & Palestina' },
  { fotografie: Isepa3, gallery: 'Israele & Palestina' },
  { fotografie: Isepa4, gallery: 'Israele & Palestina' },
  { fotografie: Isepa5, gallery: 'Israele & Palestina' },
  { fotografie: Isepa6, gallery: 'Israele & Palestina' },
  { fotografie: Isepa7, gallery: 'Israele & Palestina' },
  { fotografie: Isepa8, gallery: 'Israele & Palestina' },
  { fotografie: Isepa9, gallery: 'Israele & Palestina' },
  { fotografie: Isepa10, gallery: 'Israele & Palestina' },
  { fotografie: Isepa11, gallery: 'Israele & Palestina' },
  { fotografie: Isepa12, gallery: 'Israele & Palestina' },
  { fotografie: Isepa13, gallery: 'Israele & Palestina' },
  { fotografie: Isepa14, gallery: 'Israele & Palestina' },
  { fotografie: Isepa15, gallery: 'Israele & Palestina' },
  { fotografie: Isepa16, gallery: 'Israele & Palestina' },
  { fotografie: Isepa17, gallery: 'Israele & Palestina' },
  { fotografie: Isepa18, gallery: 'Israele & Palestina' },
  { fotografie: Isepa19, gallery: 'Israele & Palestina' },
  { fotografie: Isepa20, gallery: 'Israele & Palestina' },
  { fotografie: Isepa21, gallery: 'Israele & Palestina' },
  { fotografie: Isepa22, gallery: 'Israele & Palestina' },
  { fotografie: Isepa23, gallery: 'Israele & Palestina' },
  { fotografie: Isepa24, gallery: 'Israele & Palestina' },
  { fotografie: Isepa25, gallery: 'Israele & Palestina' },
  { fotografie: Isepa26, gallery: 'Israele & Palestina' },
  { fotografie: Isepa27, gallery: 'Israele & Palestina' },
  { fotografie: Isepa28, gallery: 'Israele & Palestina' },
  { fotografie: Isepa29, gallery: 'Israele & Palestina' },
  { fotografie: Isepa30, gallery: 'Israele & Palestina' },
]);

const [loading, setLoading] = useState(true);

const filteredItems = items.filter((item) => item.gallery === gallery);

useEffect(() => {
    const loadImage = (src) => {
    return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve();
        img.onerror = () => resolve();
    });
    };

    const loadAllImages = async () => {
    const promises = filteredItems.map(item => loadImage(item.fotografie));
    await Promise.all(promises);
    setLoading(false);
    };

    loadAllImages();
}, [filteredItems]);

return (
  <>
    <Header titolo="Galleria" sottotitolo={"Fotografie scattate in " + gallery} />
    <Container className="py-5 py-md-0 p-md-5 d-flex flex-column align-items-center">
      {filteredItems.map((item, index) => (
        <div className="row col-12 p-md-5" key={index}>
          <div className="col-12 col-md-6">
              <img className="d-block rounded-4 img-fluid mb-4 mb-md-0" src={item.fotografie} alt={`Fotografia ${index + 1}`} />
          </div>
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
              <h3 className="text-light fst-italic display-5 mb-3">0{index+1}</h3>
              <p className="text-light fw-light mb-0"><span className="fw-bold">DATA 01/02/03</span><br></br>NOME_FOTOCAMERA XX10XX</p>
              <hr className="text-light"></hr>
              <p className="text-light fst-italic">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          </div>
        </div>
      ))}            
    </Container>
  </>
);
}

export default Gallery;