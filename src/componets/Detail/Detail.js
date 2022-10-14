import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { userInfo } from "../data/data";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
const Detail = () => {
  const [datas, setDatas] = useState(userInfo);
  const { id } = useParams();
  console.log(id);
  const printRef = useRef();

  const handleDownloadPdf = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    const name = datas.find((item) => item.id === id).name;
    pdf.save(`${name}.pdf`);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="h-[30rem] bg-gray-300 w-[40rem] border">
        <div ref={printRef}>
          {datas
            ?.filter((info) => info.id === id)
            .map((datas) => (
              <div className=" h-full justify-center rounded-md" key={datas.id}>
                <div className="flex justify-around items-center">
                  <div>
                    <img
                      className="w-36 h-36 rounded"
                      src={datas.imgUrl}
                      alt={datas.name}
                    />
                  </div>
                  <div>
                    <h1>{datas.name}</h1>
                    <h2>{datas.title}</h2>
                    <h3>{datas.passportnum}</h3>
                    <h4>{datas.email}</h4>
                  </div>
                  <div className="text-white font-bold cursor-pointer"></div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <button type="button" onClick={handleDownloadPdf}>
        Download as PDF
      </button>
    </div>
  );
};

export default Detail;
