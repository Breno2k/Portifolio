import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function useAOS() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // duração padrão em ms
            once: false,     // anima só uma vez
            easing: "ease-in-out", // exemplo de easing
        });
        AOS.refresh();
    }, []);
}