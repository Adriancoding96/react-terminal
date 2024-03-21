import React, { useEffect } from "react";

const MainSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("show");
          }, 300);
        } else {
          setTimeout(() => {
            entry.target.classList.remove("show");
          }, 300);
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("slide-in");
          }, 300);
        } else {
          setTimeout(() => {
            entry.target.classList.remove("slide-in");
          }, 300);
        }
      });
    });

    const oobElements = document.querySelectorAll(".slide-out");
    oobElements.forEach((el) => observer.observe(el));

    return () => {
      oobElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div>
      <div className="vertical-line"></div>
      <section className="main-section" style={{ justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#252526",
            border: "16px solid #1e1e1e",
            borderTop: "none",
          }}
        >
          <h1 className="custom-h1">About Me</h1>
        </div>
      </section>
      <section className="main-section">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
            }}
            className="container"
          >
            <div
              style={{
                textAlign: "left",
                maxWidth: "320px",
                marginLeft: "44px",
              }}
              className="slide-out"
            >
              <h1 className="custom-h1">Hello World</h1>
              <h4 className="custom-h4">
                My name is Adrian Nilsson. im a programmer from stockholm
                sweden. Im passionate about programming espiecially backend. I
                started my programming journey two years ago and have since
                studied multiple programming courses at university ranging from
                frontend to backend development
              </h4>
            </div>
            <div className="hidden">
              <img
                src="../../assets/adrian.jpg"
                alt="profile picture"
                className="standard-image"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="main-section hidden">
        <h1 className="custom-h1">My Skills</h1>
        <h4 className="custom-h4">Java</h4>
      </section>
      <section className="main-section hidden">
        <h1 className="custom-h1">Contact</h1>
        <h4 className="custom-h4">adrian.nilsson@example.com</h4>
      </section>
    </div>
  );
};

export default MainSection;
