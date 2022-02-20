import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDollarSign,faUsers,faTable,faArrowUp,faArrowDown} from '@fortawesome/free-solid-svg-icons';

import "./Card.css"
const Card = () => {
  return (
    <div className="admin__cardBox">
        <div className="admin__card">
          <div>
            <div className="admin__numbers">1,042</div>
            <div className="admin__cardName">Users count</div>
          </div>
          <div className="admin__iconBox"><FontAwesomeIcon icon={faUsers}/></div>
        </div>


        <div className="admin__card">
          <div>
            <div className="admin__numbers">82</div>
            <div className="admin__cardName">Info input count</div>
          </div>
          <div className="admin__iconBox"><FontAwesomeIcon icon={faTable}/></div>
        </div>


        <div className="admin__card">
          <div>
            <div className="admin__numbers">200</div>
            <div className="admin__cardName">User yearly increase</div>
          </div>
          <div className="admin__iconBox"><FontAwesomeIcon icon={faArrowUp}/></div>
        </div>


        <div className="admin__card">
          <div>
            <div className="admin__numbers">$6,042</div>
            <div className="admin__cardName">User yearly decrease</div>
          </div>
          <div className="admin__iconBox"><FontAwesomeIcon icon={faArrowDown}/></div>
        </div>


    </div>
  )
}

export default Card
