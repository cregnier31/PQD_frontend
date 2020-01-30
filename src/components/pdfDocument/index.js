import React from "react";
import jsPDF from "jspdf"; //
import html2canvas from 'html2canvas';
import GetAppIcon from '@material-ui/icons/GetApp';

const styles = {
  fontFamily: "arial",
  textAlign: "center",
  padding: '50px'
};

const btnStyle = {
  cursor: 'pointer',
  padding: '10px 20px',
  borderRadius: '5px',
  outline: 'none',
  fontSize: '20px',
}
const Prints = ({props}) => (
  <div style={{ position: 'absolute', left: 0, top: -500}}>
    <div id="printThis">
      {props.chart}
    </div>
  </div>
);

const print = () => {
  const input = document.getElementById('printThis');
  console.log('printThis', input)
  html2canvas(input)
    .then((canvas) => {
      const imgWidth = 210; 
      const pageHeight = 1000;  
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const heightLeft = imgHeight;
      const position = 0;
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('landscape');
      pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight)
      pdf.save("download.pdf");
    })
};

export default function PDF(props) {
    console.log('props', props)
  return (
    <div style={styles}>
      <button
        style={btnStyle}
        onClick={print}
      >
        Download PDF
      </button>
      <Prints props={props} />
    </div>
  );
}