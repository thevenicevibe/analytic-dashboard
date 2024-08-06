import React from 'react'
import { Card, CardContent,Button, Typography, Table, TableBody,Avatar,Box, TableHead,useTheme, TableRow, TableCell, } from '@mui/material';
import AvatarImg from "../../assets/Image/avatar.jpg";
import {tokens} from "../../theme"

const StatusButton = ({ status }) => {
    let color = 'success';
    switch (status) {
      case 'Delivered':
        color = 'success';
        break;
      case 'Completed':
        color = 'primary';
        break;
      case 'Pending':
        color = 'warning';
        break;
      default:
        color = 'error';
    }
    return (
      <Box sx={{ bgcolor: `#${color}.100`, padding: '5px 7px' }}>
        <Button variant="contained" color={color} sx={{borderRadius: '20px', padding: '5px 7px' }} >
          {status}
        </Button>
      </Box>
    );
  };


const RecentOrders = () => {
  const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const orderData = [
        { customer: 'Wade Warren', orderNo: '15470256', amount: '$124.00', status: 'Delivered' },
        { customer: 'Jane Cooper', orderNo: '48865786', amount: '$265.02', status: 'Delivered' },
        { customer: 'Guy Hawkins', orderNo: '79956215', amount: '$45.68', status: 'Completed' },
        { customer: 'Kristin Watson', orderNo: '20389732', amount: '$85.00', status: 'Pending' },
        { customer: 'Cody Fisher', orderNo: '93275620', amount: '$543.00', status: 'Delivered' },
        { customer: 'Savannah Nguyen', orderNo: '70074568', amount: '$108.30', status: 'Delivered' },
      ];
  return (
    <Card sx={{ mb: 2 ,height:"600px", backgroundColor: `${colors.primary[500]} !important`}}>
    <CardContent>
      <Typography variant="h6" gutterBottom>
        Recent Orders
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Customer</TableCell>
            <TableCell>Order No.</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orderData.map((row) => (
            <TableRow key={row.orderNo}>
              <TableCell>
                <Avatar src={AvatarImg} />
                {row.customer}
              </TableCell>
              <TableCell>{row.orderNo}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>
                <StatusButton status={row.status} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CardContent>
  </Card>
  )
}

export default RecentOrders