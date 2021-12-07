import React, { useEffect } from 'react';
import './invoice.style.scss';
// import html2pdf from 'html2pdf.js';
// import styles from './../quote-generation/styles/styles';
export const InVOVO = () => {
  //
  useEffect(() => {
    const amount = document.querySelectorAll('#amount');
    amount.forEach((amou) => {
      const formatter = new Intl.NumberFormat('en-ZA', {
        style: 'currency',
        currency: 'ZAR',
        minimumFractionDigits: 2,
      });
      // value = '1000';
      // // value = value.replace(/\d(?=(\d{3})+\.)/g, '$&,');
      // value = formatter.format(value);
      // // qw.value += 10000000;
      amou.addEventListener('change', (e) => {
        e.target.value = formatter.format(e.target.value);
      });
    });
  }, []);
  const formatter = new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
    minimumFractionDigits: 2,
  });
  const handlePdf = (params) => {
    const element = document.getElementById('printMe');
    // Export configuration
    const opt = {
      // margin: 1,
      filename: 'Exported pdf name',
      image: { type: 'jpeg', quality: 1 }, // Exported image quality and format
      html2canvas: { scale: 2, useCORS: true }, // useCORS is very important to solve the problem of cross-domain images in the document
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };
    if (element) {
      // window.html2pdf().set(opt).from(element).save(); // export
      window
        .html2pdf()
        .set(opt)
        .from(element)
        .toPdf()
        .outputPdf('dataurl')
        .then(function (pdf) {
          // let data = {
          //   fileDataURI: pdf,
          // };
          // // // $.post( "../mail.php", data);
          // // console.log(data);
          // // console.log(data);
          // return data;
          window.Email.send({
            Host: 'smtp.gmail.com',
            Username: 'vusimuzivks@gmail.com',
            Password: 'ktiwzfaihabzrvnq',
            To: 'vusimuzivks@gmail.com',
            From: 'vusimuzivks@gmail.com',
            Subject: 'Sending Email using javascript',
            Body: 'Well that was easy!!',
            Attachments: [
              {
                name: 'fileName.pdf',
                data: pdf,
              },
            ],
          }).then(function (message) {
            alert('mail sent successfully');
          });
        });
    }

    ////////////////////////////////////////////////////////////////
  };
  return (
    <div className='InVOVO' id='printMe'>
      <button id='push' onClick={() => handlePdf()}>
        hello
      </button>
      <div className='page'>
        <header>
          <h1>Quotation</h1>
          <div className='divide'>
            <div
              className='box img'
              // style={{
              //   backgroundImage:
              //     'url(' +
              //     'https://seramegroup.co.za/wp-content/uploads/2021/05/Serame-Media-Ouline.png' +
              //     ')',
              //   backgroundPosition: 'left',
              //   backgroundSize: 'contain',
              //   backgroundRepeat: 'no-repeat',
              // }}
              // style="--background: url('Serame.png')"
            >
              {/*  <img
                src={process.env.PUBLIC_URL + '/logo.png'}
                alt='serameLogo'
              /> */}
            </div>
            <div className='box info'>
              <tr>
                <td>Date</td>
                <td>
                  <input type='text' />
                </td>
              </tr>
              <tr>
                <td>Quotation No:</td>
                <td>
                  <input type='text' />
                </td>
              </tr>
              <tr>
                <td>VAT No.</td>
                <td>
                  <input type='text' />
                </td>
              </tr>
              <tr>
                <td>Vendor No.</td>
                <td>
                  <input type='text' />
                </td>
              </tr>
              <tr>
                <td>CSD No.</td>
                <td>
                  <input type='text' />
                </td>
              </tr>
            </div>
          </div>
          <div className='divide'>
            <div className='box customer'>
              <table>
                <tr>
                  <th>Customer</th>
                </tr>
                <tr>
                  <td>
                    <div className='i'>
                      <input type='text' placeholder='customer name' />
                    </div>
                    <div className='i'>
                      <input type='text' placeholder='POX Box' />
                    </div>
                    <div className='i'>
                      <input type='text' placeholder='City' />
                    </div>
                    <div className='i'>
                      <label htmlFor='vatNo'></label>
                      <input type='text' name='vatNo' placeholder='VAT No.' />
                    </div>
                  </td>
                </tr>
              </table>
            </div>
            <div className='box description'>
              <table>
                <tr>
                  <th>Quote/Project Description</th>
                </tr>
                <tr>
                  <td>
                    <textarea name='' id=''></textarea>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </header>
        <main>
          <table className='table'>
            <tr>
              <th>Description</th>
              <th>Qty</th>
              <th>Unit Price</th>
              <th>Amount</th>
            </tr>
            <tr className='single__row'>
              <td className='desc'>
                <input type='text' className='' />
              </td>
              <td className='qty'>
                <input type='text' className='' />
              </td>
              <td className='price'>
                <input type='text' className='' />
              </td>
              <td className='amount'>
                <input type='number' className='' id='amount' />
              </td>
            </tr>
            <tr className='single__row'>
              <td className='desc'>
                <input type='text' className='' />
              </td>
              <td className='qty'>
                <input type='text' className='' />
              </td>
              <td className='price'>
                <input type='text' className='' />
              </td>
              <td className='amount'>
                <input type='text' className='' id='amount' />
              </td>
            </tr>
            <tr className='single__row'>
              <td className='desc'>
                <input type='text' className='' />
              </td>
              <td className='qty'>
                <input type='text' className='' />
              </td>
              <td className='price'>
                <input type='text' className='' />
              </td>
              <td className='amount'>
                <input type='text' className='' id='amount' />
              </td>
            </tr>
            <tr className='single__row'>
              <td className='desc'>
                <input type='text' className='' />
              </td>
              <td className='qty'>
                <input type='text' className='' />
              </td>
              <td className='price'>
                <input type='text' className='' />
              </td>
              <td className='amount'>
                <input type='text' className='' id='amount' />
              </td>
            </tr>
            <tr className='single__row'>
              <td className='desc'>
                <input type='text' className='' />
              </td>
              <td className='qty'>
                <input type='text' className='' />
              </td>
              <td className='price'>
                <input type='text' className='' />
              </td>
              <td className='amount'>
                <input type='text' className='' id='amount' />
              </td>
            </tr>
            <tr className='single__row'>
              <td className='desc'>
                <input type='text' className='' />
              </td>
              <td className='qty'>
                <input type='text' className='' />
              </td>
              <td className='price'>
                <input type='text' className='' />
              </td>
              <td className='amount'>
                <input type='text' className='' id='amount' />
              </td>
            </tr>
            <tr className='single__row'>
              <td className='desc'>
                <input type='text' className='' />
              </td>
              <td className='qty'>
                <input type='text' className='' />
              </td>
              <td className='price'>
                <input type='text' className='' />
              </td>
              <td className='amount'>
                <input type='text' className='' id='amount' />
              </td>
            </tr>
            <tr className='single__row'>
              <td className='desc'>
                <input type='text' className='' />
              </td>
              <td className='qty'>
                <input type='text' className='' />
              </td>
              <td className='price'>
                <input type='text' className='' />
              </td>
              <td className='amount'>
                <input type='text' className='' id='amount' />
              </td>
            </tr>
            <tr className='single__row'>
              <td className='desc'>
                <input type='text' className='' />
              </td>
              <td className='qty'>
                <input type='text' className='' />
              </td>
              <td className='price'>
                <input type='text' className='' />
              </td>
              <td className='amount'>
                <input type='text' className='' id='amount' />
              </td>
            </tr>
            <tr className='single__row'>
              <td className='desc'>
                <input type='text' className='' />
              </td>
              <td className='qty'>
                <input type='text' className='' />
              </td>
              <td className='price'>
                <input type='text' className='' />
              </td>
              <td className='amount'>
                <input type='text' className='' id='amount' />
              </td>
            </tr>
            <tr className='single__row'>
              <td className='desc'>
                <input type='text' className='' />
              </td>
              <td className='qty'>
                <input type='text' className='' />
              </td>
              <td className='price'>
                <input type='text' className='' />
              </td>
              <td className='amount'>
                <input type='text' className='' id='amount' />
              </td>
            </tr>
            <tr className='single__row'>
              <td className='desc'>
                <input type='text' className='' />
              </td>
              <td className='qty'>
                <input type='text' className='' />
              </td>
              <td className='price'>
                <input type='text' className='' />
              </td>
              <td className='amount'>
                <input type='text' className='' id='amount' />
              </td>
            </tr>
          </table>
          <table className='banking'>
            <tr>
              <th>FNB</th>
            </tr>
            <tr className='desc'>
              <div className='i'>
                <label htmlFor='accountName'>Account Name:</label>
                <input
                  type='text'
                  name='accountName'
                  value={`Serame Trading & Projects cc`}
                  onChange=''
                />
              </div>
              <div className='i'>
                <label htmlFor='accountNumber'>Account Number:</label>
                <input
                  type='text'
                  name='accountNumber'
                  onChange=''
                  value='62453060461'
                />
              </div>
              <div className='i'>
                <label htmlFor='accountType'>Account Type:</label>
                <input
                  type='text'
                  name='accountType'
                  value='Business Cheque'
                  onChange=''
                />
              </div>
              <div className='i'>
                <label htmlFor='branchCode'>Account Type:</label>
                <input
                  type='text'
                  name='branchCode'
                  value='250645'
                  onChange=''
                />
              </div>
            </tr>
          </table>
        </main>
        <footer>
          <h3 className='contact'>
            Tel: 012 321 0275 / 012 881 0577 | Email: admin@seramegroup.co.za
          </h3>
          <div className='disclaimer'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            cumque consequatur sequi impedit fugit facere laborum, assumenda
            iste ipsa autem vel libero mollitia, odio harum.
          </div>
        </footer>
      </div>
    </div>
  );
};
