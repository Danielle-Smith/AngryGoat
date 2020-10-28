import React, { Component } from 'react';

// import { reduxForm, Field } from 'redux-form';

// import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Searchbar extends Component {
  render() {
    return (
      <div className="searchbar">Searchbar</div>
    )
  }
}

export default Searchbar;
// function FormSearchBar(props) {
//     return (
//         <div className='search-bar-grid'>
//             <FontAwesomeIcon className='search-bar-grid__icon' icon={faSearch}/>
//             <input className="form-search-bar" {...props.input} type='text' placeholder={`${props.placeholder}`} />
//         </div>
//     )
// }

// class ShopSearchBar extends Component {
//     render() {
//         const { handleSubmit } = this.props;
//         return (
//             <form onSubmit={handleSubmit} className="shop-search-bar">
//                 <Field name='query' className='shop-search-bar__form-search-bar' placeholder='Search' component={FormSearchBar} />
//             </form>
//         )
//     }
// }

// ShopSearchBar = reduxForm({
//     form: 'ShopSearchBar'
// })(ShopSearchBar);

