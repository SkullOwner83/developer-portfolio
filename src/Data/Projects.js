import { State } from "../Utilities/Enums";

const Projects = {
    RemixContest: {
        Name: "Solo tú - Remix contest",
        Description: "Sitio web donde se anunció y distribuyó el material oficial para el remix contest organizado por Blue Larimar y GRGE Music.",
        Technologies: ["React", "SASS", "Firebase"],
        Website: "https://solotu-remixcontest.web.app/",
        CodeLink: "https://github.com/SkullOwner83/remix-contest",
        State: State.FINISHED,
        Image: "/Gallery/Solo Tu.webp"
    },

    AIAssistant: {
        Name: "AI-Assistant",
        Description: "Asistente virtual con inteligencia artificial, capaz de generar y recuperar embeddings de archivos para realizar búsquedas semánticas.",
        Technologies: ["React", "Python", "MySQL"],
        CodeLink: "https://github.com/SkullOwner83/ai-assistant",
        State: State.FINISHED,
        Image: "/Gallery/AI-Assistant.webp"
    },

    BotBonito: {
        Name: "BotBonito",
        Description: "Bot para automatizar la moderación e interacciones en el chat de transmisiones en vivo de Twitch, con integración de comandos de voz.",
        Technologies: ["Python", "Flet"],
        CodeLink: "https://github.com/SkullOwner83/botbonito",
        State: State.FINISHED,
        Image: "/Gallery/Botbonito.webp"
    },

    Scriptcraft: {
        Name: "Scriptcraft",
        Description: "Aplicación para la escritura estructurada y la organización de ideas, orientada a la creación de proyectos creativos y narrativos.",
        Technologies: ["C#", "XAML"],
        State: State.DEVELOPING,
        DownloadLink: "",
        Image: "/Gallery/Scriptcraft.webp"
    },

    PointSale: {
        Name: "Sistema comercial",
        Description: "Sistema para la administración de recursos y operaciones comerciales enfocado al sector tecnológico.",
        Technologies: ["C#", "XAML", "MySQL"],
        State: State.PAUSED,
        Image: "/Gallery/Punto de venta.webp"
    },

    SIAWebsite: {
        Name: "Sitio Web de SIA",
        Description: "Rediseño de página web de Servicios Informáticos, implementando una interfaz dinámica e interactiva con tecnologías modernas.",
        Technologies: ["React", "SASS"],
        CodeLink: "https://github.com/SkullOwner83/SiaWebsite",
        State: State.PAUSED,
        Image: "/Gallery/Sia website.webp"
    },

    Cinemovies: {
        Name: "Cinemovies",
        Description: "Página web en colaboración para el consumo de una API desarrollada para mostrar una cartelera de cine.",
        Technologies: ["HTML", "CSS", "Javascript"],
        State: State.PAUSED,
        CodeLink: "https://github.com/SkullOwner83/Cinemovies",
        Image: "/Gallery/Cinemovies.webp"
    },

    UFOInvader: {
        Name: "UFO Invader",
        Description: `Desarrollo de un videojuego multijugador para la competencia de GameJam 'No Internet' de Opera GX, con la temática UFO.`,
        Technologies: ["Game Maker Studio 2"],
        Website: "https://gamejolt.com/games/uffo_invader/639334",
        State: State.FINISHED,
        Image: "/Gallery/Ufo Invader.webp"
    },

    PacMan: {
        Name: "Pac-Man",
        Description: "Videojuego Fangame del clásico de los arcade desarrollado por Namco, Pacman.",
        Technologies: ["Game Maker Studio 2"],
        State: State.PAUSED,
        CodeLink: "https://github.com/SkullOwner83/Pac-Man",
        Image: "/Gallery/Pacman.png"
    }
};

export default Projects;