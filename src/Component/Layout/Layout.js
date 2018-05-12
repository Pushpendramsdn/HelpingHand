import React, { Component } from 'react';
import classes from './Layout.css'
import Navbar from '../Layout/UI/Navbar/Navabar'
import Sidebar from '../Layout/UI/Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import Backdrop from './UI/Backdrop/Backdrop';
import Modal from './UI/Modal/Modal';
import ShareApp from '../ShareApp/ShareApp/ShareApp';
import HomeBanner from './UI/HomeBanner/HomeBanner';
class  Layout extends Component {
    state = {
        showSidebar: false,
        shareAppModal: false,
        homeBanner: true
    }
    sidebarClosedHandler = () => {
        if (!this.state.showSidebar){
            this.setState( { showSidebar: true } );
        }
        else{
            this.setState( { showSidebar: false } ); 

        }
         
    }
   
    shareAppHandler = () =>{
        if (!this.state.shareAppModal){
            this.setState( { shareAppModal: true } );
        }
    }
    modalClosed = () => {
       if (this.state.shareAppModal){
           this.setState( { shareAppModal: false } );
       }
   }
   componentDidMount() {
    setTimeout(() => {this.setState({homeBanner: false});}, 3000);
 }
 
    render(){
        let HomeBannerDisplay='';
        if(this.state.homeBanner){
             HomeBannerDisplay=  <HomeBanner />
         }
        return (
            <div>
            {HomeBannerDisplay}
            <div className={classes.container}>
                <Backdrop show={this.state.showSidebar} closed={this.sidebarClosedHandler}/>
                <Navbar closed={this.sidebarClosedHandler}/>
                <Sidebar open={this.state.showSidebar}/>
            </div> 
            <main className={classes.content}>
                {this.props.children}
            </main>
            <Modal show={this.state.shareAppModal} clicked={this.modalClosed}>
            <ShareApp />
            </Modal>
            <Footer shareIconClicked={this.shareAppHandler}/>
        </div>
        );
    };
};

export default Layout;