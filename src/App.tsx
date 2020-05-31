import React from "react";
import Button from "@material-ui/core/Button";
import {LinkedIn, Facebook, GitHub} from "@material-ui/icons";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Job from "./components/job";



function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://ericmarcantonio.com/">
                ericmarcantonio.com
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
        justifyContent: "center"
    },
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    cardMedia: {
        paddingTop: "56.25%", // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(3),
    },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <main className={"main"}>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="textPrimary"
                            gutterBottom
                        >
                            Eric Marcantonio
                        </Typography>
                        <Typography
                            variant="h5"
                            align="center"
                            color="textSecondary"
                            paragraph
                        >
                            Student at York University. Curious about everything technology!
                        </Typography>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <LinkedIn fontSize={"large"}/>
                                </Grid>
                                <Grid item>
                                    <Facebook fontSize={"large"}/>
                                </Grid>
                                <Grid item>
                                    <GitHub fontSize={"large"}/>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}

                        <Typography
                            component="h4"
                            variant="h4"
                            align="center"
                            color="textPrimary"
                            gutterBottom
                        >
                            Experience
                        </Typography>

                        <Grid>
                            <Job company={"IESO"} desc={"Cool Things with Jira"} StartTime={new Date()} EndTime={new Date()} position={"QA Student"}/>
                        </Grid>



                </Container>
            </main>
            {/* Footer */}
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="textSecondary"
                    component="p"
                >
                    Made with love in Toronto, Canada                </Typography>
                <Copyright/>
            </footer>
            {/* End footer */}
        </React.Fragment>
    );
}
