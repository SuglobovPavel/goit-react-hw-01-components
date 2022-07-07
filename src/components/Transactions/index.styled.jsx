import styled from '@emotion/styled'

export const TransactionTableWrapper = styled.div`
   width: 100#;
   overflow: auto;
`;

export const TransactionTable = styled.table`
   width: 600px;
   min-width: 600px;
   margin: 0px auto 40px auto;
   background-color: #ffffff;
   box-shadow: 0px 0px 10px rgba(0,0,0,0.25);
   thead {
      background: blue;

      th {
         text-align: center;
         color: #ffffff;
      }
   }
   
   tr:nth-of-type(even){
      background: #f4f4f4;
   }
   td, th {
      width: 33.333%;
      padding: 10px 4px;
      font-size: 14px;
      text-align: left;
   }

   td:nth-of-type(1){
      padding-left: 30px;
   }
   td:nth-of-type(2), td:nth-of-type(3){
      text-align: center;
   }
`;

