import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@material-ui/core";
import {
  Business as BusinessIcon,
  AccountCircleRounded as AccountIcon,
  HomeWorkRounded as HomeworkIcon,
  RefreshRounded as RefreshIcon,
} from "@material-ui/icons";

const profile = {
  name: "Jessica Logico",
  location: "Buenos Aires y alrededores ",
  experiences: [
    {
      company: "Safari Group HR Profesional independiente",
      jobTitle: "Founder - Entrepreneur",
      date_range: "ene 2018 – actualidad",
      description: {},
    },
    {
      company: "Safari Group HR Profesional independiente",
      jobTitle: "Founder - Entrepreneur",
      date_range: "ene 2018 – actualidad",
      description: {},
    },
  ],
  education: [
    {
      institution: "Universidad de Ciencias Empresariales y Sociales",
      career: "Licenciatura",
      date: "2011 – 2016",
    },
    {
      institution: "Centro de e-Learning UTN FRBA",
      career: "Coaching Ontológico",
      date: "2019 – 2019",
    },
    {
      institution: "Capacitarte",
      career: "Diplomatura en Habilidades Gerenciales y Trabajo en Equipo",
      date: "2017 – 2017",
    },
  ],
};

const useStyles = makeStyles({
  root: {
    "background": "#EBEBEB",
    "padding": "1rem",
  },
  card: {
    background: "#ffffff",
    "border-radius": "0.5rem",
    "margin-bottom": "1rem",
    "box-shadow": "none",
  },
  title: {
    "text-align": "left",
    "padding": "1rem 2rem 0",
  },
  content: {
    "padding-top": "0",
    "padding-bottom": "0 !important",
  },
  avatar: {
    "background": "none",
    "color": "#E3E3E3",
    "width": "100px",
    "height": "100%",
    "left": "1em",
    "position": "relative",
    "top": "1.5rem",
  },
  name: {
    "text-align": "left",
    "text-decoration": "underline",
    "padding": "1.5rem 2rem",
    "margin-top": "0.5rem",
  },
  icon: {
    "width": "100%",
    "height": "100%",
  },
  refresh: {
    "background": "none",
    "color": "#0A66C2"
  },
  refreshIconContainer: {
    "justify-content": "center",
    "align-items": "center",
    "display": "flex",
  }
});

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Container className={classes.root}>
        <Card className={classes.card}>
          <Grid container spacing={2}>
            <Grid item xs={12} className={classes.test}>
              <Avatar className={classes.avatar}>
                <AccountIcon className={classes.icon} />
              </Avatar>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={8} className={classes.test}>
              <CardHeader title={profile.name} className={classes.name} />
            </Grid>
            <Grid item xs={4} className={classes.refreshIconContainer}>
              <Avatar className={classes.refresh}>
                <RefreshIcon />
              </Avatar>
            </Grid>
          </Grid>

          
        </Card>
        <Card className={classes.card}>
          <CardHeader title="Experiencias" className={classes.title} />
          <CardContent className={classes.content}>
            <List>
              {profile.experiences.map((experience, index) => {
                return (
                  <ListItem alignItems="flex-start" key={`experience-${index}`}>
                    <ListItemAvatar>
                      <Avatar variant="rounded">
                        <BusinessIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography variant="h6">
                          {experience.jobTitle}
                        </Typography>
                      }
                      secondaryTypographyProps={{
                        component: "div",
                      }}
                      secondary={
                        <>
                          <Typography variant="body1">
                            {experience.company}
                          </Typography>
                          <Typography variant="body1">
                            {experience.date_range}
                          </Typography>
                        </>
                      }
                    />
                  </ListItem>
                );
              })}
            </List>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardHeader title="Estudios" className={classes.title} />
          <CardContent className={classes.content}>
            <List>
              {profile.education.map((education, index) => {
                return (
                  <ListItem alignItems="flex-start" key={`education-${index}`}>
                    <ListItemAvatar>
                      <Avatar variant="rounded">
                        <HomeworkIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography variant="h6">
                          {education.institution}
                        </Typography>
                      }
                      secondaryTypographyProps={{
                        component: "div",
                      }}
                      secondary={
                        <>
                          <Typography variant="body1">
                            {education.career}
                          </Typography>
                          <Typography variant="body1">
                            {education.date}
                          </Typography>
                        </>
                      }
                    />
                  </ListItem>
                );
              })}
            </List>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default App;
