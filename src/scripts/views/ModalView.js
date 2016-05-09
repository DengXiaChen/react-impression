import React, { Component } from 'react';

export default class ModalView extends Component{
    render(){
        return (
            <div>
                <h3>Examples</h3>
                <div className="card card-block">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="modal">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                            <h5 className="modal-title">Modal title</h5>
                                        </div>
                                        <div className="modal-body">
                                            <p>One fine body&hellip;</p>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-default btn-sm">Close</button>
                                            <button type="button" className="btn btn-primary btn-sm">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}