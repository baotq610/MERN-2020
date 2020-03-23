import React from 'react';

function BestSeller() {
  return (
    <section className="section-margin calc-60px best-seller">
      <div className="container">
        <div className="section-intro pb-60px">
          <p>Popular Item in the market</p>
          <h2>Best <span className="section-intro__style">Sellers</span></h2>
        </div>
        <div className="owl-carousel owl-theme" id="bestSellerCarousel">
          <div className="card text-center card-product">
            <div className="card-product__img">
              <img className="img-fluid" src="img/product/product1.png" alt="" />
              <ul className="card-product__imgOverlay">
                <li><button><i className="ti-search"></i></button></li>
                <li><button><i className="ti-shopping-cart"></i></button></li>
                <li><button><i className="ti-heart"></i></button></li>
              </ul>
            </div>
            <div className="card-body">
              <p>Accessories</p>
              <h4 className="card-product__title"><a href="single-product.html">Quartz Belt Watch</a></h4>
              <p className="card-product__price">$150.00</p>
            </div>
          </div>

          <div className="card text-center card-product">
            <div className="card-product__img">
              <img className="img-fluid" src="img/product/product2.png" alt="" />
              <ul className="card-product__imgOverlay">
                <li><button><i className="ti-search"></i></button></li>
                <li><button><i className="ti-shopping-cart"></i></button></li>
                <li><button><i className="ti-heart"></i></button></li>
              </ul>
            </div>
            <div className="card-body">
              <p>Beauty</p>
              <h4 className="card-product__title"><a href="single-product.html">Women Freshwash</a></h4>
              <p className="card-product__price">$150.00</p>
            </div>
          </div>

          <div className="card text-center card-product">
            <div className="card-product__img">
              <img className="img-fluid" src="img/product/product3.png" alt="" />
              <ul className="card-product__imgOverlay">
                <li><button><i className="ti-search"></i></button></li>
                <li><button><i className="ti-shopping-cart"></i></button></li>
                <li><button><i className="ti-heart"></i></button></li>
              </ul>
            </div>
            <div className="card-body">
              <p>Decor</p>
              <h4 className="card-product__title"><a href="single-product.html">Room Flash Light</a></h4>
              <p className="card-product__price">$150.00</p>
            </div>
          </div>

          <div className="card text-center card-product">
            <div className="card-product__img">
              <img className="img-fluid" src="img/product/product4.png" alt="" />
              <ul className="card-product__imgOverlay">
                <li><button><i className="ti-search"></i></button></li>
                <li><button><i className="ti-shopping-cart"></i></button></li>
                <li><button><i className="ti-heart"></i></button></li>
              </ul>
            </div>
            <div className="card-body">
              <p>Decor</p>
              <h4 className="card-product__title"><a href="single-product.html">Room Flash Light</a></h4>
              <p className="card-product__price">$150.00</p>
            </div>
          </div>

          <div className="card text-center card-product">
            <div className="card-product__img">
              <img className="img-fluid" src="img/product/product1.png" alt="" />
              <ul className="card-product__imgOverlay">
                <li><button><i className="ti-search"></i></button></li>
                <li><button><i className="ti-shopping-cart"></i></button></li>
                <li><button><i className="ti-heart"></i></button></li>
              </ul>
            </div>
            <div className="card-body">
              <p>Accessories</p>
              <h4 className="card-product__title"><a href="single-product.html">Quartz Belt Watch</a></h4>
              <p className="card-product__price">$150.00</p>
            </div>
          </div>

          <div className="card text-center card-product">
            <div className="card-product__img">
              <img className="img-fluid" src="img/product/product2.png" alt="" />
              <ul className="card-product__imgOverlay">
                <li><button><i className="ti-search"></i></button></li>
                <li><button><i className="ti-shopping-cart"></i></button></li>
                <li><button><i className="ti-heart"></i></button></li>
              </ul>
            </div>
            <div className="card-body">
              <p>Beauty</p>
              <h4 className="card-product__title"><a href="single-product.html">Women Freshwash</a></h4>
              <p className="card-product__price">$150.00</p>
            </div>
          </div>

          <div className="card text-center card-product">
            <div className="card-product__img">
              <img className="img-fluid" src="img/product/product3.png" alt="" />
              <ul className="card-product__imgOverlay">
                <li><button><i className="ti-search"></i></button></li>
                <li><button><i className="ti-shopping-cart"></i></button></li>
                <li><button><i className="ti-heart"></i></button></li>
              </ul>
            </div>
            <div className="card-body">
              <p>Decor</p>
              <h4 className="card-product__title"><a href="single-product.html">Room Flash Light</a></h4>
              <p className="card-product__price">$150.00</p>
            </div>
          </div>

          <div className="card text-center card-product">
            <div className="card-product__img">
              <img className="img-fluid" src="img/product/product4.png" alt="" />
              <ul className="card-product__imgOverlay">
                <li><button><i className="ti-search"></i></button></li>
                <li><button><i className="ti-shopping-cart"></i></button></li>
                <li><button><i className="ti-heart"></i></button></li>
              </ul>
            </div>
            <div className="card-body">
              <p>Decor</p>
              <h4 className="card-product__title"><a href="single-product.html">Room Flash Light</a></h4>
              <p className="card-product__price">$150.00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BestSeller;
