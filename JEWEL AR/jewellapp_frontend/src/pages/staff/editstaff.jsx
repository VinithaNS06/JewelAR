import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/headerbar/Header";


const StaffEdit = () => {
  return (
    <>
    <div class="min-height-300 bg-primary position-absolute w-100"></div>
            <Sidebar />
            <main className="main-content position-relative border-radius-lg ">
            <Header />
                <div class="container-fluid py-4">
                <div class="row">
                    <div class="col-12">
                    <div class="card mb-4">
                        <div class="card-header pb-3">
                            <div class="row">
                                <div class="col-6 d-flex align-items-center">
                                    <h6 class="mb-0">Edit Staff</h6>
                                </div>                               
                            </div>
                        </div>

                        <div class="card-body">
                        <p class="text-uppercase text-sm">Staff Information</p>
                        <div class="row">
                            <div class="col-md-6">
                            <div class="form-group">
                                <label for="example-text-input" class="form-control-label">Staffname</label>
                                <input class="form-control" type="text" value="Praveen pravin" />
                            </div>
                            </div>
                            <div class="col-md-6">
                            <div class="form-group">
                                <label for="example-text-input" class="form-control-label">Email address</label>
                                <input class="form-control" type="email" value="pravin@example.com" />
                            </div>
                            </div>
                            <div class="col-md-6">
                            <div class="form-group">
                                <label for="example-text-input" class="form-control-label">First name</label>
                                <input class="form-control" type="text" value="Praveen" />
                            </div>
                            </div>
                            <div class="col-md-6">
                            <div class="form-group">
                                <label for="example-text-input" class="form-control-label">Last name</label>
                                <input class="form-control" type="text" value="Pravin" />
                            </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="text-end">
                                <button type="button" class="btn btn-primary btn-sm ms-auto mt-5">Update</button>
                            </div>
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

export default StaffEdit;