import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import pianoKeys from '../assets/piano-keys.jpg';

const HeaderComponent = () => {
  const { t } = useTranslation();

  return (
    <header className="header-section">
      <img 
        src={pianoKeys}
        alt="Piano Keys" 
        className="header-image"
      />
      <div className="overlay" />
      <Container className="h-100">
        <Row className="h-100 align-items-center justify-content-center">
          <Col lg={8} className="header-content">
            <h1>{t('header.title')}</h1>
            <h2>{t('header.subtitle')}</h2>
            <p className="lead mb-4">{t('header.description')}</p>
            <Button variant="primary" size="lg">
              {t('header.cta')}
            </Button>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default HeaderComponent;
