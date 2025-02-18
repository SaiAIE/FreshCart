import React from 'react'
import { dropdownData } from '../assets/data'
import "../styles/Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__container">
        {dropdownData.map((item, index) => (
          <div className="navbar__dropdown" key={index}>
            <div className={`navbar__dropdown-heading ${item.className || ''}`}>
              {item.heading} {item.icon && <i className={item.icon}></i>} 
            </div>

            {item.options && (
              <div className="navbar__dropdown-options">
                {item.options.map((option, idx) => (
                  <p key={idx} className="navbar__dropdown-option">{option}</p>
                ))}
              </div>
            )}

            {item.megaOptions && (
              <div className="navbar__dropdown-options navbar__dropdown-options--mega">
                {item.megaOptions.map((col, idx) => (
                  <div className="navbar__menu-column" key={idx}>
                    <h4 className="navbar__menu-column-title">{col.title}</h4>
                    <ul className="navbar__menu-list">
                      {col.items.map((listItem, id) => (
                        <li key={id} className="navbar__menu-item">{listItem}</li>
                      ))}
                    </ul>
                  </div>
                ))}
                {item.offer && (
                  <div className="navbar__menu-column navbar__menu-column--offer">
                    <img src={item.offer.imgSrc} alt="" className="navbar__menu-image" />
                    <h2 className="navbar__menu-offer" dangerouslySetInnerHTML={{ __html: item.offer.text }} />
                    <button className="navbar__menu-btn">{item.offer.buttonText}</button>
                  </div>               
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Navbar



// import React from 'react'
// import { dropdownData } from '../assets/data'
// import "../styles/Navbar.css"
// const Navbar = () => {
//   return (
//     <div className='navbar-main'>
//         <div className='navbar'>
//                           {dropdownData.map((item, index) => (
//           <div className='dropdown' key={index}>
//             <div className={`dropdown-heading ${item.className || ''}`}>
//             {item.heading} {item.icon && <i className={item.icon}></i>} 
//             </div>

//             {item.options && (
//               <div className="dropdown-options">
//                 {item.options.map((option, idx) => (
//                   <p key={idx}>{option}</p>
//                 ))}
//               </div>
//             )}

//             {item.megaOptions && (
//               <div className="dropdown-options megaoptions">
//                 {item.megaOptions.map((col, idx) => (
//                   <div className="menu-column" key={idx}>
//                     <h4>{col.title}</h4>
//                     <ul>
//                       {col.items.map((listItem, id) => (
//                         <li key={id}>{listItem}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 ))}
//                 {item.offer && (
//                  <div className="menu-column">
//                  <img src={item.offer.imgSrc} alt="" className="megamenuimg" />
//                  <h2 className="offer" dangerouslySetInnerHTML={{ __html: item.offer.text }} />
//                  <button className="offerbtn">{item.offer.buttonText}</button>
//                </div>               
//                 )}
//               </div>
//             )}
//           </div>
//         ))}
//         </div>
//     </div>
//   )
// }

// export default Navbar