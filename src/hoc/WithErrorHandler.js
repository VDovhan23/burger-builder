import React, {Component} from 'react'
import Wrapper from "./Wrapper";
import Modal from "../components/UI/Modal/Modal";

const withErrorHandler = (WrapperComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }


        componentDidMount() {
            axios.interceptors.request.use(req=>{
                this.setState({error: null});
                return req;
            })

            axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
            })
        }

        errorConfirmed = ()=>{
            this.setState({error: null});
        }

        render() {
            return (
                <Wrapper>
                    <Modal show={this.state.error} modalClosed={this.errorConfirmed}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrapperComponent {...this.props}/>
                </Wrapper>
            )
        }
    }
};

export default withErrorHandler;
