import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import Job from "./job";

const JobsList = () => {
  const [offers] = useState([
    {
      id: "0001",
      name: "Manager",
      company: "Schneider Electric",
      salary: 4.5,
      city: "Bogotá, Colombia",
      date: "2019-03-26",
      visitas: 3000
    },
    {
      id: "0002",
      name: "Software Engineer",
      company: "Google Inc.",
      salary: 20,
      city: "Palo Alto, CA, USA",
      date: "2019-03-27",
      visitas: 2685
    },
    {
      id: "0003",
      name: "Nurse",
      company: "Clínica La Aurora",
      salary: 1,
      city: "Cali, Colombia",
      date: "2019-03-28",
      visitas: 3025
    },
  ]);
  let ln = window.navigator.language.substring(0,2);

  let color;

  if(ln === 'en')
  {
      color = "thead-dark"
  }
  else if(ln === 'es')
  {
      color = "thead-light"
  }

  return (
    <div>
      <table className="table">
        <thead className= {color}>
          <tr>
            <th scope="col">#</th>
            <th scope="col">
             <FormattedMessage id="Position"/>
            </th>
            <th scope="col">
             <FormattedMessage id="Company"/>
            </th>
            <th scope="col">
             <FormattedMessage id="Salary"/>
            </th>
            <th scope="col">
             <FormattedMessage id="City"/>
            </th>
            <th scope="col">
             <FormattedMessage id="PublicationDate"/>
            </th>
            <th scope="col">
             <FormattedMessage id="Views"/>
            </th>
          </tr>
        </thead>
        <tbody>
          {console.log("Offers", offers)}
          {offers.map((e, i) => (
            <Job key={i} offer={e} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobsList;
