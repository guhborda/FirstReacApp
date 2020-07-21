import React, {Component } from 'react';
import Header from '../../components/Header/Header';

import api from '../../services/api';

export default class Main extends Component{
    render(){
        return (
    <div className="main-content bg-default" page="pricing">
        
            <Header />
        <div className="container mt--8 pb-5">
            <div className=" justify-content-center">
                
                <div className="pricing row card-group mb-3">
                    <div className="card col-12 col-md-4  card-pricing border-0 text-center mb-4" >
                    <div className="card-header bg-transparent">
                        <div className="icon icon-xs icon-shape bg-primary shadow text-white" >
                            <i className="fas fa-chart-line" ></i>
                            </div>
                        <h4 className="text-uppercase ls-1 text-primary py-3 mb-0">Investidor</h4>
                    </div>
                    <div className="card-body px-lg-7">
                        <div className="display-2">R$100</div>
                        <span className="text-muted">-5% à vista</span>
                        <ul className="list-unstyled my-4">
                        <li>
                            <div className="d-flex align-items-center">
                            <div>
                                <div className="icon icon-xs icon-shape bg-gradient-primary shadow rounded-circle text-white">
                                <i className="fa fa-terminal"></i>
                                </div>
                            </div>
                            <div>
                                <span className="pl-2">Complete documentation</span>
                            </div>
                            </div>
                        </li>
                        <li>
                            <div className="d-flex align-items-center">
                            <div>
                                <div className="icon icon-xs icon-shape bg-gradient-primary shadow rounded-circle text-white">
                                <i className="fa fa-pen-fancy"></i>
                                </div>
                            </div>
                            <div>
                                <span className="pl-2">Working materials in Sketch</span>
                            </div>
                            </div>
                        </li>
                        <li>
                            <div className="d-flex align-items-center">
                            <div>
                                <div className="icon icon-xs icon-shape bg-gradient-primary shadow rounded-circle text-white">
                                <i className="fa fa-hdd"></i>
                                </div>
                            </div>
                            <div>
                                <span className="pl-2">2GB cloud storage</span>
                            </div>
                            </div>
                        </li>
                        </ul>
                        
                    </div>
                    <div className="card-footer">
                    <button type="button" className="btn btn-secondary ">Start free trial</button>
                    </div>
                    </div>
                    <div className="card col-12 col-md-4 card-pricing bg-gradient-success zoom-in shadow-lg rounded border-0 text-center mb-4" >
                    <div className="card-header bg-transparent">
                    <div className="icon icon-xs icon-shape bg-white shadow " >
                        <i className="fas fa-space-shuttle" ></i>
                        </div>
                        <h4 className="text-uppercase ls-1 text-white py-3 mb-0">Aventureiro</h4>
                    </div>
                    <div className="card-body px-lg-7">
                        <div className="display-1 text-white">$199</div>
                        <span className="text-white">-5% à vista</span>
                        <ul className="list-unstyled my-4">
                        <li>
                            <div className="d-flex align-items-center">
                            <div>
                                <div className="icon icon-xs icon-shape bg-white shadow rounded-circle text-muted">
                                <i className="fas fa-terminal"></i>
                                </div>
                            </div>
                            <div>
                                <span className="pl-2 text-white">Complete documentation</span>
                            </div>
                            </div>
                        </li>
                        <li>
                            <div className="d-flex align-items-center">
                            <div>
                                <div className="icon icon-xs icon-shape bg-white shadow rounded-circle text-muted">
                                <i className="fas fa-pen-fancy"></i>
                                </div>
                            </div>
                            <div>
                                <span className="pl-2 text-white">Working materials in Sketch</span>
                            </div>
                            </div>
                        </li>
                        <li>
                            <div className="d-flex align-items-center">
                            <div>
                                <div className="icon icon-xs icon-shape bg-white shadow rounded-circle text-muted">
                                <i className="fas fa-hdd"></i>
                                </div>
                            </div>
                            <div>
                                <span className="pl-2 text-white">2GB cloud storage</span>
                            </div>
                            </div>
                        </li>
                        </ul>
                        
                    </div>
                    <div className="card-footer bg-transparent"  id="familyPack">
                    <form name="FormPagamento" id="FormPagamento" action="" method="post">
                            <input id="BotaoPagamento" className="btn btn-primary" type="submit" value="comprar" name="submit" alt="Pague com PagSeguro - é rápido, grátis e seguro!" />
                        </form>
                    </div>
                    </div>
                <div className="card col-12 col-md-4 card-pricing border-0 text-center mb-4">
                    <div className="card-header bg-transparent">
                        <div className="icon icon-xs icon-shape bg-primary shadow text-white" >
                            <i className="fas fa-chart-line"></i>
                            </div>
                        <h4 className="text-uppercase ls-1 text-primary py-3 mb-0">Investidor</h4>
                    </div>
                    <div className="card-body px-lg-7">
                        <div className="display-2">R$100</div>
                        <span className="text-muted">-5% à vista</span>
                        <ul className="list-unstyled my-4">
                        <li>
                            <div className="d-flex align-items-center">
                            <div>
                                <div className="icon icon-xs icon-shape bg-gradient-primary shadow rounded-circle text-white">
                                <i className="fa fa-terminal"></i>
                                </div>
                            </div>
                            <div>
                                <span className="pl-2">Complete documentation</span>
                            </div>
                            </div>
                        </li>
                        <li>
                            <div className="d-flex align-items-center">
                            <div>
                                <div className="icon icon-xs icon-shape bg-gradient-primary shadow rounded-circle text-white">
                                <i className="fa fa-pen-fancy"></i>
                                </div>
                            </div>
                            <div>
                                <span className="pl-2">Working materials in Sketch</span>
                            </div>
                            </div>
                        </li>
                        <li>
                            <div className="d-flex align-items-center">
                            <div>
                                <div className="icon icon-xs icon-shape bg-gradient-primary shadow rounded-circle text-white">
                                <i className="fa fa-hdd"></i>
                                </div>
                            </div>
                            <div>
                                <span className="pl-2">2GB cloud storage</span>
                            </div>
                            </div>
                        </li>
                        </ul>
                        
                    </div>
                    <div className="card-footer">
                    
                        <form name="FormPagamento" id="FormPagamento" action="" method="post">
                            <input id="aBotaoPagamento" className="btn btn-primary" type="submit" value="comprar" name="submit" alt="Pague com PagSeguro - é rápido, grátis e seguro!" />
                        </form>
                    
                    </div>
                </div>
                
            </div>
      </div>
      <div className="d-flex justify-content-lg-center px-3 mt-5">
        <div>
          <div className="icon icon-shape bg-gradient-white shadow rounded-circle text-primary">
            <i className="ni ni-building text-primary"></i>
          </div>
        </div>
        <div className="col-lg-6">
          <p className="text-white"><strong>The Arctic Ocean</strong> freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.</p>
        </div>
      </div>
      <div className="row row-grid justify-content-center">
        <div className="col-lg-10">
          <div className="table-responsive">
            <table className="table table-dark mt-5">
              <thead>
                <tr>
                  <th className="px-0 bg-transparent" scope="col">
                    <span className="text-light font-weight-700">Features</span>
                  </th>
                  <th className="text-center bg-transparent" scope="col">Bravo Pack</th>
                  <th className="text-center bg-transparent" scope="col">Alpha Pack</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-0">IMAP/POP Support</td>
                  <td className="text-center"><i className="fas fa-check text-success"></i>
                  </td>
                  <td className="text-center"><i className="fas fa-check text-success"></i>
                  </td>
                </tr>
                <tr>
                  <td className="px-0">Email Forwarding</td>
                  <td className="text-center"><i className="fas fa-check text-success"></i>
                  </td>
                  <td className="text-center"><i className="fas fa-check text-success"></i>
                  </td>
                </tr>
                <tr>
                  <td className="px-0">Active Sync</td>
                  <td className="text-center"><i className="fas fa-check text-success"></i>
                  </td>
                  <td className="text-center"><i className="fas fa-check text-success"></i>
                  </td>
                </tr>
                <tr>
                  <td className="px-0">Multiple domain hosting</td>
                  <td className="text-center"><i className="fas fa-check text-success"></i>
                  </td>
                  <td className="text-center">
                    <span className="text-sm text-light">Limited to 1 domain only</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-0">Additional storage upgrade</td>
                  <td className="text-center"><i className="fas fa-check text-success"></i>
                  </td>
                  <td className="text-center"><i className="fas fa-check text-success"></i>
                  </td>
                </tr>
                <tr>
                  <td className="px-0">30MB Attachment Limit</td>
                  <td className="text-center"><i className="fas fa-check text-success"></i>
                  </td>
                  <td className="text-center">-</td>
                </tr>
                <tr>
                  <td className="px-0">Password protected / Expiry links</td>
                  <td className="text-center"><i className="fas fa-check text-success"></i>
                  </td>
                  <td className="text-center">-</td>
                </tr>
                <tr>
                  <td className="px-0">Unlimited Custom Apps</td>
                  <td className="text-center"><i className="fas fa-check text-success"></i>
                  </td>
                  <td className="text-center">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
        )
    }
}
