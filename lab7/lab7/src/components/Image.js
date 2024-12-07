import React, { useState } from "react";

function Image() {
    const [width, setWidth] = useState(650);
    const [visible, setVisible] = useState(true);

    return (
        <div>
            {visible && <img src="Kharkiv.jpg" alt="Фото Харкова" width={width} />}
            <div>
                <button onClick={() => setVisible(true)}>Додати</button>
                <button onClick={() => setWidth(width + 50)}>Збільшити</button>
                <button onClick={() => setWidth(width > 50 ? width - 50 : width)}>Зменшити</button>
                <button onClick={() => setVisible(false)}>Видалити</button>
            </div>
        </div>
    );
}

export default Image;
