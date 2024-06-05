import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'

import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

function Friends({items}) {
    useEffect(() => {
        Aos.init();
    });
    const sections = [
        { titolo: 'titolo_1', links: ['link1', 'link2'] },
        { titolo: 'titolo_2', links: ['link3', 'link4', 'link5'] },
        { titolo: 'titolo_3', links: ['link6', 'link7', 'link8', 'link9'] },
    ];
    return (
        <>
            <Container>
            {sections.map((section, index) => (
                <div key={index}>
                    <h2 className='text-light my-3'>{items.find(item => item[section.titolo])?.[section.titolo] || ""}</h2>
                    {section.links.map((link, linkIndex) => (
                    <a className='d-block anchorList text-decoration-none text-light mb-1' key={linkIndex} href={items.find(item => item[link])?.href || ""}>
                        {items.find(item => item[link])?.[link] || ""}
                    </a>
                    ))}
                </div>
            ))}
            </Container>
        </>
    );
    }

export default Friends;
