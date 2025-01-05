import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import pianoKeys from '../assets/piano-keys.jpg';

const AboutComponent = () => {
  const { t } = useTranslation();
  const currentDate = '2025-01-05';

  return (
    <section className="about-section" id="about">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <img
              src={pianoKeys}
              alt="About Me"
              className="img-fluid"
            />
          </Col>
          <Col lg={6}>
            <span className="date">{currentDate}</span>
            <h2 className="mt-2 mb-4">{t('about.title')}</h2>
            <p className="mb-4">{t('about.description')}</p>
            <Button variant="outline-primary">
              {t('about.button')}
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutComponent;
