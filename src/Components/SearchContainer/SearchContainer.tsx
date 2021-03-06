import DropDownMenu from '../DropdownMenu/DropDownMenu';
import SearchAddress from '../SearchAddress/SearchAddress';
import SearchButton from '../SearchButton/SearchButton';
import content from '../../content.json';
import { connect } from 'react-redux';
import ShowURL from '../ShowURL/ShowURL';
import { Typography } from '@material-ui/core';

function SearchContainer(props: any) {
   const { queryType, searchAddress } = props;
   const { searchContainer } = content;
   const { header } = searchContainer;
   return (
      <div className="container">
         <Typography variant="h4">{header}</Typography>
         <ShowURL searchAddress={searchAddress} />
         <DropDownMenu />
         <SearchAddress />
         <SearchButton queryType={queryType} searchAddress={searchAddress} />
      </div>
   );
}

const mapStateToProps = (state: any) => {
   return {
      queryType: state.searchReducer.queryType,
      searchAddress: state.searchReducer.searchAddress,
   };
};

export default connect(mapStateToProps)(SearchContainer);
