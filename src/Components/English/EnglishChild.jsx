import React from "react";

function EnglishChild({pdfTitle, pdfDesc,downloadLink}) {
  return (
    <div>
      <div className=" m-6 inline-block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {pdfTitle}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">{pdfDesc}</p>

        <a
          href={downloadLink}
          target="new"
          className="my-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Download
        </a>
      </div>
    </div>
  );
}

export default EnglishChild;
