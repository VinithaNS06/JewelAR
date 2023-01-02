import React,{useState,useEffect} from 'react'
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/headerbar/Header";
import { useParams, useNavigate } from 'react-router-dom';
import config from "../../config.json";
import axios from 'axios';


const View = () => {
    const accesstoken = JSON.parse(localStorage.getItem("user"));
    const [viewInfo,setViewInfo]=useState([]);
    const [title,setTitle]=useState('');
    const navigate=useNavigate();
    const params = useParams();
   
    const getViewData = async () => {
      let proeditdetails=await axios
          .get(
            config.apibaseurl +"/api/schedule/byid/"+params.viewid,
            {
              headers: {
                Authorization: "Bearer " + accesstoken.data.access_token,
              },
            }
          )
          .then((res) => {
            setViewInfo(res.data.data);
            // console.log(res.data.data);
          })
          .catch((err) => {
            console.log(err);
          });
          proeditdetails =await proeditdetails.json();
          setTitle(proeditdetails[0].date);
      };
      
      useEffect(() => {
        getViewData();
      }, []);

      // const getViewData = async()=>{       
      //   let proeditdetails = await fetch(config.apibaseurl +"/api/schedule/byid/"+params.viewid,{
      //       method: 'get',
      //       headers:{              
      //           'Authorization': 'bearer '+accesstoken.data.access_token
      //       }   
      //   });
      //   proeditdetails = await proeditdetails.json(); 

      // function getProductvalue(appt) {
      //   const apptvalue = JSON.parse(appt);
      //   return apptvalue;
      // }
  return (
    <>
    
    <div class="min-height-300 bg-primary position-absolute w-100"></div>
            <Sidebar />
            <main className="main-content position-relative border-radius-lg ">
              <Header />
              <div class="container-fluid py-4">
              <div class="row">
            <div class="col-md-12">
              <div class="card mb-4">
                <div class="card-header pb-3">
                  <div class="row">
                    <div class="col-6 d-flex align-items-center">
                      <h6 class="mb-0">Appointment View</h6>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-6 col-sm-6 mb-xl-0 mb-4">
                      <div class="">
                          <div class="card-body p-3">
                          <div class="row">
                          <div class="numbers">
                                  <p class="text-sm mb-0 text-uppercase font-weight-bold">Customer Details</p>
                                  <div class="table-responsive p-5">
                                    <table class="table align-items-center mb-0 ">
                                      <tr>
                                        <td>Name</td>
                                        <td>Vinitha</td>
                                      </tr>
                                      <tr>
                                        <td>Phone No</td>
                                        <td>1234567890</td>
                                      </tr>
                                      <tr>
                                        <td>Email</td>
                                        <td>test@gmail.com</td>
                                      </tr>
                                      <tr>
                                        <td>Address</td>
                                        <td>Testing data</td>
                                      </tr>

                                    </table>
                                    </div>
                              </div>
                          </div>
                          </div>
                      </div>
                  </div>

                  <div class="col-xl-6 col-sm-6 mb-xl-0 mb-4">
                      <div class="">
                          <div class="card-body p-3">
                          <div class="row">
                          <div class="numbers">
                                  <p class="text-sm mb-0 text-uppercase font-weight-bold">Appoinment Details</p>
                                  <div class="table-responsive p-5">
                                    <table class="table align-items-center mb-0 ">
                                      <tr>
                                        <td>Date</td>
                                        <td>Vinitha</td>
                                      </tr>
                                      <tr>
                                        <td>Time</td>
                                        <td>1234567890</td>
                                      </tr>
                                      <tr>
                                        <td>Status</td>
                                        <td>Pending</td>
                                      </tr>
                                      <tr>
                                        <td colspan="2">&nbsp;</td>
                                      </tr>

                                    </table>
                                    </div>
                              </div>
                          </div>
                          </div>
                      </div>
                  </div>
                </div> 
                <div class="card-body px-0 pt-0 pb-2">
                <p class="text-sm mb-0 text-uppercase font-weight-bold pl-2">Product Details</p>
                  <div class="table-responsive p-5">
                    <table class="table align-items-center mb-0 ">
                      <thead>
                        <tr>
                          <th class="text-secondary opacity-7 ps-2">S.No</th>
                          <th class="text-secondary opacity-7">Image</th>
                          <th class="text-secondary opacity-7 ps-2">Name</th>
                        </tr>
                      </thead>
                      <tbody>
                          <tr>
                            <td>1</td>
                            <td>Test</td>
                            <td>Testsete</td>
                          </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
              </div>
            </div>

              </div>
              </div>
            </main>
    </>
  )
}

export default View