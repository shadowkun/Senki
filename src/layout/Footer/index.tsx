import { makeStyles, Theme } from '@material-ui/core/styles';

interface Props {}

const useStyles:any = makeStyles({
  container: {
    height:"50px",
    backgroundColor:"#2c303a",
    color:"#d3d7da",
    lineHeight:"50px",
    textAlign:"center"
  }
})

const Footer = ({}: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      Copyright © 2021 阿里巴巴前端练习生计划——拥抱变化
    </div>
  );
};

export default Footer;