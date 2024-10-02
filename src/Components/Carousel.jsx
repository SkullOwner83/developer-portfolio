
export const Carousel = ({ Items, Size, Gap }) => {
    const itemList = Items;
    const Styles = {
        width: `${Size + Gap}px`,
        height: `${Size + Gap}px`,
        padding: `${Gap / 2}px`
    };

    return (
        <div className="Carousel-Component">
            <div className="Items-Container">
                {itemList.map((item, index) => (
                    <div key="Index" className="Carousel-Item" style={Styles}>
                        <img key={index} src={item}/>
                    </div>
                ))}
            </div>

            <div className="Items-Container">
                {itemList.map((item, index) => (
                    <div key="Index" className="Carousel-Item" style={Styles}>
                        <img key={index} src={item}/>
                    </div>
                ))}
            </div>
        </div>
    )
}