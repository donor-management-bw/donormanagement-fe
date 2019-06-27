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

import swal from 'sweetalert';
import {connect} from 'react-redux'
import {deleteDonor} from '../actions/index'
import "./DonorCard.css"

class DonorCard extends React.Component {
    constructor(props){
       super(props);
       this.state = {collapse: false,         
                     amount: null,
                     note: "",
                     donor: {donorid: this.props.donor.donorid}
            } 
    }

    toggle = () => {
        this.setState(state => ({ collapse: !state.collapse }));
      }

    handleChanges = e => {
        e.preventDefault();
        console.log('change', e.target.name, e.target.value)
        this.setState({
          [e.target.name]: e.target.value
        });
      };

      deleteDonor = e => {
        e.preventDefault();
        this.props.deleteDonor(this.state.donor.donorid).then(res => {
          if (res) {
            swal("Donor Removed!", `${this.state.donor.name} was removed from the donor list`, "information");
            console.log(res);
          }
        });
      }

      addDonation = e => {
        e.preventDefault();
        const newDonation = {
            // amount: this.props.donor.donationlist.amount,
            // note: this.props.donor.note,
            // donor: this.props.donor.donor
            amount: this.state.amount,
            donationdate: Date.now(),
            donor: {daddress: this.props.donor.daddress,
                    demail: this.props.donor.demail,
                    dname: this.props.donor.dname,
                    donationlist: this.props.donor.donationlist,
                    donorid: this.props.donor.donorid,
                    dphone: this.props.donor.dphone},
            note: this.state.note
            

        };
        this.props.donationAdd(newDonation);
        };

   render(){        
  return (
    <div className="card">
    <Button  color="success" onClick={this.toggle} style={{ marginBottom: '1rem', backgroundColor: '#C7E4B5', color: '#3FB6E9' }}><h1>{this.props.donor.dname}</h1></Button>
       <Collapse isOpen={this.state.collapse}>
         <Card>
           <CardBody>
             Name: <h5>{this.props.donor.dname}</h5>
             Email: <h5>{this.props.donor.demail}</h5>
             Address: <h5>{this.props.donor.daddress}</h5>
             {this.props.donor.donationlist.map(obj => (
             <div>
               <Card>
                 Amount: <h5>{obj.amount}</h5>
                 Note: <h5>{obj.note}</h5>
                 Date: <h5>{obj.donationdate}</h5>
               </Card>
             </div>             
             ))}
           </CardBody>
         </Card>
       </Collapse>
       <InputGroup>
         <InputGroupAddon addonType="prepend" >
             <Button onClick={this.addDonation}>ADD Donation</Button>
        </InputGroupAddon>
         <Input name="amount" placeholder="Donation Amount" value={this.state.amount} onChange={this.handleChanges}/>
         <Input name="note" placeholder="Note" value={this.state.note} onChange={this.handleChanges}/>
       </InputGroup>
   <Button size="sm" outline color="danger" onClick={this.deleteDonor} style={{ marginBottom: '1.3rem' }}>Delete Donor</Button>
 </div>
  );
}
}
const mapStateToProps = state => ({
    donors: state.donors
  })
  
  export default connect(mapStateToProps, { deleteDonor })(DonorCard)