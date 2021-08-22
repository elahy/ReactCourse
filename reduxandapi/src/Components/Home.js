// import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import styles from "./Home.module.css";

function Home() {
  const history = useHistory();
  const handleBrowse = () => history.push("/products");
  return (
    <>
      <div className={styles.headerhero}>
        <div className={styles.headerbg}>
          <img src="../images/Boat.jpg" alt="Background" />
        </div>
        <div className={styles.headercontent}>
          <p className={styles.heading1}>Style Collection 2021</p>
          <h1>
            wellcome to brand<span className={styles.logostyle}>y</span> unique
            store
          </h1>
          <p className="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
          <div className={styles.button}>
            <p onClick={handleBrowse}>shop now</p>
          </div>
        </div>
      </div>

      <section className={styles.products}>
        <div className={styles.container}>
          <div className={styles.productsheader}>
            <h2>popular products</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className={styles.product}>
            <figure>
              <img src="../images/collection1.jpg" alt="product" />
              <figcaption>women fashion</figcaption>
              <figcaption>$ 84.00</figcaption>
            </figure>
          </div>
          <div className={styles.product}>
            <figure>
              <img src="../images/collection2.jpg" alt="product" />
              <figcaption>cold fashion</figcaption>
              <figcaption>$ 56.00</figcaption>
            </figure>
          </div>
          <div className={styles.product}>
            <figure>
              <img src="../images/collection3.jpg" alt="product" />
              <figcaption>men fashion</figcaption>
              <figcaption>$ 89.00</figcaption>
            </figure>
          </div>

          <div className={styles.product}>
            <figure>
              <img src="../images/collection4.jpg" alt="product" />
              <figcaption>women fashion</figcaption>
              <figcaption>$ 48.00</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className={styles.blog}>
        <div className={styles.blogcontainer}>
          <div className={styles.blogheader}>
            <h2>latest from blog</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className={styles.blogcontent}>
            <div className={styles.blog1}>
              <div className={styles.blog1imageholder}>
                <img src="../images/p1.jpg" alt="blog" />
              </div>
              <div className={styles.blog1content}>
                <h4>Lorem Ipsum</h4>
                <h3>Lorem ipsum dolor sit amet.</h3>
                <p className={styles.description}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
                <p className={styles.button}>view post</p>
              </div>
            </div>
            <div className={styles.blog2}>
              <div className={styles.blog2imageholder}>
                <img src="../images/p4.jpg" alt="blog" />
              </div>
              <div className={styles.blog2content}>
                <h4>Lorem Ipsum</h4>
                <h3>Lorem ipsum dolor sit amet.</h3>
                <p className={styles.description}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
                <p className={styles.button}>view post</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.contact} id="contact">
        <div className={styles.container}>
          <h4>cantact us</h4>
          <p>41/A High Street, Dhanmondi, Dhaka</p>
          <p>+ (880) 193 452 8562</p>
          <p>info.ecommerce@gmail.com</p>
          <p className={styles.email}>
            email us
            <span>
              <img
                src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412541/E-commerce%20landing%20page/icons/get_in_touch_1x.png"
                alt="email"
              />
            </span>
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;
