import React from "react";
import Box from "@mui/material/Box";
import './cs.css';
import carrs from '../dataEnergy/carrs.png'
const Testing = () => {
  return (
    <div>
      <main style={{opacity: 1, transform: 'none',}}>
        <header className="hero">
          <Box className="page-padding">
            <Box className="container-medium relative">
              <Box className="flex-wrapper">
                <Box className="flex-left" sx={{color:'white'}}>
                  <h1>Unsere Leistungen.</h1>
                  <p className="marginTop30 paddingRight80">
                    Wir sind Fullservice-Dienstleister und bieten alle Services
                    aus einer Hand. Wir installieren Photovoltaikanlagen,
                    Energiespeicher, Wärmepumpen und E-Mobility Systeme.
                  </p>
                </Box>
                <Box className="flex-right">
                  <Box className="service-button-wrapper leistungen-monogram">
                    <Box className="monogram-wrap monogram-leistungen">
                    </Box>
                    <Box className="cta-button service-cta1">
                      <Box className="cta-bgr"></Box>
                      <Box className="cta-content">
                       
                        <Box>Photovoltaikanlagen</Box>
                      </Box>
                    </Box>
                    <Box className="cta-button service-cta2">
                      <Box className="cta-bgr"></Box>
                      <Box className="cta-content">
                       
                        <Box>Wärmepumpen</Box>
                      </Box>
                    </Box>
                    <Box className="cta-button service-cta3">
                      <Box className="cta-bgr"></Box>
                      <Box className="cta-content">
                       
                        <Box>E-Mobility</Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </header>
        <section className="page-section top100 bottom300" >
          <Box className="page-padding" sx={{backgroundColor:'#051218',my:0,}}>
            <Box className="container-medium relative">
              <Box className="header-wrapper-center">
                <h2 className="text-center" style={{color:'white'}}>Wir sind Montagepartner für</h2>
                <h2 className="text-center">
                  <Box className="Typewriter" data-testid="typewriter-wrapper">
                    <span className="Typewriter__wrapper">Solarvertriebe</span>
                  </Box>
                </h2>
              </Box>
            </Box>
          </Box>
        </section>
        <section className="page-section bottom300" id="section-1">
         
          <Box className="page-padding"  sx={{backgroundColor:'#052628;'}}>
            <Box className="container-medium">
              <Box className="prefooter">
                <Box className="header-wrapper-center">
                  <Box className="leistung-number">
                    
                    <Box className="icon-content">
                     
                    </Box>
                  </Box>
                  <h2 style={{color:'white'}}>Installation Photovoltaikanlagen.</h2>
                  <p className="marginTop30 max-width">
                    Wir sind Experten für die Installation von
                    Photovoltaikanlagen und realisieren jedes Projekt nach Ihren
                    inBoxiduellen Anforderungen.
                  </p>
                  <Box className="all-services-wrapper">
                    <Box className="service-glow">
                      <Box className="glow-relative">
                        <Box className="glow-sticky"></Box>
                        <Box className="glow-overlay"></Box>
                      </Box>
                    </Box>
                    <Box className="service-line">
                      <Box className="service-card">
                        <h5 className="margin-bottom">Zählerschränke</h5>
                        <p>
                          Mit intelligenten Zählern bringen Sie die
                          Technikzentrale von Morgen in Ihre Immobilie.
                        </p>
                      </Box>
                      <Box className="service-card">
                        <h5 className="margin-bottom">Wechselrichter</h5>
                        <p>
                          Erreichen Sie die optimale Nutzung von produzierter
                          sowie gespeicherter Energie.
                        </p>
                      </Box>
                      <Box className="service-card">
                        <h5 className="margin-bottom">Energiespeicher</h5>
                        <p>
                          Wir installieren Energiespeicher mit bis zu 4
                          Speichergrößen für eine effiziente Energienutzung.
                        </p>
                      </Box>
                      <Box className="service-card">
                        <h5 className="mrg-bottom">Wallboxen</h5>
                        <p>
                          Modernste Wallboxen sorgen dafür, dass alle getesteten
                          Elektroautos problemlos geladen werden können.
                        </p>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </section>
        <section className="page-section bottom300" id="section-2">
         
          <Box className="page-padding"  sx={{backgroundColor:'#052628;'}}>
            <Box className="container-medium">
              <Box className="prefooter">
                <Box className="header-wrapper-center">
                  <Box className="leistung-number blue">
                    
                    <Box className="icon-content">
                     
                    </Box>
                  </Box>
                  <h2 style={{color:'white'}}>Installation Wärmepumpen.</h2>
                  <p className="marginTop30 max-width">
                    Wir sind ihr kompetenter Partner für die Installation von
                    nachhaltigen Wärmepumpen.
                  </p>
                  <Box className="all-services-wrapper">
                    <Box className="service-glow">
                      <Box className="glow-relative">
                        <Box className="glow-sticky blue"></Box>
                        <Box className="glow-overlay"></Box>
                      </Box>
                    </Box>
                    <Box className="service-line">
                      <Box className="service-card">
                        <h5 className="margin-bottom">
                          Ein- und Mehrfamilienhäuser
                        </h5>
                        <p>
                          Moderne Wärmepumpen zum Heizen, Kühlen und Erzeugen
                          von Warmwasser.
                        </p>
                      </Box>
                      <Box className="service-card">
                        <h5 className="margin-bottom">Gewerbe</h5>
                        <p>
                          Wir installieren hocheffiziente Wärmepumpen für Ihr
                          Gewerbe.
                        </p>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </section>
        <section className="page-section bottom240" id="section-3">
        
          <Box className="page-padding"  sx={{backgroundColor:'#052628;'}}>
            <Box className="container-medium">
              <Box className="prefooter">
                <Box className="header-wrapper-center">
                  <Box className="leistung-number purple">
                   
                    <Box className="icon-content">
                      <img src={carrs} width={180} height={180}/>
                    </Box>
                  </Box>
                  <h2 style={{color:'white'}}>
                    Installation
                    <br />
                    E-Mobility.
                  </h2>
                  <p className="marginTop30 max-width">
                    Wir Installieren Ihre E-Mobility Ladestation direkt bei
                    Ihnen zuhause oder in Ihrem Unternehmen.
                  </p>
                  <Box className="all-services-wrapper">
                    <Box className="service-glow">
                      <Box className="glow-relative">
                        <Box className="glow-sticky purple"></Box>
                        <Box className="glow-overlay"></Box>
                      </Box>
                    </Box>
                    <Box className="service-line">
                      <Box className="service-card">
                        <h5 className="margin-bottom">Privat</h5>
                        <p>
                          Wir errichten passgenaue Ladestation auf Ihrem eigenen
                          Parkplatz.
                        </p>
                      </Box>
                      <Box className="service-card">
                        <h5 className="margin-bottom">Gewerbe</h5>
                        <p>
                          Wir bietet die Ausstattung von Gebäuden für die
                          effiziente E-Mobilität der Zukunft.
                        </p>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </section>
        <section className="page-section bottom300">
          <Box className="page-padding"  sx={{backgroundColor:'#052628;'}}>
            <Box className="container-medium relative">
              <Box className="header-wrapper-center align-left">
                <h2 className="text-center" style={{color:'white'}}>Was bieten wir?</h2>
              </Box>
              <Box className="trio">
                <Box className="trio-item">
                  <h2 style={{color:'white'}}>1.</h2>
                  <h5 style={{color:'white'}}>Inhouse Kompetenz</h5>
                  <p>
                    Wir beschäftigen erfahrene Elektriker, Dachdecker,
                    Sanitärmonteure sowie Gerüstbauer und können dadurch
                    sämtliche Dienstleistungen inhouse umsetzen.
                  </p>
                </Box>
                <Box className="trio-item">
                  <h2>2.</h2>
                  <h5>Fullservice</h5>
                  <p>
                    Wir bieten Ihnen einen vollumfänglichen Service für die
                    Installation von Photovoltaikanlagen, Energiespeichern,
                    Wärmepumpen und E-Mobility Systemen.
                  </p>
                </Box>
                <Box className="trio-item">
                  <h2>3.</h2>
                  <h5>Keine Wartezeiten</h5>
                  <p>
                    Wir verzichten auf Subunternehmer und garantieren Ihnen
                    dadurch eine einwandfreie und schnelle Montage Ihrer
                    privaten oder gewerblichen Anlage.
                  </p>
                </Box>
              </Box>
            </Box>
          </Box>
        </section>
      </main>
    </div>
  );
};

export default Testing;
