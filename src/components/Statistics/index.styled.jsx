import styled from '@emotion/styled'

export const StatisticsBox = styled.div`
   width: 320px;
   background-color: #ffffff;
   box-shadow: 0px 0px 10px rgba(0,0,0,0.25);
   margin: 40px auto;
   max-width: 100%;
`;

export const StatisticsTitle = styled.h2`
   text-align: center;
   font-size: 24px;
   font-weight: bold;
   margin-top: 0px;
   padding: 30px 20px;
   margin-bottom: 0px;
`;

export const StatisticsBottomBox = styled.ul`
   padding: 0px;
   list-style-type: none;
   display: flex;
   flex-wrap: wrap;
   margin: 0px;
`;

export const StatisticsElement = styled.li`
   width: 80px;
   max-width: 100%;
   flex-grow: 2;
   text-align: center;
   color: #ffffff;
   font-size: 16px;
   padding: 20px 5px;

   :nth-of-type(1){
      background: #6565f1;
   }
   :nth-of-type(2){
      background: red;
   }
   :nth-of-type(3){
      background: #abab1b;
   }
   :nth-of-type(4){
      background: black;
   }
   :nth-of-type(5){
      background: green;
   }
   strong {
      display: block;
      margin-top: 5px;
      font-size: 20px;
      font-weight: bold;
   }

`;