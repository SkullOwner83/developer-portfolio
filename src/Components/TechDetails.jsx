export const TechDetails = ({ Technology }) => {
    return (
        <div className="Tech-Details">
            <div className="Icon-Container">
                <img src={Technology.IconPath}/>
            </div>
            <div className="Info-Details">
                <p>Tecnología: {Technology.Name}</p>
                <p>Años utilizando: {Technology.YearsExperience}</p>
                <p>Nivel: {Technology.Level}</p>
            </div>
        </div>
    );
}