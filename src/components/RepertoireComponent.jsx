import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav, Accordion } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const RepertoireComponent = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('baroque');

  const repertoireCategories = {
    baroque: {
      title: 'Baroque Era',
      date: '1600-1750',
      composers: {
        'Johann Sebastian Bach': [
          'The Well-Tempered Clavier, Book I',
          'The Well-Tempered Clavier, Book II',
          'Goldberg Variations, BWV 988',
          'Italian Concerto, BWV 971',
          'French Suites',
          'English Suites',
          'Partitas'
        ],
        'Domenico Scarlatti': [
          'Selected Sonatas',
          'Keyboard Sonata in D minor, K.1',
          'Keyboard Sonata in G major, K.146'
        ],
        'George Frideric Handel': [
          'Keyboard Suites HWV 426-433',
          'Chaconne in G major, HWV 435'
        ]
      }
    },
    classical: {
      title: 'Classical Era',
      date: '1730-1820',
      composers: {
        'Wolfgang Amadeus Mozart': [
          'Piano Sonata No. 11 in A major, K. 331',
          'Piano Sonata No. 14 in C minor, K. 457',
          'Piano Concerto No. 20 in D minor, K. 466',
          'Piano Concerto No. 23 in A major, K. 488'
        ],
        'Ludwig van Beethoven': [
          'Piano Sonata No. 8 "Pathétique"',
          'Piano Sonata No. 14 "Moonlight"',
          'Piano Sonata No. 21 "Waldstein"',
          'Piano Sonata No. 23 "Appassionata"',
          'Piano Concerto No. 4 in G major',
          'Piano Concerto No. 5 "Emperor"'
        ],
        'Joseph Haydn': [
          'Piano Sonata in E-flat major, Hob. XVI:52',
          'Piano Sonata in C major, Hob. XVI:50'
        ]
      }
    },
    romantic: {
      title: 'Romantic Era',
      date: '1810-1910',
      composers: {
        'Frédéric Chopin': [
          'Ballades',
          'Scherzos',
          'Nocturnes',
          'Études Op. 10 & Op. 25',
          'Piano Concerto No. 1 in E minor'
        ],
        'Franz Liszt': [
          'Hungarian Rhapsodies',
          'Transcendental Études',
          'Années de pèlerinage',
          'Piano Sonata in B minor'
        ],
        'Johannes Brahms': [
          'Piano Concerto No. 2 in B-flat major',
          'Variations on a Theme by Paganini',
          'Piano Pieces, Op. 118'
        ],
        'Robert Schumann': [
          'Carnaval, Op. 9',
          'Kreisleriana, Op. 16',
          'Piano Concerto in A minor'
        ]
      }
    },
    modern: {
      title: '20th Century & Contemporary',
      date: '1910-Present',
      composers: {
        'Claude Debussy': [
          'Préludes, Book I & II',
          'Suite bergamasque',
          'Images'
        ],
        'Maurice Ravel': [
          'Gaspard de la nuit',
          'Miroirs',
          'Piano Concerto in G major'
        ],
        'Sergei Rachmaninoff': [
          'Piano Concerto No. 2 in C minor',
          'Piano Concerto No. 3 in D minor',
          'Études-Tableaux'
        ],
        'Sergei Prokofiev': [
          'Piano Sonata No. 7',
          'Piano Concerto No. 3 in C major'
        ]
      }
    }
  };

  return (
    <section className="container repertoire-section py-5">
      <Container fluid>
        <h2 className="text-center mb-5">Musical Repertoire</h2>
        <Tab.Container id="repertoire-tabs" defaultActiveKey="baroque">
          <Row>
            <Col lg={2}>
              <Nav variant="pills" className="flex-column sticky-top">
                {Object.entries(repertoireCategories).map(([era, data]) => (
                  <Nav.Item key={era}>
                    <Nav.Link eventKey={era}>{data.title}</Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>
            <Col lg={10}>
              <Tab.Content>
                {Object.entries(repertoireCategories).map(([era, data]) => (
                  <Tab.Pane key={era} eventKey={era}>
                    <div className="repertoire-era">
                      <h3 className="mb-4">
                        {data.title}
                        <div className="era-date" style={{ color: 'red' }}>{data.date}</div>
                      </h3>
                      <Accordion>
                        {Object.entries(data.composers).map(([composer, works], index) => (
                          <Accordion.Item key={composer} eventKey={index.toString()}>
                            <Accordion.Header>
                              <strong className="composer-name">{composer}</strong>
                            </Accordion.Header>
                            <Accordion.Body>
                              <ul className="list-unstyled">
                                {works.map((work, workIndex) => (
                                  <li key={workIndex} className="repertoire-item mb-2">
                                    {work}
                                  </li>
                                ))}
                              </ul>
                            </Accordion.Body>
                          </Accordion.Item>
                        ))}
                      </Accordion>
                    </div>
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </section>
  );
};

export default RepertoireComponent;
