import content from '../../content.json';
import './MainHeader.css';
import { Typography } from '@material-ui/core';

export default function MainHeader() {
   const { mainHeader } = content;
   const { titleText } = mainHeader;
   return (
      <Typography variant="h1" className={'main-header'}>
         {titleText}
      </Typography>
   );
}
