import React, { Component } from "react";
import Annotation from "react-image-annotation";
import {
    PointSelector,
    RectangleSelector,
    OvalSelector
} from "react-image-annotation/lib/selectors";

import Button from '@material-ui/core/Button';


export default class Test extends Component {
    state = {
        annotations: [],
        annotation: {},
        img: null,
    };

    onSubmit = annotation => {
        const { geometry, data } = annotation;

        this.setState({
            annotation: {},
            annotations: this.state.annotations.concat({
                geometry,
                data: {
                    ...data,
                    id: Math.random()
                }
            })
        },
            () => console.log(this.state.annotations),
        );
    };

    postAnnotations = () => {
        console.log(this.state.annotations);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"annotations":this.state.annotations})
        };

        fetch('/api/annotations', requestOptions)
    }

    componentDidMount() {
        fetch('/api/img').then(res => res.json()).then(data => {
            this.setState({
                img: data["img"],
            });
        });
    }

    render = () => {
        return (
            <div>
                <Annotation
                    src={`data:image/jpg;base64,${this.state.img}`}
                    alt="Two pebbles anthropomorphized holding hands"
                    annotations={this.state.annotations}
                    type={PointSelector.TYPE}
                    value={this.state.annotation}
                    onChange={value => this.setState({ annotation: value })}
                    onSubmit={this.onSubmit}
                    allowTouch
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={this.postAnnotations}
                >
                    Test
                </Button>
            </div>
        );
    };
}
