var React = require('react');
var {Grid, Row, Col} = require('react-bootstrap');

var Navigation = require('./navigation.jsx');

var Main = React.createClass({

    render: function () {
        return (
                <Grid fluid>
                <Row>
                <Col sm={4} className="level-one">
                <p>Simple Example. A Row with 3 Columns</p>
                </Col>
                <Col sm={4} className="level-one">
                <p>At tablet and larger these are side by side </p>
                </Col>
                <Col sm={4} className="level-one">
                <p>At phone view ports they are stacked </p>
                </Col>
                </Row>

                 <Row>
                 <Col md={4} mdOffset={4} className="level-one">
                  <Row>
                   <Col className="level-two">
                    <p>An attempt to fix a max width by wrapping row-column inside column. 
                       But this text loses padding at left margin and touches outer column
                       because the inner column has been given no widths 
                    </p>
                   </Col>
                   </Row>
                  </Col>
                </Row>

                <Row>
                <Col md={4} mdOffset={4} className="level-one">
                  <Row>
                   <Col xs={12} className="level-two">
                    <p> This is same construct of row-column-row-column except inner column has width specified</p>
                    <p> at tablet and greater this sits mid page with wide margins</p>
                    <p> at phone widths this spans the whole page width </p>
                   </Col>
                   </Row>
                  </Col>
                </Row>
                
                <Row>
                <Col md={4} mdOffset={4} className="level-one">
                  <div className="level-two">
                   <p> Instead of Row-Column this inner level is just a div</p>
                   <p> Same as before, at tablet width it's one column in the middle and one wide at phone</p>
                   <p> Left padding is maintained even without any bootstrap width on level two</p>
                   <p>  
                   however the background and text cut off at the same point, where with a column the
                   background spreads out into the margin around the text
                   </p>
                   </div>
                </Col>
                </Row>

                <Row>
                <Col md={4} mdOffset={4} className="level-one">
                  <Row>
                   <Col md={6} className="level-two">
                     <p>The reason to nest row-column is that it allows columns to</p>
                   </Col>
                   <Col md={6} className="level-two">
                     <p>spread outside by side when screen is large enough to support it</p>
                   </Col>
                   </Row>
                </Col>
                </Row>
                
                <Row>
                <Col md={4} mdOffset={4} className="level-one">
                  <div className="level-two">
                     <p>Two divs inside the column will always stay stacked</p>
                   </div>
                   <div className="level-two">
                     <p>unless you create your own styles to float</p>
                   </div>
                </Col>
                </Row>

                <Row>
                <Col md={4} mdOffset={4} className="level-one">
                  <div className="level-two">
                  <Row>
                   <Col md={6} className="level-three">
                     <p>The other reason to put rows inside of a column</p>
                   </Col>
                   <Col md={6} className="level-three">
                     <p>is precise control over different alignments on top of other backgrounds</p>
                   </Col>
                   </Row>
                   <Row>
                   <Col md={8} mdOffset={2} className="level-three">
                     <p>There is an unstyled div, that keeps React happy for a component But
                     does not affect visual layout</p>
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