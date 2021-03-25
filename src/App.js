import './App.css';
import { Avatar, Card, CardContent, CardHeader, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core'
import { Business as BusinessIcon } from '@material-ui/icons'

function App() {

  return (
    <div className="App">
      <Card>
        <CardHeader/>
        <CardContent>
          <List>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar variant="rounded">
                  <BusinessIcon/>
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Founder - Entrepeneur"
                secondaryTypographyProps={{
                  component: "div"
                }}
                secondary={
                  <>
                    <Typography variant="body1">Safari Group HR Profesional independiente</Typography>
                    <Typography variant="body1">ene 2018 – actualidad</Typography>
                  </>
                }/>
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
