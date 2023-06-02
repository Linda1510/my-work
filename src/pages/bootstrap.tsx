import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Table from "react-bootstrap/Table";
import robot from "./../assets/robot-svgrepo-com1.png";
import grass from "./../assets/react15742.png";
import cool from "./../assets/cool-svgrepo-com1.png";
import { frontendRazred } from "../data/frontendRazred";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { data } from "../data/chartdata";
const Bootstrap = () => {
  return (
    <div className="bootstrap">
      <div>Wellcome to Bootstrap</div>
      <Button variant="warning">klikni me</Button>{" "}
      <div className=" bootstrap__tab">
        <div>
          <Tabs
            defaultActiveKey="profile"
            id="fill-tab-example"
            className="mb-3"
            fill
          >
            <Tab eventKey="dashboard" title="Dashboard">
              Dashboard
              <p>Ovo je primjer Bootstrapa</p>
              <Spinner animation="grow" size="sm" />
              <Spinner animation="grow" />
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                  </tr>
                </thead>
                <tbody>
                  {frontendRazred.map((student) => {
                    return (
                      <tr>
                        <td>{student.name}</td>
                        <td>{student.lastName}</td>
                        <td>{student.age}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
              <LineChart width={500} height={300} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
              </LineChart>
            </Tab>

            <Tab eventKey="game" title="Game">
              Game
              <div>
                <div>
                  <img src={robot} alt="1" />
                  <button></button>
                </div>
                <div>
                  <img src={grass} alt="grass" />
                  <img src={grass} alt="grass" />
                  <img src={grass} alt="grass" />
                </div>
              </div>
              <div>
                <img src={cool} alt="cool" />
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
export default Bootstrap;
