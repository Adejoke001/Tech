import React from "react";
import "./hero.modules.css";

export default function Hero() {
  return (
    <section className="heroSection">
      {/* Dark Overlay for better text readability */}
      <div className="overlay"></div>

      {/* Content Container */}
      <div className="content">
        {/* Main Headline */}
        <div className="headline">
          <h1 className="mainTitle">
            <span className="softwareDev">Software Development</span>
            <span className="companyText">Company</span>
          </h1>

          {/* Subheadline */}
          <p className="subheadline">
            From agile MVPs to enterprise-grade platforms, we design, develop,
            and maintain 
           {" "}
            <span className="highlight">future-ready software that delivers results – on time, on budget, and without compromise.</span>
           
          </p>
        </div>

        {/* Trust Indicators - Most important ones first */}
        {/* <div className="trustIndicators">
          <div className="trustItem">
            <div className="trustNumber">650+</div>
            <div className="trustLabel">Happy Clients</div>
          </div>
          <div className="trustItem">
            <div className="trustNumber">17+</div>
            <div className="trustLabel">Years Experience</div>
          </div>
          <div className="trustItem">
            <div className="trustNumber">200+</div>
            <div className="trustLabel">Strong Team</div>
          </div>
          <div className="trustItem">
            <div className="trustNumber">97%</div>
            <div className="trustLabel">Client Retention</div>
          </div>
        </div> */}

        {/* Rest of your component remains the same */}
        {/* <div className="ctaButtons">
          <button className="primaryButton">
            Hire Dedicated Developers
          </button>
          <button className="secondaryButton">
            Contact Us
          </button>
        </div> */}

        {/* Awards & Recognition */}
        <div className="awardsSection">
          <div className="awardsCard">
            <p className="awardsText">
              🏆 Voted #1 IT Outsourcing Company by
              <span className="awardsHighlight">
                {" "}
                GoodFirms, Clutch, & many more
              </span>
            </p>
            <div className="awardsLogos">
              <span className="awardsLogo">GoodFirms</span>
              <span className="awardsDivider">•</span>
              <span className="awardsLogo">Clutch</span>
              <span className="awardsDivider">•</span>
              <span className="awardsLogo">TopDevelopers</span>
              <span className="awardsDivider">•</span>
              <span className="awardsLogo">DesignRush</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scrollIndicator">
        <div className="bounce">
          <div className="scrollCircle">
            <div className="scrollDot"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
