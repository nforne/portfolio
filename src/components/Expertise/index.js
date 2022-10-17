import React from "react";
import SmallHeading from "../UI/SmallHeading";
import MediumHeading from "../UI/MediumHeading";
import Card from "../UI/Card";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { colors } from "../../style";
import me from "../../assets/images/me-left.png";
import SocialConnect from "../UI/SocialConnect";
import "./style.css";

/**
 * @author
 * @function Expertise
 **/


const Expertise = (props) => {

  const percentage = 70;

  return (
    <div className="container mtb-10" >
      <div>
        <SmallHeading text="Expertise" />
        <MediumHeading text="Special Skills" />
      </div>

      <div  data-aos="fade-right" className="expertise">

        <div className="rightImgMeContainer">
          <img src={me} alt-="" />
          <SocialConnect style={{ position: "relative", bottom: "-40px"}} />
        </div>
     
        <div>
     
          <Card
            style={{
              padding: "30px",
              width: "320px",
              margin: "100px auto",
              position: "relative",
              borderRadius: '10px',
            }}
            data-aos="flip-up"
          >
            <div className="flexRow align-center mlr-10">
              <div style={{ width: "80px", height: "80px" }}>
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  styles={buildStyles({
                    textColor: colors.primaryColor,
                    pathColor: colors.primaryColor,
                  })}
                />
              </div>
              <h2 className="textColor mlr-10">Development</h2>
            </div>
            <p className="grey mtb-10 font-12">
              JavaScript is one of the greatest programming languages ever!
            </p>
          </Card>
      
        </div>
    </div>
    
    </div>
  );
};

export default Expertise;
