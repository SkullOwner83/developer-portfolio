
export const Carousel = ({Items}) => {
    const itemList = Items;
    return (
        <div className="Carousel-Component">
            <div className="Items-Container">
                {itemList.map((item, index) => (
                    <div key="Index" className="Carousel-Item">
                        <img key={index} src={item}/>
                    </div>
                ))}
            </div>

            <div className="Items-Container">
                {itemList.map((item, index) => (
                    <div key="Index" className="Carousel-Item">
                        <img key={index} src={item}/>
                    </div>
                ))}
            </div>
        </div>
    )
}