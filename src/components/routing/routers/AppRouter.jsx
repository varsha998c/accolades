import React, { useState } from "react";
import Sidebar from "../../general/Sidebar";
import TopBar from "../../general/TopBar";
import { styled } from "styled-components";
import { Route, Routes } from "react-router-dom";
import Enquiry from "../../screens/Enquiry";
import Contact from "../../screens/Contact";
import ImageSection from "../../screens/ImageSection";
import AboutSection from "../../screens/AboutSection";
import Services from "../../screens/Services";
import Testimonials from "../../screens/Testimonials";

function AppRouter() {
    const [isSideBar, setSideBar] = useState(false);

    return (
        <>
            <Container>
                <TopBar isSideBar={isSideBar} setSideBar={setSideBar} />
                <Sidebar isMenu={isSideBar} setSideBar={setSideBar} />
                <Routes>
                    <Route path="/" element={<AboutSection />} />
                    <Route path="/testimonial" element={<Testimonials />} />
                    <Route path="/service" element={<Services />} />
                    <Route path="/gallery" element={<ImageSection />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/enquiry" element={<Enquiry />} />
                </Routes>
            </Container>
        </>
    );
}

export default AppRouter;
const Container = styled.section`
    background: #ffff;
    min-height: 100vh;
    position: relative;
`;
