import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({
  className = "",
  orSignUpWith,
  googleIcon,
  facebookIcon,
  appleIcon,
}) => {
  return (
    <div className={`or-sign-up-with-parent ${className}`}>
      <div className="or-sign-up">{orSignUpWith}</div>
      <div className="social-login-container">
        <div className="social-login">
          <img className="google-icon" loading="lazy" alt="" src={googleIcon} />
          <div className="social-labels">Google</div>
        </div>
        <div className="social-login1">
          <img
            className="facebook-icon"
            loading="lazy"
            alt=""
            src={facebookIcon}
          />
          <a className="text">Facebook</a>
        </div>
        <div className="social-login2">
          <img className="apple-icon" loading="lazy" alt="" src={appleIcon} />
          <div className="text1">Apple</div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  orSignUpWith: PropTypes.string,
  googleIcon: PropTypes.string,
  facebookIcon: PropTypes.string,
  appleIcon: PropTypes.string,
};

export default FrameComponent;
