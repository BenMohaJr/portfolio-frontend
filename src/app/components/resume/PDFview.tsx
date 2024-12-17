import React from "react";

const PDFview = () => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <iframe
        src="/assets/resume.pdf"
        width="100%"
        height="100%"
        title="Resume"
        style={{ border: "none" }}
      >
        <p>
          Your browser does not support PDFs. Please{" "}
          <a href="/assets/resume.pdf" download>
            download the PDF
          </a>
          .
        </p>
      </iframe>
    </div>
  );
};

export default PDFview;
