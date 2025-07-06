import React from 'react';

const ProfileSection = () => {
  return (
    <section className="mb-12 bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">Profile Information</h2>
      
      <div className="mb-6">
        <h3 className="text-xl font-medium text-gray-700 mb-3">Wikipedia Profile</h3>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-gray-700 mb-4">
            I am Billa Mahender, a poet, Writer, and social activist. My official Wikipedia profile provides detailed information about my life, literary journey, and contributions to society
          </p>
          <a 
            href="https://te.wikipedia.org/wiki/బిల్ల_మహేందర్" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            View Wikipedia Profile
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
      
      {/* <div>
        <h3 className="text-xl font-medium text-gray-700 mb-3">Facebook Profile</h3>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-gray-700 mb-4">
            Connect with Bill Mahender on Facebook for updates and more information.
          </p>
          <a 
            href="https://www.facebook.com/share/19EXCrKAMa/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            View Facebook Profile
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div> */}
      <br />
       <div>
        <h3 className="text-xl font-medium text-gray-700 mb-3">Exclusive Interview on DD Yadagiri</h3>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-gray-700 mb-4">
            I, Billa Mahender – poet and social activist – was interviewed on DD Yadagiri, Telangana, about my literary work.
          </p>
          <a 
            href="https://youtu.be/E2ULjcmp0uY?si=DjXHkhPat2OJE5JQ" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            View Interview
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
      <br />
       <div>
        <h3 className="text-xl font-medium text-gray-700 mb-3"> Exclusive Interview on SumanTV</h3>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-gray-700 mb-4">
           The Inspiring Journey of Poet & Activist Billa Mahender | Exclusive Interview on SumanTV
          </p>
          <a 
            href="https://youtu.be/WeYbL8hLuCQ?si=kCnnhHE7V8T_W5xz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            View Interview
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;