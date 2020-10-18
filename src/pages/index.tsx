import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '@/components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import ChicagoFlag from '@/assets/images/ChicagoFlag.svg';
import CoverImage from '@/assets/images/logoFull.png';

const Home: React.FC<PageProps> = () => (
  <main>
    <Layout>
      <div className="heading-container">
        <h1>Gatsby/Typescript Starter</h1>
        <span>... by: BeFreeStudios.io ...</span>
      </div>
      <img className="cover-image" src={CoverImage} alt="cover" />
      <div className="footing-container">
        <span>
          Designed & Developed with
          <FontAwesomeIcon icon={faHeart} color="#ff0000" title="Love" /> in
          <img
            className="chicago-flag"
            src={ChicagoFlag}
            height="20px"
            alt="Chicago"
            title="Chicago"
          />
        </span>
      </div>
    </Layout>
  </main>
);

export default Home;
