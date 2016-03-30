var React = require('react');
var {Grid, Row, Col} = require('react-bootstrap');

var Navigation = require('./navigation.jsx');

var Main = React.createClass({

    render: function () {
        return (
                <Grid fluid>
                <Navigation projectName="react-bootstrap-starter" />
                <Row>
                <Col md={4}>
                <p>Row 1:  Nesting of Grid -> Row -> Column</p>
                </Col>
                <Col md={4}>
                <p>Row 1:  At MD width and larger these space to 3 columns </p>
                </Col>
                <Col md={4}>
                <p>Row 1:  Less than MD these wrap to a single column </p>
                </Col>
                </Row>

                <Row>
                <Col md={4} mdOffset={4}>
                  <Row>
                   <Col xs={12}>
                    <p> a Row->Col -> Row -Col</p>
                    <p> at &gt; MD  this sits in the middle of the page</p>
                    <p> at &lt; MD this spans the whole row </p>
                    <p> add at least an xs=12 or text will lose it's left padding </p>
                   </Col>
                   </Row>
                  </Col>
                </Row>
                <Row>
                 <Col md={4} mdOffset={4}>
                  <Row>
                   <Col>
                    <p>Quick demo of the problem mentioned above when Internal Col gets no width specified</p>
                   </Col>
                   </Row>
                  </Col>
                </Row>
                <Row>
                <Col md={4} mdOffset={4}>
                  <div>
                   <p> a Row->Col -> div</p>
                   <p> at &gt; MD  this sits in the middle of the page
                       at &lt; MD this spans the whole row </p>
                   <p> This one maintains the correct column spacing at each</p>
                   <p>  
                   These children never space out, always stacked in the column
                   However the text gets more room when column shifts to 12
                   </p>
                   </div>
                </Col>
                </Row>

                <Row>
                <Col md={4} mdOffset={4}>
                  <Row>
                   <Col md={6}>
                     <p>But what if I want these p to align sideways too?</p>
                   </Col>
                   <Col md={6}>
                     <p>Row -> Col -> Row -> Col</p>
                   </Col>
                   </Row>
                </Col>
                </Row>

                <Row>
                <Col md={4} mdOffset={4}>
                  <div>
                  <Row>
                   <Col md={6}>
                     <p>And for a multi row component</p>
                   </Col>
                   <Col md={6}>
                     <p>Row -> Col -> div -> Row -> Col...</p>
                   </Col>
                   </Row>
                   <Row>
                   <Col md={8} mdOffset={2}>
                     <p>The extra div does not make a difference but keeps React happy</p>
                   </Col>
                   </Row>
                  </div>
                </Col>
                </Row>

                </Grid>
        );
    }

});

module.exports = Main;