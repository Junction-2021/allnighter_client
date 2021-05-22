import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  LinearProgress,
  Slider,
  Input,
} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import WarningIcon from '@material-ui/icons/Warning';
import HelpIcon from '@material-ui/icons/Help';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useRouter } from 'next/router';
// import socketIOClient from "socket.io-client";
// import { DropzoneDialog } from 'material-ui-dropzone';
import { Elements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  'pk_test_51IQNkOKRDMM110U39Lv2tOjtja3uzgqrstVj4KSlE29RbiBf4vjjbVwIbZ3z78P5VxY6NrVbL6i8T0Ppn2V8Q48k0029IxLfUI',
);

function App() {
  const useStyles = makeStyles((theme) => ({}));
  const stripe = useStripe();
  const handlePayment = () => {
    fetch('/api/stripe/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        priceId: 'price_1Iq9srKRDMM110U3QOtGdA4b',
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        stripe.redirectToCheckout({
          sessionId: json.sessionId,
        });
      });
  };
  return (
    <React.Fragment>
      {/* <AppBar>
        <Toolbar>
          <IconButton></IconButton>
        </Toolbar>
      </AppBar> */}
      <Grid>
        {/* <Typography>Hello</Typography> */}
        <Button onClick={handlePayment}>Pay</Button>
      </Grid>
    </React.Fragment>
  );
}

const StripeElementWrapper = (props) => {
  return (
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  );
};

export default StripeElementWrapper;
