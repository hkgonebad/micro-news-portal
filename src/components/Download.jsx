import { FiDownload } from "react-icons/fi";

const Download = () => {
  return (
    <section className="block downloadPdf" id="download">
      <div className="container">
        <div className="dpRow">
          <div className="dpImg">
            <img src="img/pdf.jpg" alt="" />
          </div>
          <div className="dpDetails">
            <h3>The Reliance Herald 2024</h3>
            <a href="pdf/Reliance_Herald_2024.pdf" target="_blank" className="btn btn-outline-light">
              <FiDownload />
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
