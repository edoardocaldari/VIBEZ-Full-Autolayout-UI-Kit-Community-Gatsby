import React from 'react'

import { Helmet } from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './index.module.css'

const Products = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className={styles['products']}>
        <span className={` ${styles['text']} ${projectStyles['titles05']} `}>
          <span>Now this is something...</span>
        </span>
        <span
          className={` ${styles['text02']} ${projectStyles['paragraph04']} `}
        >
          <span>
            This could be the description of the product, and this could be the
            second line.
          </span>
        </span>
        <div className={styles['cards']}>
          <div className={styles['imagerectangle']}>
            <img
              alt="unsplashsF876cCSPrYI412"
              src="/playground_assets/unsplashsf876ccspryi412-ruyn-400w.png"
              className={styles['unsplashs-f876c-c-s-pr-y']}
            />
          </div>
          <div className={styles['cardcontent']}>
            <div className={styles['text04']}>
              <span className={styles['text05']}>
                <span>Heading</span>
              </span>
              <span className={styles['text07']}>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare pretium placerat ut platea...
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </div>
            <button className={styles['button']}>
              <span className={styles['text09']}>
                <span>Click here!</span>
              </span>
            </button>
          </div>
        </div>
        <div className={styles['cards1']}>
          <div className={styles['imagerectangle1']}>
            <img
              alt="unsplashsF876cCSPrY6775"
              src="/playground_assets/unsplashsf876ccspry6775-12ob-400w.png"
              className={styles['unsplashs-f876c-c-s-pr-y1']}
            />
          </div>
          <div className={styles['cardcontent1']}>
            <div className={styles['text11']}>
              <span className={styles['text12']}>
                <span>Heading</span>
              </span>
              <span className={styles['text14']}>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare pretium placerat ut platea...
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </div>
            <button className={styles['button1']}>
              <span className={styles['text16']}>
                <span>Click here!</span>
              </span>
            </button>
          </div>
        </div>
        <div className={styles['cards2']}>
          <div className={styles['imagerectangle2']}>
            <img
              alt="unsplashsF876cCSPrYI677"
              src="/playground_assets/unsplashsf876ccspryi677-o3fv-400w.png"
              className={styles['unsplashs-f876c-c-s-pr-y2']}
            />
          </div>
          <div className={styles['cardcontent2']}>
            <div className={styles['text18']}>
              <span className={styles['text19']}>
                <span>Heading</span>
              </span>
              <span className={styles['text21']}>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare pretium placerat ut platea...
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </div>
            <button className={styles['button2']}>
              <span className={styles['text23']}>
                <span>Click here!</span>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className={styles['header']}>
        <div className={styles['frame350']}>
          <div className={styles['logo']}>
            <div className={styles['group347']}>
              <img
                alt="Ellipse1I585"
                src="/playground_assets/ellipse1i585-lolm-200h.png"
                className={styles['ellipse1']}
              />
              <img
                alt="evaeyeoff2fillI585"
                src="/playground_assets/evaeyeoff2filli585-8cr.svg"
                className={styles['evaeyeoff2fill']}
              />
            </div>
            <span
              className={` ${styles['text25']} ${projectStyles['titles06']} `}
            >
              <span>ojito</span>
            </span>
          </div>
          <div className={styles['menu']}>
            <button className={styles['button3']}>
              <span className={styles['text27']}>
                <span>Products</span>
              </span>
              <img
                alt="evaarrowiosdownwardoutlineI585"
                src="/playground_assets/evaarrowiosdownwardoutlinei585-lhm.svg"
                className={styles['evaarrowiosdownwardoutline']}
              />
            </button>
            <button className={styles['button4']}>
              <span className={styles['text29']}>
                <span>About us</span>
              </span>
            </button>
            <button className={styles['button5']}>
              <span className={styles['text31']}>
                <span>Contact</span>
              </span>
            </button>
            <button className={styles['button6']}>
              <span className={styles['text33']}>
                <span>Pricing</span>
              </span>
            </button>
          </div>
        </div>
        <div className={styles['frame351']}>
          <button className={styles['button7']}>
            <span className={styles['text35']}>
              <span>Log in</span>
            </span>
          </button>
          <button className={styles['button8']}>
            <span className={styles['text37']}>
              <span>Sign up</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Products
