import React from 'react';

const documents = [
  { id: 1, title: "Articles on my Literature Books", url: "https://drive.google.com/file/d/1s1NPDXKKDQ6ElG6zZWL_WkuY-NOyYZyf/view?usp=sharing" },
  { id: 2, title: "News Clipping on my Poetry Books", url: "https://drive.google.com/file/d/1i3HmugDGFUCxloEj3IB-iURAhvXSTBXj/view?usp=sharing" },
  { id: 3, title: "Reviews on my Poetry Books", url: "https://drive.google.com/file/d/1eoXEkLlWoHAGvvage_yID5YO0QYejaq5/view?usp=sharing" },
  { id: 4, title: "My Reviews of other Author's Books", url: "https://drive.google.com/file/d/1CHlRjSmXJ0RZ4vy0IKq8EMiM7gd7jWh2/view?usp=sharing" },
  { id: 5, title: "My Social Service clippings - Vidhya Foundationn", url: "https://drive.google.com/file/d/1C4vEqhUH1deu7mGLHFL9Dc4a6dDrcEMG/view?usp=sharing" },
  { id: 6, title: "My Active Work on Disability Problems ", url: "https://drive.google.com/file/d/1QOkBpB9ERiGIo_uOSJRQRp5L895jrUmA/view?usp=sharing" },
  { id: 7, title: "Study Proofs", url: "https://drive.google.com/file/d/1S5aCht5NUiRUypKKFQT_2WagoBDD14co/view?usp=sharing" },
  { id: 8, title: " Awards News Clippings", url: "https://drive.google.com/file/d/1so0uACWrdies7S3yPfFFzh0UyCIHZB6J/view?usp=sharing" },
  { id: 9, title: "Important Certificates", url: "https://drive.google.com/file/d/12OANFmQL_ErgPtjMtzQYD2phjBuASd38/view?usp=sharing" },
 
];

const DocumentsSection = () => {
  return (
    <section className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">Documents</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {documents.map((doc) => (
          <div key={doc.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-medium text-gray-700 mb-2">{doc.title}</h3>
            <div className="aspect-w-16 aspect-h-9 mb-3">
              <iframe 
                src={`https://drive.google.com/file/d/${doc.url.split('/')[5]}/preview`}
                className="w-full h-48 border rounded"
                allow="autoplay"
              ></iframe>
            </div>
            <a 
              href={doc.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              Open in Google Drive
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DocumentsSection;