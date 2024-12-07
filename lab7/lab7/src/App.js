import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Image from "./components/Image";
import "./styles.css";

function App() {
    return (
        <div>
            <Header />
            <Content />
            <h3>Фото Харкова:</h3>
            <Image />
        </div>
    );
}

export default App;
