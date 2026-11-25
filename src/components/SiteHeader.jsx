export default function SiteHeader() {
  return (
    <header className="site-header">{"\n      "}
      <a className="brand" href="index.html" aria-label="Jobman Global home">{"\n        "}
        <img className="brand-logo" src="logo%20with%20tagline.png" alt="Jobman Global — Your India Business Partner" />{"\n      "}
      </a>{"\n      "}
      <button className="nav-toggle" type="button" aria-label="Open navigation" aria-expanded="false" aria-controls="primary-nav">{"\n        "}
        <span></span><span></span><span></span>{"\n      "}
      </button>{"\n      "}
      <nav className="main-nav" id="primary-nav" aria-label="Primary navigation">{"\n        "}
        <a href="index.html#home-overview">Home</a>{"\n        "}
        <a href="company.html#company">About Us</a>{"\n        "}
        <div className="nav-services">{"\n          "}
          <button className="services-toggle" type="button" aria-expanded="false" aria-controls="services-mega-menu">{"\n            "}
            {"Services"}{"\n            "}
            <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="m2.5 4.5 3.5 3 3.5-3" /></svg>{"\n          "}
          </button>{"\n          "}
          <div className="services-mega" id="services-mega-menu" style={{ paddingTop: "14px", paddingBottom: "14px" }}>{"\n            "}
            <section className="mega-group" aria-labelledby="mega-compliance">{"\n              "}
              <span className="mega-label" id="mega-compliance">Compliance &amp; Support</span>{"\n              "}
              <a href="marketing-advisory.html#market-entry-advisory"><span className="mega-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M12 3v18M6 7h12" /><path d="M6 7l-3 6a3 3 0 0 0 6 0l-3-6zM18 7l-3 6a3 3 0 0 0 6 0l-3-6z" /></svg></span><span className="mega-copy"><strong>Market Entry &amp; Advisory</strong><small>Structure, entity &amp; compliance</small></span></a>{"\n              "}
              <a href="workplace-solutions.html#workplace-solutions-overview"><span className="mega-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="3" y="4" width="8" height="17" /><rect x="13" y="10" width="8" height="11" /><path d="M6 8h2M6 12h2M16 14h2M16 18h2" /></svg></span><span className="mega-copy"><strong>Workplace &amp; Operations</strong><small>Office, IT, insurance, vendors</small></span></a>{"\n            "}
            </section>{"\n            "}
            <section className="mega-group" aria-labelledby="mega-hr">{"\n              "}
              <span className="mega-label" id="mega-hr">HR &amp; Staffing</span>{"\n              "}
              <a href="talent-solutions.html#talent-solutions-overview"><span className="mega-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="9" cy="7" r="3" /><circle cx="17" cy="9" r="2.4" /><path d="M3 21v-1.5C3 16.5 5.7 15 9 15s6 1.5 6 4.5V21" /><path d="M15.2 15.3c2.4.2 4.3 1.6 4.3 4.2V21" /></svg></span><span className="mega-copy"><strong>Talent Solutions</strong><small>Specialist &amp; leadership hiring</small></span></a>{"\n              "}
              <a href="staffing-eor.html#staffing-eor-overview"><span className="mega-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M12 3 5 6v5.5c0 4.5 3 8 7 9.5 4-1.5 7-5 7-9.5V6Z" /><path d="m9 12 2 2 4-4" /></svg></span><span className="mega-copy"><strong>EOR &amp; Staffing</strong><small>Flexible workforce models</small></span></a>{"\n            "}
            </section>{"\n            "}
            <section className="mega-group" aria-labelledby="mega-finance">{"\n              "}
              <span className="mega-label" id="mega-finance">Finance and Setup</span>{"\n              "}
              <a href="finance-accounting.html#finance-accounting-overview"><span className="mega-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><ellipse cx="9" cy="7" rx="6" ry="3" /><path d="M3 7v5c0 1.7 2.7 3 6 3s6-1.3 6-3V7" /><path d="M3 12v5c0 1.7 2.7 3 6 3" /></svg></span><span className="mega-copy"><strong>Finance &amp; Accounting</strong><small>Books, MIS &amp; statutory audit</small></span></a>{"\n            "}
            </section>{"\n          "}
          </div>{"\n        "}
        </div>{"\n        "}
        <a href="gcc.html#gcc-setup-overview">GCC &amp; Partnerships</a>{"\n        "}
        <a href="global-india.html">Global Desk</a>{"\n        "}
        <a href="resources.html#resources">Resources</a>{"\n        "}
        <a href="contact.html#contact">Contact</a>{"\n        "}
        <a className="nav-cta-btn" href="contact.html#contact">Book a 15-Min Scoping Call</a>{"\n      "}
      </nav>{"\n    "}
    </header>
  );
}
