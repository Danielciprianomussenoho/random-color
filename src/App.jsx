import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [typeOfColor, setTypeOfColor] = useState("hex");
    const [Color, setColor] = useState("#000000");

    function randomColorUtility(length) {
        return Math.floor(Math.random() * length);
    }

    function handleCreateRandomHexColor() {
        //#678765
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#";

        for (let i = 0; i < 6; i++) {
            hexColor = hexColor + hex[randomColorUtility(hex.length)];
        }

        setColor(hexColor);
    }

    function handleCreateRandomRgbColor() {
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);

        setColor(`rgb(${r},${g},${b})`);
    }

    useEffect(() => {
        if (typeOfColor === "rgb") handleCreateRandomRgbColor();
        else handleCreateRandomHexColor();
    }, [typeOfColor]);

    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                background: Color,
            }}
        >
            <button
                onClick={
                    typeOfColor === "hex" ? handleCreateRandomHexColor : handleCreateRandomRgbColor
                }
            >
                Generate Random Color
            </button>
            <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
            <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff",
                    fontSize: "60px",
                    marginTop: "50px",
                    gap : "20px"
                }}
            >
                <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
                <h1>{Color}</h1>
            </div>
        </div>
    );
}

export default App;
