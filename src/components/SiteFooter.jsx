export default function SiteFooter({ indiaEmailHref, indiaEmailCode, banner, disclaimer }) {
  return (
    <footer className="site-footer" id="site-footer">{banner}{"\n      "}
      <div className="footer-directory">{"\n        "}
        <div className="footer-shell footer-directory-grid cta-directory">{"\n          "}
          <section className="footer-cta-brand">{"\n            "}
            <a className="footer-logo-link" href="index.html" aria-label="Jobman Global home">{"\n              "}
              <img className="footer-logo-image" src="logo%20with%20tagline.png" alt="Jobman Global — Your India Business Partner" />{"\n            "}
            </a>{"\n            "}
            <p className="footer-tagline" style={{ fontSize: "13px", lineHeight: "1.55", color: "var(--on-ink-muted)", marginTop: "8px" }}>{"\n              "}
              {"Headquartered in Bengaluru with solutioning across all 28 States & 8 Union Territories and a European Liaison Desk in Basel—delivering compliant, integrated operations for global entrants and growing Indian businesses alike."}{"\n            "}
            </p>{"\n            "}
            <div className="footer-socials" aria-label="Social media">{"\n              "}
              <a href="https://www.linkedin.com/company/jobman-global/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 3.5A2.5 2.5 0 1 1 5.2 8a2.5 2.5 0 0 1 0-4.5zM3 9.5h4.4V22H3zm7.2 0h4.2v1.7h.1c.6-1.1 2-2.3 4.1-2.3 4.4 0 5.2 2.8 5.2 6.5V22h-4.4v-5.8c0-1.4 0-3.2-2.1-3.2s-2.5 1.5-2.5 3.1V22h-4.4z" /></svg></a>{"\n              "}
              <a href="https://wa.me/919741426441" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5a9.5 9.5 0 0 0-8.2 14.4L2.5 21.5l4.8-1.2A9.5 9.5 0 1 0 12 2.5Z" fill="none" stroke="currentColor" strokeWidth="1.6" /><path d="M8.4 7.8c.2-.4.5-.5.8-.5h.6c.2 0 .4.1.5.4l.8 1.9c.1.3 0 .5-.2.7l-.6.6c.5 1 1.3 1.8 2.3 2.3l.6-.6c.2-.2.5-.3.7-.2l1.9.8c.3.1.4.3.4.5v.6c0 .3-.2.6-.5.8-.4.2-.8.3-1.2.3-2.6-.2-5.7-3.3-5.9-5.9 0-.4.1-.8.3-1.2Z" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" /></svg></a>{"\n              "}
              <a href="https://www.facebook.com/people/Jobman-Global/61577722705301/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4.2c-.5-.1-2.2-.2-3.4-.2C11.2 4 9.5 5.5 9.5 8.3V11H7v4h2.5v9h4.2v-9h3l.5-4h-3.5V8.7c0-.5.1-.7.3-.7z" /></svg></a>{"\n              "}
              <a href="https://www.instagram.com/jobmanglobal/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.5-3a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z" /></svg></a>{"\n            "}
            </div>{"\n            "}
            <a className="footer-brief-link" href="contact.html#contact" style={{ borderTop: "1px solid var(--hair-ink)", marginTop: "6px", paddingTop: "12px" }}>Have a requirement? Send a brief →</a>{"\n          "}
          </section>{"\n"}
{"\n          "}
          <section>{"\n            "}
            <h3>Explore</h3>{"\n            "}
            <nav aria-label="Footer explore links">{"\n              "}
              <a href="marketing-advisory.html#market-entry-advisory">Market Entry &amp; Advisory</a>{"\n              "}
              <a href="staffing-eor.html#staffing-eor-overview">EOR &amp; Staffing</a>{"\n              "}
              <a href="marketing-advisory.html#market-entry-advisory">Legal Entity Setup</a>{"\n              "}
              <a href="talent-solutions.html#talent-solutions-overview">Talent Solutions</a>{"\n              "}
              <a href="finance-accounting.html#finance-accounting-overview">Finance &amp; Accounting</a>{"\n              "}
              <a href="workplace-solutions.html#workplace-solutions-overview">Workplace Solutions</a>{"\n              "}
              <a href="gcc.html#gcc-setup-overview">GCC &amp; Partnerships</a>{"\n            "}
            </nav>{"\n          "}
          </section>{"\n"}
{"\n          "}
          <section>{"\n            "}
            <h3>Company</h3>{"\n            "}
            <nav aria-label="Footer company links">{"\n              "}
              <a href="company.html#company">About Us</a>{"\n              "}
              <a href="company.html#leadership-team">Leadership</a>{"\n              "}
              <a href="global-india.html">Global Desk</a>{"\n              "}
              <a href="contact.html#careers">Careers</a>{"\n              "}
              <a href="contact.html#contact">Contact</a>{"\n            "}
            </nav>{"\n          "}
          </section>{"\n"}
{"\n          "}
          <section>{"\n            "}
            <h3>Knowledge Hub</h3>{"\n            "}
            <nav aria-label="Footer FAQ links">{"\n              "}
              <a href="resources.html#jobman-ecosystem">Ecosystem</a>{"\n              "}
              <a href="resources.html#provider-table">EOR vs Legal Entity</a>{"\n              "}
              <a href="resources.html#faq">Frequently Asked Questions</a>{"\n              "}
              <a href="resources.html#client-scenarios">Real-World Scenarios</a>{"\n              "}
              <a href="resources.html#india-glossary">India Business Glossary</a>{"\n              "}
              <a href="resources.html#industry-insights">Industry Research</a>{"\n            "}
            <a href="resources.html#growth-corridors">Global Corridors</a>{"\n            "}
            </nav>{"\n          "}
          </section>{"\n        "}
        </div>{"\n      "}
      </div>{"\n"}
{"\n      "}
      <div className="footer-coordinates-row">{"\n        "}
        <div className="footer-shell footer-coordinates-grid">{"\n          "}
          {/* Col 1: Registered Corporate Entity */}{"\n          "}
          <div className="footer-coord-col">{"\n            "}
            <div className="footer-coord-head">{"\n              "}
              <span className="footer-coord-icon" aria-hidden="true">{"\n                "}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 7h8M8 11h8M8 15h4" /></svg>{"\n              "}
              </span>{"\n              "}
              <strong>Registered Corporate Entity</strong>{"\n            "}
            </div>{"\n            "}
            <div className="footer-coord-body">{"\n              "}
              <div className="footer-coord-name">JBMN ASSOCIATES PRIVATE LIMITED</div>{"\n              "}
              <div className="footer-coord-cin">CIN: U78100KA2024PTC188225</div>{"\n              "}
              <address className="footer-coord-addr">Bengaluru, KA, IND.</address>{"\n            "}
            </div>{"\n          "}
          </div>{"\n"}
{"\n          "}
          {/* Col 2: India Delivery & Operations */}{"\n          "}
          <div className="footer-coord-col">{"\n            "}
            <div className="footer-coord-head">{"\n              "}
              <span className="footer-coord-icon" aria-hidden="true">{"\n                "}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12z" /><circle cx="12" cy="9" r="2.5" /></svg>{"\n              "}
              </span>{"\n              "}
              <strong>Indian Desk</strong>{"\n            "}
            </div>{"\n            "}
            <div className="footer-coord-body">{"\n              "}
              <div className="footer-coord-contact">{"\n                "}
                <a className="footer-coord-wa" href="https://wa.me/919741426441" target="_blank" rel="noopener noreferrer" aria-label="Chat with Indian Desk on WhatsApp" title="Chat on WhatsApp" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "22px", height: "22px", margin: "0 6px 0 0", borderRadius: "50%", background: "#25d366", color: "#fff", verticalAlign: "middle" }}><svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true" style={{ width: "13px", height: "13px", display: "block" }}><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.2-.1-1-.4-2-1.2-.7-.7-1.2-1.5-1.4-1.7-.1-.2 0-.4.1-.5l.4-.4.2-.4c.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.2.7 3 .6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.5-.3z" /></svg></a><a href="tel:+919741426441">+91 97414 26441</a>{" • "}<a href={indiaEmailHref}><span className="__cf_email__" data-cfemail={indiaEmailCode}>[email protected]</span></a>{"\n              "}
              </div>{"\n            "}
            </div>{"\n          "}
          </div>{"\n"}
{"\n          "}
          {/* Col 3: Europe Desk */}{"\n          "}
          <div className="footer-coord-col">{"\n            "}
            <div className="footer-coord-head">{"\n              "}
              <span className="footer-coord-icon" aria-hidden="true">{"\n                "}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>{"\n              "}
              </span>{"\n              "}
              <strong>Europe Desk</strong>{"\n            "}
            </div>{"\n            "}
            <div className="footer-coord-body">{"\n              "}
              <div className="footer-coord-contact">{"\n                "}
                <a className="footer-coord-wa" href="https://wa.me/41797925200" target="_blank" rel="noopener noreferrer" aria-label="Chat with Europe Desk on WhatsApp" title="Chat on WhatsApp" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "22px", height: "22px", margin: "0 6px 0 0", borderRadius: "50%", background: "#25d366", color: "#fff", verticalAlign: "middle" }}><svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true" style={{ width: "13px", height: "13px", display: "block" }}><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.2-.1-1-.4-2-1.2-.7-.7-1.2-1.5-1.4-1.7-.1-.2 0-.4.1-.5l.4-.4.2-.4c.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.2.7 3 .6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.5-.3z" /></svg></a><a href="tel:+41797925200">+41 79 792 52 00</a>{" • "}<a href="mailto:info.europe@jobmanglobal.com">info.europe@jobmanglobal.com</a>{"\n              "}
              </div>{"\n            "}
            </div>{"\n          "}
          </div>{"\n        "}
        </div>{"\n      "}
      </div>{"\n"}
{"\n"}
{disclaimer}{"      "}<div className="footer-shell footer-legal">{"\n        "}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", width: "100%" }}>{"\n          "}
          <span>© 2026 Jobman Global. All rights reserved.</span>{"\n          "}
          <nav className="footer-legal-links" aria-label="Legal links">{"\n            "}
            <a href="contact.html#privacy">Privacy Policy</a>{"\n            "}
            <a href="contact.html#terms">Terms &amp; Conditions</a>{"\n            "}
            <a href="https://www.linkedin.com/company/jobman-global/" target="_blank" rel="noopener noreferrer">LinkedIn</a>{"\n          "}
          </nav>{"\n        "}
        </div>{"\n      "}
      </div>{"\n    "}
    </footer>
  );
}
