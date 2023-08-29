import * as React from 'react';
import Switch, { switchClasses } from '@mui/joy/Switch';
import Typography from '@mui/joy/Typography';
import { Divider } from '@mui/material';

export default function LightControl() {
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);
  const [checked4, setChecked4] = React.useState(false);
  const [checked5, setChecked5] = React.useState(false);
  return (
    <>
    <center><b> Light Control </b></center>
    <div style={{padding: '20px'}}>
      <b style={{marginRight: '5px'}}>L1</b>
    <Switch
      color={checked1 ? 'success' : 'danger'}
      checked={checked1}
      onChange={(event) => setChecked1(event.target.checked)}
      slotProps={{
        track: {
          children: (
            <React.Fragment>
              <Typography component="span" level="inherit" sx={{ ml: '8px' }}>
                Off
              </Typography>
              <Typography component="span" level="inherit" sx={{ mr: '8px' }}>
                On
              </Typography>
            </React.Fragment>
          ),
        },
      }}
      sx={{
        '--Switch-thumbSize': '27px',
        '--Switch-trackWidth': '64px',
        '--Switch-trackHeight': '24px',
        '--Switch-trackBackground': 'green',
        '--Switch-trackBackground': 'red'        
      }}
    />
    </div>
    <div style={{padding: '20px'}}>
      <b style={{marginRight: '5px'}}>L2</b>
    <Switch
      color={checked2 ? 'success' : 'danger'}
      checked={checked2}
      onChange={(event) => setChecked2(event.target.checked)}
      slotProps={{
        track: {
          children: (
            <React.Fragment>
              <Typography component="span" level="inherit" sx={{ ml: '8px' }}>
                Off
              </Typography>
              <Typography component="span" level="inherit" sx={{ mr: '8px' }}>
                On
              </Typography>
            </React.Fragment>
          ),
        },
      }}
      sx={{
        '--Switch-thumbSize': '27px',
        '--Switch-trackWidth': '64px',
        '--Switch-trackHeight': '24px',
        '--Switch-trackBackground': 'green',
        '--Switch-trackBackground': 'red'  
      }}
    />
    </div>
    <div style={{padding: '20px'}}>
      <b style={{marginRight: '5px'}}>PL</b>
    <Switch
      color={checked3 ? 'success' : 'danger'}
      checked={checked3}
      onChange={(event) => setChecked3(event.target.checked)}
      slotProps={{
        track: {
          children: (
            <React.Fragment>
              <Typography component="span" level="inherit" sx={{ ml: '8px' }}>
                Off
              </Typography>
              <Typography component="span" level="inherit" sx={{ mr: '8px' }}>
                On
              </Typography>
            </React.Fragment>
          ),
        },
      }}
      sx={{
        '--Switch-thumbSize': '27px',
        '--Switch-trackWidth': '64px',
        '--Switch-trackHeight': '24px',
        '--Switch-trackBackground': 'green',
        '--Switch-trackBackground': 'red'  
      }}
    />
    </div>
    <Divider sx={{width: '300px', marginLeft: '20px'}} />
    <div style={{padding: '20px', display: 'flex'}}>
      <b style={{marginRight: '5px'}}>OT Light</b>
    <Switch
      color={checked4 ? 'success' : 'danger'}
      checked={checked4}
      onChange={(event) => setChecked4(event.target.checked)}
      slotProps={{
        track: {
          children: (
            <React.Fragment>
              <Typography component="span" level="inherit" sx={{ ml: '8px' }}>
                Off
              </Typography>
              <Typography component="span" level="inherit" sx={{ mr: '8px' }}>
                On
              </Typography>
            </React.Fragment>
          ),
        },
      }}
      sx={{
        '--Switch-thumbSize': '27px',
        '--Switch-trackWidth': '64px',
        '--Switch-trackHeight': '24px',
        '--Switch-trackBackground': 'green',
        '--Switch-trackBackground': 'red'  
      }}
    />
    <div style={{marginLeft: '20px'}}>
      <b style={{marginRight: '5px'}}>HVAC</b>
    <Switch
      color={checked5 ? 'success' : 'danger'}
      checked={checked5}
      onChange={(event) => setChecked5(event.target.checked)}
      slotProps={{
        track: {
          children: (
            <React.Fragment>
              <Typography component="span" level="inherit" sx={{ ml: '8px' }}>
                Off
              </Typography>
              <Typography component="span" level="inherit" sx={{ mr: '8px' }}>
                On
              </Typography>
            </React.Fragment>
          ),
        },
      }}
      sx={{
        '--Switch-thumbSize': '27px',
        '--Switch-trackWidth': '64px',
        '--Switch-trackHeight': '24px',
        '--Switch-trackBackground': 'green',
        '--Switch-trackBackground': 'red'  
      }}
    />    
    </div>
    </div>    
  </>
  );
}
