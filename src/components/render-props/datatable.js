import React from "react";

function Datatable({ rows }) {
  return (
    <table>
      {rows.map((row) => {
        return (
          <tr>
            <td>{row.cell()}</td>
          </tr>
        );
      })}
    </table>
  );
}

export default Datatable;
