import React from "react";
import { Link } from "react-router";
import "./not-found-pade.scss";
export const NotFoundPage: React.FC = () => {
  return (
    <div className="error__background">
      <div className="error">
        <h1 className="error__number">404</h1>
        <p className="error__subtitle">Looks like you’ve got lost...</p>
        <p className="error__text">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link className="error__link" to="/">
          Go Home
        </Link>
      </div>
    </div>
  );
};
