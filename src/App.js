import { Avatar, Breadcrumbs, Card, CardContent, CardHeader, Link, List, ListItem, ListItemAvatar, ListItemText, makeStyles, Typography } from '@material-ui/core'
import { Business as BusinessIcon, Face as FaceIcon } from '@material-ui/icons'
import clsx from 'clsx'

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
  "educations": [
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

  const _handleClick = () => {

  }

  return (
    <div style={{padding: 12}}>
      <Breadcrumbs>
        <Link color="inherit" href="/" onClick={_handleClick}>
          Material-UI
        </Link>
        <Link color="inherit" href="/getting-started/installation/" onClick={_handleClick}>
          Core
        </Link>
        <Typography color="textPrimary">Breadcrumb</Typography>
      </Breadcrumbs>
      <Card className={clsx(classes.cardProfile, classes.marginTop)} variant="outlined" >
        <div className={classes.banner}/>
        <CardContent className={classes.cardContentProfile}>
          <Avatar className={classes.avatarProfile}>
            <FaceIcon/>
          </Avatar>
          <Typography variant="h5" className={classes.marginTop}>{profile.name}</Typography>
        </CardContent>
      </Card>
      <Card variant="outlined" className={classes.marginTop}>
        <CardHeader title={<Typography variant="h5">Experiencias</Typography>} className={classes.cardHeader} />
        <CardContent className={classes.cardContent}>
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
      <Card variant="outlined" className={classes.marginTop}>
        <CardHeader title={<Typography variant="h5">Educación</Typography>} className={classes.cardHeader} />
        <CardContent className={classes.cardContent}>
          <List>
            {profile.educations.map((education, index) => {
              return (
                <ListItem alignItems="flex-start" key={`education-${index}`}>
                  <ListItemAvatar>
                    <Avatar variant="rounded">
                      <BusinessIcon/>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={<Typography variant="h6">{education.career}</Typography>}
                    secondaryTypographyProps={{
                      component: "div"
                    }}
                    secondary={
                      <>
                        <Typography variant="body1">{education.institution}</Typography>
                        <Typography variant="body1">{education.date}</Typography>
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

const useStyles = makeStyles((theme) => ({
  cardHeader: {
    paddingBottom: 0
  },
  marginTop: {
    marginTop: theme.spacing(1.5)
  },
  littleMarginTop: {
    marginTop: theme.spacing(1)
  },
  cardContent: {
    paddingTop: 0,
    '&:last-child': {
      paddingBottom: 0
    }
  },
  avatarProfile: {
    width: 60,
    height: 60
  },
  cardProfile: {
    height: 130,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    position: 'relative'
  },
  cardContentProfile: {
    '&:last-child': {
      paddingBottom: theme.spacing(1.5)
    }
  },
  banner: {
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: theme.palette.primary.main,
    width: '100%',
    height: 56
  }
}), { name: 'App'})


export default App;
