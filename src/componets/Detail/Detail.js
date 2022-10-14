import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { userInfo } from "../data/data";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
const Detail = () => {
  const [data, setData] = useState(userInfo);
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
    pdf.save("print.pdf");
  };

  return (
    <div className="flex justify-center items-center">
      <div className="h-[30rem] w-[40rem] border">
        <div ref={printRef}>
          {data
            ?.filter((info) => info.id === id)
            .map((datas) => (
              <div
                className="bg-gray-500 h-full justify-center rounded-md"
                key={datas.id}
              >
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
                  <div className="text-white font-bold cursor-pointer">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                        />
                      </svg>
                      <button type="button" onClick={handleDownloadPdf}>
                        Download as PDF
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Detail;
