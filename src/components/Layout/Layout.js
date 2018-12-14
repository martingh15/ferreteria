import React from 'react';
import {connect} from 'react-redux';
import {withRouter, Route, Switch} from 'react-router-dom';

//Components
import Navegador from "../../components/Layout/Navegador";
import LogIn from "../../components/Layout/LogIn";
import MensajeError from "../elementos/MensajeError";
import Registro from "../../components/Layout/Registro";

class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <Navegador/>
                <div className="row-fluid columns">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 principal">
                        <Switch>
                            <Route path="/" exact component={LogIn}/>
                            <Route path="/registro" exact component={Registro}/>
                        </Switch>
                        <MensajeError/>
                    </div>
                </div>

            </div>
        );
    }
}

function mapStateToProps(store) {
    return {
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));
