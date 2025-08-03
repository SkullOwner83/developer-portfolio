import { Level, Frequency } from "../Utilities/Enums";

const technologies = {
    CSharp: {
        Name: "C#",
        Type: "Lenguaje de programación",
        Experience: "4 años",
        Level: Level.HIGH,
        Frequency: Frequency.CONSTANT,
        Section: "Main"
    },

    XAML: {
        Name: "XAML",
        Type: "Lenguaje de marcado",
        Experience: "3 años",
        Level: Level.ADVANCED,
        Frequency: Frequency.CONSTANT,
        Section: "Main"
    },

    HTML: {
        Name: "HTML",
        Type: "Lenguaje de marcado",
        Experience: "6 años",
        Level: Level.ADVANCED,
        Frequency: Frequency.CONSTANT,
        Section: "Main"
    },

    CSS: {
        Name: "CSS",
        Type: "Lenguaje de estilos",
        Experience: "6 años",
        Level: Level.ADVANCED,
        Frequency: Frequency.CONSTANT,
        Section: "Main"
    },

    Javascript: {
        Name: "Javascript",
        Type: "Lenguaje de programación",
        Experience: "2 años",
        Frequency: Frequency.RECURRENT,
        Level: Level.MEDIUM,
        Section: "Main"
    },

    Typescript: {
        Name: "Typescript",
        Type: "Lenguaje de programación",
        Experience: "1 año",
        Frequency: Frequency.RECURRENT,
        Level: Level.MEDIUM,
        Section: "Main"
    },

    React: {
        Name: "React",
        Type: "Biblioteca",
        Experience: "1 año",
        Frequency: Frequency.RECURRENT,
        Level: Level.MEDIUM,
        Section: "Main"
    },

    Vite: {
        Name: "Vite",
        Type: "Empaquetador",
        Experience: "1 año",
        Frequency: Frequency.RECURRENT,
        Level: Level.HIGH,
        Section: "Main"
    },

    Git: {
        Name: "Git",
        Type: "Sistema de control de versiones",
        Experience: "3 años",
        Frequency: Frequency.CONSTANT,
        Level: Level.HIGH,
        Section: "Main"
    },

    MySQL: {
        Name: "MySQL",
        Type: "Sistema gestor de base de datos",
        Experience: "3 años",
        Frequency: Frequency.RECURRENT,
        Level: Level.MEDIUM,
        Section: "Main"
    },

    Sass: {
        Name: "SASS",
        Type: "Preprocesador",
        Experience: "2 años",
        Level: Level.ADVANCED,
        Frequency: Frequency.CONSTANT,
        Section: "Main"
    },

    Boostrap: {
        Name: "Boostrap",
        Type: "Framework",
        Experience: "1 año",
        Frequency: Frequency.OCCASIONAL,
        Level: Level.MEDIUM,
        Section: "Main"
    },

    GameMaker: {
        Name: "Game Maker Studio",
        Type: "Entorno de desarrollo integrado",
        Experience: "8 años",
        Frequency: Frequency.OCCASIONAL,
        Level: Level.HIGH,
        Section: "Main"
    },

    Php: {
        Name: "Php",
        Type: "Lenguaje de programación",
        Experience: "1 año",
        Frequency: Frequency.OCCASIONAL,
        Level: Level.LOW,
        Section: "Learning"
    },

    Python: {
        Name: "Python",
        Type: "Lenguaje de programación",
        Experience: "1 año",
        Frequency: Frequency.OCCASIONAL,
        Level: Level.LOW,
        Section: "Learning"
    },

    CPlusPlus: {
        Name: "C++",
        Type: "Lenguaje de programación",
        Experience: "1 año",
        Frequency: Frequency.OCCASIONAL,
        Level: Level.LOW,
        Section: "Learning"
    },

    Unity: {
        Name: "Unity",
        Type: "Entorno de desarrollo integrado",
        Experience: "1 año",
        Frequency: Frequency.OCCASIONAL,
        Level: Level.LOW,
        Section: "Learning"
    },

    Photoshop: {
        Name: "Photoshop",
        Type: "Diseño gráfico",
        Experience: "7 años",
        Frequency: Frequency.CONSTANT,
        Level: Level.HIGH,
        Section: "Design"
    },

    Illustrator: {
        Name: "Illustrator",
        Type: "Diseño vectorial",
        Experience: "4 años",
        Frequency: Frequency.RECURRENT,
        Level: Level.MEDIUM,
        Section: "Design"
    },

    XD: {
        Name: "Adobe XD",
        Type: "Prototipado de interfaces",
        Experience: "2 años",
        Frequency: Frequency.OCCASIONAL,
        Level: Level.MEDIUM,
        Section: "Design"
    },

    Figma: {
        Name: "Figma",
        Type: "Prototipado de interfaces",
        Experience: "2 años",
        Frequency: Frequency.OCCASIONAL,
        Level: Level.MEDIUM,
        Section: "Design"
    }
};

export default technologies;