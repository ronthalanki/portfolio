import React, { useState, useEffect } from 'react';

function Proj1() {
    const [img, setImg] = useState();

    useEffect(() => {
        fetch('/api/img').then(res => res.json()).then(data => {
            console.log(data);
            setImg(data["img"]);
        });
    }, []);

    return (
        <div>
            <img
                src={`data:image/png;base64,${img}`}
                width="500"
                alt="Noise"
            />
        </div>
    )
}

export default Proj1;