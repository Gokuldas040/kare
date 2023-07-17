import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Styles from "./Welcome.module.css";

const Welcome = () => {
  let navigate = useNavigate();
  let { state } = useLocation();
  const handleLogout = () => {
    navigate("/");
  };
  return (
    <section className={Styles.mainSection}>
      <div className={Styles.welcomeBox}>
        <div>
          <button className="ButtonOutline" onClick={handleLogout}>
            Logout
          </button>
        </div>
        <h1>
          Welcome {state.user.firstName} {state.user.lastName}
        </h1>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a
          nibh vel dolor tincidunt dictum a in nulla. Etiam nec diam ac eros
          suscipit laoreet. Morbi volutpat, mi vitae posuere elementum, nibh
          velit sollicitudin orci, at fermentum orci augue semper lectus. Nulla
          augue purus, viverra id consectetur at, pharetra eu mauris. Sed
          vulputate tristique commodo. Integer nisi diam, interdum in dapibus
          in, interdum vitae urna. Proin cursus neque libero, ac dictum diam
          iaculis nec. Quisque ac sollicitudin mi. Vivamus nulla mi, tempus eget
          tellus at, volutpat tincidunt dui. Fusce eu lobortis turpis, ac
          elementum quam. Phasellus egestas ante vitae tincidunt condimentum.
          Sed risus mi, eleifend vel massa eu, tempor mollis metus. In quis
          aliquet est. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Nulla a enim nisl./n Ut
          fermentum odio quis eros iaculis malesuada. Donec id molestie metus,
          eu rhoncus felis. Sed luctus dui id sem faucibus ultricies dapibus at
          arcu. Integer dignissim, odio quis viverra maximus, sapien ante
          dapibus urna, nec maximus ligula lacus id libero. Sed aliquet dictum
          dignissim. Nam egestas turpis nibh. Vestibulum congue felis sit amet
          ornare pulvinar. Suspendisse potenti. Aliquam at turpis nunc. Etiam
          mauris purus, dignissim vel luctus vel, semper in lectus./n Duis
          congue, turpis non vulputate porta, ipsum leo elementum ante, non
          porta odio nulla quis velit. Nulla bibendum ex sem, a finibus ligula
          fermentum nec. Duis consectetur justo ac fringilla ultrices. Sed
          porttitor, magna eu hendrerit egestas, dolor mi gravida dui, vel
          malesuada dolor lacus ut nunc. Nam congue nisl sit amet nisi gravida
          commodo. Donec vestibulum euismod placerat. Aliquam ut dignissim
          lorem. Proin laoreet a neque sed dignissim. Integer rhoncus tortor at
          sagittis suscipit. Maecenas interdum tellus eget erat volutpat, ut
          venenatis ipsum sollicitudin. Integer dignissim tellus quis metus
          laoreet lobortis. Pellentesque ut pellentesque nisl.
        </h4>
      </div>
    </section>
  );
};

export default Welcome;
