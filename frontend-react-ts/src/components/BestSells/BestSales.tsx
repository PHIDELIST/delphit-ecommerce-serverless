import './BestSales.css'
const BestSales = () => {
    const BestSales = [
        {
          name: 'Product 1',
          price: 199,
         
        },
        {
          name: 'Product 2',
          price: 299,
          
        },
      
        {
          name: 'Product 3',
          price: 149,
          
        }]
     return(
        <>
        <div className='Best-container'>
          <h1>Daily Best Sales</h1>
          <div className='Best-Sales-cards'>
              {BestSales.map((product, index) =>
                  <div className="card-best" key={index}>
                      <div className="card-img-best"><div className="img-best"></div></div>
                      <div className="card-title-best">{product.name}</div>
                      <div className="card-subtitle-best">Product description. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                      <hr className="card-divider-best"></hr>
                      <div className="card-footer-best">
                          <div className="card-price-best"><span>$</span>{product.price}</div>
                          <button className="card-btn-best">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path><path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path></svg>
                          </button>
                      </div>
                  </div>
                  )}
          </div>
        </div>
        </>
     )
}
export default BestSales;

