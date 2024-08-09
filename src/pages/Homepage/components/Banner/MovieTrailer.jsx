import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Example from './YouTubeMovie';
import Alert from 'react-bootstrap/Alert';
import { useYouTubeQuery } from '../../../../hooks/useYouTube'

const MovieTrailer = ({ id }) => {
    const { data, isLoading, isError, error } = useYouTubeQuery(id)
    console.log("hi", data)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    if (isError) {
        return <Alert varient="danger">{error.message}</Alert>
    }


    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                재생
            </Button>

            <Modal show={show} onHide={handleClose} centered size="lg">
                <Modal.Header closeButton>
                    <Modal.Title><Example videoId={data.results[0].key} /></Modal.Title>
                </Modal.Header>
                <Modal.Body></Modal.Body>
                <Modal.Footer>
                    {/* <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button> */}
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default MovieTrailer