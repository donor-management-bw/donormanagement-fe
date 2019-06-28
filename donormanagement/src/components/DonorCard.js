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
import {deleteDonor, fetchDonors, addDonation} from '../actions/index'

import "./DonorCard.css"

class DonorCard extends React.Component {
    constructor(props){
       super(props);
       this.state = {collapse: false,
                     addDonationForm: false,         
                     amount: null,
                     note: "",
                     donor: {donorid: this.props.donor.donorid}
            } 
    }

    toggle = () => {
        this.setState(state => ({ collapse: !state.collapse }));
      }
    
      toggle2 = () => {
        this.setState(state => ({ addDonationForm: !state.addDonationForm }));
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
        if(this.state.amount && this.state.note){
            this.props.addDonation(newDonation).then(() => {
              this.props.fetchDonors()
              this.setState({
                addDonationForm: false,
                amount: '',
                note: ""
              })
              console.log('this is working ')
            });
          }
        };

   render(){        
  return (
    <div className="card">
    <Button onClick={this.toggle} style={{ backgroundColor: '#C7E4B5' }}>
      <h1>{this.props.donor.dname}</h1>
      </Button>
       <Collapse isOpen={this.state.collapse}>
         <div className="button-container">
          <Button size="md" color="success" onClick={this.toggle2} style={{ marginBottom: '', marginRight: '1rem'}}>Add Donation</Button>
          <Button size="sm" outline color="danger" onClick={this.deleteDonor} style={{ marginBottom: '' }}>X Delete</Button>
        </div>
          <Collapse isOpen={this.state.addDonationForm}>
            <InputGroup style={{ marginLeft: '1rem', marginRight: '1rem', width: '94%' }}>
              <Input name="amount" placeholder="Donation Amount" value={this.state.amount} onChange={this.handleChanges}/>
              <Input name="note" placeholder="Note" value={this.state.note} onChange={this.handleChanges}/>
              <InputGroupAddon addonType="append" >
                  <Button onClick={this.addDonation}>Submit</Button>
              </InputGroupAddon>
            </InputGroup>
          </Collapse>
         <Card>
           <div className="list">
             <div className="details">
              <div className="leftdiv">
                  <h5>Name:</h5>
                  <h5> Email: </h5>
                  <h5> Address:</h5></div>
              <div className="rightdiv">
                  <h5> {this.props.donor.dname}</h5>
                  <h5>{this.props.donor.demail}</h5>
                  <h5> {this.props.donor.daddress}</h5>
              </div>
             </div>


            <div className="donationtable">
              <h5>Donations: </h5>
              <div className="tableheader">
                <span className="date">Date</span>
                <span className="amt">Amount</span>
                <span className="note">Note</span>
              </div>

             {this.props.donor.donationlist.map(obj => (
                <div className="tabledata">
                    <span className="date">{obj.donationdate}</span>
                    <span className="amt">${obj.amount}</span>
                    <span className="note">{obj.note}</span>

                </div>             
             ))}
             </div>
           </div>
         </Card>
       </Collapse>

   
 </div>
  );
}
}
const mapStateToProps = state => ({
    donors: state.donors
  })
  
  export default connect(mapStateToProps, { deleteDonor, fetchDonors, addDonation })(DonorCard)