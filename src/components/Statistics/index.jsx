import PropTypes from 'prop-types';
import {StatisticsBox, StatisticsTitle, StatisticsBottomBox, StatisticsElement} from './index.styled';

export const Statistics = ({title, stats}) => {
   return (
      <StatisticsBox>
         {
            title && (<StatisticsTitle>{title}</StatisticsTitle>)
         }
         <StatisticsBottomBox>
            {stats.map(el => {
               return <StatisticsElement key={el.id}>                   
                     {el.label}
                     <strong>{el.percentage}%</strong>
                  </StatisticsElement>
            })}
         </StatisticsBottomBox>
      </StatisticsBox>
   );
}

Statistics.prototype = {
   title: PropTypes.string,
   stats: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
   })).isRequired,
}