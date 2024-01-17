import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import "./featuredInfo.css";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenu</span>
        <div className="featuredMoneyCountiner">
          <span className="featuredMoney">$2,345</span>
          <span className="FeaturedMoneyRate">
            -11.4
            <ArrowDownward className="featuredIcon negetive" />
          </span>
        </div>
        <span className="featuredSubtitle">compared to last monthe</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Seales</span>
        <div className="featuredMoneyCountiner">
          <span className="featuredMoney">$4,345</span>
          <span className="FeaturedMoneyRate">
            -1.4
            <ArrowDownward className="featuredIcon negetive" />
          </span>
        </div>
        <span className="featuredSubtitle">compared to last monthe</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyCountiner">
          <span className="featuredMoney">$2,345</span>
          <span className="FeaturedMoneyRate">
            +1.4
            <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSubtitle">compared to last monthe</span>
      </div>
    </div>
  );
}
