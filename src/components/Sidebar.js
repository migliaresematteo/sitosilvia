import React, {useState} from 'react';
import {CDBBtnGrp,CDBBtn,CDBContainer} from "cdbreact";
import {CDBSidebar,CDBSidebarHeader,CDBSidebarMenuItem,CDBSidebarContent,CDBSidebarMenu,CDBSidebarFooter,} from 'cdbreact';
import {Container,Navbar,Nav,} from "react-bootstrap";
import {Link,useMatch,useResolvedPath,} from "react-router-dom";
import { useTranslation } from 'react-i18next';

function Item({ text, icon, to }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
        <Nav.Link as={Link} to={to} className={`${isActive ? 'active' : ''} py-1 text-light`}>
            <CDBSidebarMenuItem className='py-1' icon={icon} iconSize="lg">
                {text}
            </CDBSidebarMenuItem>
        </Nav.Link>
    );
}

const Sidebar = ({ items }) => {
    const { i18n } = useTranslation();
    const handleChangeLanguage = (lang) => {
        return () => {
            i18n.changeLanguage(lang);
        };
    };
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = (event) => {
        const target = event.target;
        const parent = target.parentElement;
        const clickedOnIcon = target.tagName === 'I' && target.classList.contains('fa-bars');
        const clickedOnIconParent = parent && parent.tagName === 'I' && parent.classList.contains('fa-bars');

        if (clickedOnIcon || clickedOnIconParent) {
            setIsSidebarOpen(!isSidebarOpen);
        }
    };

    const menuText = items.find(item => item.menu)?.menu || "";
    const websText = items.find(item => item.webs)?.webs || "";


    return (
        <>
            <div className="d-none d-lg-block">
                <CDBSidebar className={`position-fixed text-light bg-accent bg-blur ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
                    <CDBSidebarHeader prefix={<i className="fa fa-bars" />} onClick={toggleSidebar}>
                        {menuText}
                    </CDBSidebarHeader>
                    <CDBSidebarContent>
                        <CDBSidebarMenu>
                        {items.filter(item => !item.menu && !item.webs).map((item, index) => (
                            <Item key={index} text={item.text} icon={item.icon} to={item.to} />
                        ))}
                        </CDBSidebarMenu>
                    </CDBSidebarContent>
                    {isSidebarOpen && (
                        <>
                            <CDBContainer>
                                <CDBBtnGrp className='d-flex justify-content-between px-4'>
                                    <CDBBtn onClick={handleChangeLanguage("it")} className='bg-transparent text-decoration-none text-light'>IT</CDBBtn>
                                    <CDBBtn onClick={handleChangeLanguage("en")} className='bg-transparent text-decoration-none text-light'>EN</CDBBtn>
                                    <CDBBtn onClick={handleChangeLanguage("es")} className='bg-transparent text-decoration-none text-light'>ES</CDBBtn>
                                    <CDBBtn onClick={handleChangeLanguage("fr")} className='bg-transparent text-decoration-none text-light'>FR</CDBBtn>
                                </CDBBtnGrp>
                            </CDBContainer>
                            <CDBSidebarFooter className='text-center'>
                                <div className="sidebar-btn-wrapper px-2 py-3 text-center">
                                    <hr className='mb-4'></hr>
                                    <p className="fw-bold">{websText}</p>
                                    <p className='mb-2'>Matteo Migliarese</p>
                                </div>
                            </CDBSidebarFooter>
                        </>
                    )}
                </CDBSidebar>
            </div>

            <div className="d-lg-none">
                <Navbar expand="lg" className="bg-accent-mobile py-3 fixed-top w-100 fixed-top">
                    <Container>
                        <Navbar.Brand className='text-light d-flex justify-content-center align-items-center' href="#home">
                            Silvia Nives Vincitorio 
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ color: '#fff' }}><i className="fa fa-bars" /></Navbar.Toggle>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="text-light">
                            {items.filter(item => !item.menu && !item.webs).map((item, index) => (
                                <Item key={index} text={item.text} icon={item.icon} to={item.to} />
                            ))}
                            <hr></hr>
                            <CDBContainer>
                                <CDBBtnGrp className='d-flex justify-content-between px-4'>
                                    <CDBBtn onClick={handleChangeLanguage("it")} className='bg-transparent text-decoration-none text-light'>IT</CDBBtn>
                                    <CDBBtn onClick={handleChangeLanguage("en")} className='bg-transparent text-decoration-none text-light'>EN</CDBBtn>
                                    <CDBBtn onClick={handleChangeLanguage("es")} className='bg-transparent text-decoration-none text-light'>ES</CDBBtn>
                                    <CDBBtn onClick={handleChangeLanguage("fr")} className='bg-transparent text-decoration-none text-light'>FR</CDBBtn>
                                </CDBBtnGrp>
                            </CDBContainer>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    );
};

export default Sidebar;
