import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Table from "react-bootstrap/Table";
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
            </Tab>

            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan={2}>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>

            <Tab eventKey="game" title="Game">
              Game
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
export default Bootstrap;
