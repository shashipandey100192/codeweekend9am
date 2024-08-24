import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Rectangle } from "recharts";
import { emplist } from '../../../Mydata';
const a = 1000;

function Mychartpage() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12 bg-dark text-white'>
          <BarChart
            width={a}
            height={400}
            data={emplist}>
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="name" />
            {/* <YAxis /> */}
            <Tooltip />
            <Bar
              dataKey="projectcount"
              fill="green"
              // activeBar={<Rectangle fill="blue" stroke="blue" />}
            />
            <Bar
              dataKey="exp"
              fill="red"
              // activeBar={<Rectangle fill="gold" stroke="purple" />}
            />
          </BarChart>
        </div>
      </div>
    </div>
  )
}

export default Mychartpage