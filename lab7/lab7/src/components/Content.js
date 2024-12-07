import React, { Component } from "react";
import "../styles.css";

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hobbiesClicked: false,
            basketballClicked: false,
            hobbiesColorToggle: false,
            basketballColorToggle: false,
        };
    }

    handleHobbiesClick = () => {
        this.setState((prevState) => ({
            hobbiesClicked: true,
            hobbiesColorToggle: prevState.hobbiesClicked
                ? !prevState.hobbiesColorToggle
                : false,
        }));
    };

    handleBasketballClick = () => {
        this.setState((prevState) => ({
            basketballClicked: true,
            basketballColorToggle: prevState.basketballClicked
                ? !prevState.basketballColorToggle
                : false,
        }));
    };

    render() {
        const {
            hobbiesClicked,
            basketballClicked,
            hobbiesColorToggle,
            basketballColorToggle,
        } = this.state;

        return (
            <div>
                <h3
                    className={
                        hobbiesClicked
                            ? hobbiesColorToggle
                                ? "highlight-green"
                                : "highlight"
                            : ""
                    }
                    onClick={this.handleHobbiesClick}
                >
                    Мої хобі:
                </h3>
                <ul>
                    <li
                        className={
                            basketballClicked
                                ? basketballColorToggle
                                    ? "highlight-green"
                                    : "highlight"
                                : ""
                        }
                        onClick={this.handleBasketballClick}
                    >
                        Баскетбол
                    </li>
                    <li>Народні танці</li>
                    <li>Скелелазіння</li>
                </ul>

                <h3>Улюблені фільми:</h3>
                <ol>
                    <li>Престиж</li>
                    <li>Грань майбутнього</li>
                    <li>Бійцівський клуб</li>
                </ol>
            </div>
        );
    }
}

export default Content;
