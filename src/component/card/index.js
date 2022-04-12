import React from 'react';



const Cards = (props) => {
    return(
        <div className ="cards">
        <table>
          <div className="cardImg">
          <img src={props.image} alt="Album1" className="img-poster"/>
          </div>
          <div className="cardCaps">
              <p>Track Title : {props.title}</p> 
                <p id="artis"> Artis : {props.artis}</p> 
                <button class="btn-select"> Select</button>
          </div>

        {/* <table>
          <tr>
            <td><img src={props.image} alt="Album1" className="img-poster"/></td>
            <td className="box-desc">
@@ -12,7 +23,7 @@ const Cards = (props) => {
              <button class="btn-select"> Select</button>
            </td>
          </tr>
        </table>
        </table> */}
      </div>
    )
}
export default Cards