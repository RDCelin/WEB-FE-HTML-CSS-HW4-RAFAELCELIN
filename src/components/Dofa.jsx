import React from 'react';

const Dofa = ({ data }) => {
  return (
    <section className="p-4">
      <h2 className="text-2xl font-semibold">Diagnóstico Actual (DOFA)</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
        {data.map((dofa) => (
          <div key={dofa.id} className="p-4 border rounded-lg shadow-lg">
            <h3 className="font-bold text-lg">{dofa.type}</h3>
            <ul className="list-disc ml-5 mt-2">
              {dofa.items.map((item) => (
                <li key={item.id}>{item.description}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Dofa;