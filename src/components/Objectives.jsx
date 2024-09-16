import React from 'react';

const Objectives = ({ objectives }) => {
  const getStatusClass = (compliance) => {
    if (compliance >= 76) return 'text-green-600';
    if (compliance >= 36) return 'text-orange-600';
    return 'text-red-600';
  };

  return (
    <section className="p-4">
      <h2 className="text-2xl font-semibold">Objetivos Estratégicos</h2>
      <table className="min-w-full mt-4 border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2">Código</th>
            <th className="border px-4 py-2">Objetivo</th>
            <th className="border px-4 py-2">Meta</th>
            <th className="border px-4 py-2">Avance</th>
            <th className="border px-4 py-2">Cumplimiento</th>
            <th className="border px-4 py-2">Estado</th>
          </tr>
        </thead>
        <tbody>
          {objectives.map((obj) => (
            <tr key={obj.id}>
              <td className="border px-4 py-2">{obj.id}</td>
              <td className="border px-4 py-2">{obj.goal}</td>
              <td className="border px-4 py-2">{obj.target}</td>
              <td className="border px-4 py-2">{obj.progress}</td>
              <td className="border px-4 py-2">{obj.compliance}%</td>
              <td className={`border px-4 py-2 ${getStatusClass(obj.compliance)}`}>
                {obj.compliance >= 76 ? 'Exitoso' : obj.compliance >= 36 ? 'Aceptable' : 'Crítico'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Objectives;