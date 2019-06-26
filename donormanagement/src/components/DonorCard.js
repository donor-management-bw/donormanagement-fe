import React from 'react'
import {
    Button,
    Card,
    CardBody,
    Collapse,
    InputGroup,
    InputGroupAddon,
    Input
} from 'reactstrap';

class DonorCard extends React.Component {
    constructor(props){
       super(props);
       this.state = {collapse: false} 
    }

    toggle = () => {
        this.setState(state => ({ collapse: !state.collapse }));
      }

   render(){ 
  return (
    <div className="card">
    <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}><h1>{this.props.donor.dname}</h1></Button>
       <Collapse isOpen={this.state.collapse}>
         <Card>
           <CardBody>
             <h1>{this.props.donor.dname}</h1>
             <h3>{this.props.donor.demail}</h3>
             <h3>{this.props.donor.daddress}</h3>
             <h3>{this.props.donor.ddonations}</h3>
           </CardBody>
         </Card>
       </Collapse>
       <InputGroup>
         <InputGroupAddon addonType="prepend"><Button>ADD Donation</Button></InputGroupAddon>
         <Input />
       </InputGroup>
   <Button size="sm" color="danger" onClick={this.toggle} style={{ marginBottom: '1.3rem' }}>Delete Donor</Button>
 </div>
  );
}
}

export default DonorCard;
