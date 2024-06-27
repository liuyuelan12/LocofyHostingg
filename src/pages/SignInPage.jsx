import Header from "../components/Header";
import Form from "../components/Form";
import "./SignInPage.css";

const SignInPage = () => {
  return (
    <div className="sign-in-page">
      <Header
        notifications="/notifications@2x.png"
        avatar="/avatar@2x.png"
        showLoginSection={false}
      />
      <main className="login-sections1">
        <div className="login-form-container1">
          <Form />
        </div>
      </main>
      <footer className="footer-container">
        <div className="footer-wrapper">
          <div className="footer-content1">
            <div className="localhost-inc-all1">
              © 2023 Localhost, Inc. All Rights Reserved
            </div>
            <div className="legal-links">
              <div className="privacy-policy1">Privacy Policy</div>
              <div className="terms-conditions1">{`Terms & Conditions`}</div>
              <div className="contact-us1">Contact us</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SignInPage;
