
import react from "react"
import { Help } from '@material-ui/icons';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';

import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

const Transition = react.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function AlertDialogSlide(props) {
    const [open, setOpen] = react.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <a href="#"> <Help onClick={handleClickOpen}  ></Help></a>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Справка!"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {props.title}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Понятно</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}


var addHelpDialog = (Component, title) =>
    class Enhance extends react.Component {
        constructor(arg) {
            super(arg);
            this.state =
            {
                open: false
            }

        }
        handleClose = (value) => {

        };
        render() {
            return (
                <div className="help-wrapper">
                    <Component {...this.props} ></Component>

                    <AlertDialogSlide title={title}></AlertDialogSlide>
                </div>
            )
        }
    };

export default addHelpDialog;