import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dumyData";
import { Publish } from "@mui/icons-material";

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleCountiner">
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData} dataKey="Sales" title="Sales performance" />
        </div>
        <div className="productToPrIGHT">
          <div className="productInfoTop">
            <img
              src="https://images.pexels.com/photos/19048665/pexels-photo-19048665/free-photo-of-beautiful-blonde-woman-with-smartphone-in-hands.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="productInfoImage"
            />
            <span className="productName">Apple Airpod</span>
          </div>
          <div className="productInfoButtom">
            <div className="productInfoItem">
              <span className="productInfoKey">id</span>
              <span className="productInfoValue">123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Sales</span>
              <span className="productInfoValue">5123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Active</span>
              <span className="productInfoValue">yes</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stack:</span>
              <span className="productInfoValue">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productButtom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="apple air pode" />
            <label>In Stack</label>
            <select name="instack" id="instack">
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUplode">
              <img
                src="https://images.pexels.com/photos/19048665/pexels-photo-19048665/free-photo-of-beautiful-blonde-woman-with-smartphone-in-hands.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="productUplodeImage"
              />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
