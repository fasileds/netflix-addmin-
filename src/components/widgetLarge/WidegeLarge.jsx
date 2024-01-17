import "./widgetLarge.css";

export default function WidegeLarge() {
  const Button = ({ type }) => {
    return <button className={"wigLButton " + type}>{type}</button>;
  };
  return (
    <div className="widgedLarge">
      <h3 className="wiglTitle">latest transction</h3>
      <table className="wiglTable">
        <tbody>
          <tr className="wiglTr">
            <th className="wiglTh">Customer</th>
            <th className="wiglTh">Date</th>
            <th className="wiglTh">Amount</th>
            <th className="wiglTh">Status</th>
          </tr>
          <tr className="wiglTr">
            <td className="wigUser">
              <img
                src="https://images.pexels.com/photos/12151141/pexels-photo-12151141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="wiglImage"
              />
              <span className="wigLName">yabisira endale</span>
            </td>
            <td className="WiglDtae">2 JUN 2023</td>
            <td className="WiglAmount">$122.00</td>
            <td className="WiglStatus">
              <Button type="approved" />
            </td>
          </tr>
          <tr className="wiglTr">
            <td className="wigUser">
              <img
                src="https://images.pexels.com/photos/12151141/pexels-photo-12151141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="wiglImage"
              />
              <span className="wigLName">yabisira endale</span>
            </td>
            <td className="WiglDtae">2 JUN 2023</td>
            <td className="WiglAmount">$122.00</td>
            <td className="WiglStatus">
              <Button type="approved" />
            </td>
          </tr>
          <tr className="wiglTr">
            <td className="wigUser">
              <img
                src="https://images.pexels.com/photos/12151141/pexels-photo-12151141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="wiglImage"
              />
              <span className="wigLName">yabisira endale</span>
            </td>
            <td className="WiglDtae">2 JUN 2023</td>
            <td className="WiglAmount">$122.00</td>
            <td className="WiglStatus">
              <Button type="Declined" />
            </td>
          </tr>
          <tr className="wiglTr">
            <td className="wigUser">
              <img
                src="https://images.pexels.com/photos/12151141/pexels-photo-12151141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="wiglImage"
              />
              <span className="wigLName">yabisira endale</span>
            </td>
            <td className="WiglDtae">2 JUN 2023</td>
            <td className="WiglAmount">$122.00</td>
            <td className="WiglStatus">
              <Button type="pending" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
