import React,{useState,useEffect} from 'react'
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/headerbar/Header";
import { useNavigate } from 'react-router-dom';
import config from "../../config.json";
import axios from 'axios';
const View = () => {
    const accesstoken = JSON.parse(localStorage.getItem("user"));
    const [viewInfo,setViewInfo]=useState([]);
    const navigate=useNavigate();
    const getViewData = async () => {
        axios
          .get(
            config.apibaseurl +
              "/api/schedule/all?startDate=2022-11-11&endDate=2022-12-12&status=Pending",
            {
              headers: {
                Authorization: "Bearer " + accesstoken.data.access_token,
              },
            }
          )
          .then((res) => {
            setViewInfo(res.data.data);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      useEffect(() => {
        getViewData();
      }, []);
      function getProductvalue(appt) {
        const apptvalue = JSON.parse(appt);
        return apptvalue;
      }
  return (
    <>
    
    <div class="min-height-300 bg-primary position-absolute w-100"></div>
            <Sidebar />
            <main className="main-content position-relative border-radius-lg ">
                <Header />

                <div class="row">
                            <div class="col-md-6">
                            <div class="form-group">
                                <label for="example-text-input" class="form-control-label">Customer Details</label>
                                <textarea class="form-control" rows="5" ></textarea>
                            </div>
                            </div>
                            <div class="col-md-6">
                            <div class="form-group">
                                <label for="example-text-input" class="form-control-label">Appointment Details</label>
                                <textarea class="form-control" rows="5"></textarea>
                                
                            </div>
                            <div class="row">
                            <div class="text-center">
                                <button type="button"  class="btn btn-success btn-sm ms-auto mt-2"onClick={()=>navigate('notification')}>Accept</button>
                                <button type="button"  class="btn btn-danger btn-sm ms-auto mt-2 mr-4">Reject</button>
                            </div>
                        </div>
                            </div>
                        </div>
                        <div class="form-group">
                                <label for="example-text-input" class="form-control-label">Product Details</label>
                                
                </div>
                <div class="card-body px-0 pt-0 pb-2">
                        <div class="table-responsive p-3">
                                <table class="table align-items-center mb-0">
                                <thead>
                                    <tr>
                                    <th class="text-secondary opacity-7 ps-2">S.No</th>
                                    <th class="text-secondary opacity-7 ps-2">#Product ID</th>
                                    <th class="text-secondary opacity-7 ps-2">Product Name</th>
                                    {/* <th class="text-secondary opacity-7 ps-2">Amount Details</th>
                                    <th class="text-secondary opacity-7 ps-2">User Details</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {viewInfo.map((item,index)=>(
                                       <tr key={item._id}>
                                        <td>{index + 1}</td>
                                        <td>
                                       <div class="d-flex px-2 py-1">
                                         <div class="d-flex flex-column justify-content-center">
                                           {/* <h6 class="mb-1 text-sm ">
                                             {item.products.name}
                                           </h6>
                                           <p class="text-xs mb-2">
                                             Email: {item.user_id.email}
                                           </p>
                                           <p class="text-xs mb-2">
                                             Mobile:
                                             <span class="text-secondary">
                                               {item.user_id.phone}
                                             </span>
                                           </p> */}
                                         </div>
                                       </div>
                                     </td>
                                       </tr> 
                                       
                                    ))}
                                </tbody>
                                </table>
                                </div>
                                </div>
                </main>
    </>
  )
}

export default View