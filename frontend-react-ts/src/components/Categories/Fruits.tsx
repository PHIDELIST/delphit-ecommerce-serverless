import './Fruits.css'
const Fruits = () => {
    return(
        <>
        <div className="Fruits-Container">
            <div className="Vegeterian">
                <h3>Vegeterian and Vegan Product</h3>
                <button>Shop Now!</button>
            </div>
            <div className="fruit-veg">
                <h3>Vegetables and Fruits for balanced diet</h3>
                <button>Shop Now!</button>
            </div>
            <div className="del-energy">
                <h3>Delicous Energy For Every day</h3>
                <button>Shop Now!</button>
            </div>
        </div>
        </>
    )
}
export default Fruits;