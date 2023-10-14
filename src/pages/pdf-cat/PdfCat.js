import React, { useState } from 'react';
import "./pdf.css"
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import Mainpdf from '../../compoments/Mainpdf';


export default function PdfCat({ fullname, loop, place, date, examtype,niveau }) {
    const [pdf, setpdf] = useState(<Mainpdf fullname={fullname} place={place} date={date} examtype={examtype} niveau={niveau} />)
    const tempExComponents = [];
    for (let i = 0; i <= loop; i++) {
        tempExComponents.push(<PDFViewer className='ass'  >{pdf}</PDFViewer>);
    }
    return (
        <div className='pdf-cat'>
            {tempExComponents.map((tempExComponents, index) => (
                <div className='pdf-cat2' >
                    <div className='ass2'>
                    <PDFDownloadLink className='custom-button' document={pdf} fileName="devoir.pdf">
                        {({ blob, url, loading, error }) =>
                            loading ? '...الرجاء الانتضار' : 'تحميل'
                        }
                    </PDFDownloadLink>
                    <h3>اختبار عدد : {index + 1}</h3>
                    
                    </div>
                    <React.Fragment key={index}>{tempExComponents}</React.Fragment>
                    
                </div>
            ))}
        </div>
    );
}

