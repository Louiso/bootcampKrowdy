import './App.css';
import { Avatar, Card, CardContent, CardHeader, List, ListItem, ListItemAvatar, ListItemText, makeStyles, Typography } from '@material-ui/core'
import { Business as BusinessIcon } from '@material-ui/icons'

const profile = {
  "name": "Jesica Logioco",
  "location": "Buenos Aires y alrededores ",
  "experiences": [
    {
      "company": "Safari Group HR Profesional independiente",
      "jobTitle": "Founder - Entrepreneur",
      "date_range": "ene 2018 – actualidad",
      "description": {}
    },
    {
      "company": "empresa 2",
      "jobTitle": "Vendedor de papas",
      "date_range": "ene 2018 – actualidad",
      "description": {}
    }
  ],
  "education": [
    {
      "institution": "Universidad de Ciencias Empresariales y Sociales",
      "career": "Licenciatura",
      "date": "2011 – 2016"
    },
    {
      "institution": "Centro de e-Learning UTN FRBA",
      "career": "Coaching Ontológico",
      "date": "2019 – 2019"
    },
    {
      "institution": "Capacitarte",
      "career": "Diplomatura en Habilidades Gerenciales y Trabajo en Equipo",
      "date": "2017 – 2017"
    }
  ]
}


function App() {
  const classes = useStyles()
  return (
    <div className="App">
      <Card>
        <CardHeader title="Experiencias" className={classes.cardHeader}/>
        <CardContent>
          <List>
            {profile.experiences.map((experience, index) => {
              return (
                <ListItem alignItems="flex-start" key={`experience-${index}`}>
                  <ListItemAvatar>
                    <Avatar variant="rounded">
                      <BusinessIcon/>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={<Typography variant="h6">{experience.jobTitle}</Typography>}
                    secondaryTypographyProps={{
                      component: "div"
                    }}
                    secondary={
                      <>
                        <Typography variant="body1">{experience.company}</Typography>
                        <Typography variant="body1">{experience.date_range}</Typography>
                      </>
                    }/>
                </ListItem>
              )
            })}
            
          </List>
        </CardContent>
      </Card>
    </div>
  );
}

const useStyles = makeStyles(() => ({
  cardHeader: {
    marginTop: 12
  }
}), { name: 'App'})


export default App;
