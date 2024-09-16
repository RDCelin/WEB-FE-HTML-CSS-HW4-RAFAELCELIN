import React from 'react';

const Dofa = ({ data }) => {
  return (
    <div className=" p-8" >
      <h1 className="text-2xl font-bold mb-8">Diagnosis</h1>
      <div className="container-big grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.map((section) => (
          <div key={section.id} className="container-small border border-gray-400 p-6 rounded-lg shadow-lg">
            <h2 className=" text-lg font-semibold mb-4 text-center">{section.type}</h2>
            <ul className=" list-decimal pl-6">
              {section.items.map((item) => (
                <li key={item.id} className="mb-2">
                  <span className="font-semibold">{item.description}</span>
                  <p className="text-sm text-gray-600 mt-1"></p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dofa;