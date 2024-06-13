import React, { memo } from 'react';

const GradeRow = ({ grade ,index}) => (
  <tr className={index+1 % 2 === 0 ? 'bg-gray-50 dark:bg-gray-700' : 'dark:bg-gray-800'}>
    <td className="py-3 px-4 border dark:border-gray-600">{index+1}</td>
    <td className="py-3 px-4 border dark:border-gray-600">{grade.Subject_Code}</td>
    <td className="py-3 px-4 border dark:border-gray-600">{grade.Subject_Name}</td>
    <td className="py-3 px-4 border dark:border-gray-600">{grade.Type}</td>
    <td className="py-3 px-4 border dark:border-gray-600">{eval(grade.Credits)}</td>
    <td className="py-3 px-4 border dark:border-gray-600">{grade.Grade}</td>
  </tr>
);


const ResultPage = memo(({data,type}) => {
    let totalcredit = data.reduce((acc,curr) => acc + eval(curr.Credits),0);
    let cl = totalcredit;
    let cleared = data.filter((grade) =>{
        if(grade.Grade === 'F' || grade.Grade === 'S' ){
            cl = cl - eval(grade.Credits);
        }
    });
    let sgpa = 0;
    let gradePoints = {
        'O': 10,
        'E': 9,
        'A': 8,
        'B': 7,
        'C': 6,
        'D': 5,
        'F': 0,
        'S': 0
    };
    sgpa = data.reduce((acc,curr) => acc + gradePoints[curr.Grade] * eval(curr.Credits),0);
    sgpa = sgpa / totalcredit;
    sgpa = sgpa.toFixed(2);

    const formattedDate = ((date) => `${date.getDate()} ${new Intl.DateTimeFormat('en-IN', { month: 'short' }).format(date)} ${date.getFullYear()}`)(new Date());

    
    
  return (
    <div className="bg-gray-100 dark:bg-gray-900 p-6">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 shadow-lg rounded-lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Centurion University of Technology and Management</h1>
          <h2 className="text-xl text-gray-600 dark:text-gray-300">School of Engineering & Technology, Bhubaneswar</h2>
          <h3 className="text-lg text-gray-500 dark:text-gray-400 mt-4">Semester Grade Sheet</h3>
        </div>
        <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <p><span className="font-semibold dark:text-gray-200">Student Regd. No:</span> {data[0].Reg_No}</p>
            <p><span className="font-semibold dark:text-gray-200">Student Name:</span> {data[0].Name}</p>
          </div>
          <div>
            <p><span className="font-semibold dark:text-gray-200">Course:</span> B.Tech </p>
            <p><span className="font-semibold dark:text-gray-200">Batch:</span> {type=="btech4"?"2022":"2021"}</p>
          </div>
          <div>
            <p><span className="font-semibold dark:text-gray-200">Branch:</span> ___________</p>
            <p><span className="font-semibold dark:text-gray-200">Semester:</span> {type=="btech6"?"Sem 6":"Sem 4"}</p>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 border rounded-lg">
            <thead className="bg-gray-200 dark:bg-gray-700">
              <tr>
                <th className="py-3 px-4 border dark:border-gray-600 dark:text-gray-200">SL.NO</th>
                <th className="py-3 px-4 border dark:border-gray-600 dark:text-gray-200">SUB.CODE</th>
                <th className="py-3 px-4 border dark:border-gray-600 dark:text-gray-200">SUBJECT</th>
                <th className="py-3 px-4 border dark:border-gray-600 dark:text-gray-200">TYPE</th>
                <th className="py-3 px-4 border dark:border-gray-600 dark:text-gray-200">CREDIT</th>
                <th className="py-3 px-4 border dark:border-gray-600 dark:text-gray-200">GRADE</th>
              </tr>
            </thead>
            <tbody>
              {data.map((grade,index) => (
                <GradeRow key={grade["Sl No"]} grade={grade} index={index}/>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <p><span className="font-semibold dark:text-gray-200">Total Credits:</span> {totalcredit}</p>
            <p><span className="font-semibold dark:text-gray-200">Credits Cleared:</span> {cl}</p>
            

          </div>
          <div className="text-right">
            <p className="dark:text-gray-200">Date: {formattedDate }</p>
            <p><span className="font-semibold dark:text-gray-200">SGPA:</span> {sgpa}</p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ResultPage;

